import React from 'react';
import { Building2, Stethoscope, Microscope } from 'lucide-react';

const Hospitals = () => {
  const hospitals = [
    {
      name: 'INNOVA 医院',
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      image: '/innova.jpg',
      description: '格鲁吉亚顶尖的综合性私立医院之一。拥有国际标准的高级别胚胎实验室和尖端医疗设备，其专家团队在辅助生殖领域经验丰富，试管婴儿成功率在欧洲名列前茅。',
      features: ['顶级胚胎实验室', '资深医疗团队', '超高成功率']
    },
    {
      name: 'Universe 医院',
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      image: '/universe.jpg',
      description: '专注于生殖健康与妇产科的现代化专科医院。提供从备孕、IVF到分娩的一站式温馨医疗服务，以高标准的个性化护理和卓越的患者体验闻名。',
      features: ['温馨医疗环境', '个性化护理', '一站式生殖服务']
    },
    {
      name: 'GEBE (格贝生殖)',
      icon: <Microscope className="w-8 h-8 text-blue-600" />,
      image: '/gebe.jpg',
      description: '国际知名的生殖辅助品牌(Grapes.ART)，提供包括SG-1和SG-2在内的精细化包成功套餐。拥有庞大且优质的专属卵妹库与代妈资源，流程透明，管理规范。',
      features: ['优质卵妹/代妈库', '包成功套餐', '全程规范化管理']
    }
  ];

  return (
    <section id="hospitals" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">合作顶尖医疗机构</h2>
          <p className="text-lg text-slate-600">
            我们只与全球最优秀的生殖中心和医院合作，确保您享受到最安全、最先进的医疗技术。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {hospitals.map((hospital, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={hospital.image} 
                  alt={hospital.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  {hospital.name}
                </h3>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 -mt-12 relative z-10 border-4 border-slate-50">
                  {hospital.icon}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {hospital.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {hospital.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm">
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

export default Hospitals;