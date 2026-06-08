import { createServer } from "node:http";
import { mkdir, readFile, writeFile, stat } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import { extname, join, normalize } from "node:path";
import { randomUUID, createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const dataDir = process.env.DATA_DIR || join(rootDir, "data");
const uploadDir = process.env.UPLOAD_DIR || join(rootDir, "uploads");
const dbFile = join(dataDir, "db.json");
const port = Number(process.env.PORT || 8787);
const host = process.env.HOST || (process.env.PORT ? "0.0.0.0" : "127.0.0.1");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
};

function nowIso() {
  return new Date().toISOString();
}

function jsonResponse(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(body),
    "cache-control": "no-store",
  });
  res.end(body);
}

function textResponse(res, status, text) {
  res.writeHead(status, { "content-type": "text/plain; charset=utf-8" });
  res.end(text);
}

async function ensureStorage() {
  await mkdir(dataDir, { recursive: true });
  await mkdir(uploadDir, { recursive: true });
  try {
    await stat(dbFile);
  } catch {
    await writeFile(dbFile, JSON.stringify({ users: [], sites: [], bookings: [], messages: [] }, null, 2));
  }
}

async function readDb() {
  await ensureStorage();
  return JSON.parse(await readFile(dbFile, "utf8"));
}

async function writeDb(db) {
  await writeFile(dbFile, JSON.stringify(db, null, 2));
}

function slugify(input) {
  const base = String(input || "yezhu")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const hash = createHash("sha1").update(`${input}-${Date.now()}-${Math.random()}`).digest("hex").slice(0, 5);
  return `${base || "yezhu"}-${hash}`;
}

function publicSite(site) {
  const { token, ...safeSite } = site;
  return safeSite;
}

function defaultSiteForUser(user, payload = {}) {
  const profilePayload = payload.profile || {};
  const settingsPayload = payload.settings || {};
  const ownerName = profilePayload.name || payload.name || `站主${user.phone.slice(-4)}`;
  return {
    id: randomUUID(),
    ownerId: user.id,
    slug: slugify(ownerName),
    profile: {
      name: ownerName,
      role: profilePayload.role || payload.role || "个人独立站主",
      tagline: profilePayload.tagline || payload.tagline || "把个人介绍、服务预约和客户联系放在一个独立站里。",
      bio: profilePayload.bio || payload.bio || "欢迎通过我的个人独立站了解服务、查看档期并提交预约。",
      photo: profilePayload.photo || "",
      coverPhoto: profilePayload.coverPhoto || "",
      gender: profilePayload.gender || "不展示",
    },
    services: payload.services || [
      { name: "体验咨询", price: "￥49", duration: "30 分钟", desc: "适合首次了解服务和确认目标。" },
      { name: "一对一服务", price: "￥199", duration: "60 分钟", desc: "按个人需求提供一对一服务。" },
    ],
    works: payload.works || [],
    videos: payload.videos || [],
    products: payload.products || [],
    tiers: payload.tiers || [
      { name: "普通会员", discount: 95 },
      { name: "银卡会员", discount: 88 },
      { name: "金卡会员", discount: 80 },
    ],
    settings: {
      city: settingsPayload.city || payload.city || "北京",
      job: settingsPayload.job || payload.job || "fitnessConsultant",
      avatarMode: settingsPayload.avatarMode || "virtual",
      enableWorks: Boolean(settingsPayload.enableWorks),
      enableVideo: Boolean(settingsPayload.enableVideo),
      notifyTarget: settingsPayload.notifyTarget || payload.notifyTarget || user.phone,
      contactChannel: settingsPayload.contactChannel || "wechat",
      contactValue: settingsPayload.contactValue || payload.contactValue || user.phone,
      siteStyle: settingsPayload.siteStyle || payload.siteStyle || "timeline",
      colorStyle: settingsPayload.colorStyle || payload.colorStyle || "orange",
      showPrice: settingsPayload.showPrice ?? true,
      autoReply: settingsPayload.autoReply ?? true,
      smsReminder: Boolean(settingsPayload.smsReminder),
      ownerPhone: user.phone,
      registered: true,
      imageUsedGb: settingsPayload.imageUsedGb || 0,
      videoUsedGb: settingsPayload.videoUsedGb || 0,
      blockedDates: settingsPayload.blockedDates || [],
      blockedSlots: settingsPayload.blockedSlots || {},
      availableTimes: settingsPayload.availableTimes || ["09:00", "10:00", "11:30", "14:00", "15:30", "17:00"],
    },
    createdAt: nowIso(),
    updatedAt: nowIso(),
  };
}

function applySitePayload(site, payload = {}) {
  site.profile = { ...site.profile, ...(payload.profile || {}) };
  site.settings = {
    ...site.settings,
    ...(payload.settings || {}),
    registered: true,
    ownerPhone: payload.phone || site.settings.ownerPhone,
  };
  site.services = payload.services || site.services;
  site.works = payload.works || site.works;
  site.videos = payload.videos || site.videos;
  site.products = payload.products || site.products;
  site.tiers = payload.tiers || site.tiers;
  site.updatedAt = nowIso();
  return site;
}

