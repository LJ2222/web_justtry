import React from 'react'
import './About.css'

function About() {
  const skills = [
    { category: '前端开发', items: ['React', 'Vue', 'JavaScript', 'TypeScript', 'CSS'] },
    { category: '后端开发', items: ['Node.js', 'Python', 'Java', 'MongoDB', 'PostgreSQL'] },
    { category: '工具和平台', items: ['Git', 'Docker', 'AWS', 'VS Code', 'Webpack'] }
  ]

  const experience = [
    {
      title: '工作经验 1',
      company: '公司名称',
      period: '2023 - 至今',
      description: '在这里描述你的工作职责和成就...'
    },
    {
      title: '工作经验 2',
      company: '公司名称',
      period: '2021 - 2023',
      description: '描述你在这个职位的工作内容和取得的成果...'
    }
  ]

  return (
    <div className="about-container">
      <section className="about-intro">
        <div className="intro-content">
          <h2>关于我</h2>
          <div className="intro-text">
            <p>
              你好！我是一位全栈开发工程师，热爱编程和创新。
              拥有多年的网页开发经验，致力于创建高效、美观和用户友好的应用程序。
            </p>
            <p>
              我关注最新的技术趋势，并且不断学习和改进自己的技能。
              如果你有任何项目合作或技术咨询的需求，欢迎与我联系。
            </p>
          </div>
          <div className="intro-contact">
            <a href="mailto:your.email@example.com" className="contact-btn">
              📧 联系我
            </a>
            <a href="#" className="contact-btn github">
              🔗 GitHub
            </a>
          </div>
        </div>
        <div className="intro-image">
          <div className="placeholder-avatar">
            <span>Your Photo</span>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h3>技能</h3>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-group">
              <h4>{skillGroup.category}</h4>
              <div className="skill-items">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <h3>工作经验</h3>
        <div className="experience-list">
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="exp-header">
                <h4>{exp.title}</h4>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section">
        <h3>教育背景</h3>
        <div className="education-list">
          <div className="education-item">
            <h4>学位/证书名称</h4>
            <p className="education-school">大学名称 / 培训机构</p>
            <p className="education-date">毕业年份</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
