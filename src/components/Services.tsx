import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const destinations = [
    {
      country: '格鲁吉亚',
      tagline: '代孕及供卵完全合法，流程成熟，法律体系完善',
      gradientClass: 'from-blue-600 to-cyan-500',
      description: '位于欧亚大陆交界，代孕及供卵完全合法。拥有丰富的经验和完善的法律体系，保护您的合法权益。',
      features: ['性价比高', '法律保护', '无需签证繁琐']
    },
    {
      country: '吉尔吉斯斯坦',
      tagline: '高性价比选择，程序相对简化，单身友好',
      gradientClass: 'from-emerald-600 to-lime-500',
      description: '中亚内陆国，代孕合法，医疗成本相对较低。为预算有限的家庭提供高性价比选择。',
      features: ['超高性价比', '单身友好', '程序简便']
    },
    {
      country: '哈萨克斯坦',
      tagline: '中亚领先医疗水平，技术先进，成功率可期',
      gradientClass: 'from-indigo-600 to-sky-500',
      description: '横跨欧亚，医疗技术在中亚领先。先进的试管婴儿技术和优质的代妈资源。',
      features: ['医疗先进', '优选代妈', '高成功率']
    },
    {
      country: '乌克兰',
      tagline: '欧洲标准医疗资源，经验成熟，选择丰富',
      gradientClass: 'from-fuchsia-600 to-pink-500',
      description: '欧洲代孕之都，拥有顶尖的生殖医疗资源和丰富的捐卵者、代妈库，经验成熟。',
      features: ['欧洲医疗标准', '丰富卵妹资源', '成熟产业体系']
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">全球优质生殖目的地</h2>
          <p className="text-lg text-slate-600">
            我们精选全球法律完善、医疗先进的国家，为您提供多样化的选择。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              <div className={`relative px-8 py-7 bg-gradient-to-br ${dest.gradientClass}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-sm font-semibold">
                  <MapPin size={16} />
                  {dest.country}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white leading-tight">{dest.tagline}</h3>
                <div className="pointer-events-none absolute -right-12 -top-12 w-44 h-44 rounded-full bg-white/10 blur-2xl" />
                <div className="pointer-events-none absolute -left-10 -bottom-10 w-44 h-44 rounded-full bg-black/10 blur-2xl" />
              </div>
              <div className="p-8">
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  {dest.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {dest.features.map((feature, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      <CheckCircle2 size={14} />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
