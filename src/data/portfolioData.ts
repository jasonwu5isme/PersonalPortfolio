import { Project, SkillCategory, EducationItem, ResumeData } from '../types';

export const PERSONAL_INFO = {
  name: '吴世杰',
  englishName: 'Shijie Wu',
  brandTitle: 'Shijie Wu',
  siteTitle: 'Shijie Wu — 作品集',
  role: '求职方向 · AI 产品 / 业务型产品经理',
  mainHeadline: '把业务需求转化为可试用的产品原型。',
  subHeadline: 'AI Product Design & Business Analysis',
  shortBio:
    '我是吴世杰，悉尼大学商学硕士在读，方向为商业信息系统。我关注 AI 如何支持具体的业务决策，例如帮外贸团队判断现有素材能拍什么、哪些产品信息还需要确认。',
  email: '158975683@qq.com',
  github: 'https://github.com/jasonwu5isme',
  githubUsername: 'jasonwu5isme',
  portfolioRepo: 'https://github.com/jasonwu5isme/PersonalPortfolio',
  targetRoles: [
    'AI 产品经理',
    '业务型产品经理',
    '商业分析（Business Analysis）',
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
    natureNote: '概念原型 · 前端交互演示（未接入生产环境模型后端）',
    subtitle: '从海外买家的采购疑问出发，用现有工厂素材规划可执行的分镜',
    description:
      '帮助外贸内容运营判断哪些选题已有素材支持、哪些产品信息待核实，并将判断转化为分镜、剪辑交付单和补拍任务。',
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
        whyItMatters: '运营需要区分素材缺口与事实缺口。包装镜头可交给工厂补拍。未经确认的起订量只能作为待核实的问题，确认后再写入脚本。',
      },
      evidence: {
        title: '包装镜头缺失时，运营怎么继续？',
        imagePath: 'assets/projects/traderemix-shot-review.webp',
        imageAlt: 'TradeRemix 工作台第三个分镜显示包装素材缺失及替代建议',
        caption: '原型中的首次采购场景。保留包装主题时，可从分镜创建补拍任务。需要先交付时，可用展厅镜头替换，并改写文案，使内容与镜头能够支持的事实一致。',
      },
      myContribution: [
        '把买家疑问拆成选题、所需素材和需要核实的产品信息。',
        '设计素材覆盖判断和分镜异常处理，明确哪些选题可以进入制作、哪些需要补拍或核实。',
        '用分镜和剪辑交付单连接运营、拍摄与剪辑人员，并用模拟案例走查流程。',
      ],
      designProcess: [
        {
          step: '01',
          title: '先判断选题能否拍',
          description: '比较远程看厂、首次采购和质检出货三个样例，展示各选题已有的镜头与缺口。',
          keyDecisions: ['质检出货样例缺少全部所需镜头，先安排补采，再进入视频制作。'],
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
          description: '将镜头、文案与时间标记整理为可交付的信息，并提供 XLSX、SRT 和 JSON 导出。',
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
          '制作时间与线索转化的影响尚待实际业务验证。',
        ],
        futureImprovements: [
          '邀请外贸运营和剪辑人员试用，对比从买家疑问到可执行拍摄单的耗时，并记录未核实表述与返工次数。',
        ],
      },
    },
  },
  {
    id: 'zeekr-flow',
    title: '澳大利亚极氪汽车｜公共充电协同产品设计',
    englishTitle: 'ZEEKR Flow',
    category: '产品设计与用户研究',
    typeCategory: 'Product Design',
    projectGroup: 'featured',
    isCompleted: true,
    nature: '悉尼大学校企合作课程概念项目，后续完成网页重制',
    authors: 'Shijie Wu & Hantian Zhu',
    natureNote: '课程概念项目 · 交互原型（非极氪官方商业上线产品，无真实桩端数据流）',
    subtitle: '用到达意向补充公共充电站信息，帮助车主评估等待风险',
    description:
      '车主可以分享预计到达意向，为其他人选择站点提供参考。交互原型演示站点比较、意向登记和众包信息反馈。',
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
        background: '悉尼大学校企合作课程项目，关注极氪汽车在澳大利亚市场的本地化用户补能痛点。',
        target: '澳洲极氪车主及主流电动车用户群。',
        nature: '悉尼大学校企合作课程概念项目，后续完成网页重制。',
        period: '2026.03—2026.06',
        myRole: '核心参与需求分析、功能规划与众包数据可信度机制设计，并与队友共同完成网页原型重制。',
      },
      problem: {
        statement: '澳大利亚部分第三方公共充电站分布较为分散，且设备状态更新可能存在延迟，车主到达现场后容易面临故障或排队等待。',
        whyItMatters: '补能体验直接影响电动车主的日常出行信心，改善公共充电站信息透明度有助于减轻车主的等待顾虑。',
      },
      evidence: {
        title: '为什么只登记到达意向？',
        caption: '意向登记让车主表达预计到达时间。原型使用演示数据，意向登记不锁定车位。位置验证与信息时效是团队提出的后续可信度设计。',
      },
      myContribution: [
        '参与核心用户需求分析及产品功能规划。',
        '重点参与设计身份分级、位置验证及信息有效期管理等众包数据可信度机制。',
        '与团队成员共同使用Google AI Studio制作可交互概念原型。',
        '参与英文商业方案展示及后续网页作品重制。',
      ],
      designProcess: [
        {
          step: '01',
          title: '调研本地充电使用场景',
          description: '梳理车主从“查询站点 → 规划前往 → 现场排队 → 充电完成”的操作卡点与信息盲区。',
          keyDecisions: ['提出车主互助登记方式，作为现有第三方地图数据的补充参考'],
        },
        {
          step: '02',
          title: '规划核心协同功能',
          description: '设计站点查询比较、到达意向登记、实时信息共享和积分奖励四项功能。',
          keyDecisions: ['采用非强制的“到达意向”登记，灵活提示未来时段的充电负荷趋势'],
        },
        {
          step: '03',
          title: '探讨众包数据可信度机制',
          description: '结合车主身份认证、GPS地理围栏现场打卡与信息时效衰减，探讨数据防刷规则。',
          keyDecisions: ['引入积分激励维持车主参与意愿，对异常报错建立反馈审核机制'],
        },
        {
          step: '04',
          title: '合作完成网页原型重制',
          description: '与团队成员共同使用开发工具重制交互原型，完成地图展示、筛选及意向登记的流程走通。',
          keyDecisions: ['对移动端与桌面端自适应进行排查，确保展示稳定'],
        },
      ],
      deliverables: [
        '可交互概念演示网页（署名：Shijie Wu & Hantian Zhu）',
        '英文商业方案展示材料',
        '公共充电协同机制与众包可信度流转模型',
      ],
      limitationsAndReflection: {
        simulatedOrUnverified: [
          '属于课程学术与设计概念探索，极氪企业并未正式采纳或上线该套方案。',
          '原型内充电桩空闲数据与等待时间均为演示数据，未接入真实电力桩网后台。',
          '众包机制依赖一定规模的车主基数，冷启动阶段的数据覆盖度假设尚未在真实市场跑通。',
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
        nature: 'Independent RMIT Coursework · Conceptual Study（独立课程研究项目）。',
        period: '2025.03—2025.06',
        myRole: '独立完成业务流程调研、四类UML模型构建、异常场景分析及系统改进方案构想。',
      },
      problem: {
        statement: 'C2C二手交易中商品非标准属性明显，买卖双方容易在收货后产生分歧，平台客服介入核对证据链的沟通成本较高。',
        whyItMatters: '信任与争议处理是二手交易的核心环节，理清业务逻辑与信息透明度有助于改善交易秩序。',
      },
      evidence: {
        title: '收货后发生争议，订单如何流转？',
        imagePath: 'assets/projects/idlefish-order-states.png',
        imageAlt: '闲鱼系统分析展示报告中的订单生命周期状态图摘要',
        caption: '买家发现商品与描述不符时，可以发起争议并提交凭证。平台客服核对材料，订单进入争议处理，再根据处理结果流转。图为展示报告中的状态图摘要。',
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
          description: '绘制业务活动图明确各参与方在交易与退款中的操作流向，建立用例图规范功能边界。',
          keyDecisions: ['界定前置条件与扩展用例，保证流程逻辑完整'],
        },
        {
          step: '03',
          title: '构建领域实体类图',
          description: '梳理订单、担保支付、争议工单与用户信用等数据实体的属性与依赖关系。',
          keyDecisions: ['将争议凭证单独抽象为数据实体，支撑后续分析'],
        },
        {
          step: '04',
          title: '建立订单状态机模型',
          description: '定义待付款、已担保、已发货、纠纷处理中、退款完成与交易关闭的状态变迁规则。',
          keyDecisions: ['明确退款与争议状态的逆向分支，避免状态死锁'],
        },
      ],
      deliverables: [
        '34页英文课程研究报告（包含用例规格说明书与异常分支分析）',
        '四类UML系统建模图表（活动图、用例图、类图、状态机图）',
        '已完成6页系统分析报告（支持在线阅读完整PDF）',
      ],
      limitationsAndReflection: {
        simulatedOrUnverified: [
          '本项目属于课程学术研究，未实际接入或改造闲鱼官方生产系统。',
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
    natureNote: '学术概念方案 · 交互演示；尚未开展居民原始研究或实地试点，非 Prezzee 官方产品',
    subtitle: '比较三种资助路径的试点成本，设计居民首次到场所需的支持',
    description: '在相同参与支持下，比较会员、直接入场与礼品卡的成本，评估礼品卡相较直接入场多出的 A$500 能否改善参与。',
    tags: ['B2B2C商业模式', '财务可行性', '服务流程', '交互原型'],
    demoUrl: 'togetherpass/',
    githubUrl: 'https://github.com/jasonwu5isme/TogetherPass',
    imagePath: 'assets/projects/togetherpass-preview.png',
    badgeText: '最终方案 · 交互演示',
    type: 'live-demo',
    caseStudy: {
      overview: {
        background: '围绕 Prezzee 的悉尼大学校企合作项目。团队将早期活动后 eGift 奖励方向迭代为机构提前资助、配套参与支持的 Together Pass。',
        target: '希望建立本地联系的 Blacktown 成年人，初步聚焦 35—44 岁；机构买方及社区协调员为拟议服务的关键角色。',
        nature: '六人团队学术方案；网页由吴世杰独立通过 AI 辅助重制。',
        period: '2026.08—2026.10；后续完成网页展示重制',
        myRole: '主要负责商业模式、财务可行性与实施增长规划，并独立重制作品展示网页。',
      },
      problem: {
        statement: '承担活动费用未必足以帮助居民首次加入社区活动。二手研究提示焦虑、信心、活动适配及费用可能影响参与，这些因素仍需向当地居民验证。',
        whyItMatters: '需要同时判断哪些参与支持有价值，以及礼品卡相较会员或直接付费是否值得其额外成本，避免先确定支付工具再寻找需求。',
      },
      evidence: {
        title: '三种资助路径的试点预算',
        metrics: [
          { label: '会员', value: 'A$5,440' },
          { label: '直接入场', value: 'A$6,160' },
          { label: '礼品卡', value: 'A$6,660' },
        ],
        caption: '以 30 人、6 周的拟议试点估算，三种路径均包含 A$5,260 的参与支持。礼品卡比直接入场多 A$500，试点需验证这笔费用能否改善首次到场或后续参与。预算尚待审批。',
      },
      myContribution: [
        '设计未来态商业模式画布，梳理机构买方价值、资金流及利益相关方职责。',
        '比较会员、直接入场和礼品卡三种路径，核对预算并分析可留存收入的敏感性。',
        '规划试点范围、评估条件及由新增有资金订单驱动的增长情景。',
        '独立通过 AI 辅助开发中英文交互展示，呈现团队最终方案、居民旅程与成本比较。',
      ],
      designProcess: [
        {
          step: '01',
          title: '界定参与问题与证据边界',
          description: '团队采用 Double Diamond 框架，梳理二手研究、社区项目及利益相关方职责，形成关于首次与重复参与的设计假设。',
          keyDecisions: ['没有将二手研究结论表述为已验证的 Blacktown 居民需求'],
        },
        {
          step: '02',
          title: '从活动后奖励迭代为参与支持',
          description: '比较三个候选概念，通过故事板与项目反馈，将 Shared Local Mission 迭代为 Together Pass。',
          keyDecisions: ['把转介、报名协助、明确迎接人与自愿随访纳入服务，而非仅提供活动后奖励'],
        },
        {
          step: '03',
          title: '比较资助路径与完整预算',
          description: '在相同支持下，30 人情景的会员、直接入场、卡片路径规划成本分别为 A$5,440、A$6,160、A$6,660。',
          keyDecisions: ['A$900 是卡片本金额度；A$6,660 是未获批的买方现金预算上限，卡片本金不等于平台收入'],
        },
        {
          step: '04',
          title: '以条件性试点检验可执行性',
          description: '规划准备完成后最多 30 人、6 周的试点，分别观察首次到场、重复参与、支持结束后的参与及完整成本。',
          keyDecisions: ['24 个月扩展情景以新增有资金订单和交付能力为前提，不把名额或规划目标当作实际成果'],
        },
      ],
      deliverables: [
        '中英文交互原型与项目介绍，可演示居民旅程及三种资助路径',
        '服务职责与资金流设计：机构买方、社区协调员、活动提供方与可选卡片路径',
        '买方现金预算明细及参与人数成本比较工具',
        '分阶段实施计划、拟议评估目标与 24 个月条件性情景',
      ],
      limitationsAndReflection: {
        simulatedOrUnverified: [
          '六人团队学术提案，尚未开展参与者访谈、问卷或真实商业试点。',
          'RANSW、WLG 等合作安排及资金、支付、退款和服务交付条件均为拟议，需确认。',
          '网页操作为模拟，不提交真实预约或处理支付；预算、人数与增长情景不是实际业务结果。',
        ],
        futureImprovements: [
          '通过当地居民研究验证活动适配、首次参与障碍及无 App 使用条件下的替代路径。',
          '在相同参与支持下验证礼品卡相较低成本路径的额外价值。',
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
    description: '从现实业务需求出发，将复杂问题拆解为清晰的逻辑结构与系统模型',
    skills: [
      { name: '需求分析与梳理', detail: '用户画像理解、功能清单定义、使用场景与边界推演' },
      { name: 'UML系统建模', detail: '绘制活动图、用例图、类图和状态机图' },
      { name: '商业模式分析', detail: '基于商业画布分析价值主张、用户细分与成本结构' },
      { name: '业务流程优化', detail: '梳理端到端业务流向，识别流程卡点并绘制泳道图' },
    ],
  },
  {
    title: 'AI应用与原型工具',
    englishTitle: 'AI Applications & Prototyping',
    description: '运用大语言模型与AI工具辅助快速搭建可点击体验的前端原型',
    skills: [
      { name: '提示词设计', detail: 'Few-shot设计、角色设定、结构化指令输入与输出格式约束' },
      { name: 'AI工具链 (ChatGPT / Gemini)', detail: '使用主流大模型辅助资料研究、需求推演与方案整理' },
      { name: 'Google AI Studio', detail: '调试提示词模板、设置系统指令并辅助搭建原型验证流程' },
      { name: 'AI辅助开发', detail: '协同AI编程工具编写前端静态页面，实现网页交互原型' },
      { name: '原型与线框设计', detail: '使用Figma等工具进行页面信息架构、线框布局与流程示意' },
    ],
  },
  {
    title: '商业与团队协作',
    englishTitle: 'Business & Collaboration',
    description: '结合商科与市场营销背景，具备扎实的跨文化沟通、数据分析与报告展示能力',
    skills: [
      { name: '海外市场研究', detail: '中东/南美/澳新等海外市场行业信息整理与竞品对比分析' },
      { name: '数字化营销', detail: '活动规则设计、用户邀请激励机制、线上推广与配置' },
      { name: '数据整理与Excel', detail: '熟练运用数据透视表、常用函数进行业务指标整理与图表展现' },
      { name: '英文商业报告', detail: '撰写中英文商业方案摘要，制作结构清晰的汇报演示文档' },
      { name: '跨文化团队协作', detail: '具备英澳留学背景，能够与多元背景伙伴协作推进项目' },
    ],
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    institution: '悉尼大学',
    englishInstitution: 'The University of Sydney',
    degree: '商学硕士（商业信息系统方向）',
    period: '2026.03 实际入学 — 2027 预计毕业',
    status: 'Master of Commerce (BIS)',
    note: '2025年修读商业信息技术研究生课程（RMIT），后基于个人学业规划转入悉尼大学继续深造。',
    focus: [
      '商业信息系统',
      '企业数字化解决方案与架构',
      '业务流程与系统建模',
    ],
  },
  {
    institution: '考文垂大学',
    englishInstitution: 'Coventry University',
    degree: '市场营销 文学学士',
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
  targetRoles: [
    'AI 产品经理',
    '业务型产品经理',
    '商业分析（Business Analysis）',
  ],
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
        '独立研究中东、南美两大目标市场，搜集并整理行业出海信息及潜在合作方向。',
        '横向对比主流外贸综合服务商的服务内容、报价及合作模式，形成市场研究与评估材料。',
        '参与海外客户商务洽谈及制造工厂业务调研，记录关键业务诉求。',
        '使用Canva与AI工具制作英文产品手册，并配合业务团队专业人员复核完善内容。',
      ],
    },
    {
      company: '北京乐学创想教育科技有限公司',
      role: '校长助理（实习）',
      period: '2024.04 — 2024.06',
      responsibilities: [
        '自主设计三类课程的拼团优惠及用户邀请奖励机制。',
        '对接第三方微信小程序服务商，完成活动配置和上线。',
        '通过拼团入群预约方式，累计转化100余名家长到校参加公开课，前两期均满座。',
        '参与美团商家从0到1入驻及后台营销方案配置。',
        '制作招生宣传海报与朋友圈推广文案。',
      ],
    },
  ],
  projectExperienceSummaries: [
    {
      title: 'Together Pass｜机构资助的社区参与支持方案',
      period: '2026.08 — 2026.10',
      role: '商业模式、财务可行性与实施增长规划（六人校企合作项目）',
      summary: '比较会员、直接入场与礼品卡路径，核对最多30人、6周拟议试点的预算与实施条件，并独立重制中英文交互原型。项目尚未实地试点。',
      linkToProjectId: 'prezzee-b2b-strategy',
    },
    {
      title: '澳大利亚极氪汽车｜公共充电协同产品设计（ZEEKR Flow）',
      period: '2026.03 — 2026.06',
      role: '产品设计与原型重制（署名：Shijie Wu & Hantian Zhu）',
      summary: '针对澳洲公共充电信息痛点设计到达意向与众包机制，与团队成员共同使用Google AI Studio制作可交互网页原型。',
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
      summary: '设计从买家疑问、素材匹配到分镜交付的工作流，演示镜头缺失时如何选择改写、替换或补拍，并将方案导出给制作团队。',
      linkToProjectId: 'traderemix-ai',
    },
    {
      title: 'Common Ground 国际学生社交互动与社群体验设计',
      period: '2026.04 — 2026.06',
      role: '用户研究与体验设计',
      summary: '围绕跨文化国际新生交流痛点，设计以兴趣小组为载体的社群产品方案与线框原型。',
    },
    {
      title: '网约车平台无障碍出行服务与运营研究',
      period: '2025.08 — 2025.11',
      role: '业务流程与服务分析',
      summary: '分析特殊需求乘客在出行环节的服务断点，提出司机端接单标签与运营补贴策略建议。',
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
