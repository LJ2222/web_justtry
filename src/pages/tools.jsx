// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Search, ArrowRight, Zap, Brain, Wrench, Calculator, Palette, FileText, Image as ImageIcon, Clock } from 'lucide-react';

import { Navbar } from '@/components/Navbar';
export default function ToolsPage(props) {
  const {
    $w
  } = props;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const categories = ['全部', '交互工具', 'AI工具', '实用工具'];
  const tools = [{
    id: 1,
    name: '颜色转换器',
    description: '快速转换HEX、RGB、HSL等颜色格式',
    category: '交互工具',
    icon: Palette,
    color: 'bg-gray-900'
  }, {
    id: 2,
    name: '文本统计',
    description: '统计字数、词数、段落数等文本信息',
    category: '交互工具',
    icon: FileText,
    color: 'bg-gray-800'
  }, {
    id: 3,
    name: '计算器',
    description: '支持基础运算和科学计算',
    category: '实用工具',
    icon: Calculator,
    color: 'bg-gray-700'
  }, {
    id: 4,
    name: '图片压缩',
    description: '在线压缩图片，保持质量的同时减小文件大小',
    category: '实用工具',
    icon: ImageIcon,
    color: 'bg-gray-600'
  }, {
    id: 5,
    name: 'AI文本生成',
    description: '基于AI的文本生成工具，支持多种场景',
    category: 'AI工具',
    icon: Brain,
    color: 'bg-gray-900'
  }, {
    id: 6,
    name: 'AI图像识别',
    description: '识别图片中的物体、文字和场景',
    category: 'AI工具',
    icon: Zap,
    color: 'bg-gray-800'
  }, {
    id: 7,
    name: '倒计时器',
    description: '设置倒计时，提醒重要事项',
    category: '交互工具',
    icon: Clock,
    color: 'bg-gray-700'
  }, {
    id: 8,
    name: 'JSON格式化',
    description: '格式化和验证JSON数据',
    category: '实用工具',
    icon: Wrench,
    color: 'bg-gray-600'
  }];
  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === '全部' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const handleToolClick = tool => {
    alert(`即将打开：${tool.name}`);
  };
  return <div className="min-h-screen bg-white">
      <Navbar $w={$w} currentPage="tools" />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">交互工具</h1>
            <p className="text-gray-600 text-lg">精选实用工具，提升工作效率</p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input type="text" placeholder="搜索工具..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 text-sm font-medium transition-all ${selectedCategory === category ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  {category}
                </button>)}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTools.map(tool => {
            const Icon = tool.icon;
            return <button key={tool.id} onClick={() => handleToolClick(tool)} className="group bg-white border border-gray-200 hover:border-black transition-all duration-300 p-6 text-left">
                  <div className={`${tool.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                  <div className="flex items-center text-sm font-medium text-black group-hover:text-gray-700">
                    <span>使用工具</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>;
          })}
          </div>

          {/* Empty State */}
          {filteredTools.length === 0 && <div className="text-center py-16">
              <p className="text-gray-500 text-lg">未找到匹配的工具</p>
            </div>}
        </div>
      </main>
    </div>;
}