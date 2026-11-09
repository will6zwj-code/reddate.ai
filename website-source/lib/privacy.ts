import type { Copy } from './content';

export const privacyIdentity = {
  name: 'Reddate Intelligence Pty Ltd',
  abn: '46 699 015 873',
  email: 'hello@reddate.com.au',
  version: '1.0',
};

export const privacyText: Record<string, Copy> = {
  policyTitle: ['Privacy Policy', '隐私政策'],
  policyIntro: ['Your privacy matters. This policy explains how Reddate handles personal information when you visit reddate.ai or contact us, and how you can exercise your choices.', '你的隐私值得认真对待。本政策说明你访问 reddate.ai 或与我们联系时，Reddate 如何处理个人信息，以及你可以如何行使权利和作出选择。'],
  commitmentTitle: ['Your privacy. Our responsibility.', '你的隐私，\n我们的责任。'],
  commitmentIntro: ['Understanding a home starts with respecting the people in it. We do not sell your personal information. We explain what is needed, why it is used and how you can contact us.', '理解一个家，始于尊重其中的人。我们不会出售你的个人信息，并会说明需要哪些信息、为什么使用，以及如何与我们联系。'],
  date: ['Effective and last updated: 9 November 2026', '生效及最近更新日期：2026 年 11 月 9 日'],
  noSale: ['We never sell your personal information.', '我们绝不出售你的个人信息。'],
  noSaleBody: ['We do not sell, rent or trade personal information, or provide it to advertisers or data brokers for their own marketing. Necessary service delivery and lawful disclosures are explained below.', '我们不出售、出租或交易个人信息，也不将其提供给广告商或数据经纪人用于其独立营销。服务运行所必需的处理和依法披露的情形，会在下文明确说明。'],
  contents: ['In this policy', '政策内容'],
  contact: ['Privacy enquiries & requests', '隐私咨询与权利请求'],
  location: ['Melbourne, Victoria, Australia', '澳大利亚维多利亚州墨尔本'],
  fullPolicy: ['Read the full Privacy Policy', '阅读完整隐私政策'],
  principles: ['Our privacy commitment', '我们的隐私承诺'],
  information: ['Information and source', '信息与来源'],
  purpose: ['Why it is used', '使用目的'],
  provider: ['Service provider', '服务提供方'],
  handling: ['Information and purpose', '处理的信息与用途'],
  details: ['Privacy details', '隐私说明'],
  providerNotice: ['Provider privacy notice', '服务商隐私说明'],
  regionalLinks: ['Privacy authorities and official information', '隐私监管机构与官方信息'],
  contactNote: ['Email our privacy contact with your request or concern. Please do not send passwords, access keys or unrelated sensitive information.', '请通过邮件向我们的隐私联系人提出请求或反映问题。请勿发送密码、访问密钥或与请求无关的敏感信息。'],
};

