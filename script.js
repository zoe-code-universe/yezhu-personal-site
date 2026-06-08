const cities = [
  "北京",
  "上海",
  "广州",
  "深圳",
  "杭州",
  "成都",
  "重庆",
  "南京",
  "武汉",
  "天津",
  "苏州",
  "宁波",
  "温州",
  "佛山",
  "东莞",
  "郑州",
  "济南",
  "青岛",
  "长沙",
  "合肥",
  "西安",
  "福州",
  "厦门",
  "南昌",
  "南宁",
  "昆明",
  "贵阳",
  "沈阳",
  "大连",
  "石家庄",
  "太原",
  "长春",
  "哈尔滨",
];

const jobPresets = {
  photographer: {
    label: "摄影师",
    role: "独立摄影师",
    template: "photo",
    tagline: "为个人品牌、家庭和小店拍出自然、有质感的影像。",
    bio: "擅长人像、空间和本地生活内容拍摄，客户可查看档期后预约拍摄时间。",
    services: [
      { name: "个人形象照", price: "￥199", duration: "45 分钟", desc: "头像、简历、个人品牌主页都适用。" },
      { name: "小店内容拍摄", price: "￥399", duration: "90 分钟", desc: "适合咖啡馆、美甲店、工作室社媒内容。" },
      { name: "家庭纪实拍摄", price: "￥299", duration: "60 分钟", desc: "记录亲子、生日和家庭日常。" },
    ],
  },
  makeup: {
    label: "化妆师",
    role: "上门化妆师",
    template: "spa",
    tagline: "新娘跟妆、活动妆和日常精致妆，按档期预约。",
    bio: "服务婚礼、写真、年会和重要场合妆造，可提前沟通风格和到场时间。",
    services: [
      { name: "日常精致妆", price: "￥168", duration: "60 分钟", desc: "适合约会、面试、拍摄和聚会。" },
      { name: "活动妆造", price: "￥299", duration: "90 分钟", desc: "适合年会、主持、演出和品牌活动。" },
      { name: "新娘试妆", price: "￥399", duration: "120 分钟", desc: "提前沟通婚礼风格和整体造型。" },
    ],
  },
  hair: {
    label: "发型师",
    role: "独立发型师",
    template: "minimal",
    tagline: "剪发、造型和头皮护理，提供清晰档期预约。",
    bio: "专注适合日常维护的发型设计，支持到店或上门服务配置。",
    services: [
      { name: "女士剪发", price: "￥128", duration: "60 分钟", desc: "根据脸型和日常打理习惯设计。" },
      { name: "男士精剪", price: "￥88", duration: "45 分钟", desc: "干净利落，适合工作日快速预约。" },
      { name: "活动造型", price: "￥199", duration: "75 分钟", desc: "适合拍摄、婚礼、主持和晚宴。" },
    ],
  },
  beautician: {
    label: "美容师",
    role: "皮肤管理美容师",
    template: "spa",
    tagline: "面部护理、皮肤管理和轻美容预约主页。",
    bio: "提供一对一皮肤状态沟通，客户可先看本月空档再预约。",
    services: [
      { name: "基础清洁护理", price: "￥99", duration: "60 分钟", desc: "适合首次体验和日常维护。" },
      { name: "补水修护", price: "￥168", duration: "75 分钟", desc: "适合干燥、熬夜后的皮肤护理。" },
      { name: "皮肤管理咨询", price: "￥49", duration: "30 分钟", desc: "先沟通问题，再确认护理方案。" },
    ],
  },
  nails: {
    label: "美甲师",
    role: "独立美甲师",
    template: "craft",
    tagline: "款式展示、档期预约、老客折扣一页完成。",
    bio: "擅长通勤款、法式、手绘和节日款，美甲作品可通过加购模块展示。",
    services: [
      { name: "单色美甲", price: "￥68", duration: "60 分钟", desc: "干净耐看，适合日常通勤。" },
      { name: "款式设计", price: "￥128", duration: "90 分钟", desc: "可提前发送参考图沟通。" },
      { name: "卸甲护理", price: "￥39", duration: "30 分钟", desc: "保护甲面，适合老客复购。" },
    ],
  },
  massage: {
    label: "按摩师",
    role: "上门按摩师",
    template: "clinic",
    tagline: "肩颈放松、运动恢复和上门按摩预约。",
    bio: "提供肩颈、腰背和运动恢复服务，预约后站主会确认地址和注意事项。",
    services: [
      { name: "肩颈放松", price: "￥129", duration: "60 分钟", desc: "适合久坐、低头和肩颈紧张。" },
      { name: "全身舒缓", price: "￥199", duration: "90 分钟", desc: "适合疲劳恢复和深度放松。" },
      { name: "运动恢复", price: "￥169", duration: "75 分钟", desc: "适合训练后肌肉紧张。" },
    ],
  },
  cleaning: {
    label: "保洁",
    role: "个人保洁服务",
    template: "consult",
    tagline: "家庭保洁、开荒清洁和定期维护，透明预约。",
    bio: "服务家庭、出租房和小办公室，可按面积、时长和清洁项目预约。",
    services: [
      { name: "日常保洁", price: "￥99", duration: "2 小时", desc: "适合厨房、卫生间和地面基础清洁。" },
      { name: "深度保洁", price: "￥299", duration: "4 小时", desc: "适合搬家前后和长期未清洁空间。" },
      { name: "开荒清洁", price: "￥499", duration: "6 小时", desc: "适合装修后首次清洁。" },
    ],
  },
  pet: {
    label: "宠物洗澡",
    role: "宠物洗护师",
    template: "food",
    tagline: "宠物洗澡、护理和上门洗护预约主页。",
    bio: "服务猫狗基础洗护、毛发护理和局部修剪，客户可查看空档后预约。",
    services: [
      { name: "小型犬洗护", price: "￥89", duration: "60 分钟", desc: "基础洗澡、吹干和耳朵清洁。" },
      { name: "猫咪洗护", price: "￥129", duration: "75 分钟", desc: "温和洗护，需提前沟通宠物状态。" },
      { name: "局部修剪", price: "￥59", duration: "30 分钟", desc: "脚底毛、肛周和基础造型整理。" },
    ],
  },
  ai: {
    label: "AI辅助",
    role: "AI 辅助服务顾问",
    template: "tech",
    tagline: "帮个人和小店做 AI 图片、文案、自动化和获客工具。",
    bio: "提供 AI 账号配置、内容生成、自动化流程和个人品牌主页优化服务。",
    services: [
      { name: "AI 头像生成", price: "￥59", duration: "30 分钟", desc: "生成适合主页、简历和社媒的虚拟头像。" },
      { name: "AI 内容陪跑", price: "￥199", duration: "90 分钟", desc: "小红书、朋友圈、短视频脚本一对一生成。" },
      { name: "AI 工具配置", price: "￥299", duration: "120 分钟", desc: "帮小店配置常用 AI 工作流。" },
    ],
  },
  fitnessConsultant: {
    label: "健身顾问",
    role: "私人健身顾问",
    template: "fitness",
    tagline: "体态评估、减脂增肌和训练计划，一对一预约跟进。",
    bio: "面向想开始运动、改善体态或提升训练效率的客户，提供评估、计划制定和周期陪跑服务。",
    services: [
      { name: "体态评估", price: "￥99", duration: "45 分钟", desc: "评估肩颈、骨盆、核心和基础动作模式。" },
      { name: "减脂训练计划", price: "￥199", duration: "60 分钟", desc: "根据目标、作息和运动基础制定可执行计划。" },
      { name: "一对一私教课", price: "￥299", duration: "60 分钟", desc: "动作纠正、力量训练和阶段复盘。" },
    ],
  },
  tarot: {
    label: "塔罗牌",
    role: "塔罗咨询师",
    template: "retro",
    tagline: "情感、事业和人生阶段困惑，一对一预约咨询。",
    bio: "提供塔罗牌咨询、情绪陪伴和阶段性问题梳理，客户可先查看档期再预约。",
    services: [
      { name: "单问题占卜", price: "￥39", duration: "20 分钟", desc: "适合快速看一个具体问题的趋势和建议。" },
      { name: "情感关系咨询", price: "￥99", duration: "45 分钟", desc: "围绕关系状态、沟通卡点和选择困惑展开。" },
      { name: "月度能量解读", price: "￥168", duration: "60 分钟", desc: "适合阶段规划、事业方向和自我整理。" },
    ],
  },
  environmentalScience: {
    label: "环境科学",
    role: "环境科学顾问",
    template: "consult",
    tagline: "室内环境、低碳方案和环保科普咨询预约。",
    bio: "面向家庭、小店和工作室，提供室内空气、绿色改造、环保材料和低碳方案咨询。",
    services: [
      { name: "室内环境咨询", price: "￥99", duration: "45 分钟", desc: "围绕通风、异味、甲醛风险和居住环境做初步判断。" },
      { name: "环保材料建议", price: "￥199", duration: "60 分钟", desc: "适合装修、软装和工作室改造前咨询。" },
      { name: "低碳运营方案", price: "￥399", duration: "90 分钟", desc: "适合小店、民宿和工作室做绿色运营优化。" },
    ],
  },
};