async function readBody(req, limit = 25 * 1024 * 1024) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > limit) throw new Error("请求体过大");
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

async function readJson(req) {
  const body = await readBody(req, 2 * 1024 * 1024);
  if (!body.length) return {};
  return JSON.parse(body.toString("utf8"));
}

function authToken(req) {
  const header = req.headers.authorization || "";
  if (header.startsWith("Bearer ")) return header.slice(7);
  return "";
}

function requireSite(db, req, siteId) {
  const token = authToken(req);
  const site = db.sites.find((item) => item.id === siteId && item.token === token);
  if (!site) return null;
  return site;
}

function parseMultipart(buffer, contentType) {
  const boundaryMatch = /boundary=([^;]+)/i.exec(contentType || "");
  if (!boundaryMatch) throw new Error("缺少 multipart boundary");
  const boundary = Buffer.from(`--${boundaryMatch[1]}`);
  const parts = [];
  let start = buffer.indexOf(boundary);
  while (start !== -1) {
    start += boundary.length;
    if (buffer[start] === 45 && buffer[start + 1] === 45) break;
    if (buffer[start] === 13 && buffer[start + 1] === 10) start += 2;
    const headerEnd = buffer.indexOf(Buffer.from("\r\n\r\n"), start);
    if (headerEnd === -1) break;
    const headerText = buffer.slice(start, headerEnd).toString("utf8");
    const next = buffer.indexOf(boundary, headerEnd + 4);
    if (next === -1) break;
    let content = buffer.slice(headerEnd + 4, next);
    if (content.at(-2) === 13 && content.at(-1) === 10) content = content.slice(0, -2);
    const name = /name="([^"]+)"/.exec(headerText)?.[1] || "";
    const filename = /filename="([^"]*)"/.exec(headerText)?.[1] || "";
    const type = /content-type:\s*([^\r\n]+)/i.exec(headerText)?.[1] || "application/octet-stream";
    parts.push({ name, filename, type, content });
    start = next;
  }
  return parts;
}

async function saveUpload(part, siteId) {
  const safeExt = extname(part.filename || "").toLowerCase() || (part.type.startsWith("video/") ? ".mp4" : ".png");
  const fileName = `${siteId}-${Date.now()}-${randomUUID()}${safeExt}`;
  const filePath = join(uploadDir, fileName);
  await new Promise((resolve, reject) => {
    const stream = createWriteStream(filePath);
    stream.on("error", reject);
    stream.on("finish", resolve);
    stream.end(part.content);
  });
  return `/uploads/${fileName}`;
}

function isDateFull(site, bookings, dateValue) {
  if (!dateValue) return false;
  if ((site.settings.blockedDates || []).includes(dateValue)) return true;
  const count = bookings.filter((booking) => booking.siteId === site.id && booking.date === dateValue).length;
  return count >= 3;
}

function isTimeUnavailable(site, bookings, dateValue, timeValue) {
  if (isDateFull(site, bookings, dateValue)) return true;
  if (!dateValue || !timeValue) return false;
  const availableTimes = site.settings.availableTimes || [];
  const blockedSlots = site.settings.blockedSlots || {};
  if (availableTimes.length && !availableTimes.includes(timeValue)) return true;
  return (blockedSlots[dateValue] || []).includes(timeValue);
}