export const privacySections: {id: string; title: Copy; paragraphs: Copy[]}[] = [
  {id:'scope', title:['Who we are and what this policy covers','负责主体与适用范围'], paragraphs:[
    ['Reddate Intelligence Pty Ltd (ABN 46 699 015 873), based in Melbourne, Australia, is responsible for the personal information we control in connection with this website and related communications. In this policy, “Reddate”, “we” and “us” refer to that company.', '本网站及相关联系中由我们控制的个人信息，由位于澳大利亚墨尔本的 Reddate Intelligence Pty Ltd（ABN 46 699 015 873）负责处理。本政策中的“Reddate”及“我们”均指该公司。'],
    ['This policy applies to reddate.ai and enquiries you send to us about our products, services or privacy practices. Other Reddate products and connected-device services will provide their relevant privacy notices when they collect information. Links to third-party websites are subject to those providers’ own notices.', '本政策适用于 reddate.ai，以及你就我们的产品、服务或隐私处理方式向我们发出的咨询。其他 Reddate 产品及联网设备服务在收集信息时，会提供相应的隐私说明。通过链接访问第三方网站时，适用该提供方自身的隐私说明。'],
  ]},
  {id:'information', title:['Information we handle','我们处理的信息'], paragraphs:[
    ['You can browse this website without creating an account or telling us your name. We handle the limited information below. Contacting us and providing information in your message are voluntary; without a way to reply or enough detail, we may be unable to resolve your enquiry.', '你无需创建账户或告知姓名即可浏览本网站。我们处理的信息限于下列范围。是否联系我们、在邮件中提供哪些信息，由你决定；如果缺少回复方式或必要细节，我们可能无法解决你的咨询。'],
    ['This website does not connect to your home devices, read household sensors, record audio or video, or request access to your camera, microphone or precise location. The App images displayed on the site are illustrative screens, not information collected from your home.', '本网站不会连接你的家庭设备、读取家庭传感器、录制音视频，也不会请求使用摄像头、麦克风或精确位置。网站展示的 App 图片是示意界面，并非从你家中收集的信息。'],
  ]},
  {id:'purposes', title:['How and why information is used','信息如何使用、用于什么'], paragraphs:[
    ['We use information to deliver the pages you request, remember your language choice, maintain website reliability and security, respond to enquiries, handle privacy requests and comply with applicable legal obligations. We do not use website information for targeted advertising or to build behavioural profiles of households.', '我们使用信息来提供你请求的网页、记住语言选择、维护网站的可靠运行与安全、回复咨询、处理隐私请求，以及履行适用的法定义务。我们不利用网站信息进行定向广告，也不据此建立家庭行为画像。'],
    ['We use the legal grounds available for each activity under applicable law, including your request for a service, necessary operational purposes where permitted, legal obligations and consent where required. Reading this policy or simply browsing is not blanket consent to unrelated processing. Where consent is required, we will explain the specific choice and how to withdraw it.', '我们依据适用法律允许的基础开展各项处理，包括回应你的服务请求、法律允许的必要运营用途、履行法定义务，以及在需要时取得同意。阅读本政策或单纯浏览网站，不代表你一揽子同意无关的信息处理。需要征得同意时，我们会说明具体选择和撤回方式。'],
  ]},
  {id:'no-sale', title:['No sale, advertising trade or AI training','不出售、不用于广告交易或 AI 训练'], paragraphs:[
    privacyText.noSaleBody,
    ['We do not use your website enquiries or browsing information to train general-purpose AI models. The website does not send your information to an AI analysis service. Any product feature involving personal information and AI will explain its purposes and applicable choices before that processing begins.', '我们不将你的网站咨询或浏览信息用于训练通用 AI 模型。本网站不会把你的信息发送给 AI 分析服务。任何涉及个人信息与 AI 的产品功能，都会在相关处理开始前说明用途及适用的选择。'],
  ]},
  {id:'providers', title:['Service providers and disclosures','服务提供方与信息披露'], paragraphs:[
    ['The providers below support website delivery, security and email. They receive the information needed for those functions. For information processed on our behalf and under our control, we remain responsible for handling your privacy requests. Providers may also process their own security and operational information under their privacy notices, linked below.', '下列服务商支持网站访问、安全防护和邮件传递，并接收完成相应功能所必需的信息。对于代表我们处理且由我们控制的信息，我们仍负责处理你的隐私请求。服务商也可能依照其自身隐私说明处理独立的安全和运营信息，相关链接列于下方。'],
    ['We may disclose relevant information to professional advisers or public authorities when reasonably necessary for legal advice, to establish or protect legal rights, or when required or permitted by applicable law. We limit disclosures to the relevant purpose and information. We do not make your enquiries publicly available.', '在寻求专业法律意见、确立或维护合法权利，或适用法律要求或允许的情形下，我们可能向专业顾问或公共机关披露相关信息。披露范围限于相关目的与必要信息。我们不会公开你的咨询内容。'],
  ]},
  {id:'international', title:['International processing','跨境处理'], paragraphs:[
    ['Reddate operates from Australia. Our hosting, network and email providers use international infrastructure. Information may be processed in Australia, the United States, the European Economic Area and other locations where the relevant provider operates; the location depends on the service and routing. Provider notices explain their international processing arrangements.', 'Reddate 从澳大利亚开展业务。我们的托管、网络和邮件服务商使用国际化基础设施。信息可能在澳大利亚、美国、欧洲经济区及相关服务商运营的其他地区处理；具体位置取决于服务和网络路由。服务商隐私说明介绍了其跨境处理安排。'],
    ['When applicable law requires safeguards, specific notice, separate consent or another transfer mechanism, those requirements apply in addition to this policy. We will not treat your choice of website language as consent to an international transfer. Contact us for information about providers relevant to your request or to exercise rights concerning information we control.', '适用法律要求的保护措施、特定告知、单独同意或其他跨境机制，不会被本政策替代。我们不会把你选择网站语言视为同意跨境传输。你可以联系我们，了解与你的请求有关的服务商，或就我们控制的信息行使权利。'],
  ]},
  {id:'storage', title:['Cookies and language preferences','Cookie 与语言偏好'], paragraphs:[
    ['We do not add advertising cookies, social-media pixels or audience-analytics scripts to this website. Your language choice is stored in your browser as “reddate.website.language” and can also appear in the page address as “lang”. The saved preference remains until you change it or clear this site’s browser storage. Blocking storage may prevent us from remembering your choice.', '本网站未添加广告 Cookie、社交媒体追踪像素或受众统计脚本。你的语言选择以“reddate.website.language”保存在浏览器中，也可能以“lang”参数显示在网页地址里。该偏好会保留到你修改或清除本网站的浏览器存储为止。阻止存储可能使网站无法记住你的选择。'],
    ['Cloudflare may use necessary security or traffic-management cookies when relevant protections operate. Its network may also receive connection-error reports from supported browsers. These functions support delivery and security. You can manage cookies and website storage in your browser; blocking necessary technologies can affect access. Optional tracking that requires consent will not be enabled without that choice.', 'Cloudflare 在相关防护机制运行时，可能使用必要的安全或流量管理 Cookie。其网络也可能接收受支持浏览器发送的连接错误报告。这些功能用于网站访问与安全。你可在浏览器中管理 Cookie 和网站存储；阻止必要技术可能影响访问。需要同意的可选追踪，不会在你作出选择前启用。'],
  ]},
  {id:'retention', title:['How long information is kept','信息保存多久'], paragraphs:[
    ['We keep correspondence and request records only for as long as needed to respond, carry out agreed follow-up, resolve a complaint or dispute, and meet applicable legal obligations. The period depends on the nature of the enquiry, whether it is resolved and any required retention. When no longer needed, we will delete or irreversibly anonymise information under our control, subject to lawful retention requirements.', '联系邮件和请求记录仅在回复、完成约定的后续事项、解决投诉或争议，以及履行适用法定义务所需的期间内保存。期限取决于咨询性质、是否已解决及必要的保存要求。不再需要时，我们会删除或不可逆地匿名化由我们控制的信息，但依法必须保留的情形除外。'],
    ['Website and security logs held by infrastructure providers follow the retention periods or criteria in their service arrangements and privacy notices. Browser language storage is controlled by you. Where a backup copy cannot be removed immediately, deletion follows the relevant backup cycle; information retained solely for a legal requirement will not be reused for unrelated purposes.', '基础设施服务商保存的网站及安全日志，适用其服务安排和隐私说明中的保存期限或判断标准。浏览器中的语言存储由你管理。如果备份副本无法立即移除，删除将依照相应备份周期完成；仅因法律要求保留的信息，不会再用于无关目的。'],
  ]},
  {id:'security', title:['Protecting information','保护信息安全'], paragraphs:[
    ['Our website is available over HTTPS. We limit the information requested through the website and use hosting and network security services. We will take reasonable technical and organisational steps appropriate to the information we handle, including limiting access to those who need it. No internet transmission or storage system can guarantee absolute security.', '本网站通过 HTTPS 提供访问。我们限制通过网站索取的信息，并使用托管及网络安全服务。我们会根据信息的性质采取合理的技术和组织措施，包括将访问范围限制在确有需要的人员。任何互联网传输或存储系统都无法保证绝对安全。'],
    ['If we become aware of a personal-information incident, we will assess it, take appropriate containment and remedial steps, and notify affected people and relevant authorities when required by applicable law. You can report a suspected privacy issue using the contact below.', '如果我们发现个人信息事件，会进行评估，采取适当的控制和补救措施，并在适用法律要求时通知受影响人员及有关机关。你可通过下方联系方式向我们报告疑似隐私问题。'],
  ]},
  {id:'rights', title:['Your choices and rights','你的选择与权利'], paragraphs:[
    ['You may ask us whether we hold information about you, request access or a copy, seek correction, request deletion, object to or restrict a use, or withdraw consent where processing relies on it. Additional rights, including transfer of information, apply where the relevant law provides them. We will explain any lawful exception or retention requirement that affects a request.', '你可以询问我们是否持有你的信息，请求访问或取得副本，要求更正、申请删除、反对或限制某项使用，或在处理依赖同意时撤回同意。适用法律规定的其他权利，包括信息转移权，也会得到尊重。若法定例外或保存要求影响某项请求，我们会向你解释。'],
    ['Email our privacy contact with enough detail to identify the information and your request. We may ask for proportionate verification to protect your information, without requesting unnecessary identity documents. We aim to respond within 30 days and will follow any applicable statutory deadline. If more time is permitted and needed, we will explain why and tell you what happens next. Any lawful fee or refusal will be explained before proceeding, with available complaint options.', '请向我们的隐私联系人发送邮件，提供足以定位信息和理解请求的细节。为保护你的信息，我们可能进行与请求相称的核验，不会索取不必要的身份证明。我们以 30 天内回复为目标，并遵守适用的法定期限。如果法律允许且确需更多时间，会说明原因及后续安排。任何依法收取的费用或拒绝决定，都会事先说明，并告知可用的投诉途径。'],
    ['Withdrawing consent does not affect earlier lawful processing. We will explain if a requested change prevents us from replying or providing a particular service. You can browse without identifying yourself and can use a pseudonym for general enquiries where practical.', '撤回同意不影响此前已依法进行的处理。如果某项选择使我们无法回复或提供特定服务，我们会说明影响。你可不表明身份浏览网站，也可在可行时使用化名提出一般咨询。'],
  ]},
  {id:'children', title:['Children and sensitive information','儿童与敏感信息'], paragraphs:[
    ['This website is intended for a general adult audience and does not offer child accounts or seek children’s personal information. Please do not send children’s information, health records, identity documents or other sensitive material unless it is necessary for an agreed request and an appropriate collection process has been explained. A parent or guardian can contact us about information a child has sent.', '本网站面向一般成年受众，不提供儿童账户，也不主动索取儿童个人信息。除非确有必要用于已约定的请求，且我们已说明适当的收集流程，请勿发送儿童信息、健康记录、身份证件或其他敏感材料。家长或监护人可就儿童发送的信息联系我们。'],
    ['Where a service requires children’s or sensitive personal information, we will provide the relevant notice and obtain the consent or other authorisation required by applicable law before that collection. This includes guardian consent and special protections for children under 14 where mainland China’s rules apply.', '如果某项服务需要儿童或敏感个人信息，我们会在收集前提供相应告知，并取得适用法律要求的同意或其他授权。其中包括中国内地规则适用时，对不满 14 周岁儿童的监护人同意和特别保护要求。'],
  ]},
  {id:'regional', title:['Regional rights and complaints','地区权利与投诉'], paragraphs:[
    ['The commitments in this policy apply to our handling of information within its scope. Local mandatory rights remain available, and the applicable law depends on the circumstances. In Australia, relevant rights and complaint avenues arise under the Privacy Act 1988 and the Australian Privacy Principles where they apply. In mainland China, relevant rights include information, access, copying, correction, deletion, restriction or refusal, consent withdrawal and explanations under the Personal Information Protection Law.', '本政策中的承诺适用于其范围内由我们开展的信息处理。当地强制性权利不受影响，具体适用法律取决于实际情形。在澳大利亚，相关权利及投诉途径来自适用的《1988 年隐私法》和澳大利亚隐私原则。在中国内地，《个人信息保护法》规定的相关权利包括知情、查阅、复制、更正、删除、限制或拒绝、撤回同意和解释说明。'],
    ['In Singapore, the Personal Data Protection Act provides relevant access, correction and consent-withdrawal rights. In Hong Kong, the Personal Data (Privacy) Ordinance provides relevant access and correction rights and protections relating to data use. These laws do not create identical rights or deadlines in every location.', '在新加坡，《个人资料保护法》规定了相关的访问、更正及撤回同意权利。在香港，《个人资料（私隐）条例》规定了相关的查阅、更正权利，以及与资料使用有关的保障。各地区的权利范围及处理期限并不完全相同。'],
    ['If you have a concern, contact us first so we can investigate and provide an explanation and proposed resolution. You may also approach the relevant privacy authority or use other remedies available under applicable law. In Australia this may be the OAIC; in Singapore, the PDPC; in Hong Kong, the PCPD; and in mainland China, the competent cyberspace administration or other authority responsible for personal-information protection. Our complaint process does not limit those rights.', '如果你有疑问或投诉，可先联系我们，以便我们调查、说明并提出解决方案。你也可向有关隐私监管机构反映，或使用适用法律提供的其他救济途径。澳大利亚的相关机构为 OAIC，新加坡为 PDPC，香港为 PCPD；中国内地为有管辖权的网信部门或其他履行个人信息保护职责的部门。我们的投诉流程不会限制这些权利。'],
  ]},
  {id:'updates', title:['Policy updates and contact','政策更新与联系'], paragraphs:[
    ['We will keep this policy aligned with how information is handled and publish the updated version and date here. For material changes, we will provide a prominent notice or contact affected people where appropriate. If a new purpose requires consent or another specific step, publishing a revised policy alone will not replace it. Contact us if you would like a copy of this policy or help understanding it.', '我们会使政策与实际信息处理方式保持一致，并在此发布更新版本及日期。对于重大变化，会提供显著提示，或在适当时联系受影响人员。若新用途需要取得同意或完成其他特定步骤，仅发布修订政策不能替代这些要求。如需本政策副本或希望了解其中内容，请联系我们。'],
  ]},
];