const siteStyles = {
  whitespace: { no: "01", name: "极简留白风", desc: "大图片、简单导航、作品优先，页面留白多，适合摄影师展示作品。", fit: "摄影师 / 发型师" },
  collage: { no: "02", name: "复古拼贴风", desc: "胶片质感、不规则布局、手作标签，适合个性化妆师和塔罗牌。", fit: "化妆师 / 塔罗牌" },
  cards: { no: "03", name: "卡片式信息风", desc: "服务项目变成彩色卡片，点预约前能快速看详情，适合美甲和保洁。", fit: "美甲师 / 保洁 / 宠物洗澡" },
  motion: { no: "04", name: "动态交互风", desc: "滚动层次、悬停放大、服务卡展示过程图，适合按摩师和美业服务。", fit: "按摩师 / 美容师" },
  timeline: { no: "05", name: "单页长卷风", desc: "用时间线讲清楚从咨询、预约、服务到复盘的完整流程。", fit: "健身顾问 / 塔罗牌" },
  magazine: { no: "06", name: "杂志排版风", desc: "大标题、分栏内容、案例和产品并列，适合美容师做专业展示。", fit: "美容师 / 环境科学" },
};

const colorStyles = {
  klein: { name: "克莱因蓝", colors: ["#002fa7", "#52b2cd", "#f7e6c4"] },
  silver: { name: "银灰科技", colors: ["#0b1517", "#cddcde", "#8c8c8e"] },
  orange: { name: "蓝橙活力", colors: ["#16749d", "#f27c0c", "#f7e6c4"] },
  rose: { name: "美业玫瑰", colors: ["#2e4134", "#f4b7c8", "#f7e6c4"] },
  ink: { name: "黑白杂志", colors: ["#111111", "#ffffff", "#cddcde"] },
};

