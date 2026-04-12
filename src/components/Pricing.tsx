import React from 'react';
import { ArrowRight, CheckCircle2, CircleDollarSign, Sparkles } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      titleShort: '格鲁吉亚',
      title: 'SmoothBaby 代孕套餐',
      badge: '热门优选',
      summary: '法律环境成熟，适合重视流程稳定与综合成功率的家庭。',
      priceHint: '起步价 72,000 美金',
      accent: {
        shell: 'from-sky-500 via-blue-600 to-indigo-700',
        glow: 'shadow-blue-500/20',
        soft: 'bg-blue-50',
        line: 'border-blue-200',
        chip: 'bg-blue-100 text-blue-700',
        price: 'text-blue-700'
      },
      options: [
        { name: '捐卵指定性别包成功', price: '90000美金' },
        { name: '捐卵包成功', price: '75000美金' },
        { name: '自卵一促多移', price: '72000美金' },
      ]
    },
    {
      titleShort: '乌克兰',
      title: 'SmoothBaby 代孕套餐',
      badge: '高性价比',
      summary: '兼顾欧洲医疗资源与预算控制，适合看重性价比的客户。',
      priceHint: '起步价 65,000 美金',
      accent: {
        shell: 'from-fuchsia-500 via-pink-600 to-rose-700',
        glow: 'shadow-pink-500/20',
        soft: 'bg-rose-50',
        line: 'border-rose-200',
        chip: 'bg-rose-100 text-rose-700',
        price: 'text-rose-700'
      },
      options: [
        { name: '捐卵指定性别包成功', price: '75000美金' },
        { name: '捐卵包成功', price: '65000美金' },
        { name: '自卵一促多移', price: '65000美金' },
      ]
    },
    {
      titleShort: '格鲁吉亚',
      title: '马丽塔组合套餐',
      badge: '组合报价',
      summary: '支持人民币与美金组合支付，适合需要多方案灵活比较的家庭。',
      priceHint: '起步价 1万人民币 + 54,500 美金',
      accent: {
        shell: 'from-amber-400 via-orange-500 to-red-500',
        glow: 'shadow-orange-500/20',
        soft: 'bg-orange-50',
        line: 'border-orange-200',
        chip: 'bg-orange-100 text-orange-700',
        price: 'text-orange-700'
      },
      options: [
        { name: '捐卵包成功', price: '2万人民币+66200美金' },
        { name: '自卵+捐卵包成功', price: '2万人民币+72000美金' },
        { name: '捐卵指定性别包成功', price: '2万人民币+74500美金' },
        { name: '自卵代孕套餐', price: '1万人民币+54500美金' },
      ]
    },
    {
      titleShort: '吉尔吉斯斯坦',
      title: 'TANG IVF Clinic 套餐',
      badge: '风险兜底',
      summary: '覆盖二代到三代方案，适合希望风险保障更充分的客户。',
      priceHint: '起步价 65,000 美金',
      accent: {
        shell: 'from-emerald-500 via-teal-600 to-cyan-700',
        glow: 'shadow-emerald-500/20',
        soft: 'bg-emerald-50',
        line: 'border-emerald-200',
        chip: 'bg-emerald-100 text-emerald-700',
        price: 'text-emerald-700'
      },
      options: [
        { name: 'D2自精自卵二代+代母', price: '65000美金' },
        { name: 'D2N自精自卵二代+代母（包风险无限次）', price: '80000美金' },
        { name: 'D3NY自精自卵三代优选+代母（包风险无限次）', price: '85000美金' },
        { name: 'D3N自精自卵三代指定+代母（包风险无限次）', price: '90000美金' },
      ]
    },
    {
      titleShort: '哈萨克斯坦',
      title: 'Private Clinic 套餐',
      badge: '医疗升级',
      summary: '突出中亚医疗配置与优选资源，适合重视医疗条件的家庭。',
      priceHint: '起步价 54,500 美金',
      accent: {
        shell: 'from-violet-500 via-purple-600 to-indigo-700',
        glow: 'shadow-violet-500/20',
        soft: 'bg-violet-50',
        line: 'border-violet-200',
        chip: 'bg-violet-100 text-violet-700',
        price: 'text-violet-700'
      },
      options: [
        { name: '捐卵指定性别包成功', price: '75000美金' },
        { name: '捐卵包成功', price: '67500美金' },
        { name: '自卵一促两移', price: '54500美金' },
      ]
    },
    {
      titleShort: '格贝生殖',
      title: 'GEBE SG 套餐',
      badge: '附加项清晰',
      summary: '主套餐与附加项边界清晰，适合关注费用透明度的客户。',
      priceHint: '起步价 72,000 美金',
      accent: {
        shell: 'from-slate-700 via-slate-800 to-slate-950',
        glow: 'shadow-slate-500/20',
        soft: 'bg-slate-100',
        line: 'border-slate-300',
        chip: 'bg-slate-200 text-slate-700',
        price: 'text-slate-900'
      },
      options: [
        { name: 'SG-1 优选性别包成功', price: '72000美金' },
        { name: 'SG-2 指定性别包成功', price: '83000美金' },
        { name: '双胞胎附加 (含剖腹产)', price: '+6500美金' },
        { name: '单胎剖腹产附加', price: '+2000美金' },
      ]
    }
  ];

  return (
    <section id="pricing" className="scroll-mt-24 bg-gradient-to-b from-white via-slate-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <CircleDollarSign className="h-4 w-4" />
            六大报价方案一目了然
          </div>
          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">价格套餐</h2>
          <p className="text-lg text-slate-600">
            六个报价单元按国家、套餐定位与费用结构拆分展示，让您更容易横向比较价格区间、方案特色与附加项。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
          {packages.map((pkg, index) => (
            <article
              key={index}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white bg-white shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${pkg.accent.glow}`}
            >
              <div className={`bg-gradient-to-br ${pkg.accent.shell} p-7 text-white`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                      {pkg.titleShort}
                    </div>
                    <h3 className="mt-3 min-h-[72px] text-2xl font-bold leading-snug">
                      {pkg.title}
                    </h3>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${pkg.accent.chip}`}>
                    {pkg.badge}
                  </span>
                </div>
                <p className="mt-4 min-h-[72px] text-sm leading-6 text-white/85">
                  {pkg.summary}
                </p>
                <div className="mt-5 inline-flex items-center rounded-2xl bg-white/12 px-4 py-3 text-sm font-semibold backdrop-blur">
                  <Sparkles className="mr-2 h-4 w-4" />
                  {pkg.priceHint}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className={`mb-6 rounded-3xl border ${pkg.accent.line} ${pkg.accent.soft} p-4`}>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    费用说明
                  </div>
                  <div className={`mt-2 text-2xl font-bold ${pkg.accent.price}`}>
                    {pkg.priceHint}
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    套餐金额按项目类型区分，建议结合需求做一对一评估。
                  </div>
                </div>

                <ul className="flex flex-1 flex-col gap-3">
                  {pkg.options.map((opt, i) => (
                    <li
                      key={i}
                      className="min-h-[88px] rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4"
                    >
                      <div className="flex min-w-0 items-start gap-3">
                        <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${pkg.accent.soft}`}>
                          <CheckCircle2 className={`h-4 w-4 ${pkg.accent.price}`} />
                        </span>
                        <div className="min-w-0">
                          <div className="font-medium leading-6 text-slate-800">{opt.name}</div>
                          <div className={`mt-1 text-base font-bold leading-6 ${pkg.accent.price}`}>
                            {opt.price}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-semibold text-slate-900 transition-colors ${pkg.accent.soft} hover:bg-slate-100`}
                >
                  获取该套餐详细报价
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900 p-8 text-center text-white shadow-2xl shadow-blue-500/20">
          <h4 className="text-xl font-bold md:text-2xl">需要定制化方案或有任何疑问？</h4>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-blue-50 md:text-base">
            每个家庭的情况都不尽相同，我们的专家团队可以根据您的具体情况，提供个性化的建议和定制方案。
          </p>
          <a 
            href="#contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-medium text-slate-900 transition-colors hover:bg-blue-50"
          >
            免费获取定制方案
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
