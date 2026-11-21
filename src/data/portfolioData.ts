import { Project, SkillCategory, EducationItem, ResumeData } from '../types';

export const PERSONAL_INFO = {
  name: '吴世杰',
  englishName: 'Shijie Wu',
  brandTitle: 'Shijie Wu',
  siteTitle: 'Shijie Wu — 作品集',
  shortBio:
    '悉尼大学商学硕士在读（商业信息系统方向）',
  email: '158975683@qq.com',
  github: 'https://github.com/jasonwu5isme',
  githubUsername: 'jasonwu5isme',
  portfolioRepo: 'https://github.com/jasonwu5isme/PersonalPortfolio',
  targetRoles: [
    '数字化咨询',
    '业务分析',
    '产品与服务设计',
  ],
  coreCapabilities: [
    'AI应用原型设计',
    '需求分析与业务梳理',
    'UML系统建模',
    '提示词工程',
    '业务流程设计',
    '商业模式分析',
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'traderemix-ai',
    title: 'TradeRemix AI｜外贸 B2B 视频选题与分镜工作台',
    englishTitle: 'TradeRemix AI',
    category: 'AI产品设计',
    typeCategory: 'AI Applications',
    projectGroup: 'featured',
    isCompleted: true,
    nature: 'AI产品经理招聘笔试概念原型，个人产品设计作品',
    natureNote: '个人交互原型，使用模拟素材和预设规则。',
    subtitle: '依据买家的采购问题选题，再从工厂现有素材中挑选镜头',
    description:
      '运营人员可以按选题查找素材，把缺少的镜头列入补拍清单，再将分镜脚本交给剪辑人员。',
    tags: [
      'AI产品设计',
      '工作流设计',
      '提示词工程',
      '交互原型',
    ],
    demoUrl: 'https://jasonwu5isme.github.io/TradeRemixAi/',
    imagePath: 'assets/projects/traderemix-preview.png',
    badgeText: '前端交互原型',
    type: 'live-demo',
    caseStudy: {
      overview: {
        background: '由 AI 产品经理招聘笔试延伸的个人项目，聚焦外贸 B2B 短视频从选题到剪辑交付的工作流。',
        target: '外贸业务和海外内容运营团队，以及接收拍摄或剪辑任务的工厂与制作人员。',
        nature: '个人产品设计作品。交互原型使用模拟素材和预设规则。',
        period: '2026.10—2026.11',
        myRole: '独立完成需求拆解、素材匹配规则、异常处理与交付流程设计，并使用 AI 辅助制作交互原型。',
      },
      problem: {
        statement: '海外买家首次采购前关心包装与交付，但演示素材库缺少包装镜头，起订量也有待确认。',
        whyItMatters: '缺少包装镜头，可以请工厂补拍。起订量则要由业务人员确认，不能仅凭画面写进脚本。',
      },
      evidence: {
        title: '没有包装镜头，这段怎么拍？',
        imagePath: 'assets/projects/traderemix-shot-review.webp',
        imageAlt: 'TradeRemix 工作台第三个分镜显示包装素材缺失及替代建议',
        caption: '第三个分镜原本要展示产品包装。运营人员可以请工厂补拍，也可以改用展厅镜头，同时删去脚本中关于包装的描述。',
      },
      myContribution: [
        '把买家疑问拆成选题、所需素材和需要核实的产品信息。',
        '为每个选题列出所需镜头，标明可直接使用、需要补拍或有待核实的内容。',
        '整理分镜脚本和剪辑清单，用模拟素材检查从选题到交稿的各个环节。',
      ],
      designProcess: [
        {
          step: '01',
          title: '先判断选题能否拍',
          description: '比较远程看厂、首次采购和质检出货三个样例，展示各选题已有的镜头与缺口。',
          keyDecisions: ['质检与出货两个环节都缺少画面，先列补拍清单。'],
        },
        {
          step: '02',
          title: '在分镜中处理缺口',
          description: '以首次采购样例为例，第三个镜头缺少包装素材。运营可保留原分镜并创建补拍任务，或替换镜头并调整文案。',
          keyDecisions: ['将待核实的起订量和 OEM 信息保留为问题，等待业务人员确认。'],
        },
        {
          step: '03',
          title: '把方案交给制作团队',
          description: '按镜头整理文案和时间码，供剪辑人员导出分镜表、字幕或 JSON 文件。',
        },
      ],
      deliverables: [
        '可交互的选题与分镜工作台，含三种模拟选题场景',
        '素材缺口提示、分镜替代建议与补拍任务流程',
        '剪辑交付表、字幕及结构化数据导出演示',
      ],
      limitationsAndReflection: {
        simulatedOrUnverified: [
          '原型使用模拟素材与预设规则，尚未接入生产模型、真实素材库或视频渲染服务。',
          '能否缩短制作时间、带来更多客户询盘，还有待实际使用检验。',
        ],
        futureImprovements: [
          '邀请外贸运营和剪辑人员试用，对比从买家疑问到可执行拍摄单的耗时，并记录未核实表述与返工次数。',
        ],
      },
    },
  },
  {
    id: 'zeekr-flow',
    title: 'ZEEKR Flow｜公共充电信息共享',
    englishTitle: 'ZEEKR Flow',
    category: '产品设计与用户研究',
    typeCategory: 'Product Design',
    projectGroup: 'featured',
    isCompleted: true,
    nature: '悉尼大学校企合作课程概念项目，后续完成网页重制',
    authors: 'Shijie Wu & Hantian Zhu',
    natureNote: '课程设计原型，站点与排队信息均为模拟数据。',
    subtitle: '车主出发前可登记预计到站时间，供其他人选择充电站时参考',
    description:
      '原型演示了车主如何比较站点、登记预计到达时间，以及反馈现场的排队情况。',
    tags: [
      '产品设计',
      '用户研究',
      '众包机制',
      'AI辅助开发',
    ],
    demoUrl: 'https://jasonwu5isme.github.io/Google-Ai-Studio-Zeekr/',
    imagePath: 'assets/projects/zeekr-preview.png',
    badgeText: '课程合作原型',
    type: 'live-demo',
    caseStudy: {
      overview: {
        background: '悉尼大学校企合作课程项目，研究澳大利亚电动车主在公共充电站遇到的排队和设备故障问题。',
        target: '在澳大利亚使用公共充电站的极氪及其他品牌车主。',
        nature: '悉尼大学校企合作课程概念项目，后续完成网页重制。',
        period: '2026.03—2026.06',
        myRole: '参与需求分析和功能设计，重点研究如何判断车主上报的信息是否可靠。与队友共同制作网页原型。',
      },
      problem: {
        statement: '澳大利亚部分第三方公共充电站分布较为分散，且设备状态更新可能存在延迟，车主到达现场后容易面临故障或排队等待。',
        whyItMatters: '如果车主出发前就能看到近期故障或排队信息，便可以考虑改去其他站点。',
      },
      evidence: {
        title: '为什么只登记到达意向？',
        caption: '车主可以登记预计到站时间，供他人参考，登记后仍须到场排队。原型采用模拟数据。核验上报位置、标记消息有效期属于后续设想。',
      },
      myContribution: [
        '参与核心用户需求分析及产品功能规划。',
        '参与设计车主身份分级、上报位置核验和消息有效期规则。',
        '与团队成员共同使用Google AI Studio制作可交互概念原型。',
        '参与英文商业方案展示及后续网页作品重制。',
      ],
      designProcess: [
        {
          step: '01',
          title: '调研本地充电使用场景',
          description: '按查站、出发、排队和充电四个环节，整理车主需要哪些信息，以及哪些只能到场确认。',
          keyDecisions: ['提出车主互助登记方式，作为现有第三方地图数据的补充参考'],
        },
        {
          step: '02',
          title: '规划核心协同功能',
          description: '设计站点查询比较、到达意向登记、实时信息共享和积分奖励四项功能。',
          keyDecisions: ['由车主自愿登记预计到达时间，供其他车主判断可能的排队情况。'],
        },
        {
          step: '03',
          title: '探讨众包数据可信度机制',
          description: '结合车主身份核验、到站位置和上报时间，讨论如何识别误报或过期信息。',
          keyDecisions: ['引入积分激励维持车主参与意愿，对异常报错建立反馈审核机制'],
        },
        {
          step: '04',
          title: '合作完成网页原型重制',
          description: '与队友共同制作网页版，展示站点地图、筛选条件和到站登记流程。',
          keyDecisions: ['分别检查手机和电脑上的地图、筛选菜单及登记表单。'],
        },
      ],
      deliverables: [
        '可交互概念演示网页（署名：Shijie Wu & Hantian Zhu）',
        '英文商业方案展示材料',
        '车主上报、核验与反馈流程图',
      ],
      limitationsAndReflection: {
        simulatedOrUnverified: [
          '方案完成于课程期间，尚未投入商业使用。',
          '原型内充电桩空闲数据与等待时间均为演示数据，未接入真实电力桩网后台。',
          '站点信息能否及时更新，取决于有多少车主愿意上报。项目尚未在实际站点测试。',
        ],
        futureImprovements: [
          '未来可结合车辆车机通信自动上传电量与插枪状态，减少车主手动打卡负担。',
          '进一步探讨与商圈停车场优惠政策的联动模式。',
        ],
      },
    },
  },
  {
    id: 'idle-fish-analysis',
    title: '闲鱼C2C交易平台业务系统分析',
    englishTitle: 'Idle Fish Business Systems Analysis',
    category: '商业系统分析',
    typeCategory: 'Business Analysis',
    projectGroup: 'featured',
    isCompleted: true,
    nature: 'RMIT独立课程研究项目，后续整理为个人作品集',
    natureNote: '课程研究 · 业务系统建模（非闲鱼官方委托，未在真实系统中上线）',
    subtitle: '从收货争议切入，用 UML 说明订单状态和客服处理流程',
    description:
      '独立分析闲鱼二手交易平台的商品交易、支付、物流及售后纠纷处理流程，使用四类UML模型完成系统分析，并提出智能纠纷助手、信用看板和首页信息架构优化方案。',
    tags: [
      '业务分析',
      'UML系统建模',
      '流程设计',
      '系统建模',
    ],
    pdfPath: 'assets/xianyu-business-analysis.pdf',
    imagePath: 'assets/projects/idlefish-preview.png',
    badgeText: '6页系统分析报告',
    type: 'document-study',
    caseStudy: {
      overview: {
        background: '在RMIT研究生学习期间独立开展的课程研究，以闲鱼二手交易平台为研究对象。',
        target: '闲鱼C2C二手交易买家、卖家与平台客服。',
        nature: 'RMIT 个人课程研究',
        period: '2025.03—2025.06',
        myRole: '独立梳理交易流程，绘制四类 UML 图，并针对退款和纠纷处理提出改进建议。',
      },
      problem: {
        statement: '二手商品的成色很难用统一标准描述。买卖双方发生争议时，客服往往需要一并查看商品说明、聊天记录和收货凭证。',
        whyItMatters: '售后流程需要明确双方各自提交哪些材料、何时由客服介入，以及处理结果如何影响订单。',
      },
      evidence: {
        title: '收货后发生争议，订单如何流转？',
        imagePath: 'assets/projects/idlefish-order-states.png',
        imageAlt: '闲鱼系统分析展示报告中的订单生命周期状态图摘要',
        caption: '图中截取了报告里的订单状态图。买家对商品有异议时，可提交凭证。订单进入争议处理后，客服核对材料，处理结果决定交易完成还是取消。',
      },
      myContribution: [
        '独立分析交易流程及主要业务参与方。',
        '绘制活动图、用例图、类图及状态机图四类UML模型。',
        '编写订单状态转换、纠纷处理及异常场景相关用例。',
        '独立完成34页英文课程研究报告，后续整理为6页PDF作品集。',
      ],
      designProcess: [
        {
          step: '01',
          title: '梳理业务流程与参与角色',
          description: '分析闲鱼平台从售前咨询、担保交易、物流发货到售后争议仲裁的业务流程，明确各角色权责。',
          keyDecisions: ['将纠纷处理作为核心异常用例单独细化'],
        },
        {
          step: '02',
          title: '活动图与系统用例建模',
          description: '用活动图说明买卖双方如何交易和退款，用例图则列出各方可以办理的事项。',
          keyDecisions: ['注明发起退款的条件，以及哪些情况需要客服介入。'],
        },
        {
          step: '03',
          title: '构建领域实体类图',
          description: '梳理订单、担保支付、争议工单与用户信用等数据实体的属性与依赖关系。',
          keyDecisions: ['将凭证单独建模，说明每份材料与哪笔订单、哪起纠纷有关。'],
        },
        {
          step: '04',
          title: '建立订单状态机模型',
          description: '定义待付款、已担保、已发货、纠纷处理中、退款完成与交易关闭的状态变迁规则。',
          keyDecisions: ['单独画出退款与争议分支，检查订单能否进入相应的结束状态。'],
        },
      ],
      deliverables: [
        '34页英文课程研究报告（包含用例规格说明书与异常分支分析）',
        '四类UML系统建模图表（活动图、用例图、类图、状态机图）',
        '6 页展示报告，可在线阅读',
      ],
      limitationsAndReflection: {
        simulatedOrUnverified: [
          '流程和模型来自个人课程研究，反映的是我对平台业务的理解。',
          '智能纠纷助手、信用看板与首页改造均为个人概念设计方案，未经历商业环境测试，没有真实效果数据。',
        ],
        futureImprovements: [
          '后续可进一步探讨大语言模型辅助提取聊天凭证关键信息的工程可行性。',
          '关注二手验货流程与平台责任边界的划分。',
        ],
      },
    },
  },
  // Together Pass is the final evolution of the Prezzee team proposal.
  {
    id: 'prezzee-b2b-strategy',
    title: 'Together Pass｜机构资助的社区参与支持方案',
    englishTitle: 'Together Pass',
    category: '商业模式与服务设计',
    typeCategory: 'Business Analysis',
    projectGroup: 'featured',
    isCompleted: true,
    nature: '悉尼大学 Prezzee 校企合作六人团队项目',
    natureNote: '团队课程提案，尚未访谈当地居民或开展试点。网页用于演示方案。',
    subtitle: '为首次参加社区活动的居民安排报名和接待，并比较三种付费方式的成本',
    description: '在报名协助和现场接待安排相同的前提下，比较购买会员、直接支付入场费和发放礼品卡三种方式的预算。',
    tags: ['B2B2C商业模式', '财务可行性', '服务流程', '交互原型'],
    demoUrl: 'togetherpass/',
    githubUrl: 'https://github.com/jasonwu5isme/TogetherPass',
    imagePath: 'assets/projects/togetherpass-preview.png',
    badgeText: '最终方案 · 交互演示',
    type: 'live-demo',
    caseStudy: {
      overview: {
        background: '团队最初考虑在活动结束后发礼品卡，后来将重点移到居民第一次参加活动之前，由机构预付费用，并安排专人协助报名、到场接待。',
        target: '服务对象为希望结识邻里的 Blacktown 成年居民，初步考虑 35 至 44 岁人群。方案由机构出资，社区协调员负责组织。',
        nature: '六人团队学术方案；网页由吴世杰独立通过 AI 辅助重制。',
        period: '2026.08—2026.10；后续完成网页展示重制',
        myRole: '负责商业模式设计、预算测算和分阶段实施计划，另用 AI 工具独立制作中英文项目网站。',
      },
      problem: {
        statement: '承担活动费用未必足以帮助居民首次加入社区活动。二手研究提示焦虑、信心、活动适配及费用可能影响参与，这些因素仍需向当地居民验证。',
        whyItMatters: '试点要回答两个问题：哪些安排能帮助居民第一次到场？机构多付一笔礼品卡服务费，居民能得到什么额外帮助？',
      },
      evidence: {
        title: '三种资助方式的试点预算',
        metrics: [
          { label: '会员', value: 'A$5,440' },
          { label: '直接入场', value: 'A$6,160' },
          { label: '礼品卡', value: 'A$6,660' },
        ],
        caption: '按 30 人、6 周估算，每种方案都包含 A$5,260 的报名、接待等服务支出。礼品卡方案比直接支付入场费多 A$500。预算尚待审批，额外支出是否有助于居民首次到场或再次参加，也要通过试点检验。',
      },
      myContribution: [
        '绘制商业模式画布，说明由谁付费、资金如何使用，以及各方分别承担哪些工作。',
        '分别测算三种资助方式的成本，并分析不同假设下平台可保留的收入。',
        '拟定试点规模和评估指标，测算获得后续订单后可服务多少人。',
        '借助 AI 工具独立制作中英文网站，展示居民参加活动的流程和三种方案的预算。',
      ],
      designProcess: [
        {
          step: '01',
          title: '查阅社区活动参与研究',
          description: '团队采用 Double Diamond 框架，梳理二手研究、社区项目及利益相关方职责，形成关于首次与重复参与的设计假设。',
          keyDecisions: ['根据已有研究列出访谈问题，留待当地居民确认。'],
        },
        {
          step: '02',
          title: '把资助时间提前到报名阶段',
          description: '比较三个候选概念，通过故事板与项目反馈，将 Shared Local Mission 迭代为 Together Pass。',
          keyDecisions: ['把转介、报名协助、明确迎接人与自愿随访纳入服务，而非仅提供活动后奖励'],
        },
        {
          step: '03',
          title: '比较资助路径与完整预算',
          description: '按 30 人测算，购买会员需 A$5,440，直接支付入场费需 A$6,160，发放礼品卡需 A$6,660。',
          keyDecisions: ['礼品卡方案预算上限为 A$6,660，尚待审批。其中 A$900 为可消费的卡内金额，核算平台收入时应扣除。'],
        },
        {
          step: '04',
          title: '拟定试点与评估办法',
          description: '规划准备完成后最多 30 人、6 周的试点，分别观察首次到场、重复参与、支持结束后的参与及完整成本。',
          keyDecisions: ['未来两年的规模测算以机构追加预算、团队具备服务能力为前提。'],
        },
      ],
      deliverables: [
        '中英文交互原型与项目介绍，可演示居民旅程及三种资助方式',
        '服务分工与资金流向图，涵盖出资机构、社区协调员、活动主办方和礼品卡服务商',
        '出资机构的预算明细，以及按参与人数估算成本的工具',
        '分阶段实施计划、试点评估指标及未来两年的规模测算',
      ],
      limitationsAndReflection: {
        simulatedOrUnverified: [
          '六人团队学术提案，尚未开展参与者访谈、问卷或真实商业试点。',
          'RANSW、WLG 等合作安排及资金、支付、退款和服务交付条件均为拟议，需确认。',
          '网页操作为模拟，不提交真实预约或处理支付；预算、人数与增长情景不是实际业务结果。',
        ],
        futureImprovements: [
          '访谈当地居民，了解他们愿意参加哪些活动、第一次参加有什么顾虑，以及如何帮助不用手机应用的人报名。',
          '比较三种资助方式下居民首次到场和再次参加的人数。',
          '确认资金、人员及供应方能力后再开展试点，分别记录参与行为、反馈与成本。',
        ],
      },
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: '产品与业务分析',
    englishTitle: 'Product & Business Analysis',
    description: '梳理业务流程，比较方案成本，并用系统模型说明参与各方的职责。',
    skills: [
      { name: '需求分析与梳理', detail: '需求清单、典型使用场景和例外情况' },
      { name: 'UML系统建模', detail: '绘制活动图、用例图、类图和状态机图' },
      { name: '商业模式分析', detail: '基于商业画布分析价值主张、用户细分与成本结构' },
      { name: '业务流程优化', detail: '梳理端到端业务流向，识别流程卡点并绘制泳道图' },
    ],
  },
  {
    title: 'AI应用与原型工具',
    englishTitle: 'AI Applications & Prototyping',
    description: '用 AI 工具编写和修改网页原型，检查主要操作能否完成。',
    skills: [
      { name: '提示词设计', detail: 'Few-shot设计、角色设定、结构化指令输入与输出格式约束' },
      { name: 'AI工具链 (ChatGPT / Gemini)', detail: '使用主流大模型辅助资料研究、需求推演与方案整理' },
      { name: 'Google AI Studio', detail: '调试提示词模板、设置系统指令并辅助搭建原型验证流程' },
      { name: 'AI辅助开发', detail: '借助 AI 编程工具制作网页原型，检查表单、筛选等交互功能' },
      { name: '原型与线框设计', detail: '使用Figma等工具进行页面信息架构、线框布局与流程示意' },
    ],
  },
  {
    title: '商业与团队协作',
    englishTitle: 'Business & Collaboration',
    description: '海外市场研究、预算测算及中英文项目汇报',
    skills: [
      { name: '海外市场研究', detail: '中东/南美/澳新等海外市场行业信息整理与竞品对比分析' },
      { name: '数字化营销', detail: '活动规则设计、用户邀请激励机制、线上推广与配置' },
      { name: '数据整理与Excel', detail: '熟练运用数据透视表、常用函数进行业务指标整理与图表展现' },
      { name: '英文商业报告', detail: '撰写中英文商业方案摘要，制作结构清晰的汇报演示文档' },
      { name: '跨文化团队协作', detail: '与不同背景的同学分工完成英文课程报告和项目展示' },
    ],
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    institution: '悉尼大学',
    englishInstitution: 'The University of Sydney',
    degree: '商学硕士（商业信息系统方向）',
    period: '2026.03 入学，预计 2027 年毕业',
    status: 'Master of Commerce (BIS)',
    note: '2025 年在 RMIT 修读商业信息技术研究生课程，随后转入悉尼大学。',
    focus: [
      '商业信息系统',
      '企业数字化解决方案与架构',
      '业务流程与系统建模',
    ],
  },
  {
    institution: '考文垂大学',
    englishInstitution: 'Coventry University',
    degree: '市场营销文学学士',
    period: '2020.09 — 2024.11',
    status: 'Bachelor of Arts (Marketing)',
    note: '暨南大学 2+2 留学项目，所获本科学位已完成中国教育部留学服务中心认证。',
    focus: [
      '消费者行为与市场洞察',
      '品牌建设与数字化营销策略',
      '市场研究方法与数据采集',
    ],
  },
];

export const RESUME_DATA: ResumeData = {
  name: '吴世杰',
  englishName: 'Shijie Wu',
  targetRoles: PERSONAL_INFO.targetRoles,
  email: '158975683@qq.com',
  github: 'https://github.com/jasonwu5isme',
  githubUsername: 'jasonwu5isme',
  education: EDUCATION_HISTORY,
  internships: [
    {
      company: '深圳海普天智能科技有限公司',
      role: '海外业务实习生',
      period: '2025.11 — 2026.02',
      responsibilities: [
        '独立整理中东和南美市场的行业资料，研究潜在合作机会。',
        '横向对比主流外贸综合服务商的服务内容、报价及合作模式，形成市场研究与评估材料。',
        '参与海外客户商务洽谈及制造工厂业务调研，记录关键业务诉求。',
        '使用 Canva 和 AI 工具制作英文产品手册，与业务团队核对产品信息。',
      ],
    },
    {
      company: '北京乐学创想教育科技有限公司',
      role: '校长助理（实习）',
      period: '2024.04 — 2024.06',
      responsibilities: [
        '自主设计三类课程的拼团优惠及用户邀请奖励机制。',
        '对接第三方微信小程序服务商，完成活动配置和上线。',
        '累计有 100 余名家长通过拼团预约到校参加公开课，前两期均满座。',
        '协助办理美团商家入驻，并在后台设置营销活动。',
        '制作招生宣传海报与朋友圈推广文案。',
      ],
    },
  ],
  projectExperienceSummaries: [
    {
      title: 'Together Pass｜机构资助的社区参与支持方案',
      period: '2026.08 — 2026.10',
      role: '商业模式、预算测算与实施计划（六人校企合作项目）',
      summary: '为拟议的 6 周试点测算三种资助方式的预算，预计最多服务 30 人。独立制作中英文项目网站。',
      linkToProjectId: 'prezzee-b2b-strategy',
    },
    {
      title: 'ZEEKR Flow｜公共充电信息共享',
      period: '2026.03 — 2026.06',
      role: '产品设计与原型重制（署名：Shijie Wu & Hantian Zhu）',
      summary: '参与设计站点信息上报和预计到站时间登记功能，与队友共同制作网页原型。',
      linkToProjectId: 'zeekr-flow',
    },
    {
      title: '闲鱼C2C交易平台业务系统分析',
      period: '2025.03 — 2025.06',
      role: '系统建模与业务分析（RMIT独立课程研究）',
      summary: '独立对闲鱼二手交易进行系统建模，绘制四类UML模型，完成34页英文研究报告并整理为6页作品集。',
      linkToProjectId: 'idle-fish-analysis',
    },
    {
      title: 'TradeRemix AI｜外贸 B2B 视频选题与分镜工作台',
      period: '2026.10 — 2026.11',
      role: 'AI产品设计与原型制作（个人独立作品）',
      summary: '为外贸团队设计视频选题和分镜工具。运营人员可在缺少镜头时修改脚本或安排补拍，再将分镜表交给制作团队。',
      linkToProjectId: 'traderemix-ai',
    },
    {
      title: 'Common Ground 国际学生社交互动与社群体验设计',
      period: '2026.04 — 2026.06',
      role: '用户研究与体验设计',
      summary: '为希望结识同学的国际新生设计兴趣小组，并绘制报名和参加活动的页面草图。',
    },
    {
      title: '网约车平台无障碍出行服务与运营研究',
      period: '2025.08 — 2025.11',
      role: '业务流程与服务分析',
      summary: '梳理有无障碍出行需求的乘客在叫车、接驾环节遇到的困难，提出接单提示和运营补贴建议。',
    },
  ],
  skills: [
    {
      category: '产品与业务分析',
      items: ['需求分析与功能定义', 'UML系统建模 (活动图/用例图/类图/状态机)', '业务流程优化', '商业画布 (BMC) 分析'],
    },
    {
      category: 'AI应用与原型工具',
      items: ['提示词工程', 'Google AI Studio', 'ChatGPT / Gemini 协同', '前端静态原型开发', 'Figma原型与线框设计'],
    },
    {
      category: '商业分析与团队协作',
      items: ['市场与竞品调研', 'Excel数据透视与商业指标分析', '中英文商业汇报演示', 'Canva排版制作', '跨文化团队协作'],
    },
  ],
};