async function handleApi(req, res, url) {
  const db = await readDb();

  if (req.method === "GET" && url.pathname === "/api/health") {
    return jsonResponse(res, 200, { ok: true, time: nowIso() });
  }

  if (req.method === "POST" && url.pathname === "/api/auth/register") {
    const payload = await readJson(req);
    const phone = String(payload.phone || "").trim();
    if (!/^1[3-9]\d{9}$/.test(phone)) return jsonResponse(res, 400, { error: "手机号格式不正确" });
    let user = db.users.find((item) => item.phone === phone);
    if (!user) {
      user = { id: randomUUID(), phone, createdAt: nowIso() };
      db.users.push(user);
    }
    let site = db.sites.find((item) => item.ownerId === user.id);
    if (!site) {
      site = defaultSiteForUser(user, payload);
      site.token = randomUUID();
      db.sites.push(site);
    } else {
      applySitePayload(site, payload);
    }
    await writeDb(db);
    return jsonResponse(res, 200, { token: site.token, site: publicSite(site) });
  }

  const siteMatch = /^\/api\/sites\/([^/]+)$/.exec(url.pathname);
  if (siteMatch && req.method === "GET") {
    const site = requireSite(db, req, siteMatch[1]);
    if (!site) return jsonResponse(res, 401, { error: "未授权" });
    const bookings = db.bookings.filter((booking) => booking.siteId === site.id);
    const messages = db.messages.filter((message) => message.siteId === site.id);
    return jsonResponse(res, 200, { site: publicSite(site), bookings, messages });
  }
  if (siteMatch && req.method === "PUT") {
    const site = requireSite(db, req, siteMatch[1]);
    if (!site) return jsonResponse(res, 401, { error: "未授权" });
    const payload = await readJson(req);
    Object.assign(site, {
      profile: { ...site.profile, ...(payload.profile || {}) },
      settings: { ...site.settings, ...(payload.settings || {}) },
      services: payload.services || site.services,
      works: payload.works || site.works,
      videos: payload.videos || site.videos,
      products: payload.products || site.products,
      tiers: payload.tiers || site.tiers,
      updatedAt: nowIso(),
    });
    await writeDb(db);
    return jsonResponse(res, 200, { site: publicSite(site) });
  }

  const uploadMatch = /^\/api\/sites\/([^/]+)\/upload$/.exec(url.pathname);
  if (uploadMatch && req.method === "POST") {
    const site = requireSite(db, req, uploadMatch[1]);
    if (!site) return jsonResponse(res, 401, { error: "未授权" });
    const type = url.searchParams.get("type") || "work";
    const body = await readBody(req, 80 * 1024 * 1024);
    const filePart = parseMultipart(body, req.headers["content-type"]).find((part) => part.filename);
    if (!filePart) return jsonResponse(res, 400, { error: "没有上传文件" });
    const fileUrl = await saveUpload(filePart, site.id);
    if (type === "cover") site.profile.coverPhoto = fileUrl;
    if (type === "avatar") site.profile.photo = fileUrl;
    if (type === "work") {
      site.settings.enableWorks = true;
      site.works.unshift({ title: filePart.filename.replace(/\.[^.]+$/, ""), desc: "上传的作品图片。", image: fileUrl });
    }
    if (type === "video") {
      site.settings.enableVideo = true;
      site.videos.unshift({ title: filePart.filename.replace(/\.[^.]+$/, ""), desc: "上传的视频展示。", src: fileUrl });
    }
    site.updatedAt = nowIso();
    await writeDb(db);
    return jsonResponse(res, 200, { fileUrl, site: publicSite(site) });
  }

  const publicMatch = /^\/api\/public\/([^/]+)$/.exec(url.pathname);
  if (publicMatch && req.method === "GET") {
    const site = db.sites.find((item) => item.slug === decodeURIComponent(publicMatch[1]));
    if (!site) return jsonResponse(res, 404, { error: "站点不存在" });
    const bookings = db.bookings.filter((booking) => booking.siteId === site.id);
    const messages = db.messages.filter((message) => message.siteId === site.id);
    return jsonResponse(res, 200, { site: publicSite(site), bookings, messages });
  }

  const bookingMatch = /^\/api\/public\/([^/]+)\/bookings$/.exec(url.pathname);
  if (bookingMatch && req.method === "POST") {
    const site = db.sites.find((item) => item.slug === decodeURIComponent(bookingMatch[1]));
    if (!site) return jsonResponse(res, 404, { error: "站点不存在" });
    const payload = await readJson(req);
    if (isTimeUnavailable(site, db.bookings, payload.date, payload.time)) return jsonResponse(res, 409, { error: "该日期或时间段已满，请选择其他时间" });
    const booking = {
      id: randomUUID(),
      siteId: site.id,
      service: payload.service || "预约服务",
      date: payload.date,
      time: payload.time,
      customer: payload.customer,
      contact: payload.contact,
      reminder: `已通知站主：${site.settings.notifyTarget || site.settings.contactValue}`,
      status: "待商家确认",
      createdAt: nowIso(),
    };
    db.bookings.push(booking);
    await writeDb(db);
    return jsonResponse(res, 201, { booking });
  }

  const messageMatch = /^\/api\/public\/([^/]+)\/messages$/.exec(url.pathname);
  if (messageMatch && req.method === "POST") {
    const site = db.sites.find((item) => item.slug === decodeURIComponent(messageMatch[1]));
    if (!site) return jsonResponse(res, 404, { error: "站点不存在" });
    const payload = await readJson(req);
    const message = { id: randomUUID(), siteId: site.id, from: "客户", text: payload.text, createdAt: nowIso() };
    db.messages.push(message);
    if (site.settings.autoReply) {
      db.messages.push({ id: randomUUID(), siteId: site.id, from: site.profile.name, text: "收到啦，我会尽快回复。你也可以直接在预约区选择合适的服务和时间。", createdAt: nowIso() });
    }
    await writeDb(db);
    return jsonResponse(res, 201, { message });
  }

  return jsonResponse(res, 404, { error: "接口不存在" });
}

async function serveStatic(req, res, url) {
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";
  const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(rootDir, safePath);
  if (!filePath.startsWith(rootDir)) return textResponse(res, 403, "Forbidden");
  try {
    const file = await readFile(filePath);
    const ext = extname(filePath).toLowerCase();
    res.writeHead(200, { "content-type": mimeTypes[ext] || "application/octet-stream" });
    res.end(file);
  } catch {
    textResponse(res, 404, "Not Found");
  }
}

await ensureStorage();

createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (url.pathname.startsWith("/api/")) return await handleApi(req, res, url);
    return await serveStatic(req, res, url);
  } catch (error) {
    console.error(error);
    jsonResponse(res, 500, { error: error.message || "服务器错误" });
  }
}).listen(port, host, () => {
  console.log(`野猪完整项目已启动：http://${host}:${port}`);
});