export const privacyData: {name: Copy; purpose: Copy}[] = [
  {name:['Website and security traffic: IP address, request time and page address, browser/device technical details, and connection or security events generated when you visit.', '网站及安全流量：访问时产生的 IP 地址、请求时间与网页地址、浏览器或设备技术资料，以及连接或安全事件。'],purpose:['Deliver requested pages, protect against abuse, and diagnose availability problems through GitHub Pages and Cloudflare.', '通过 GitHub Pages 和 Cloudflare 提供请求的页面、防范滥用及诊断访问问题。']},
  {name:['Language preference: the language you select or a supported browser-language setting.', '语言偏好：你选择的语言或浏览器中受支持的语言设置。'],purpose:['Display your preferred website language and remember your choice in this browser.', '显示你偏好的网站语言，并在此浏览器中记住选择。']},
  {name:['Correspondence: your email address, any name or contact details you choose to provide, your message and attachments, and our replies.', '联系信息：你的邮箱地址、自愿提供的姓名或联系方式、邮件及附件，以及我们的回复。'],purpose:['Reply to your enquiry, follow up on matters you request, and manage privacy requests or complaints.', '回复咨询、跟进你提出的事项，以及处理隐私请求或投诉。']},
];

export const privacyProviders: {name:string; handling:Copy; url:string}[] = [
  {name:'GitHub, Inc. · GitHub Pages',handling:['Website hosting; receives website requests and logs visitors’ IP addresses for security, including visits without a GitHub account.', '网站托管；接收网页请求，并为安全目的记录访客 IP 地址，包括未登录 GitHub 账户的访问。'],url:'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement'},
  {name:'Cloudflare, Inc.',handling:['Content delivery, traffic protection and network diagnostics; handles technical request, routing, connection and security information.', '内容分发、流量防护及网络诊断；处理技术请求、路由、连接及安全信息。'],url:'https://www.cloudflare.com/privacypolicy/'},
  {name:'Microsoft',handling:['Our contact domain uses Microsoft email infrastructure for inbound delivery and protection; it processes sender/recipient details, message content and related delivery or security information.', '我们的联系邮箱域名使用 Microsoft 邮件基础设施进行入站投递与防护；相关处理包括收发件人资料、邮件内容及投递或安全信息。'],url:'https://www.microsoft.com/en-us/privacy/privacystatement'},
];

