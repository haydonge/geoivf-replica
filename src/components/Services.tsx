import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const destinations = [
    {
      country: '格鲁吉亚',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=georgia%20country%20landscape%20tbilisi%20city%20view,%20beautiful%20scenery,%20medical%20tourism&image_size=landscape_4_3',
      description: '位于欧亚大陆交界，代孕及供卵完全合法。拥有丰富的经验和完善的法律体系，保护您的合法权益。',
      features: ['性价比高', '法律保护', '无需签证繁琐']
    },
    {
      country: '吉尔吉斯斯坦',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=kyrgyzstan%20beautiful%20mountains%20nature%20landscape,%20clean%20medical%20facility&image_size=landscape_4_3',
      description: '中亚内陆国，代孕合法，医疗成本相对较低。为预算有限的家庭提供高性价比选择。',
      features: ['超高性价比', '单身友好', '程序简便']
    },
    {
      country: '哈萨克斯坦',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=kazakhstan%20astana%20modern%20cityscape,%20advanced%20medical%20center&image_size=landscape_4_3',
      description: '横跨欧亚，医疗技术在中亚领先。先进的试管婴儿技术和优质的代妈资源。',
      features: ['医疗先进', '优选代妈', '高成功率']
    },
    {
      country: '乌克兰',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=ukraine%20kiev%20city%20architecture,%20modern%20clinic&image_size=landscape_4_3',
      description: '欧洲代孕之都，拥有顶尖的生殖医疗资源和丰富的捐卵者、代妈库，经验成熟。',
      features: ['欧洲医疗标准', '丰富卵妹资源', '成熟产业体系']
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">全球优质生殖目的地</h2>
          <p className="text-lg text-slate-600">
            我们精选全球法律完善、医疗先进的国家，为您提供多样化的选择。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={dest.image} 
                  alt={dest.country} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 text-blue-700 font-bold shadow-sm">
                  <MapPin size={18} />
                  {dest.country}
                </div>
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