const defaults = {
  profile: {
    name: "林夏",
    role: "独立摄影师",
    tagline: "帮个人品牌、小店和家庭记录自然、有温度的影像。",
    bio: "8 年拍摄经验，服务过独立咖啡馆、瑜伽老师、亲子家庭和本地生活品牌。擅长把普通空间拍出真实质感。",
    photo: "",
  },
  services: [
    { name: "个人形象照", price: "￥199", duration: "45 分钟", desc: "适合头像、简历、个人品牌主页，轻量好预约。" },
    { name: "小店内容拍摄", price: "￥399", duration: "90 分钟", desc: "适合咖啡馆、美甲店、工作室、小红书内容，低成本起步。" },
    { name: "家庭纪实拍摄", price: "￥299", duration: "60 分钟", desc: "自然记录亲子、生日、家庭日常，适合首次体验。" },
  ],
  settings: {
    city: "北京",
    job: "photographer",
    avatarMode: "virtual",
    enableWorks: false,
    enableVideo: false,
    notifyTarget: "linxia-wechat",
    siteStyle: "whitespace",
    colorStyle: "klein",
    showPrice: true,
    autoReply: true,
    smsReminder: false,
    template: "tech",
    contactChannel: "wechat",
    contactValue: "linxia-wechat",
    ownerPhone: "",
    registered: false,
    imageUsedGb: 1.2,
    videoUsedGb: 0.2,
  },
  bookings: [],
  videos: [
    { title: "服务过程短视频", desc: "开启视频模块后可上传服务过程、前后对比或客户反馈。" },
  ],
  works: [
    {
      title: "咖啡馆品牌拍摄",
      desc: "为本地咖啡馆拍摄空间、产品和主理人形象，适合社媒发布。",
      image: "",
    },
    {
      title: "个人形象照",
      desc: "为独立咨询师拍摄主页头像和介绍页视觉素材。",
      image: "",
    },
  ],
  products: [
    { name: "入门体验课", price: "￥49", desc: "适合首次了解服务，支持在线预约时间。" },
    { name: "一对一咨询", price: "￥99", desc: "适合需要详细沟通方案的客户。" },
  ],
  tiers: [
    { name: "普通会员", discount: 95 },
    { name: "银卡会员", discount: 88 },
    { name: "金卡会员", discount: 80 },
  ],
  messages: [
    { from: "客户", text: "你好，周末可以拍个人形象照吗？" },
    { from: "林夏", text: "可以的，你可以先选择服务和时间，我会确认具体地点。" },
  ],
};

const storeKey = "xiaob_site_demo";
let selectedTime = "10:00";
let showAllCities = false;
let showAllJobs = false;
let state = loadState();

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const dom = {
  namePreview: $("#namePreview"),
  rolePreview: $("#rolePreview"),
  siteMetaPreview: $("#siteMetaPreview"),
  taglinePreview: $("#taglinePreview"),
  bioPreview: $("#bioPreview"),
  avatarPreview: $("#avatarPreview"),
  photoInput: $("#photoInput"),
  photoPreviewBox: $("#photoPreviewBox"),
  makeVirtualAvatar: $("#makeVirtualAvatar"),
  clearPhoto: $("#clearPhoto"),
  videoPreview: $("#videoPreview"),
  portfolioPreview: $("#portfolioPreview"),
  productPreview: $("#productPreview"),
  tierPreview: $("#tierPreview"),
  workTitle: $("#workTitle"),
  workDesc: $("#workDesc"),
  workImageInput: $("#workImageInput"),
  workImagePreview: $("#workImagePreview"),
  publishWork: $("#publishWork"),
  bulkMediaInput: $("#bulkMediaInput"),
  imageStorageText: $("#imageStorageText"),
  imageStorageProgress: $("#imageStorageProgress"),
  videoStorageText: $("#videoStorageText"),
  videoStorageProgress: $("#videoStorageProgress"),
  productName: $("#productName"),
  productPrice: $("#productPrice"),
  productDesc: $("#productDesc"),
  addProduct: $("#addProduct"),
  tierEditor: $("#tierEditor"),
  contactChannel: $("#contactChannel"),
  contactValue: $("#contactValue"),
  ownerPhone: $("#ownerPhone"),
  registerPhone: $("#registerPhone"),
  phoneStatus: $("#phoneStatus"),
  cityOptions: $("#cityOptions"),
  jobOptions: $("#jobOptions"),
  citySelect: $("#citySelect"),
  jobSelect: $("#jobSelect"),
  avatarMode: $("#avatarMode"),
  notifyTarget: $("#notifyTarget"),
  enableWorks: $("#enableWorks"),
  enableVideo: $("#enableVideo"),
  notifyPreview: $("#notifyPreview"),
  bookingNotifyText: $("#bookingNotifyText"),
  monthBoardPreview: $("#monthBoardPreview"),
  monthBoardAdmin: $("#monthBoardAdmin"),
  siteStyleOptions: $("#siteStyleOptions"),
  siteStyleOptionsAdmin: $("#siteStyleOptionsAdmin"),
  colorStyleOptions: $("#colorStyleOptions"),
  colorStyleOptionsAdmin: $("#colorStyleOptionsAdmin"),
  servicePreview: $("#servicePreview"),
  serviceEditor: $("#serviceEditor"),
  nameInput: $("#nameInput"),
  roleInput: $("#roleInput"),
  taglineInput: $("#taglineInput"),
  bioInput: $("#bioInput"),
  showPrice: $("#showPrice"),
  autoReply: $("#autoReply"),
  smsReminder: $("#smsReminder"),
  bookingService: $("#bookingService"),
  bookingDate: $("#bookingDate"),
  timeGrid: $("#timeGrid"),
  bookingForm: $("#bookingForm"),
  customerName: $("#customerName"),
  customerContact: $("#customerContact"),
  messageForm: $("#messageForm"),
  messageText: $("#messageText"),
  chatBox: $("#chatBox"),
  bookingCount: $("#bookingCount"),
  messageCount: $("#messageCount"),
  leadScore: $("#leadScore"),
  leadList: $("#leadList"),
  exportBox: $("#exportBox"),
  toast: $("#toast"),
  templateCards: $$(".template-card"),
};