export const privacyAuthorities: {label:Copy;url:string}[] = [
  {label:['Australia · OAIC','澳大利亚 · OAIC'],url:'https://www.oaic.gov.au/privacy/privacy-complaints'},
  {label:['Mainland China · CAC','中国内地 · 国家网信办'],url:'https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm'},
  {label:['Singapore · PDPC','新加坡 · PDPC'],url:'https://eservice.pdpc.gov.sg/'},
  {label:['Hong Kong · PCPD','香港 · PCPD'],url:'https://www.pcpd.org.hk/english/complaints/how_complaint/complaint.html'},
];

export const privacyPromises: {title:Copy;body:Copy}[] = [
  {title:['Your information is not for sale.','你的信息，不用于出售。'],body:privacyText.noSaleBody},
  {title:['A clear purpose for every request.','每一项索取，都有清楚用途。'],body:['We limit the information needed to deliver the website and respond to you. You can explore without an account, and choose what to include when you contact us.', '我们将所需信息限制在提供网站和回复咨询的范围内。你无需账户即可浏览，也可以选择联系时提供哪些内容。']},
  {title:['Your choices remain yours.','你的选择，由你作出。'],body:['You can manage your language preference, ask about your information and exercise applicable access, correction, deletion and consent choices through our privacy contact.', '你可以管理语言偏好，询问个人信息情况，并通过我们的隐私联系人行使适用的访问、更正、删除及同意相关权利。']},
  {title:['Be open about who handles information.','说明谁会处理信息。'],body:['Our Privacy Policy identifies the hosting, security and email providers involved, explains international processing and describes how long information is needed.', '隐私政策列明涉及的托管、安全及邮件服务商，说明跨境处理及信息保存依据。']},
  {title:['Questions deserve a response.','你的问题，应当得到回应。'],body:['Reddate Intelligence Pty Ltd is responsible for the information we control. Contact us about your rights or a concern; we will investigate and explain the outcome and available next steps.', 'Reddate Intelligence Pty Ltd 对我们控制的信息负责。你可以就权利或疑虑联系我们；我们会调查并说明结果及可用的后续途径。']},
];
