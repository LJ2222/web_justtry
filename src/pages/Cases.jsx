import React from 'react'
import './Cases.css'

function Cases() {
  const projects = [
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

  return (
    <div className="cases-container">
      <div className="cases-header">
        <h2>我的案例</h2>
        <p>展示我完成的优质项目和作品</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
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
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cases