function loadState() {
  const saved = localStorage.getItem(storeKey);
  if (!saved) return structuredClone(defaults);
  const parsed = JSON.parse(saved);
  const services = parsed.services?.length ? parsed.services : structuredClone(defaults.services);
  const affordablePrices = {
    "个人形象照": { price: "￥199", duration: "45 分钟", desc: "适合头像、简历、个人品牌主页，轻量好预约。" },
    "小店内容拍摄": { price: "￥399", duration: "90 分钟", desc: "适合咖啡馆、美甲店、工作室、小红书内容，低成本起步。" },
    "家庭纪实拍摄": { price: "￥299", duration: "60 分钟", desc: "自然记录亲子、生日、家庭日常，适合首次体验。" },
  };
  const migratedServices = services.map((service) => {
    const preset = affordablePrices[service.name];
    if (!preset) return service;
    const oldDemoPrices = ["￥699", "￥999", "￥1299"];
    return oldDemoPrices.includes(service.price) ? { ...service, ...preset } : service;
  });
  return {
    ...structuredClone(defaults),
    ...parsed,
    profile: { ...defaults.profile, ...parsed.profile },
    settings: {
      ...defaults.settings,
      ...parsed.settings,
      city: cities.includes(parsed.settings?.city) ? parsed.settings.city : defaults.settings.city,
      job: jobPresets[parsed.settings?.job] ? parsed.settings.job : defaults.settings.job,
      avatarMode: parsed.settings?.avatarMode || defaults.settings.avatarMode,
      enableWorks: Boolean(parsed.settings?.enableWorks),
      enableVideo: Boolean(parsed.settings?.enableVideo),
      notifyTarget: parsed.settings?.notifyTarget || parsed.settings?.contactValue || defaults.settings.notifyTarget,
      siteStyle: siteStyles[parsed.settings?.siteStyle] ? parsed.settings.siteStyle : defaults.settings.siteStyle,
      colorStyle: colorStyles[parsed.settings?.colorStyle] ? parsed.settings.colorStyle : defaults.settings.colorStyle,
      contactChannel: parsed.settings?.contactChannel === "email" ? "wechat" : (parsed.settings?.contactChannel || defaults.settings.contactChannel),
      contactValue: parsed.settings?.contactValue === "hello@yezhu.local" ? defaults.settings.contactValue : (parsed.settings?.contactValue || defaults.settings.contactValue),
      imageUsedGb: (parsed.settings?.imageUsedGb ?? defaults.settings.imageUsedGb) >= 5 ? defaults.settings.imageUsedGb : (parsed.settings?.imageUsedGb ?? defaults.settings.imageUsedGb),
      videoUsedGb: (parsed.settings?.videoUsedGb ?? defaults.settings.videoUsedGb) >= 1 ? defaults.settings.videoUsedGb : (parsed.settings?.videoUsedGb ?? defaults.settings.videoUsedGb),
    },
    services: migratedServices,
    works: parsed.works?.length ? parsed.works : structuredClone(defaults.works),
    videos: parsed.videos?.length ? parsed.videos : structuredClone(defaults.videos),
    products: parsed.products?.length ? parsed.products : structuredClone(defaults.products),
    tiers: parsed.tiers?.length ? parsed.tiers : structuredClone(defaults.tiers),
    bookings: parsed.bookings || [],
    messages: parsed.messages?.length ? parsed.messages : structuredClone(defaults.messages),
  };
}

function saveState() {
  localStorage.setItem(storeKey, JSON.stringify(state));
}

function toast(text) {
  dom.toast.textContent = text;
  dom.toast.classList.add("show");
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => dom.toast.classList.remove("show"), 2200);
}

function getJobPreset() {
  return jobPresets[state.settings.job] || jobPresets.photographer;
}

function applyJobPreset(jobKey) {
  const preset = jobPresets[jobKey];
  if (!preset) return;
  state.settings.job = jobKey;
  state.profile.role = preset.role;
  state.profile.tagline = preset.tagline;
  state.profile.bio = preset.bio;
  state.services = structuredClone(preset.services);
  state.products = structuredClone(preset.services.map((service) => ({
    name: service.name,
    price: service.price,
    desc: `${service.desc} 客户先提交预约，站主再确认具体时间。`,
  })));
}

function renderLaunchChoices() {
  const defaultCities = cities.slice(0, 3);
  const visibleCities = showAllCities
    ? cities
    : (defaultCities.includes(state.settings.city) ? defaultCities : [state.settings.city, ...cities.filter((city) => city !== state.settings.city).slice(0, 2)]);
  const cityButtons = visibleCities.map((city) => `
    <button class="${city === state.settings.city ? "active" : ""}" type="button" data-city="${city}">${city}</button>
  `).join("");
  const moreButton = cities.length > 3 ? `
    <button class="more-picker" type="button" data-toggle-cities>${showAllCities ? "收起" : `更多 ${cities.length - 3}`}</button>
  ` : "";
  dom.cityOptions.innerHTML = cityButtons + moreButton;
  const jobEntries = Object.entries(jobPresets);
  const defaultJobs = jobEntries.slice(0, 3);
  const visibleJobs = showAllJobs
    ? jobEntries
    : (defaultJobs.some(([key]) => key === state.settings.job)
      ? defaultJobs
      : [[state.settings.job, getJobPreset()], ...jobEntries.filter(([key]) => key !== state.settings.job).slice(0, 2)]);
  const jobButtons = visibleJobs.map(([key, job]) => `
    <button class="${key === state.settings.job ? "active" : ""}" type="button" data-job="${key}">${job.label}</button>
  `).join("");
  const moreJobButton = jobEntries.length > 3 ? `
    <button class="more-picker" type="button" data-toggle-jobs>${showAllJobs ? "收起" : `更多 ${jobEntries.length - 3}`}</button>
  ` : "";
  dom.jobOptions.innerHTML = jobButtons + moreJobButton;
  dom.citySelect.innerHTML = cities.map((city) => `
    <option value="${city}">${city}</option>
  `).join("");
  dom.jobSelect.innerHTML = Object.entries(jobPresets).map(([key, job]) => `
    <option value="${key}">${job.label}</option>
  `).join("");
  dom.citySelect.value = state.settings.city;
  dom.jobSelect.value = state.settings.job;
}

