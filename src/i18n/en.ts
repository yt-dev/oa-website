export default {
	meta: {
		title: "301 OA — Office Automation for Schools, Factories & Companies",
		description:
			"Team OA for schools, campuses, factories, and companies: meeting rooms, leave & trips, visitors, vehicles, and lobby TVs. LAN-friendly kiosks with Internet sign-in when you go public.",
		keywords:
			"office automation, team OA, enterprise OA, school OA, campus OA, factory OA, company OA, meeting room reservation, leave management, visitor management, vehicle booking, TV dashboard, office admin software",
		ogImageAlt: "301 OA team product overview",
	},
	nav: {
		features: "Features",
		forSchools: "Industries",
		security: "Security",
		gallery: "Gallery",
		cta: "Get started",
		home: "Home",
		brandSuffix: "Team-oriented",
	},
	hero: {
		badge: "Built for schools, factories & companies",
		title: "Team operations,",
		titleAccent: "beautifully organized",
		subtitle:
			"Book rooms, approve leave, welcome visitors, and power lobby TVs — one modern OA platform staff actually enjoy using, on campus or on the factory floor.",
		primaryCta: "Explore features",
		secondaryCta: "See how it works",
		stat1Value: "Rooms · Leave · Visitors",
		stat1Label: "Everyday team workflows",
		stat2Value: "LAN + Internet",
		stat2Label: "Open kiosk or secure remote access",
		stat3Value: "EN · 中文 · 日本語",
		stat3Label: "Multilingual console & dashboards",
	},
	trust: {
		title: "Designed around real working days",
		items: [
			"Meeting room calendars that reduce double-booking",
			"Leave & business-trip approvals with clear status",
			"Visitor registration and welcome screens",
			"Lobby TV dashboards for reception, hallways, and shops",
		],
	},
	features: {
		title: "Everything operations teams need",
		subtitle:
			"From the front desk to HR and plant admin — modules that fit daily work, not generic corporate bloat.",
		items: [
			{
				key: "rooms",
				title: "Meeting room reservations",
				body: "Browse rooms, book multi-day slots, invite participants, and notify by email. Faculty meetings, customer reviews, and shop-floor huddles.",
			},
			{
				key: "absence",
				title: "Leave & trip management",
				body: "Staff submit leave or business trips with workflow approvals, print-friendly forms, and a clear history for HR and department heads.",
			},
			{
				key: "visitors",
				title: "Visitor reception",
				body: "Register guests, assign hosts, and show a polished welcome screen — open days, audits, partners, and customer visits.",
			},
			{
				key: "vehicles",
				title: "Vehicle booking",
				body: "Reserve company or campus vehicles with destination, purpose, and driver details so logistics stay transparent.",
			},
			{
				key: "tv",
				title: "Lobby TV dashboard",
				body: "Real-time rooms in use, absences, calendars, and notices on hallway screens — keep the site in sync without email spam.",
			},
			{
				key: "admin",
				title: "Roles, depts & settings",
				body: "Departments, RBAC, feature access, notices, email SMTP, and optional modules — tuned for IT and admin offices.",
			},
		],
	},
	showcase: {
		title: "See it in action",
		subtitle:"",
		slots: [
			{
				id: "hero-console",
				label: "Console home",
				hint: "public/images/hero-console.webp",
			},
			{
				id: "rooms",
				label: "Room booking",
				hint: "public/images/feature-rooms.webp",
			},
			{
				id: "tv",
				label: "TV dashboard",
				hint: "public/images/feature-tv.webp",
			},
			{
				id: "visitors",
				label: "Visitor welcome",
				hint: "public/images/feature-visitors.webp",
			},
		],
	},
	schools: {
		title: "Why organizations choose 301 OA",
		subtitle:
			"Lightweight enough for a single site, structured enough for multi-building schools, factories, and companies.",
		points: [
			{
				title: "Kiosk-ready on the site LAN",
				body: "On the office or campus network, staff and lobby devices can use open read access for rooms and schedules — great for shared tablets and TVs.",
			},
			{
				title: "Secure when exposed to the Internet",
				body: "Flip to Internet security profile to require sign-in for almost every API and console route. Remote admins stay safe without redesigning the app.",
			},
			{
				title: "Workflows people already understand",
				body: "Approvals, participant invites, and department managers map to how schools, plants, and offices already work — not abstract tickets.",
			},
			{
				title: "Optional modules",
				body: "Turn on design renew, new-product schedules, or BOM tools only when your factory or product team needs them.",
			},
		],
	},
	security: {
		title: "LAN openness · Internet discipline",
		subtitle:
			"One deployment, two edges. Auto-detect private hosts or force LAN / Internet profiles for demos and production.",
		lanTitle: "LAN profile",
		lanBody:
			"Kiosk-friendly. Business reads (rooms, reservations, absences…) stay available without login where route policy allows — ideal inside the site firewall.",
		netTitle: "Internet profile",
		netBody:
			"Force console login and API session checks. Public feature policies elevate to authenticated so site openness never leaks to the public URL.",
	},
	steps: {
		title: "How teams roll it out",
		items: [
			{
				step: "01",
				title: "Deploy on site",
				body: "Run API + console + TV dashboard on your LAN. Seed rooms, departments, and staff.",
			},
			{
				step: "02",
				title: "Put screens in the lobby",
				body: "Point hallway TVs at the dashboard. Reception uses visitor welcome and room calendars.",
			},
			{
				step: "03",
				title: "Tune access & go remote",
				body: "Set feature policies, SMTP, and Internet security when managers need off-site access.",
			},
		],
	},
	cta: {
		title: "Ready to modernize team operations?",
		body: "Start with meeting rooms and leave — expand to visitors, vehicles, and lobby TVs when you’re ready.",
		primary: "Contact Us",
		secondary: "Browse features",
	},
	footer: {
		tagline: "Office automation for schools, factories, and companies",
		product: "Product",
		resources: "Resources",
		legal: "Legal",
		rights: "All rights reserved.",
		builtFor: "Built for education, manufacturing, and office operations",
		privacy: "Privacy",
		note: "Replace contact links and SITE_URL when you publish.",
	},
	lang: {
		label: "Language",
	},
	imageSlot: {
		placeholder: "Image slot",
		replace: "Replace with your asset",
	},
} as const;
