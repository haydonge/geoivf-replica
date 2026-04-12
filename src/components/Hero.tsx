import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const backgroundSlides = [
    {
      src: '/hero-family-1.jpg',
      alt: '母亲抱着新生儿，处于温暖明亮的医疗环境中',
      label: '温暖母婴陪伴'
    },
    {
      src: '/hero-family-2.jpg',
      alt: '年轻父母在高端产房中拥抱新生儿',
      label: '家庭团聚时刻'
    },
    {
      src: '/hero-family-3.jpg',
      alt: '母亲与新生儿近景，画面柔和温馨',
      label: '安心生产环境'
    }
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % backgroundSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [backgroundSlides.length]);

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-blue-50" />
        {backgroundSlides.map((slide, index) => (
          <img
            key={slide.label}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 motion-reduce:transition-none ${
              activeSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            width={1920}
            height={1080}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            decoding="async"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/88 to-white/45 md:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-white/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-3/5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse motion-reduce:animate-none"></span>
              专业海外代孕与试管婴儿服务
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              让爱延续，<br/>
              <span className="text-blue-600">成就完整家庭</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
              为您提供格鲁吉亚、吉尔吉斯斯坦、哈萨克斯坦、乌克兰等全球优质合法代孕及试管婴儿服务。专业团队全程陪伴，让您的求子之路安全、透明、安心。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#pricing" 
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                查看价格套餐
                <ArrowRight size={20} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                免费专家咨询
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 sm:gap-8 text-sm md:text-base font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={20} />
                <span>合法合规保障</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={20} />
                <span>价格公开透明</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={20} />
                <span>支持LGBT及单身</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="bg-white/88 backdrop-blur-md p-5 md:p-6 rounded-3xl shadow-2xl border border-white/60 max-w-[320px] w-full">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <p className="text-sm font-semibold text-blue-700 mb-1.5">Hero 背景轮播</p>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">母婴主题场景</h3>
                </div>
                <div className="rounded-full bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-white">
                  {activeSlide + 1} / {backgroundSlides.length}
                </div>
              </div>

              <div className="mb-5 rounded-3xl bg-slate-950/90 p-4 text-white">
                <div className="text-sm font-semibold text-blue-200">当前画面</div>
                <div className="mt-2 text-2xl font-bold leading-tight">
                  {backgroundSlides[activeSlide].label}
                </div>
                <div className="mt-3 flex gap-2">
                  {backgroundSlides.map((slide, index) => (
                    <button
                      key={slide.label}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeSlide === index ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`切换到${slide.label}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-full relative rounded-2xl overflow-hidden bg-white border border-slate-100 p-1.5 shadow-inner">
                  <img 
                    src="/wechat-qrs.png" 
                    alt="微信客服二维码: Bellaliuliu 和 Haydonge" 
                    className="w-full h-auto object-contain mx-auto"
                    style={{ maxHeight: '420px' }}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={800}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full py-16 text-center flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-xl bg-slate-50">
                    <p className="text-slate-500 mb-2 font-medium text-sm">微信二维码图片区域</p>
                    <p className="text-[10px] text-slate-400">请将图片重命名为 wechat-qrs.png<br/>并放置在 public 目录下</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-5 flex items-center justify-center gap-3 md:gap-4 text-xs md:text-sm text-slate-600 font-medium">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></span>
                  24小时在线
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></span>
                  隐私保密
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-500"></span>
                  场景轮播
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {backgroundSlides.map((slide, index) => (
                  <button
                    key={`${slide.label}-thumb`}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={`overflow-hidden rounded-2xl border transition-all ${
                      activeSlide === index
                        ? 'border-blue-500 ring-2 ring-blue-200'
                        : 'border-white/70 hover:border-blue-200'
                    }`}
                    aria-label={`预览${slide.label}`}
                  >
                    <img
                      src={slide.src}
                      alt=""
                      aria-hidden="true"
                      className="h-16 w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width={240}
                      height={160}
                    />
                  </button>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-blue-50 px-4 py-3 text-sm text-slate-600">
                当前 Hero 使用母婴主题背景图自动切换，突出温暖、安心与家庭团聚的氛围。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
