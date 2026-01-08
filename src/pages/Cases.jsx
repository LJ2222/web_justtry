import React, { useState, useEffect } from 'react'
import './Cases.css'

function Cases() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  // WordPress 服务器地址
  const WORDPRESS_API = 'http://124.220.2.197/wp-json/wp/v2/projects'

  useEffect(() => {
    loadProjects()
  }, [])

  // 从 WordPress REST API 加载项目数据
  const loadProjects = async () => {
    try {
      setLoading(true)
      // 先尝试从 WordPress API 加载
      const response = await fetch(`${WORDPRESS_API}?per_page=100&_embed`)
      
      if (!response.ok) {
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
        link: post.link || '#'
      }))
      
      setProjects(projects)
    } catch (error) {
      console.log('加载 WordPress 项目失败，尝试加载本地数据...')
      // 如果 API 加载失败，使用本地数据作为备用
      const localProjects = [
        {
          id: 1,
          title: '项目名称 1',
          description: '这是一个示例项目的描述，你可以修改内容来展示你的真实项目。',
          image: 'https://via.placeholder.com/300x200?text=Project+1',
          tags: ['React', 'CSS'],
          link: '#'
        },
        {
          id: 2,
          title: '项目名称 2',
          description: '展示你的技能和实现的功能。这个部分可以让访问者了解你的工作能力。',
          image: 'https://via.placeholder.com/300x200?text=Project+2',
          tags: ['Vue', 'JavaScript'],
          link: '#'
        },
        {
          id: 3,
          title: '项目名称 3',
          description: '继续添加更多项目来展示你的专业技能和经验。',
          image: 'https://via.placeholder.com/300x200?text=Project+3',
          tags: ['Node.js', 'MongoDB'],
          link: '#'
        },
        {
          id: 4,
          title: '项目名称 4',
          description: '你可以添加项目链接、代码仓库地址或在线演示。',
          image: 'https://via.placeholder.com/300x200?text=Project+4',
          tags: ['Python', 'Django'],
          link: '#'
        }
      ]
      setProjects(localProjects)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="cases-container">
        <div className="cases-header">
          <h2>我的案例</h2>
          <p>正在加载项目...</p>
        </div>
        <div className="loading">加载中...</div>
      </div>
    )
  }

  return (
    <div className="cases-container">
      <div className="cases-header">
        <h2>我的案例</h2>
        <p>展示我完成的优质项目和作品</p>
      </div>

      <div className="projects-grid">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="view-btn">查看详情</a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags && project.tags.length > 0 
                    ? project.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))
                    : <span className="tag">未分类</span>
                  }
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-projects">
            <p>暂无项目数据</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cases