// ========== 页面导航逻辑 ==========
const navLinks = document.querySelectorAll('.nav-link')
const pages = document.querySelectorAll('.page')
const nav = document.getElementById('nav')
const menuToggle = document.getElementById('menuToggle')

// 处理导航点击
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const pageName = link.getAttribute('data-page')
    showPage(pageName)

    // 移动端：关闭菜单
    nav.classList.remove('open')
  })
})

// 显示指定页面
function showPage(pageName) {
  // 隐藏所有页面
  pages.forEach(page => page.classList.remove('active'))

  // 移除所有导航链接的 active 类
  navLinks.forEach(link => link.classList.remove('active'))

  // 显示选中的页面
  const selectedPage = document.getElementById(pageName)
  if (selectedPage) {
    selectedPage.classList.add('active')
  }

  // 添加 active 类到选中的导航链接
  const selectedLink = document.querySelector(`[data-page="${pageName}"]`)
  if (selectedLink) {
    selectedLink.classList.add('active')
  }
}

// 移动端菜单切换
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open')
})

// 点击页面其他地方关闭菜单
document.addEventListener('click', (e) => {
  if (!e.target.closest('.header-container')) {
    nav.classList.remove('open')
  }
})

// ========== 颜色转换器逻辑 ==========
const colorInput = document.getElementById('colorInput')
const convertBtn = document.getElementById('convertBtn')
const clearColorBtn = document.getElementById('clearColorBtn')
const colorError = document.getElementById('colorError')
const hexOutput = document.getElementById('hexOutput')
const rgbOutput = document.getElementById('rgbOutput')
const hslOutput = document.getElementById('hslOutput')
const colorPreview = document.getElementById('colorPreview')

// HEX 转 RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

// RGB 转 HEX
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
}

// RGB 转 HSL
function rgbToHsl(r, g, b) {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      case b: h = ((r - g) / d + 4) / 6; break
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  }
}

// 解析输入颜色
function parseColor(input) {
  input = input.trim()
  
  // HEX 格式
  if (/^#[0-9A-F]{6}$/i.test(input)) {
    return hexToRgb(input)
  }
  
  // RGB 格式
  const rgbMatch = input.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/)
  if (rgbMatch) {
    return {
      r: parseInt(rgbMatch[1]),
      g: parseInt(rgbMatch[2]),
      b: parseInt(rgbMatch[3])
    }
  }
  
  return null
}

// 转换颜色
function convertColor() {
  colorError.style.display = 'none'
  const input = colorInput.value.trim()
  
  if (!input) {
    colorError.textContent = '请输入颜色'
    colorError.style.display = 'block'
    return
  }

  const rgb = parseColor(input)
  
  if (!rgb || rgb.r > 255 || rgb.g > 255 || rgb.b > 255 || rgb.r < 0 || rgb.g < 0 || rgb.b < 0) {
    colorError.textContent = '无效的颜色格式，请输入 HEX (如 #FF5733) 或 RGB (如 rgb(255, 87, 51))'
    colorError.style.display = 'block'
    return
  }

  const hex = rgbToHex(rgb.r, rgb.g, rgb.b)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

  hexOutput.value = hex
  rgbOutput.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
  hslOutput.value = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
  colorPreview.style.backgroundColor = hex
}

// 清空
function clearColor() {
  colorInput.value = ''
  hexOutput.value = ''
  rgbOutput.value = ''
  hslOutput.value = ''
  colorPreview.style.backgroundColor = ''
  colorError.style.display = 'none'
}

// 事件监听
convertBtn.addEventListener('click', convertColor)
clearColorBtn.addEventListener('click', clearColor)

// 按 Enter 快速转换
colorInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    convertColor()
  }
})


// ========== 项目 CMS 管理逻辑 (WordPress REST API) ==========
// WordPress 服务器地址
const WORDPRESS_API = 'http://124.220.2.197/wp-json/wp/v2/projects'

// 从 WordPress REST API 加载项目数据
async function loadProjects() {
  try {
    // 先尝试从 WordPress API 加载
    const response = await fetch(`${WORDPRESS_API}?per_page=100&_embed`)
    
    if (!response.ok) {
      // 如果 API 不可用，回退到本地 JSON
      throw new Error('WordPress API 不可用，使用本地数据')
    }
    
    const posts = await response.json()
    
    // 转换 WordPress 文章格式为项目格式
    const projects = posts.map((post, index) => ({
      id: post.id,
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]*>/g, ''), // 移除 HTML 标签
      image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/300x200?text=Project',
      tags: post._embedded?.['wp:term']?.[0]?.map(t => t.name) || [],
      link: post.link || '#',
      category: post._embedded?.['wp:term']?.[1]?.[0]?.name || '其他'
    }))
    
    renderProjects(projects)
  } catch (error) {
    console.log('加载 WordPress 项目失败，尝试加载本地数据...')
    loadLocalProjects()
  }
}

// 从本地 JSON 文件加载项目（备用方案）
async function loadLocalProjects() {
  try {
    const response = await fetch('./projects.json')
    const data = await response.json()
    renderProjects(data.projects)
  } catch (error) {
    console.error('加载本地项目数据失败:', error)
    document.getElementById('projectsGrid').innerHTML = '<p>加载项目失败，请检查 WordPress API 或本地数据文件</p>'
  }
}

// 渲染项目卡片
function renderProjects(projects) {
  const projectsGrid = document.getElementById('projectsGrid')
  projectsGrid.innerHTML = projects.map(project => `
    <div class="project-card">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
        <div class="project-overlay">
          <a href="${project.link}" class="view-btn">查看详情</a>
        </div>
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">
          ${project.tags && project.tags.length > 0 
            ? project.tags.map(tag => typeof tag === 'string' ? `<span class="tag">${tag}</span>` : `<span class="tag">${tag.name}</span>`).join('')
            : '<span class="tag">未分类</span>'
          }
        </div>
      </div>
    </div>
  `).join('')
}

// 页面加载时获取项目
loadProjects()


// 默认显示案例页
showPage('cases')
