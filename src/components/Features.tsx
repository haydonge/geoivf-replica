import React from 'react';
import { ShieldCheck, HeartHandshake, FileText, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: '合法保障',
      description: '海外合法代孕及供卵，全程法律团队支持，保障您的合法权益，免除后顾之忧。'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-blue-600" />,
      title: '透明收费',
      description: '套餐价格公开透明，无隐形消费。分阶段付款，资金安全有保障。'
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: '专业医疗',
      description: '合作顶尖生殖中心（如Innova、FSAC等），第三代试管婴儿技术（PGS/PGD），高成功率。'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: '包容性强',
      description: '支持合法夫妻、单身人士以及LGBT群体，为您提供量身定制的生育解决方案。'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">为什么选择我们</h2>
          <p className="text-lg text-slate-600">
            我们致力于为您提供安全、专业、贴心的海外辅助生殖服务，帮助每一个渴望孩子的家庭圆梦。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