function renderStyleChoices() {
  const styleMarkup = Object.entries(siteStyles).map(([key, style]) => `
    <button class="site-style-card ${key === state.settings.siteStyle ? "active" : ""}" type="button" data-site-style="${key}">
      <span>${style.no}</span>
      <strong>${style.name}</strong>
      <small>${style.desc}</small>
      <em>${style.fit}</em>
    </button>
  `).join("");
  dom.siteStyleOptions.innerHTML = styleMarkup;
  dom.siteStyleOptionsAdmin.innerHTML = styleMarkup;

  const colorMarkup = Object.entries(colorStyles).map(([key, style]) => `
    <button class="color-card ${key === state.settings.colorStyle ? "active" : ""}" type="button" data-color-style="${key}">
      <span class="color-strip">${style.colors.map((color) => `<i style="background:${color}"></i>`).join("")}</span>
      <strong>${style.name}</strong>
    </button>
  `).join("");
  dom.colorStyleOptions.innerHTML = colorMarkup;
  dom.colorStyleOptionsAdmin.innerHTML = colorMarkup;
}

function buildVirtualAvatar() {
  const preset = getJobPreset();
  const seed = `${state.settings.city}${preset.label}${state.profile.name}`;
  let hash = 0;
  for (const char of seed) hash = (hash + char.charCodeAt(0) * 17) % 360;
  return `linear-gradient(135deg, hsl(${hash} 74% 58%), hsl(${(hash + 52) % 360} 82% 44%))`;
}

function moduleLabel(enabled, name) {
  return enabled ? `${name}已开启` : `${name}未开启`;
}

function renderProfile() {
  document.body.dataset.template = "base";
  document.body.dataset.siteStyle = state.settings.siteStyle || "whitespace";
  document.body.dataset.colorStyle = state.settings.colorStyle || "klein";
  document.body.classList.toggle("works-enabled", state.settings.enableWorks);
  document.body.classList.toggle("video-enabled", state.settings.enableVideo);
  const preset = getJobPreset();
  dom.templateCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.template === document.body.dataset.template);
  });

  dom.namePreview.textContent = state.profile.name;
  dom.rolePreview.textContent = state.profile.role;
  dom.siteMetaPreview.textContent = `${state.settings.city} · ${preset.label} · ${moduleLabel(state.settings.enableWorks, "作品")} · ${moduleLabel(state.settings.enableVideo, "视频")}`;
  dom.taglinePreview.textContent = state.profile.tagline;
  dom.bioPreview.textContent = state.profile.bio;
  dom.avatarPreview.textContent = state.profile.photo ? "" : state.profile.name.slice(0, 1) || "你";
  dom.avatarPreview.style.backgroundImage = state.profile.photo ? `url(${state.profile.photo})` : buildVirtualAvatar();
  dom.avatarPreview.classList.toggle("has-photo", Boolean(state.profile.photo));
  dom.avatarPreview.classList.toggle("virtual-avatar", !state.profile.photo);
  dom.photoPreviewBox.parentElement.classList.toggle("has-image", Boolean(state.profile.photo));
  dom.photoPreviewBox.style.backgroundImage = state.profile.photo ? `url(${state.profile.photo})` : buildVirtualAvatar();
  dom.photoPreviewBox.textContent = state.profile.photo ? "已上传真人头像" : "当前使用虚拟头像";

  renderLaunchChoices();
  renderStyleChoices();
  dom.avatarMode.value = state.settings.avatarMode;
  dom.notifyTarget.value = state.settings.notifyTarget;
  dom.enableWorks.checked = state.settings.enableWorks;
  dom.enableVideo.checked = state.settings.enableVideo;
  dom.nameInput.value = state.profile.name;
  dom.roleInput.value = state.profile.role;
  dom.taglineInput.value = state.profile.tagline;
  dom.bioInput.value = state.profile.bio;
  dom.showPrice.checked = state.settings.showPrice;
  dom.autoReply.checked = state.settings.autoReply;
  dom.smsReminder.checked = state.settings.smsReminder;
  dom.contactChannel.value = state.settings.contactChannel;
  dom.contactValue.value = state.settings.contactValue;
  dom.ownerPhone.value = state.settings.ownerPhone;
  dom.phoneStatus.textContent = state.settings.registered ? `已注册：${state.settings.ownerPhone}` : "未注册";
  dom.notifyPreview.textContent = `客户提交预约后，将直接通知站主微信 ${state.settings.notifyTarget || state.settings.contactValue}。`;
  dom.bookingNotifyText.textContent = `提交后将通知站主微信 ${state.settings.notifyTarget || state.settings.contactValue}。`;
}

function renderServices() {
  dom.servicePreview.innerHTML = state.services.map((service, index) => `
    <article class="service-card">
      <strong>${service.name}</strong>
      <span>${service.desc}</span>
      <span>${service.duration}${state.settings.showPrice ? ` · <b class="price">${service.price}</b>` : ""}</span>
      <button class="ghost-btn" type="button" data-book="${index}">预约这个服务</button>
    </article>
  `).join("");

  dom.serviceEditor.innerHTML = state.services.map((service, index) => `
    <div class="service-editor">
      <input value="${service.name}" aria-label="服务名称" data-service-name="${index}">
      <input value="${service.price}" aria-label="服务价格" data-service-price="${index}">
      <input value="${service.duration}" aria-label="服务时长" data-service-duration="${index}">
      <input value="${service.desc}" aria-label="服务描述" data-service-desc="${index}">
    </div>
  `).join("");

  dom.bookingService.innerHTML = state.services.map((service, index) => `
    <option value="${index}">${service.name} · ${service.duration}</option>
  `).join("");
}

