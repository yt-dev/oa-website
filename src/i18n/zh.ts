export default {
	meta: {
		title: "301 OA — 面向学校、工厂与企业的办公自动化",
		description:
			"现代团队 OA：会议室预约、请假出差、访客接待、用车预约与大厅 TV 看板。适用于学校、园区、工厂与公司。局域网可开放自助，公网可强制登录。",
		keywords:
			"办公自动化, 企业OA, 工厂OA, 学校OA, 园区OA, 公司OA, 会议室预约, 请假管理, 访客管理, 用车预约, TV看板, 办公系统, 团队OA",
		ogImageAlt: "301 OA 团队产品概览",
	},
	nav: {
		features: "功能",
		forSchools: "适用场景",
		security: "安全",
		gallery: "界面展示",
		cta: "开始使用",
		home: "首页",
		brandSuffix: "面向团队",
	},
	hero: {
		badge: "学校、工厂与企业都能用",
		title: "团队运转，",
		titleAccent: "井然有序",
		subtitle:
			"会议室预约、请假审批、访客接待、大厅 TV——一套员工愿意天天用的现代 OA，校园、车间、写字楼都适用。",
		primaryCta: "了解功能",
		secondaryCta: "了解部署方式",
		stat1Value: "会议室 · 请假 · 访客",
		stat1Label: "日常团队工作流",
		stat2Value: "局域网 + 互联网",
		stat2Label: "开放自助 或 安全远程",
		stat3Value: "中 · EN · 日本語",
		stat3Label: "多语言控制台与看板",
	},
	trust: {
		title: "贴合真实工作节奏",
		items: [
			"会议室日历，减少撞档",
			"请假 / 出差审批状态清晰",
			"访客登记与欢迎屏",
			"前台、走廊与车间的 TV 信息看板",
		],
	},
	features: {
		title: "运营团队真正需要的能力",
		subtitle: "从前台到人事与厂务——为日常现场设计，而不是堆砌企业功能。",
		items: [
			{
				key: "rooms",
				title: "会议室预约",
				body: "浏览房间、多日预约、邀请参会人并邮件通知。适合教研会、客户评审、班组例会。",
			},
			{
				key: "absence",
				title: "请假与出差",
				body: "员工提交请假 / 出差，多级审批、可打印单据、可追溯历史，方便人事与部门负责人。",
			},
			{
				key: "visitors",
				title: "访客接待",
				body: "登记来访、指定接待人，展示欢迎屏——开放日、审核、合作方与客户到访都适用。",
			},
			{
				key: "vehicles",
				title: "用车预约",
				body: "预约公务车 / 厂车，记录目的地、事由与驾驶员，后勤一目了然。",
			},
			{
				key: "tv",
				title: "大厅 TV 看板",
				body: "实时会议室占用、请假情况、日历与公告，走廊大屏同步现场动态。",
			},
			{
				key: "admin",
				title: "组织与权限",
				body: "部门、角色权限、功能开关、公告、邮件 SMTP 与可选模块，服务信息中心。",
			},
		],
	},
	showcase: {
		title: "界面一览",
		subtitle: "",
		slots: [
			{
				id: "hero-console",
				label: "控制台首页",
				hint: "public/images/hero-console.webp",
			},
			{
				id: "rooms",
				label: "会议室预约",
				hint: "public/images/feature-rooms.webp",
			},
			{
				id: "tv",
				label: "TV 看板",
				hint: "public/images/feature-tv.webp",
			},
			{
				id: "visitors",
				label: "访客欢迎屏",
				hint: "public/images/feature-visitors.webp",
			},
		],
	},
	schools: {
		title: "为什么组织选择 301 OA",
		subtitle: "轻量适合单点部署，也足以支撑多楼栋学校、工厂与公司协同。",
		points: [
			{
				title: "现场局域网友好",
				body: "在园区或厂区内，会议室与日程等业务读取可按策略开放，适合共用平板与大厅设备。",
			},
			{
				title: "公网访问可加固",
				body: "切换互联网安全配置后，几乎所有 API 与控制台需登录，远程办公无需重做系统。",
			},
			{
				title: "流程贴近行政习惯",
				body: "审批、参会人、部门负责人映射学校、工厂与办公室的真实流程，而不是抽象工单。",
			},
			{
				title: "可选业务模块",
				body: "设计变更、新品排程、BOM 等仅在工厂或产品团队需要时开启。",
			},
		],
	},
	security: {
		title: "局域网开放 · 公网严谨",
		subtitle: "一次部署，两种边界。可自动识别内网主机，也可强制局域网 / 互联网模式。",
		lanTitle: "局域网模式",
		lanBody:
			"适合自助终端。在路由策略允许时，会议室、预约、请假等业务读取无需登录——部署在现场防火墙内。",
		netTitle: "互联网模式",
		netBody:
			"强制控制台登录与 API 会话校验。原「公开」功能策略会提升为需登录，避免内网开放策略泄露到公网。",
	},
	steps: {
		title: "落地三步",
		items: [
			{
				step: "01",
				title: "现场部署",
				body: "启动 API、控制台与 TV 看板，导入房间、部门与员工。",
			},
			{
				step: "02",
				title: "前台与走廊上屏",
				body: "大厅 TV 接看板，前台使用访客欢迎与会议室日历。",
			},
			{
				step: "03",
				title: "权限与远程",
				body: "配置功能策略、邮件与公网安全，满足管理层远程办公。",
			},
		],
	},
	cta: {
		title: "准备好让团队协作更高效了吗？",
		body: "从会议室与请假开始，再扩展访客、用车与大厅 TV。",
		primary: "联系我们",
		secondary: "浏览功能",
	},
	footer: {
		tagline: "面向学校、工厂与企业的办公自动化",
		product: "产品",
		resources: "资源",
		legal: "法律信息",
		rights: "保留所有权利。",
		builtFor: "为教育、制造与办公室场景而建",
		privacy: "隐私",
		note: "上线时请替换联系方式与 SITE_URL。",
	},
	lang: {
		label: "语言",
	},
	imageSlot: {
		placeholder: "图片位",
		replace: "替换为您的素材",
	},
} as const;
