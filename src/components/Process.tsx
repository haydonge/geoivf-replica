import React from 'react';
import { ClipboardList, FileSearch, HeartHandshake, Microscope, Plane, ShieldCheck } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      title: '初步评估',
      desc: '沟通需求与预算，确认适用国家与合规路径，制定初版时间表。',
      icon: <FileSearch className="h-5 w-5 text-blue-700" />
    },
    {
      title: '医学检查',
      desc: '男方精液、女方基础激素与超声等检查，为方案选择提供依据。',
      icon: <ClipboardList className="h-5 w-5 text-blue-700" />
    },
    {
      title: '方案确定',
      desc: '确定自卵/捐卵、二代/三代与筛查需求，并明确费用包含与不包含项。',
      icon: <ShieldCheck className="h-5 w-5 text-blue-700" />
    },
    {
      title: '促排取卵与培养',
      desc: '促排监测、取卵、体外受精与胚胎培养，必要时进行胚胎检测与冷冻。',
      icon: <Microscope className="h-5 w-5 text-blue-700" />
    },
    {
      title: '代母/移植流程',
      desc: '匹配与评估、合同签署、移植准备与胚胎移植，提供中文沟通与陪同支持。',
      icon: <HeartHandshake className="h-5 w-5 text-blue-700" />
    },
    {
      title: '孕期管理与回国',
      desc: '孕期随访与报告同步，协助分娩安排、证件与回国流程对接。',
      icon: <Plane className="h-5 w-5 text-blue-700" />
    }
  ];

  return (
    <section id="process" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">服务流程</h2>
          <p className="mt-4 text-lg text-slate-600">
            用可执行的步骤把复杂事项拆解清楚：每一步做什么、谁负责、需要多久、费用怎么构成。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-slate-50 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-lg font-bold text-slate-900">周期参考</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                实际周期受身体条件、筛查需求、匹配进度与当地政策影响。我们会在评估后给出可落地的时间表与阶段里程碑。
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              获取流程评估
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
