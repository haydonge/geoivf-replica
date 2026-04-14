import React, { useState } from 'react';
import { MapPin, CheckCircle2, Globe2, Scale, HeartHandshake, Sparkles } from 'lucide-react';

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

  const reasons = [
    {
      icon: <Scale size={18} />,
      title: '法律路径更清晰',
      description: '在海外合法框架内进行代孕与辅助生殖，身份确认、出生证明登记等流程更规范。',
    },
    {
      icon: <Sparkles size={18} />,
      title: '医疗资源与方案更丰富',
      description: '可结合自卵/捐卵/捐精等不同方案，匹配个人情况与预算，提升项目可执行性。',
    },
    {
      icon: <HeartHandshake size={18} />,
      title: '流程更透明、服务更可控',
      description: '从评估、签约到医疗与生活照护，节点更清楚，利于把控进度与风险。',
    },
    {
      icon: <Globe2 size={18} />,
      title: '四国多选择、各有侧重',
      description: '乌克兰、格鲁吉亚、哈萨克斯坦、吉尔吉斯斯坦各具特点，可按人群条件与需求组合选择。',
    },
  ];

  const countryDetails = [
    {
      name: '格鲁吉亚',
      gradientClass: 'from-red-700 to-rose-500',
      isLightHeader: false,
      intro:
        '格鲁吉亚位于欧亚大陆交界的高加索地区，首都第比利斯融合了历史与现代文化，以丰富的葡萄酒传统、多元的生态景观（山脉、黑海沿岸）和东正教信仰著称。',
      legalFramework:
        '自1997年合法化，仅允许已婚异性夫妇通过代孕，胚胎需来自夫妻或捐赠者。出生证明直接登记预期父母姓名，流程快捷。',
    },
    {
      name: '吉尔吉斯斯坦',
      gradientClass: 'from-red-700 to-amber-500',
      isLightHeader: false,
      intro:
        '作为中亚内陆国，吉尔吉斯斯坦以天山山脉和游牧文化闻名，人口约650万，经济以农业和矿业为主，贫困率较高。',
      legalFramework:
        '2024年《家庭法》明确代孕合法，允许单身人士、同性伴侣及不孕夫妇参与，代母需年龄20-40岁且健康。近年成为代孕“顶流”，吸引国际客户。',
    },
    {
      name: '哈萨克斯坦',
      gradientClass: 'from-sky-500 to-amber-400',
      isLightHeader: true,
      intro:
        '横跨欧亚，以草原和能源资源著称，人口约1900万，多民族共存（哈萨克族、俄罗斯族等），医疗技术在中亚领先。',
      legalFramework:
        '2012年《婚姻和家庭法》允许商业代孕，代母需已婚、20-35岁且生育过，合同需公证。代孕被视为“工作机会”，代母众多。',
    },
    {
      name: '乌克兰',
      gradientClass: 'from-blue-700 to-yellow-400',
      isLightHeader: false,
      intro:
        '位于东欧，首都基辅，以黑土地农业和东正教文化为特色，近年因战争经济衰退，贫困率上升。',
      legalFramework:
        '2007年法案明确代孕合法，仅限已婚异性夫妇且胚胎需来自夫妻，出生证明直接登记遗传父母。流程透明且法律纠纷少，曾为“欧洲子宫”，代孕数量激增。需要从周边国家入境。',
    },
  ];

  const milestones = [
    { date: '2016年', content: '在乌克兰彼奥医院作为前三位大客户代理，为客户提供优质代理服务；连续三年被彼奥推荐为中国地区优秀代理。' },
    { date: '2017年10月', content: '加入成为马丽塔国内合作，提供全套服务。' },
    { date: '2018年3月', content: '开拓IRM医院，作为乌克兰老牌代孕医院，技术优良，声誉极佳。' },
    { date: '2018年9月', content: '开拓IGR医院，提供自卵服务与专利技术方案，优化低AMH客户的方案选择。' },
    { date: '2018年12月', content: '合作性价比高AMC医院，为客户提供更多套餐选择。' },
    { date: '2019年1月', content: '合作Mother & Children医院，提供乙肝、丙肝、梅毒客户的代孕服务。' },
    { date: '2019年6月', content: '合作IVMED瑞德医院，提供更高性价比套餐与欧亚卵妹资源。' },
    { date: '2019年2月', content: '提供台湾客户代孕服务，完善全程客户服务。' },
    { date: '2020年2月', content: '由于疫情严重，开发国内优质机构，提供夫妻和单身代孕服务。' },
    { date: '2021年', content: '全年接待各国华人客户数十对；接孩子客户42对夫妻前往乌克兰，安全带回孩子。' },
    { date: '2022年1月', content: '合作ISIDA医院，提供亚裔包成功套餐。' },
    { date: '2022年4月', content: '合作格鲁多家医院套餐：Caraps、SILK、Beta Plus、ZHORDANIA、Chachava等。' },
    { date: '2022年9月', content: '合作哈萨克斯坦PRIVATE CLINIC ALMATY诊所。' },
    { date: '2023年9月', content: '合作哈萨克斯坦NGC、IRM、PERSONA诊所。' },
    { date: '2024年1月', content: '合作格鲁吉亚INNOVA医院。' },
    { date: '2025年1月', content: '合作吉尔吉斯TANG IVF诊所。' },
    { date: '2026年1月', content: '合作格鲁吉亚UNIVERSE、GEBE医院。' },
  ];

  const milestonesPreviewCount = 6;
  const [isMilestonesExpanded, setIsMilestonesExpanded] = useState(false);
  const milestonesDescending = [...milestones].reverse();
  const milestonesToRender = isMilestonesExpanded
    ? milestonesDescending
    : milestonesDescending.slice(0, milestonesPreviewCount);
  const hasMoreMilestones = milestonesDescending.length > milestonesPreviewCount;

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

        <div className="mt-16 rounded-3xl bg-white border border-slate-100 shadow-sm p-8 md:p-10">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-slate-900">代孕国家介绍</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              为什么选择海外代孕？在合规的法律与医疗框架下，不同国家提供不同的人群政策、资源与服务路径。以下为我们重点服务的四个海外代孕国家及其特点。
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-900 shadow-sm">
                  <span className="text-blue-600">{item.icon}</span>
                  {item.title}
                </div>
                <p className="mt-3 text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            {countryDetails.map((country) => (
              <div
                key={country.name}
                className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden"
              >
                <div
                  className={`px-7 py-6 bg-gradient-to-br ${country.gradientClass} ${
                    country.isLightHeader ? 'text-slate-900' : 'text-white drop-shadow-sm'
                  }`}
                >
                  <div
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
                      country.isLightHeader ? 'bg-white/60 text-slate-900' : 'bg-white/10 text-white'
                    }`}
                  >
                    <MapPin size={16} />
                    {country.name}
                  </div>
                  <p
                    className={`mt-4 leading-relaxed ${
                      country.isLightHeader ? 'text-slate-800/90' : 'text-white/90'
                    }`}
                  >
                    {country.intro}
                  </p>
                </div>
                <div className="px-7 py-6">
                  <div className="text-sm font-semibold text-blue-700">法律框架</div>
                  <p className="mt-2 text-slate-700 leading-relaxed">{country.legalFramework}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-white border border-slate-100 shadow-sm p-8 md:p-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-bold text-slate-900">佳恩宝贝介绍</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                佳恩宝贝提供安全可靠、合法合规的乌克兰、格鲁吉亚、哈萨克斯坦、吉尔吉斯斯坦代孕与辅助生殖服务。我们集合四国最佳性价比的正规代孕医院资源，为中国客户提供更安全、更完善的医疗辅助生殖服务与生活照顾。
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <div className="text-sm font-semibold text-slate-900">合作医院（部分）</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    '彼奥-泰克斯',
                    'M&C医院',
                    '马丽塔生殖中心',
                    'ISIDA医院',
                    'Innova医院',
                    'SILK医院',
                    'ZHORDANIA医院',
                    'PRIVATE CLINIC ALMATY诊所',
                    'Tang IVF诊所',
                  ].map((name) => (
                    <span
                      key={name}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 border border-slate-100"
                    >
                      <CheckCircle2 size={14} className="text-emerald-600" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-slate-100 bg-white p-6">
                  <div className="text-sm font-semibold text-blue-700">医疗服务</div>
                  <ul className="mt-3 space-y-2 text-slate-700">
                    {['自卵代孕', '捐卵代孕', '捐卵自怀', '捐精代孕'].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-6">
                  <div className="text-sm font-semibold text-blue-700">常见套餐</div>
                  <ul className="mt-3 space-y-2 text-slate-700">
                    {[
                      '捐卵包成功',
                      '自卵一促一移',
                      '自卵一促多移',
                      '自卵包成功',
                      '自卵+捐卵包成功',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-900">政策与人群提示</div>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  乌克兰、哈萨克斯坦、格鲁吉亚、吉尔吉斯斯坦均为合法代孕国家，但不同国家对适用人群与流程要求不同。通常乌克兰、哈萨克斯坦更强调合法夫妻在合同签署与接孩子环节的合规性；格鲁吉亚与吉尔吉斯斯坦在家庭结构与条件上也各有规定，项目启动前会根据您的情况做合规评估与路径建议。
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors"
                >
                  了解更多
                </a>
                <div className="text-sm text-slate-500">
                  Wonderful Surrogate site in Ukraine or Georgia！
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-blue-700 text-white p-7 md:p-8 shadow-lg">
                <div className="text-sm font-semibold text-sky-200">服务覆盖</div>
                <div className="mt-2 text-2xl font-bold">我们代理超三百对夫妇</div>
                <p className="mt-4 text-white/85 leading-relaxed">
                  覆盖中国内地各省市地区、香港、台湾，以及加拿大、德国、美国、澳大利亚、阿根廷等国家的华人客户。我们非常荣幸用自己的努力帮助各位华裔父母带来心爱的宝宝。
                </p>
                <div className="mt-6 rounded-2xl bg-white/10 p-5">
                  <div className="text-sm font-semibold">重点合作</div>
                  <p className="mt-2 text-white/85 leading-relaxed">
                    代理马丽塔、M&C、BIOTEXCOM、ISIDA、Innova等，为客户提供更完善的医疗资源与服务衔接。
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-slate-100 bg-white p-7 md:p-8">
                <h4 className="text-lg font-bold text-slate-900">发展历程</h4>
                <div
                  className={`mt-5 space-y-4 ${
                    isMilestonesExpanded ? 'max-h-[420px] md:max-h-[520px] overflow-auto pr-2' : ''
                  }`}
                >
                  {milestonesToRender.map((item, index) => {
                    const isLast = index === milestonesToRender.length - 1;
                    return (
                      <div key={item.date} className="flex gap-4">
                        <div className="flex flex-col items-center shrink-0">
                          <div className="h-3 w-3 rounded-full bg-blue-600" />
                          {!isLast && <div className="flex-1 w-px bg-slate-200" />}
                        </div>
                        <div className="pb-2 min-w-0">
                          <div className="text-sm font-semibold text-slate-900">{item.date}</div>
                          <div className="mt-1 text-sm text-slate-600 leading-relaxed break-words">
                            {item.content}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {hasMoreMilestones && (
                  <button
                    type="button"
                    onClick={() => setIsMilestonesExpanded((v) => !v)}
                    className="mt-6 w-full inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    {isMilestonesExpanded
                      ? '收起'
                      : `展开更多（剩余${milestones.length - milestonesPreviewCount}条）`}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