function renderWorks() {
  if (!state.settings.enableWorks) {
    dom.portfolioPreview.innerHTML = `
      <article class="service-card module-locked">
        <strong>作品图片模块未开启</strong>
        <span>基础版只保留头像和个人介绍。需要展示案例图片时，在后台单独开启作品图片模块。</span>
      </article>
    `;
    return;
  }
  dom.portfolioPreview.innerHTML = state.works.map((work, index) => `
    <article class="portfolio-card">
      ${work.image ? `<img src="${work.image}" alt="${work.title}">` : `<div class="work-placeholder">作品 ${index + 1}</div>`}
      <strong>${work.title}</strong>
      <span>${work.desc}</span>
    </article>
  `).join("");
}

function renderVideos() {
  if (!state.settings.enableVideo) {
    dom.videoPreview.innerHTML = `
      <article class="service-card module-locked">
        <strong>视频展示模块未开启</strong>
        <span>需要展示短视频、服务过程或前后对比时，可在后台单独开启视频模块。</span>
      </article>
    `;
    return;
  }
  dom.videoPreview.innerHTML = state.videos.map((video, index) => `
    <article class="portfolio-card">
      ${video.src ? `<video src="${video.src}" controls muted playsinline></video>` : `<div class="work-placeholder">视频 ${index + 1}</div>`}
      <strong>${video.title}</strong>
      <span>${video.desc}</span>
    </article>
  `).join("");
}

function renderProducts() {
  dom.productPreview.innerHTML = state.products.map((product, index) => `
    <article class="service-card">
      <strong>${product.name}</strong>
      <span>${product.desc}</span>
      <span><b class="price">${product.price}</b> · 先预约后确认</span>
      <button class="ghost-btn" type="button" data-product-book="${index}">预约这个项目</button>
    </article>
  `).join("");
}

function renderMonthBoard() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const days = new Date(year, month + 1, 0).getDate();
  const bookingCountByDay = state.bookings.reduce((acc, booking) => {
    const date = new Date(booking.date);
    if (date.getFullYear() !== year || date.getMonth() !== month) return acc;
    const day = date.getDate();
    acc[day] = (acc[day] || 0) + 1;
    return acc;
  }, {});
  const cells = Array.from({ length: days }, (_, index) => {
    const day = index + 1;
    const count = bookingCountByDay[day] || 0;
    const busy = count >= 3;
    return `
      <div class="month-cell ${count ? "has-booking" : ""} ${busy ? "busy" : ""}">
        <strong>${day}</strong>
        <span>${busy ? "已满" : count ? `${count} 约` : "可约"}</span>
      </div>
    `;
  }).join("");
  const title = `${year}年${month + 1}月 · ${state.settings.city}${getJobPreset().label}档期`;
  const board = `<div class="month-title">${title}</div><div class="month-grid">${cells}</div>`;
  dom.monthBoardPreview.innerHTML = board;
  dom.monthBoardAdmin.innerHTML = board;
}

function renderTiers() {
  dom.tierPreview.innerHTML = state.tiers.map((tier) => `
    <article class="service-card">
      <strong>${tier.name}</strong>
      <span>${tier.discount} 折</span>
    </article>
  `).join("");

  dom.tierEditor.innerHTML = state.tiers.map((tier, index) => `
    <div class="tier-row">
      <input value="${tier.name}" aria-label="会员等级" data-tier-name="${index}">
      <input value="${tier.discount}" aria-label="折扣" data-tier-discount="${index}" type="number" min="1" max="100">
      <span>折</span>
    </div>
  `).join("");
}

function alignCurrentHash() {
  if (!location.hash) return;
  const target = document.querySelector(location.hash);
  if (!target) return;
  window.requestAnimationFrame(() => {
    target.scrollIntoView({ block: "start" });
  });
}

function renderStorage() {
  dom.imageStorageText.textContent = `${state.settings.imageUsedGb.toFixed(1)}G / 5G`;
  dom.videoStorageText.textContent = `${state.settings.videoUsedGb.toFixed(1)}G / 1G`;
  dom.imageStorageProgress.value = state.settings.imageUsedGb;
  dom.videoStorageProgress.value = state.settings.videoUsedGb;
}

function renderTimeGrid() {
  const times = ["09:00", "10:00", "11:30", "14:00", "15:30", "17:00"];
  dom.timeGrid.innerHTML = times.map((time) => `
    <button class="${time === selectedTime ? "active" : ""}" type="button" data-time="${time}">${time}</button>
  `).join("");
}

function renderMessages() {
  dom.chatBox.innerHTML = state.messages.map((message) => `
    <div class="chat-message ${message.from === state.profile.name ? "owner" : ""}">
      <strong>${message.from}</strong>
      <div>${message.text}</div>
    </div>
  `).join("");
  dom.chatBox.scrollTop = dom.chatBox.scrollHeight;
}

function renderLeads() {
  dom.bookingCount.textContent = state.bookings.length;
  dom.messageCount.textContent = state.messages.filter((message) => message.from === "客户").length;
  dom.leadScore.textContent = state.bookings.length * 20 + state.messages.length * 5;

  const bookingItems = state.bookings.map((booking) => `
    <div class="lead-item">
      <strong>预约：${booking.customer}</strong>
      <span>${booking.service} · ${booking.date} ${booking.time}</span>
      <span>${booking.contact}</span>
      <span>${booking.reminder || "已通知站主"}</span>
      <span>状态：${booking.status || "待商家确认"}</span>
    </div>
  `);
  const messageItems = state.messages.filter((message) => message.from === "客户").map((message) => `
    <div class="lead-item">
      <strong>留言咨询</strong>
      <span>${message.text}</span>
    </div>
  `);
  dom.leadList.innerHTML = [...bookingItems, ...messageItems].slice(-8).reverse().join("") || "<p>还没有线索，先提交一个预约或留言。</p>";
}

