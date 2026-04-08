import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      title: '格鲁吉亚代孕SmoothBaby套餐',
      options: [
        { name: '捐卵指定性别包成功', price: '90000美金' },
        { name: '捐卵包成功', price: '75000美金' },
        { name: '自卵一促多移', price: '72000美金' },
      ]
    },
    {
      title: '乌克兰代孕SmoothBaby套餐',
      options: [
        { name: '捐卵指定性别包成功', price: '75000美金' },
        { name: '捐卵包成功', price: '65000美金' },
        { name: '自卵一促多移', price: '65000美金' },
      ]
    },
    {
      title: '格鲁吉亚代孕马丽塔套餐',
      options: [
        { name: '捐卵包成功', price: '2万人民币+66200美金' },
        { name: '自卵+捐卵包成功', price: '2万人民币+72000美金' },
        { name: '捐卵指定性别包成功', price: '2万人民币+74500美金' },
        { name: '自卵代孕套餐', price: '1万人民币+54500美金' },
      ]
    },
    {
      title: '吉尔吉斯斯坦代孕套餐 (TANG IVF Clinic)',
      options: [
        { name: 'D2自精自卵二代+代母', price: '65000美金' },
        { name: 'D2N自精自卵二代+代母（包风险无限次）', price: '80000美金' },
        { name: 'D3NY自精自卵三代优选+代母（包风险无限次）', price: '85000美金' },
        { name: 'D3N自精自卵三代指定+代母（包风险无限次）', price: '90000美金' },
      ]
    },
    {
      title: '哈萨克斯坦代孕套餐 (Private Clinic)',
      options: [
        { name: '捐卵指定性别包成功', price: '75000美金' },
        { name: '捐卵包成功', price: '67500美金' },
        { name: '自卵一促两移', price: '54500美金' },
      ]
    },
    {
      title: '格贝生殖 (GEBE) SG套餐',
      options: [
        { name: 'SG-1 优选性别包成功', price: '72000美金' },
        { name: 'SG-2 指定性别包成功', price: '83000美金' },
        { name: '双胞胎附加 (含剖腹产)', price: '+6500美金' },
        { name: '单胎剖腹产附加', price: '+2000美金' },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">价格套餐</h2>
          <p className="text-lg text-slate-600">
            我们提供多种清晰透明的套餐选择，满足不同家庭的需求。价格真实可靠，绝无隐形消费。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-200 min-h-[80px]">
                {pkg.title}
              </h3>
              <ul className="space-y-4">
                {pkg.options.map((opt, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{opt.name}</span>
                    </div>
                    <div className="pl-7 text-blue-700 font-bold text-lg">
                      {opt.price}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center max-w-4xl mx-auto">
          <h4 className="text-xl font-bold text-slate-900 mb-4">需要定制化方案或有任何疑问？</h4>
          <p className="text-slate-600 mb-6">
            每个家庭的情况都不尽相同，我们的专家团队可以根据您的具体情况，提供个性化的建议和定制方案。
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md"
          >
            免费获取定制方案
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;