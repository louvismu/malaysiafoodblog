```markdown
# Malaysia Food Blog

这是一个使用 Next.js 和 TypeScript 开发的马来西亚美食博客网站。

## 技术栈

- Next.js
- TypeScript
- React
- ESLint
- 其他依赖详见 `package.json`

## 开发环境要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn 包管理器

## 项目设置

1. 克隆项目

```bash
git clone <repository-url>
cd malaysiafoodblog
 ```
```

2. 安装依赖
```bash
npm install
# 或
yarn install
 ```

3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
 ```

访问 http://localhost:3000 查看网站。

## 项目结构
```plaintext
malaysiafoodblog/
├── components/     # React 组件
├── pages/         # 页面路由
├── public/        # 静态资源
├── styles/        # CSS 样式
├── types/         # TypeScript 类型定义
└── utils/         # 工具函数
 ```

## 构建生产版本
```bash
npm run build
# 或
yarn build
 ```

## 运行生产版本
```bash
npm run start
# 或
yarn start
 ```

## TypeScript 配置
项目使用 TypeScript 进行开发，主要配置包括：

- 启用严格模式
- 支持 ESNext 特性
- 使用 Next.js 插件
- 配置路径别名 @/*
## 贡献指南
1. Fork 项目
2. 创建特性分支 ( git checkout -b feature/AmazingFeature )
3. 提交更改 ( git commit -m 'Add some AmazingFeature' )
4. 推送到分支 ( git push origin feature/AmazingFeature )
5. 开启 Pull Request