function renderAll() {
  renderProfile();
  renderServices();
  renderWorks();
  renderVideos();
  renderProducts();
  renderTiers();
  renderMonthBoard();
  renderStorage();
  renderTimeGrid();
  renderMessages();
  renderLeads();
  saveState();
}

function bindInputs() {
  [
    ["name", dom.nameInput],
    ["role", dom.roleInput],
    ["tagline", dom.taglineInput],
    ["bio", dom.bioInput],
  ].forEach(([key, input]) => {
    input.addEventListener("input", () => {
      state.profile[key] = input.value;
      renderProfile();
      renderServices();
      renderMessages();
      saveState();
    });
  });

  [dom.showPrice, dom.autoReply, dom.smsReminder, dom.enableWorks, dom.enableVideo].forEach((input) => {
    input.addEventListener("change", () => {
      state.settings[input.id] = input.checked;
      renderAll();
      toast(input.id.startsWith("enable") ? "模块选择已更新" : "转化设置已更新");
    });
  });

  [dom.contactChannel, dom.contactValue].forEach((input) => {
    input.addEventListener("input", () => {
      state.settings.contactChannel = dom.contactChannel.value;
      state.settings.contactValue = dom.contactValue.value;
      saveState();
    });
  });

  dom.citySelect.addEventListener("change", () => {
    state.settings.city = dom.citySelect.value;
    renderAll();
    toast(`已切换城市：${state.settings.city}`);
  });

  dom.jobSelect.addEventListener("change", () => {
    applyJobPreset(dom.jobSelect.value);
    renderAll();
    toast(`已切换工种：${getJobPreset().label}`);
  });

  dom.avatarMode.addEventListener("change", () => {
    state.settings.avatarMode = dom.avatarMode.value;
    if (state.settings.avatarMode === "virtual") state.profile.photo = "";
    renderAll();
    toast(state.settings.avatarMode === "virtual" ? "已使用虚拟头像" : "请上传真人头像");
  });

  dom.notifyTarget.addEventListener("input", () => {
    state.settings.notifyTarget = dom.notifyTarget.value.trim();
    state.settings.contactValue = state.settings.notifyTarget || state.settings.contactValue;
    renderProfile();
    saveState();
  });
}

document.addEventListener("input", (event) => {
  const target = event.target;
  const serviceIndex = target.dataset.serviceName ?? target.dataset.servicePrice ?? target.dataset.serviceDuration ?? target.dataset.serviceDesc;
  if (serviceIndex !== undefined) {
    const service = state.services[Number(serviceIndex)];
    if (target.dataset.serviceName !== undefined) service.name = target.value;
    if (target.dataset.servicePrice !== undefined) service.price = target.value;
    if (target.dataset.serviceDuration !== undefined) service.duration = target.value;
    if (target.dataset.serviceDesc !== undefined) service.desc = target.value;
    renderServices();
    saveState();
  }

  const tierIndex = target.dataset.tierName ?? target.dataset.tierDiscount;
  if (tierIndex !== undefined) {
    const tier = state.tiers[Number(tierIndex)];
    if (target.dataset.tierName !== undefined) tier.name = target.value;
    if (target.dataset.tierDiscount !== undefined) tier.discount = Number(target.value);
    renderTiers();
    saveState();
  }
});

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, a");
  if (!target) return;
  if (target.dataset.template) {
    state.settings.template = target.dataset.template;
    renderAll();
    toast(`已切换模板：${target.querySelector("strong")?.textContent || "个人主页"}`);
  }
  if (target.dataset.city) {
    state.settings.city = target.dataset.city;
    renderAll();
    toast(`已选择城市：${state.settings.city}`);
  }
  if (target.dataset.toggleCities !== undefined) {
    showAllCities = !showAllCities;
    renderLaunchChoices();
    toast(showAllCities ? "已展开全部地域" : "已收起地域");
  }
  if (target.dataset.toggleJobs !== undefined) {
    showAllJobs = !showAllJobs;
    renderLaunchChoices();
    toast(showAllJobs ? "已展开全部职业" : "已收起职业");
  }
  if (target.dataset.job) {
    applyJobPreset(target.dataset.job);
    renderAll();
    toast(`已选择工种：${getJobPreset().label}`);
  }
  if (target.dataset.siteStyle) {
    state.settings.siteStyle = target.dataset.siteStyle;
    renderAll();
    toast(`已选择网站风格：${siteStyles[state.settings.siteStyle].name}`);
  }
  if (target.dataset.colorStyle) {
    state.settings.colorStyle = target.dataset.colorStyle;
    renderAll();
    toast(`已选择颜色风格：${colorStyles[state.settings.colorStyle].name}`);
  }
  if (target.dataset.time) {
    selectedTime = target.dataset.time;
    renderTimeGrid();
  }
  if (target.dataset.book) {
    dom.bookingService.value = target.dataset.book;
    location.hash = "#booking";
    toast("已带入服务，请选择时间提交预约");
  }
  if (target.dataset.productBook !== undefined) {
    const product = state.products[Number(target.dataset.productBook)];
    state.bookings.push({
      service: product.name,
      date: dom.bookingDate.value,
      time: selectedTime,
      customer: "待填写客户",
      contact: "来自商品预约按钮",
      reminder: `已通知站主：${state.settings.notifyTarget || state.settings.contactValue}`,
      status: "待客户补充信息",
    });
    renderAll();
    location.hash = "#booking";
    toast("橱窗预约已创建，请客户补充信息");
  }
});

function readImage(input, callback) {
  const file = input.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    toast("请选择图片文件");
    return;
  }
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(file);
}

dom.photoInput.addEventListener("change", () => {
  readImage(dom.photoInput, (dataUrl) => {
    state.profile.photo = dataUrl;
    state.settings.avatarMode = "real";
    renderAll();
    toast("真人头像已更新");
  });
});

