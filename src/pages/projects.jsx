// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { ExternalLink, Github, Filter } from 'lucide-react';

import { Navbar } from '@/components/Navbar';
export default function ProjectsPage(props) {
  const {
    $w
  } = props;
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const categories = ['全部', 'Web应用', '移动应用', 'AI工具', '设计作品'];
  const projects = [{
    id: 1,
    title: '智能任务管理系统',
    description: '基于AI的智能任务分配和进度追踪系统，支持团队协作和自动化提醒',
    category: 'Web应用',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    github: '#',
    demo: '#'
  }, {
    id: 2,
    title: '健康追踪App',
    description: '跨平台移动应用，记录运动数据、饮食计划和睡眠质量',
    category: '移动应用',
    tags: ['React Native', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    github: '#',
    demo: '#'
  }, {
    id: 3,
    title: 'AI图像生成器',
    description: '基于深度学习的图像生成工具，支持多种风格和自定义参数',
    category: 'AI工具',
    tags: ['Python', 'TensorFlow', 'Flask'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    github: '#',
    demo: '#'
  }, {
    id: 4,
    title: '品牌视觉设计系统',
    description: '完整的品牌视觉识别系统，包含Logo、配色、字体和UI组件库',
    category: '设计作品',
    tags: ['Figma', 'Illustrator'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    github: '#',
    demo: '#'
  }, {
    id: 5,
    title: '实时协作白板',
    description: '支持多人实时协作的在线白板工具，适合远程团队头脑风暴',
    category: 'Web应用',
    tags: ['Vue.js', 'Socket.io', 'Canvas'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
    github: '#',
    demo: '#'
  }, {
    id: 6,
    title: '智能客服机器人',
    description: '基于NLP的智能客服系统，支持多轮对话和知识库管理',
    category: 'AI工具',
    tags: ['Python', 'NLP', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    github: '#',
    demo: '#'
  }];
  const filteredProjects = selectedCategory === '全部' ? projects : projects.filter(project => project.category === selectedCategory);
  return <div className="min-h-screen bg-white">
      <Navbar $w={$w} currentPage="projects" />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">项目案例</h1>
            <p className="text-gray-600 text-lg">精选项目展示，涵盖Web应用、移动应用、AI工具和设计作品</p>
          </div>

          {/* Filter */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">筛选</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 text-sm font-medium transition-all ${selectedCategory === category ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  {category}
                </button>)}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => <div key={project.id} className="group bg-white border border-gray-200 hover:border-black transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                    <a href={project.github} className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors" onClick={e => {
                  e.preventDefault();
                  alert(`查看 ${project.title} 的代码`);
                }}>
                      <Github className="h-5 w-5 text-black" />
                    </a>
                    <a href={project.demo} className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors" onClick={e => {
                  e.preventDefault();
                  alert(`查看 ${project.title} 的演示`);
                }}>
                      <ExternalLink className="h-5 w-5 text-black" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-medium text-gray-500 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <span key={tag} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700">
                        {tag}
                      </span>)}
                  </div>
                </div>
              </div>)}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && <div className="text-center py-16">
              <p className="text-gray-500 text-lg">暂无相关项目</p>
            </div>}
        </div>
      </main>
    </div>;
}