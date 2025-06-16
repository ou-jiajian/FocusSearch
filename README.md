# 专注搜索页面

## 项目简介

本项目旨在创建一个简单的网页应用，用户可以在一个集中的界面选择不同的社交媒体或搜索引擎平台，并输入关键词进行搜索。点击搜索后，页面会直接跳转到相应平台的搜索结果页。

主要解决的问题是：当用户想要在某个平台搜索特定信息时，常常会先打开该平台的应用或网站，容易被首页的信息流、推荐内容等吸引，从而分散注意力，忘记了最初的搜索目的。本项目通过提供一个直达搜索功能的页面，帮助用户保持专注，高效获取信息。

## 功能特点

- **平台选择**：支持多个常用平台，如微博、小红书、知乎、哔哩哔哩、抖音、Google、百度等。
- **关键词输入**：用户可以输入任意关键词进行搜索。
- **直接跳转**：点击搜索按钮后，在新标签页打开对应平台的搜索结果页面。
- **简洁界面**：界面设计力求简洁，避免不必要的干扰元素。

## 如何使用

1.  克隆或下载本项目到本地。
2.  用浏览器打开 `index.html` 文件即可开始使用。

无需复杂的安装和配置过程。

## 技术栈与实现细节

本项目完全基于前端技术实现，不依赖任何后端服务。主要使用的技术及其作用如下：

-   **HTML (HyperText Markup Language)**：
    *   负责构建页面的基本结构和内容骨架。
    *   定义了平台选择下拉框 (`<select>`)、搜索关键词输入框 (`<input type="text">`)、搜索按钮 (`<button>`) 以及相关的文本描述。

-   **CSS (Cascading Style Sheets)**：
    *   用于美化页面外观，包括布局、颜色、字体、间距、圆角、阴影等视觉元素。
    *   通过 `style.css` 文件实现响应式设计，确保页面在不同尺寸的设备上都能良好显示。
    *   应用了 Flexbox 进行元素布局，使用了渐变背景、毛玻璃效果以及自定义了下拉选择框的箭头样式，提升了用户界面的美观度和现代感。

-   **JavaScript**：
    *   通过 `script.js` 文件实现页面的核心交互逻辑。
    *   **DOM 操作**：获取用户在平台选择器和搜索框中输入的值。
    *   **事件监听**：监听搜索按钮的点击事件以及搜索框的回车键按下事件。
    *   **动态跳转**：根据用户选择的平台和输入的关键词，拼接成对应平台的搜索 URL，并使用 `window.open(searchUrl, '_blank')` 在新的浏览器标签页中打开该搜索结果页面。
    *   **输入验证**：对搜索关键词进行简单的非空校验，如果为空则提示用户输入。
    *   **平台 URL 管理**：在 JavaScript 中维护一个包含各个平台基础搜索链接的对象，方便管理和扩展。

通过这些技术的结合，实现了用户友好的界面和流畅的搜索跳转功能。

## 部署上线

由于这是一个纯前端的静态网页项目（只包含 HTML, CSS, 和 JavaScript 文件，没有后端逻辑），您可以非常方便地将其部署到各种静态网站托管服务上，从而通过公开的网址访问它。以下是一些常见的免费或低成本的托管方案：

### 1. GitHub Pages

-   **简介**：GitHub 提供的免费静态网站托管服务，直接与您的 GitHub 仓库集成。非常适合托管个人项目、开源项目文档或小型静态网站。
-   **详细操作步骤**：
    1.  **创建 GitHub 仓库**：如果您的项目还没有在 GitHub 上，请先创建一个新的公开仓库 (private repositories can also use GitHub Pages, but might require a paid plan for some features like custom domains depending on the account type)。将您的 `index.html`, `style.css`, `script.js` 以及 `README.md` 文件推送到这个仓库。
        ```bash
        # 假设您已经在项目根目录，并且已经初始化了git
        git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
        git branch -M main
        git push -u origin main
        ```
    2.  **启用 GitHub Pages**：
        *   导航到您 GitHub 上的项目仓库页面。
        *   点击仓库顶部的 “Settings” (设置) 标签页。
        *   在左侧导航栏中，找到并点击 “Pages” (页面) 选项。
    3.  **配置发布源 (Source)**：
        *   在 “Build and deployment” (构建和部署) 部分，您会看到 “Source” (源) 的选项。
        *   选择 “Deploy from a branch” (从分支部署)。
        *   在 “Branch” (分支) 下拉菜单中，选择您希望部署的分支。通常，如果您的项目文件直接在仓库的根目录，您可以选择 `main` (或 `master`，取决于您的默认分支名)。
        *   旁边的文件夹图标通常选择 `/ (root)` 即可，因为您的 `index.html` 在根目录。
        *   点击 “Save” (保存)。
    4.  **等待部署**：GitHub Actions 会开始构建和部署您的网站。这个过程可能需要几分钟。您可以在仓库的 “Actions” (操作) 标签页查看部署进度。
    5.  **访问您的网站**：部署成功后，回到 “Settings” -> “Pages” 页面，您会看到一个绿色的提示框，里面包含了您的网站的公开网址，通常格式为 `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`。
        *   例如，如果您的 GitHub 用户名是 `octocat`，仓库名是 `my-focus-search`，那么网址可能是 `https://octocat.github.io/my-focus-search/`。
