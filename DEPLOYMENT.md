# 🚀 Vercel 部署指南

## 快速开始

### 方法一：通过GitHub部署（推荐）

1. **创建GitHub仓库**
   ```bash
   # 初始化Git仓库
   git init
   git add .
   git commit -m "Initial commit: Coco's blog website"
   
   # 创建GitHub仓库并推送
   git remote add origin https://github.com/你的用户名/coco-blog.git
   git branch -M main
   git push -u origin main
   ```

2. **连接Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用GitHub账号登录
   - 点击 "New Project"
   - 选择刚创建的仓库
   - 点击 "Import"

3. **自动部署**
   - Vercel会自动检测配置并部署
   - 部署完成后会提供一个URL（如：https://coco-blog.vercel.app）

### 方法二：直接拖拽部署

1. **下载项目文件**
   - 将整个项目文件夹压缩为ZIP文件

2. **拖拽部署**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 选择 "Drag & Drop" 选项
   - 将ZIP文件拖拽到指定区域

### 方法三：使用Vercel CLI（命令行）

1. **安装Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **部署项目**
   ```bash
   # 进入项目目录
   cd 你的项目路径
   
   # 部署
   vercel
   
   # 或者直接部署到生产环境
   vercel --prod
   ```

## 📁 项目结构说明

```
coco-blog/
├── index.html          # 主页面
├── portfolio.html      # 作品集页面
├── blog.html          # 博客页面
├── styles.css         # 样式文件
├── script.js          # 交互功能
├── package.json       # 项目配置（Vercel需要）
├── vercel.json        # Vercel部署配置
├── README.md          # 项目说明
├── DEPLOYMENT.md      # 部署指南（本文件）
└── robots.txt         # SEO配置
```

## ⚙️ 部署配置说明

### package.json
- 定义了项目的基本信息和脚本
- Vercel会读取此文件进行构建配置

### vercel.json
- 指定了静态文件处理方式
- 配置了路由规则（所有请求重定向到index.html）
- 优化了静态资源缓存

## 🌐 自定义域名（可选）

部署完成后，你可以绑定自定义域名：

1. **在Vercel控制台**
   - 进入项目设置
   - 选择 "Domains"
   - 添加你的域名（如：blog.coco.com）

2. **配置DNS**
   - 在你的域名服务商处添加CNAME记录
   - 指向Vercel提供的域名

## 🔄 自动更新部署

如果你使用GitHub部署，每次推送新代码到main分支时，Vercel会自动重新部署：

```bash
# 修改代码后
git add .
git commit -m "更新内容描述"
git push origin main
# Vercel会自动部署新版本
```

## 🛠️ 常见问题

### Q: 部署后页面显示空白？
A: 检查控制台错误，可能是资源路径问题。确保所有文件引用使用相对路径。

### Q: 如何查看部署日志？
A: 在Vercel项目控制台的"Deployments"页面查看详细日志。

### Q: 部署失败怎么办？
A: 检查 `vercel.json` 配置是否正确，确保所有必需文件都在根目录。

### Q: 如何回滚到之前的版本？
A: 在Vercel控制台的"Deployments"页面，选择之前的部署并点击"Promote"。

## 📞 技术支持

如果遇到部署问题：

1. 查看Vercel官方文档：https://vercel.com/docs
2. 检查项目控制台的错误日志
3. 确保所有文件路径正确
4. 验证 `vercel.json` 配置格式

## 🎉 部署成功标志

部署完成后，你应该看到：
- ✅ Vercel控制台显示 "Deployment Successful"
- ✅ 网站可以正常访问
- ✅ 所有功能正常工作
- ✅ 响应式布局正常

---

**祝你部署顺利！如有问题，请参考上述指南或查看Vercel官方文档。**