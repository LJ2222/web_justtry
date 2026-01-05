// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Send } from 'lucide-react';
// @ts-ignore;
import { useToast } from '@/components/ui';

import { Navbar } from '@/components/Navbar';
export default function AboutPage(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: '请填写完整信息',
        description: '姓名、邮箱和消息内容为必填项',
        variant: 'destructive'
      });
      return;
    }
    setIsSubmitting(true);

    // 模拟提交
    setTimeout(() => {
      toast({
        title: '发送成功',
        description: '感谢您的留言，我们会尽快回复您'
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  return <div className="min-h-screen bg-white">
      <Navbar $w={$w} currentPage="about" />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-black mb-4">关于我们</h1>
            <p className="text-gray-600 text-lg max-w-2xl">
              哎哟喂吓是一个专注于提供优质项目案例和实用工具的平台，
              致力于帮助开发者提升技能，提高工作效率。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div className="space-y-12">
              {/* About Section */}
              <section>
                <h2 className="text-2xl font-bold text-black mb-6">网站介绍</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    哎哟喂吓汇集了丰富的项目案例和实用的交互工具，
                    为开发者提供学习和参考的资源。我们的目标是打造一个
                    简洁、高效、易用的平台。
                  </p>
                  <p>
                    在这里，你可以浏览各种类型的项目案例，了解最新的技术栈
                    和开发实践。同时，我们还提供了多种实用工具，帮助你
                    在日常工作中提高效率。
                  </p>
                  <p>
                    我们相信，好的工具和案例能够激发创造力，推动技术进步。
                    欢迎你加入我们的社区，一起探索更多可能性。
                  </p>
                </div>
              </section>

              {/* Contact Info */}
              <section>
                <h2 className="text-2xl font-bold text-black mb-6">联系方式</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <Mail className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black mb-1">邮箱</h3>
                      <p className="text-gray-600">contact@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <Phone className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black mb-1">电话</h3>
                      <p className="text-gray-600">+86 123 4567 8900</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <MapPin className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black mb-1">地址</h3>
                      <p className="text-gray-600">中国 北京市 朝阳区</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Social Links */}
              <section>
                <h2 className="text-2xl font-bold text-black mb-6">社交媒体</h2>
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-gray-100 hover:bg-black hover:text-white rounded-lg transition-colors" onClick={e => {
                  e.preventDefault();
                  alert('访问 GitHub');
                }}>
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 hover:bg-black hover:text-white rounded-lg transition-colors" onClick={e => {
                  e.preventDefault();
                  alert('访问 Twitter');
                }}>
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 hover:bg-black hover:text-white rounded-lg transition-colors" onClick={e => {
                  e.preventDefault();
                  alert('访问 LinkedIn');
                }}>
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </section>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <section className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-black mb-6">发送消息</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      姓名 *
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors" placeholder="请输入您的姓名" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      邮箱 *
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors" placeholder="请输入您的邮箱" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                      消息内容 *
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={6} className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors resize-none" placeholder="请输入您的消息内容" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-black text-white py-3 px-6 font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {isSubmitting ? <span>发送中...</span> : <>
                        <span>发送消息</span>
                        <Send className="h-4 w-4" />
                      </>}
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>;
}