-   **优点**：
    *   **完全免费**：对于公开仓库，GitHub Pages 是免费的。
    *   **与 GitHub 集成紧密**：代码托管和网站部署在同一个平台，非常方便。
    *   **简单易用**：配置过程直观，几步即可完成。
    *   **自动部署**：每次推送到指定分支后，GitHub Actions 会自动重新部署网站。
    *   **支持自定义域名**：您可以将自己的域名指向 GitHub Pages 网站。
    *   **HTTPS 支持**：自动为您的 `*.github.io` 网址和自定义域名提供 HTTPS。
-   **缺点**：
    *   **仅支持静态网站**：不能运行服务器端代码 (如 PHP, Node.js 后端, Python Django/Flask 等)。您的项目是纯前端的，所以这不成问题。
    *   **构建过程限制**：如果需要复杂的构建步骤，可能不如 Netlify 或 Vercel 灵活，但对于简单的 HTML, CSS, JS 项目足够了。
    *   **仓库大小和流量限制**：虽然对于小型项目来说通常足够，但有一定的使用限制 (例如，仓库建议小于 1GB，每月带宽限制等)。

-   **更新网站**：之后，您只需要将本地的代码修改推送到您在 GitHub Pages 设置中选定的分支 (例如 `main` 分支)，GitHub Pages 就会自动重新构建和部署您的网站。通常几分钟内更改就会生效。

2.  **Netlify**：
    *   **简介**：Netlify 是一个非常流行的静态站点托管和自动化部署平台。
    *   **如何操作**：
        1.  注册 Netlify 账户并连接到您的 Git 提供商（如 GitHub, GitLab, Bitbucket）。
        2.  选择要部署的仓库。
        3.  Netlify 通常会自动检测到您的项目是静态站点，并进行部署。您可能需要指定构建命令（如果项目需要构建步骤，但本项目不需要）和发布目录（通常是包含 `index.html` 的目录，本项目是根目录）。
        4.  部署完成后，Netlify 会提供一个随机生成的子域名网址。
    *   **优点**：免费套餐功能强大、持续部署 (CI/CD)、表单处理、Serverless Functions、自定义域名、CDN 加速。

3.  **Vercel** (前 Zeit Now)：
    *   **简介**：Vercel 专注于前端框架和静态站点的托管，提供了优秀的开发者体验。
    *   **如何操作**：与 Netlify 类似，连接 Git 仓库，选择项目，Vercel 会自动部署。
    *   **优点**：免费套餐、优秀的性能、与 Next.js 等框架深度集成、Serverless Functions、自定义域名。

4.  **Cloudflare Pages**：
    *   **简介**：Cloudflare 提供的静态站点托管服务，利用其强大的全球 CDN 网络。
    *   **如何操作**：连接 Git 仓库，配置构建设置（本项目无需构建），然后部署。
    *   **优点**：免费、高性能 CDN、安全性、自定义域名。

5.  **传统虚拟主机/云服务器**：
    *   **简介**：如果您已经拥有虚拟主机空间或云服务器（如 AWS S3, Google Cloud Storage, Azure Blob Storage 配置为静态网站托管，或者一台配置了 Nginx/Apache 的 VPS），您可以直接将项目文件（`index.html`, `style.css`, `script.js`）上传到服务器的网站根目录或指定目录下。
    *   **如何操作**：通过 FTP, SCP, 或云服务商提供的控制台/CLI 工具上传文件。
    *   **优点**：完全控制服务器环境（对于云服务器）。
    *   **缺点**：可能需要更多手动配置，成本可能更高（取决于服务商和配置）。

**通用步骤**：

*   确保您的项目文件（`index.html`, `style.css`, `script.js` 以及可能的 `README.md`）都准备好。
*   选择上述任一平台，按照其文档指引进行操作。
*   通常，您只需要将这些文件推送到 Git 仓库（对于 GitHub Pages, Netlify, Vercel, Cloudflare Pages）或直接上传到服务器。

选择哪种方式取决于您的偏好、现有工具链以及是否需要其他高级功能。对于如此简单的项目，GitHub Pages, Netlify 或 Vercel 的免费套餐都是非常棒的选择，并且上手非常快。