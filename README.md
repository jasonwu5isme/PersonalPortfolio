# Shijie Wu — Product & AI Portfolio V2.1 (个人求职作品集网站)

> **让想法成为可以体验的产品。**  
> *From Business Problems to Interactive Products.*

这是吴世杰（Shijie Wu）面向 2027 届校招（AI产品经理、互联网产品经理、商业分析 BA、企业数字化及数字化运营岗位）的个人专业作品集网站 V2.1 完整工程代码。

- **线上访问地址**：[https://jasonwu5isme.github.io/](https://jasonwu5isme.github.io/)
- **GitHub 仓库**：`jasonwu5isme/jasonwu5isme.github.io`
- **联系邮箱**：[158975683@qq.com](mailto:158975683@qq.com)

---

## 网站五大一级导航架构

| 导航 | 栏目名称 | 核心功能与内容 |
|---|---|---|
| **首页** | Home | 30 秒了解个人定位、三大核心入口（看作品、看履历、联系我）、精选代表作品卡片 |
| **项目作品** | Projects | 核心代表作案例分析、分类过滤（全部项目 / AI应用 / 产品设计 / 商业分析）、支持扩展实践案例 |
| **关于我** | About | 学术与专业背景、工作理念、三大专业能力板块客观呈现（需求与业务分析、AI工具与产品设计、工程与系统思维） |
| **个人履历** | Resume | 教育经历（悉尼大学硕士、考文垂大学本科留服认证）、实习经历（海普天海外业务与乐学创想）、六大项目经历与专业技能库 |
| **联系方式** | Contact | 职业邮箱一键复制/发信、GitHub 主页直达 |

---

## 核心作品与实践案例

1. **TradeRemix AI（AI视频内容生产与再创作原型）**
   - **时间**：2026.10—2026.11
   - **项目定位**：AI产品经理招聘笔试概念原型，个人产品设计作品
   - **性质说明**：前端交互式概念原型演示（未接入生产环境模型后端）
   - **在线体验 Demo**：[https://jasonwu5isme.github.io/TradeRemixAi/](https://jasonwu5isme.github.io/TradeRemixAi/)
   - **核心标签**：AI Product Design · Workflow Design · Prompt Engineering · Interactive Prototype
   - **案例分析**：提供问题定义、Prompt设计、工作流单屏推演、交付物与复盘反思

2. **澳大利亚极氪汽车｜公共充电协同产品设计（ZEEKR Flow）**
   - **时间**：2026.03—2026.06
   - **项目定位**：悉尼大学校企合作课程概念项目，团队合作成果
   - **署名**：Shijie Wu & Hantian Zhu
   - **性质说明**：课程概念项目 · 交互原型（非官方商业上线产品，无真实桩端数据流）
   - **在线体验 Demo**：[https://jasonwu5isme.github.io/Google-Ai-Studio-Zeekr/](https://jasonwu5isme.github.io/Google-Ai-Studio-Zeekr/)
   - **核心标签**：Product Design · UX Research · Crowdsourced Data · AI-assisted Development
   - **案例分析**：详述到达意向登记、GPS打卡校验、信息半衰期机制及团队分工

3. **闲鱼C2C交易平台业务系统分析（Idle Fish Business Systems Analysis）**
   - **时间**：2025.03—2025.06
   - **项目定位**：RMIT 独立课程研究项目，后续整理为个人作品集
   - **性质说明**：学术课程研究 · 业务系统建模（非闲鱼官方商业委托项目）
   - **PDF 接入路径**：`public/assets/xianyu-business-analysis.pdf`
   - **核心标签**：Business Analysis · UML · System Modelling · Process Optimization
   - **案例分析**：涵盖买卖双端痛点、UML 活动图/用例图/类图/状态机图解析与业务流程优化

4. **澳大利亚Prezzee公司｜数字礼品卡商业模式与机构客户增长方案**
   - **时间**：2026.08—2026.10
   - **项目定位**：悉尼大学 Capstone 校企合作项目
   - **性质说明**：B2B2C 商业模式设计与社区试点测算方案
   - **核心标签**：Business Analysis · Capstone · B2B2C · Commercial Feasibility
   - **案例分析**：社区机构批量采购数字礼品卡模式、6周30人试点预算测算（最高900澳元入场费）与两年增长预测模型

---

## 资源文件接入说明

网站已配置完善的状态探测与优雅回退，原文件放入对应路径即可自动激活相关功能：

1. **闲鱼 6 页系统分析报告 (PDF)**：
   ```text
   public/assets/xianyu-business-analysis.pdf
   ```
   *存入后，在线阅读 PDF 按钮自动激活；未放入时不展示失效按钮。*

2. **项目真实截图（可选）**：
   ```text
   public/assets/projects/traderemix-preview.png
   public/assets/projects/zeekr-preview.png
   public/assets/projects/idlefish-preview.png
   ```
   *存入后自动渲染真实项目截图，未存入时显示简洁占位说明，绝不虚构任何假数据。*

---

## 本地开发与命令

```bash
# 1. 启动开发服务器测试
npm run dev

# 2. 运行静态代码检查
npm run lint

# 3. 运行生产环境构建验证
npm run build
```

---

## GitHub Pages 自动部署

本项目已在 `.github/workflows/deploy.yml` 配置了 GitHub Actions 自动化流水线。

将代码推送到你的 GitHub 仓库：
```bash
git add .
git commit -m "feat: release Shijie Wu portfolio V2.1"
git branch -M main
git remote add origin https://github.com/jasonwu5isme/jasonwu5isme.github.io.git
git push -u origin main
```

在 GitHub 仓库中开启设置：
1. 打开 `https://github.com/jasonwu5isme/jasonwu5isme.github.io`
2. 点击 **Settings** → **Pages**
3. 在 **Build and deployment** 下将 **Source** 选为 **GitHub Actions**
4. 流水线会自动编译并在 1~2 分钟内将网站发布至 `https://jasonwu5isme.github.io/`！
