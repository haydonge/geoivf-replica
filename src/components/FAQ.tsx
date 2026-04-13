import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

type AnswerBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

type FAQItem = {
  q: string;
  a: AnswerBlock[];
};

const FAQ = () => {
  const items: FAQItem[] = [
    {
      q: '哪些人群适合咨询海外代孕/试管方案？',
      a: [
        {
          type: 'p',
          text: '只要你希望更清晰地评估“是否需要海外方案、哪里合规、预算怎么拆分、周期怎么安排”，都值得先做一次基础评估。'
        },
        {
          type: 'ul',
          items: [
            '夫妻不孕不育：输卵管因素、排卵障碍、男性因素或不明原因等。',
            '反复移植失败/反复流产：需要复盘方案与筛查策略。',
            '卵巢功能下降或高龄备孕：需要更精细的取卵与胚胎策略。',
            '需要捐卵支持：希望明确捐卵选择、流程与费用边界。',
            '单身或 LGBT 人群：需要匹配合规国家与文件路径。'
          ]
        },
        {
          type: 'p',
          text: '最终是否选择海外，取决于法律合规、身体条件、时间预算与风险偏好，我们会把可行范围讲清楚。'
        }
      ]
    },
    {
      q: '“包成功”具体指什么？',
      a: [
        {
          type: 'p',
          text: '“包成功”不是统一标准词，不同机构可能对应不同的里程碑、次数或风险条款。关键是把定义写进合同与费用清单里。'
        },
        {
          type: 'ul',
          items: [
            '包到什么结果：胚胎数/移植次数/妊娠确认/分娩等，必须明确。',
            '包含哪些成本：医疗项目、实验室环节、管理服务、补偿项等要拆分列出。',
            '不包含哪些：药费、额外检查、并发处理、附加需求等要提前标注。',
            '触发条件与例外：年龄、体检结果、用药依从性、合规限制等可能影响条款。'
          ]
        },
        {
          type: 'p',
          text: '我们会在你决定前给出“包含/不包含 + 付款节点 + 可能附加项”的清单，避免信息不对称。'
        }
      ]
    },
    {
      q: '能否指定性别？',
      a: [
        {
          type: 'p',
          text: '是否可选性别取决于当地法律与医学适应证，不同国家与不同机构的合规边界差异很大。'
        },
        {
          type: 'ul',
          items: [
            '我们会先确认你选择的国家是否允许，以及允许的前提条件。',
            '再确认对应技术路径与费用结构（例如筛查/检测相关成本）。',
            '如果不符合合规路径，会明确告知不可做的部分，并给出替代方案。'
          ]
        }
      ]
    },
    {
      q: '整体周期大概多久？',
      a: [
        {
          type: 'p',
          text: '周期受身体条件、筛查需求、匹配进度与当地政策影响。我们通常用“阶段里程碑”来管理，而不是给一个不可靠的总天数。'
        },
        {
          type: 'ul',
          items: [
            '阶段 1：评估与检查（收集报告、补齐检查、确定方案）。',
            '阶段 2：取卵/受精/培养（必要时筛查与冷冻）。',
            '阶段 3：匹配与移植（代母/内膜准备、移植窗口）。',
            '阶段 4：孕期管理与分娩（随访、报告同步、证件与回国对接）。'
          ]
        },
        {
          type: 'p',
          text: '你提供的检查越完整，前期评估越快；我们也会把每阶段的可控与不可控因素讲清楚。'
        }
      ]
    },
    {
      q: '费用如何拆分？哪些常见“隐藏项”要提前问清？',
      a: [
        {
          type: 'p',
          text: '你看到的套餐价格通常是“核心模块”的组合，真正要透明，需要把费用按阶段与模块拆开。'
        },
        {
          type: 'ul',
          items: [
            '医疗与实验室：检查、促排监测、取卵/培养、受精方式、筛查/检测、移植等。',
            '药费与耗材：不同人用药差异大，必须单独说明是否包含。',
            '管理与对接：翻译、陪同、进度管理、报告同步等。',
            '附加需求：指定性别、额外移植、额外筛查、并发处理等。'
          ]
        },
        {
          type: 'p',
          text: '我们建议在决定前明确：付款节点、包含/不包含清单、附加项单价表、以及触发条件。'
        }
      ]
    },
    {
      q: '我需要提供哪些检查资料？没有报告也能咨询吗？',
      a: [
        {
          type: 'p',
          text: '没有报告也可以先咨询，但要做出更准确的方案判断，最好尽量补齐基础检查。'
        },
        {
          type: 'ul',
          items: [
            '女方常见：AMH、基础激素（按医生建议）、阴超、既往手术/用药史。',
            '男方常见：精液分析、感染筛查等。',
            '如果有：既往促排方案、取卵数、受精率、胚胎发育情况、移植次数与结果等更有价值。'
          ]
        },
        {
          type: 'p',
          text: '你把已有报告拍照/电子版发来，我们会先做“能否直接用、还缺哪些、优先补哪些”的清单。'
        }
      ]
    },
    {
      q: '捐卵怎么选？流程通常怎么走？',
      a: [
        {
          type: 'p',
          text: '捐卵选择的核心是“合规 + 匹配标准清晰 + 信息透明”。不同国家/机构的信息开放度不同，我们会在合规范围内提供可选项。'
        },
        {
          type: 'ul',
          items: [
            '筛选维度：基本体征、血型、家族史、教育/语言、外貌特征等（以当地合规与机构提供信息为准）。',
            '匹配方式：可选库内匹配或按条件等待匹配，等待时间与可选范围相关。',
            '费用构成：捐卵费用、药费、检查与补偿等需要拆分写清。'
          ]
        },
        {
          type: 'p',
          text: '我们会把“你最在意的 3–5 个条件”先确定下来，再用条件去匹配资源，避免无效等待。'
        }
      ]
    },
    {
      q: '代母匹配与孕期管理是怎么保障的？',
      a: [
        {
          type: 'p',
          text: '不同国家对代母流程的管理模式不同，我们会优先选择流程成熟、节点可追踪的合作路径，并把信息同步做扎实。'
        },
        {
          type: 'ul',
          items: [
            '匹配前：体检/评估、合规文件与合同条款明确。',
            '移植前：时间表、用药与检查节点同步，确保准备一致。',
            '孕期中：定期报告同步与异常情况预案，减少信息延迟。',
            '分娩后：证件与回国流程对接，确保节点衔接。'
          ]
        }
      ]
    },
    {
      q: '是否提供中文沟通与陪同？沟通怎么避免“信息走样”？',
      a: [
        {
          type: 'p',
          text: '支持中文对接与关键节点陪同/远程协同。我们更重视把信息“结构化同步”，避免口头转述造成偏差。'
        },
        {
          type: 'ul',
          items: [
            '关键节点用清单推进：检查清单、用药清单、移植准备清单。',
            '报告统一归档：便于复盘与跨团队对接。',
            '问题统一收集：把问题集中一次问清，减少往返沟通成本。'
          ]
        }
      ]
    },
    {
      q: '隐私与资料安全如何保障？',
      a: [
        {
          type: 'p',
          text: '资料仅用于方案评估与流程对接，遵循“最小可见、最少留存、分级授权”的原则。'
        },
        {
          type: 'ul',
          items: [
            '可按需签署保密协议（NDA）。',
            '敏感资料按阶段提供：必要时再提供必要信息。',
            '沟通记录与文件仅在项目相关成员范围内共享。'
          ]
        }
      ]
    },
    {
      q: '需要出国几次？能否远程推进？',
      a: [
        {
          type: 'p',
          text: '出行次数取决于国家政策、方案选择与个人情况。有些环节可以远程完成，有些需要到场配合。'
        },
        {
          type: 'ul',
          items: [
            '可远程：初步评估、资料审核、方案沟通、部分报告同步。',
            '可能到场：取卵/取精相关环节、关键签署或身份核验等（以当地要求为准）。'
          ]
        },
        {
          type: 'p',
          text: '我们会在评估阶段就把“需要去几次、每次待多久、准备什么”写进时间表。'
        }
      ]
    },
    {
      q: '我该怎么开始？第一次咨询需要给你什么信息？',
      a: [
        {
          type: 'p',
          text: '为了让第一次沟通更高效，建议准备一段“基础情况摘要”。没有也没关系，我们可以边问边整理。'
        },
        {
          type: 'ul',
          items: [
            '年龄与备孕年限、既往妊娠史。',
            '是否倾向自卵/捐卵、是否考虑代母。',
            '是否有检查报告（AMH/激素/精液/移植记录等）。',
            '预算区间与时间要求（比如希望多久内推进到哪一步）。',
            '是否有必须条件：国家偏好、语言/陪同、隐私与风险偏好等。'
          ]
        }
      ]
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
            <HelpCircle className="h-4 w-4" />
            常见问题
          </div>
          <h2 className="mt-5 text-3xl font-bold text-slate-900">FAQ</h2>
          <p className="mt-4 text-lg text-slate-600">
            把大家最关心的点先讲明白：合规范围、费用边界、周期节奏与隐私保障。
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {items.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.q} className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                >
                  <span className="text-base font-semibold text-slate-900">{item.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`} />
                </button>
                {open && (
                  <div className="px-6 pb-6 text-sm leading-7 text-slate-600">
                    <div className="space-y-3">
                      {item.a.map((block, blockIndex) => {
                        if (block.type === 'ul') {
                          return (
                            <ul key={blockIndex} className="list-disc space-y-1 pl-5">
                              {block.items.map((t) => (
                                <li key={t}>{t}</li>
                              ))}
                            </ul>
                          );
                        }
                        return <p key={blockIndex}>{block.text}</p>;
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-blue-100 bg-blue-50 p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900">还有没覆盖的问题？</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            把你的情况简单描述一下（年龄、是否自卵/捐卵、是否有检查报告、预算区间），我们会给出更可执行的建议。
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            立即咨询
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
