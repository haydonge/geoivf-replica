import React from 'react';
import { Activity, BadgeCheck, HeartPulse, Info, Stethoscope } from 'lucide-react';

const Outcomes = () => {
  const factors = [
    { title: '年龄与卵巢功能', desc: '年龄与 AMH、基础卵泡等指标直接影响取卵数量与胚胎质量。', icon: <HeartPulse className="h-5 w-5 text-emerald-700" /> },
    { title: '胚胎与实验室条件', desc: '培养体系、胚胎师经验与实验室标准会影响胚胎发育表现。', icon: <Stethoscope className="h-5 w-5 text-emerald-700" /> },
    { title: '筛查与移植策略', desc: '是否需要胚胎检测、移植时机、用药与内膜准备决定着床机会。', icon: <Activity className="h-5 w-5 text-emerald-700" /> },
    { title: '生活方式与基础疾病', desc: '体重、睡眠、抽烟饮酒与慢性疾病管理，会影响治疗表现与妊娠风险。', icon: <BadgeCheck className="h-5 w-5 text-emerald-700" /> }
  ];

  return (
    <section id="outcomes" className="scroll-mt-24 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">成功率与影响因素</h2>
          <p className="mt-4 text-lg text-slate-600">
            我们更关注可控的关键变量：把“信息透明、过程可追踪、策略可复盘”落到每一次沟通与每一步执行里。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">我们如何提升确定性</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <div className="text-slate-700">根据检查结果制定分层方案：取卵策略、受精方式与筛查建议更匹配个体。</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <div className="text-slate-700">关键节点同步：用药、监测、培养、筛查、移植等环节保持信息透明与可追踪。</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <div className="text-slate-700">风险预案清晰：把可能产生的附加项提前列出，减少临时决策与预算失控。</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <div className="text-slate-700">双语协同沟通：减少信息传递损耗，提升沟通效率与执行一致性。</div>
              </li>
            </ul>
          </div>

          <div className="grid gap-6">
            {factors.map((f) => (
              <div key={f.title} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{f.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-amber-100 bg-amber-50 p-6 md:p-7">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 text-amber-700" />
            <p className="text-sm leading-6 text-amber-900">
              说明：网页内容用于介绍服务与流程，不构成医疗建议或对结果的保证。具体方案与评估结论以医生面诊与检查结果为准。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