dom.makeVirtualAvatar.addEventListener("click", () => {
  state.profile.photo = "";
  state.settings.avatarMode = "virtual";
  dom.photoInput.value = "";
  renderAll();
  toast("已生成虚拟头像");
});

dom.clearPhoto.addEventListener("click", () => {
  state.profile.photo = "";
  state.settings.avatarMode = "virtual";
  dom.photoInput.value = "";
  renderAll();
  toast("已切换为虚拟头像");
});

dom.workImageInput.addEventListener("change", () => {
  readImage(dom.workImageInput, (dataUrl) => {
    dom.workImagePreview.parentElement.classList.add("has-image");
    dom.workImagePreview.style.backgroundImage = `url(${dataUrl})`;
    dom.workImagePreview.dataset.image = dataUrl;
    dom.workImagePreview.textContent = "已选择作品图片";
  });
});

dom.publishWork.addEventListener("click", () => {
  if (!state.settings.enableWorks) {
    toast("请先开启作品图片模块");
    return;
  }
  const title = dom.workTitle.value.trim();
  const desc = dom.workDesc.value.trim();
  if (!title || !desc) {
    toast("请填写作品标题和说明");
    return;
  }
  state.works.unshift({
    title,
    desc,
    image: dom.workImagePreview.dataset.image || "",
  });
  dom.workTitle.value = "";
  dom.workDesc.value = "";
  dom.workImageInput.value = "";
  dom.workImagePreview.dataset.image = "";
  dom.workImagePreview.style.backgroundImage = "";
  dom.workImagePreview.textContent = "选择作品图片";
  dom.workImagePreview.parentElement.classList.remove("has-image");
  renderAll();
  toast("作品已发布到个人主页");
});

dom.bulkMediaInput.addEventListener("change", () => {
  const files = [...(dom.bulkMediaInput.files || [])];
  let imageGb = 0;
  let videoGb = 0;
  files.forEach((file) => {
    const sizeGb = file.size / 1024 / 1024 / 1024;
    if (file.type.startsWith("image/")) imageGb += sizeGb;
    if (file.type.startsWith("video/")) videoGb += sizeGb;
  });
  if (state.settings.imageUsedGb + imageGb > 5 || state.settings.videoUsedGb + videoGb > 1) {
    toast("上传超过空间额度，请升级或删除旧内容");
    return;
  }
  state.settings.imageUsedGb += imageGb;
  state.settings.videoUsedGb += videoGb;
  files.forEach((file) => {
    if (file.type.startsWith("image/")) {
      state.settings.enableWorks = true;
      state.works.unshift({
        title: file.name.replace(/\.[^.]+$/, "") || "展示图片",
        desc: "通过展示媒体模块上传的图片。",
        image: "",
      });
    }
    if (file.type.startsWith("video/")) {
      state.settings.enableVideo = true;
      state.videos.unshift({
        title: file.name.replace(/\.[^.]+$/, "") || "展示视频",
        desc: "通过视频展示模块上传的视频文件。",
        src: "",
      });
    }
  });
  dom.bulkMediaInput.value = "";
  renderAll();
  toast("展示媒体已计入空间用量");
});

dom.addProduct.addEventListener("click", () => {
  const name = dom.productName.value.trim();
  const price = dom.productPrice.value.trim();
  const desc = dom.productDesc.value.trim();
  if (!name || !price || !desc) {
    toast("请填写商品名称、价格和说明");
    return;
  }
  state.products.unshift({ name, price, desc });
  dom.productName.value = "";
  dom.productPrice.value = "";
  dom.productDesc.value = "";
  renderAll();
  toast("预约服务已添加");
});

dom.registerPhone.addEventListener("click", () => {
  const phone = dom.ownerPhone.value.trim();
  if (!/^1[3-9]\d{9}$/.test(phone)) {
    toast("请输入有效的本人手机号");
    return;
  }
  state.settings.ownerPhone = phone;
  state.settings.registered = true;
  renderAll();
  toast("手机号已完成本地注册验证");
});

dom.bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const service = state.services[Number(dom.bookingService.value)];
  const booking = {
    service: service.name,
    date: dom.bookingDate.value,
    time: selectedTime,
    customer: dom.customerName.value,
    contact: dom.customerContact.value,
    reminder: `已通知站主：${state.settings.notifyTarget || state.settings.contactValue}`,
    status: "待商家确认",
  };
  state.bookings.push(booking);
  dom.customerName.value = "";
  dom.customerContact.value = "";
  renderAll();
  toast("预约已提交，后台已收到");
});

dom.messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = dom.messageText.value.trim();
  if (!text) return;
  state.messages.push({ from: "客户", text });
  if (state.settings.autoReply) {
    state.messages.push({
      from: state.profile.name,
      text: "收到啦，我会尽快回复。你也可以直接在预约区选择合适的服务和时间。",
    });
  }
  dom.messageText.value = "";
  renderAll();
  toast("留言已发送");
});

$("#shareBtn").addEventListener("click", async () => {
  const text = `我是${state.profile.name}，${state.profile.role}。${state.profile.tagline}`;
  try {
    await navigator.clipboard.writeText(text);
    toast("主页文案已复制");
  } catch {
    toast(text);
  }
});

$("#exportLeads").addEventListener("click", () => {
  dom.exportBox.value = JSON.stringify({
    profile: state.profile,
    services: state.services,
    works: state.works,
    videos: state.videos,
    products: state.products,
    tiers: state.tiers,
    bookings: state.bookings,
    messages: state.messages,
  }, null, 2);
  toast("线索数据已导出");
});

$("#resetDemo").addEventListener("click", () => {
  state = structuredClone(defaults);
  selectedTime = "10:00";
  renderAll();
  toast("已恢复示例数据");
});

const today = new Date();
today.setDate(today.getDate() + 1);
dom.bookingDate.value = today.toISOString().slice(0, 10);
bindInputs();
renderAll();
alignCurrentHash();
