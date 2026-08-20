export default {
	meta: {
		title: "301 OA — 学校・工場・企業向けオフィス自動化",
		description:
			"会議室予約、休暇・出張、来客受付、車両予約、ロビー TV。学校・キャンパス・工場・企業で使えるモダン OA。LAN ではキオスク、インターネットでは厳格な認証。",
		keywords:
			"オフィス自動化, 企業OA, 工場OA, 学校OA, キャンパスOA, 会議室予約, 休暇管理, 来客管理, 車両予約, TVダッシュボード, 業務システム, チームOA",
		ogImageAlt: "301 OA チーム向け製品概要",
	},
	nav: {
		features: "機能",
		forSchools: "導入シーン",
		security: "セキュリティ",
		gallery: "画面",
		cta: "はじめる",
		home: "ホーム",
		brandSuffix: "チーム向け",
	},
	hero: {
		badge: "学校・工場・企業のために",
		title: "チームの運営を、",
		titleAccent: "すっきりと",
		subtitle:
			"会議室予約、休暇承認、来客受付、ロビー TV——現場が使い続けられるモダン OA をひとつに。キャンパスでも工場でも。",
		primaryCta: "機能を見る",
		secondaryCta: "導入の流れ",
		stat1Value: "会議室 · 休暇 · 来客",
		stat1Label: "日常のチーム業務",
		stat2Value: "LAN + インターネット",
		stat2Label: "キオスク公開 or 安全な遠隔",
		stat3Value: "日本語 · 中 · EN",
		stat3Label: "多言語コンソールと看板",
	},
	trust: {
		title: "現場の一日に合わせて設計",
		items: [
			"会議室カレンダーでダブルブッキングを削減",
			"休暇・出張の承認状況がひと目でわかる",
			"来客登録とウェルカム画面",
			"受付・廊下・現場の TV 情報ボード",
		],
	},
	features: {
		title: "現場に必要な機能",
		subtitle:
			"受付から人事・工場管理まで——一般企業向けの肥大化ではなく、日々の業務にフィット。",
		items: [
			{
				key: "rooms",
				title: "会議室予約",
				body: "部屋の閲覧、複数日予約、参加者招待とメール通知。職員会議、顧客レビュー、現場ミーティングに。",
			},
			{
				key: "absence",
				title: "休暇・出張管理",
				body: "従業員が申請し、ワークフローで承認。印刷可能な帳票と履歴で人事・部門責任者が把握。",
			},
			{
				key: "visitors",
				title: "来客受付",
				body: "来客登録、担当者割り当て、歓迎画面。オープンスクール、監査、取引先訪問にも。",
			},
			{
				key: "vehicles",
				title: "車両予約",
				body: "行き先・目的・運転者を記録して社用車や学内車両を予約。事務が透明に。",
			},
			{
				key: "tv",
				title: "ロビー TV ダッシュボード",
				body: "利用中の会議室、休暇、カレンダー、お知らせを大画面で共有。",
			},
			{
				key: "admin",
				title: "組織・権限・設定",
				body: "部門、RBAC、機能アクセス、お知らせ、SMTP、オプションモジュールを IT が管理。",
			},
		],
	},
	showcase: {
		title: "画面ギャラリー",
		subtitle:"",
		slots: [
			{
				id: "hero-console",
				label: "コンソールホーム",
				hint: "public/images/hero-console.webp",
			},
			{
				id: "rooms",
				label: "会議室予約",
				hint: "public/images/feature-rooms.webp",
			},
			{
				id: "tv",
				label: "TV ダッシュボード",
				hint: "public/images/feature-tv.webp",
			},
			{
				id: "visitors",
				label: "来客ウェルカム",
				hint: "public/images/feature-visitors.webp",
			},
		],
	},
	schools: {
		title: "組織が 301 OA を選ぶ理由",
		subtitle:
			"単一拠点でも軽く、複数棟の学校・工場・企業でも整理された運用が可能です。",
		points: [
			{
				title: "現場 LAN に強い",
				body: "構内では会議室や予定の参照をポリシーに応じて公開でき、共有タブレットや TV に最適。",
			},
			{
				title: "インターネット公開時は厳格に",
				body: "インターネット・セキュリティプロファイルでログイン必須に。遠隔管理も安全。",
			},
			{
				title: "現場がわかるワークフロー",
				body: "承認・参加者・部門長は学校・工場・オフィスの実務に沿った設計です。",
			},
			{
				title: "オプションモジュール",
				body: "設計更新や新製品スケジュール、BOM は必要なときだけ有効化。",
			},
		],
	},
	security: {
		title: "LAN は開放 · インターネットは規律",
		subtitle:
			"一つのデプロイで二つの境界。プライベートホストの自動判定、または LAN / Internet 固定が可能です。",
		lanTitle: "LAN プロファイル",
		lanBody:
			"キオスク向け。ルートポリシーが許す範囲で会議室・予約・休暇などの読み取りをログインなしで利用できます。",
		netTitle: "Internet プロファイル",
		netBody:
			"コンソールログインと API セッションを強制。公開ポリシーは認証必須に昇格し、構内の開放設定が外部へ漏れません。",
	},
	steps: {
		title: "導入の流れ",
		items: [
			{
				step: "01",
				title: "現場にデプロイ",
				body: "API・コンソール・TV ダッシュボードを起動し、部屋・部門・従業員を登録。",
			},
			{
				step: "02",
				title: "ロビーに画面を設置",
				body: "廊下 TV をダッシュボードへ。受付は来客ウェルカムと会議室カレンダーを利用。",
			},
			{
				step: "03",
				title: "権限と遠隔を調整",
				body: "機能ポリシー、SMTP、インターネットセキュリティを設定し、管理職の遠隔利用に対応。",
			},
		],
	},
	cta: {
		title: "チームの業務をモダンにしませんか？",
		body: "会議室と休暇から始め、来客・車両・ロビー TV へ広げられます。",
		primary: "お問い合わせ",
		secondary: "機能を見る",
	},
	footer: {
		tagline: "学校・工場・企業のオフィス自動化",
		product: "製品",
		resources: "リソース",
		legal: "法務",
		rights: "All rights reserved.",
		builtFor: "教育・製造・オフィスのために",
		privacy: "プライバシー",
		note: "公開時に連絡先と SITE_URL を差し替えてください。",
	},
	lang: {
		label: "言語",
	},
	imageSlot: {
		placeholder: "画像スロット",
		replace: "画像に差し替え",
	},
} as const;
