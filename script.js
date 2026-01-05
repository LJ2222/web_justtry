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

// ========== JSON 工具逻辑 ==========
const jsonInput = document.getElementById('jsonInput')
const jsonOutput = document.getElementById('jsonOutput')
const formatBtn = document.getElementById('formatBtn')
const clearBtn = document.getElementById('clearBtn')
const copyBtn = document.getElementById('copyBtn')
const errorMessage = document.getElementById('errorMessage')
const toolTabs = document.querySelectorAll('.tool-tabs .tab')

let currentTool = 'format'

// 处理工具标签页切换
toolTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    currentTool = tab.getAttribute('data-tool')
    
    // 更新标签页样式
    toolTabs.forEach(t => t.classList.remove('active'))
    tab.classList.add('active')
    
    // 更新按钮文本
    if (currentTool === 'format') {
      formatBtn.textContent = '格式化'
    } else {
      formatBtn.textContent = '压缩'
    }
  })
})

// 格式化 JSON
function formatJSON() {
  try {
    errorMessage.style.display = 'none'
    const input = jsonInput.value.trim()
    
    if (!input) {
      errorMessage.textContent = '请输入 JSON 内容'
      errorMessage.style.display = 'block'
      return
    }

    const parsed = JSON.parse(input)
    
    if (currentTool === 'format') {
      jsonOutput.value = JSON.stringify(parsed, null, 2)
    } else {
      jsonOutput.value = JSON.stringify(parsed)
    }
    
    copyBtn.style.display = 'block'
  } catch (err) {
    errorMessage.textContent = '无效的 JSON 格式: ' + err.message
    errorMessage.style.display = 'block'
    jsonOutput.value = ''
    copyBtn.style.display = 'none'
  }
}

// 清空
function clear() {
  jsonInput.value = ''
  jsonOutput.value = ''
  errorMessage.style.display = 'none'
  copyBtn.style.display = 'none'
}

// 复制到剪贴板
function copyToClipboard() {
  navigator.clipboard.writeText(jsonOutput.value).then(() => {
    const originalText = copyBtn.textContent
    copyBtn.textContent = '已复制！'
    setTimeout(() => {
      copyBtn.textContent = originalText
    }, 2000)
  }).catch(() => {
    alert('复制失败，请重试')
  })
}

// 事件监听
formatBtn.addEventListener('click', formatJSON)
clearBtn.addEventListener('click', clear)
copyBtn.addEventListener('click', copyToClipboard)

// 按 Ctrl/Cmd + Enter 快速格式化
jsonInput.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    formatJSON()
  }
})

// 默认显示案例页
showPage('cases')
