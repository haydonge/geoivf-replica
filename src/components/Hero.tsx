import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const imageUrl = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=happy%20parents%20holding%20a%20newborn%20baby%20in%20a%20modern%20bright%20hospital%20room,%20warm%20lighting,%20medical%20professionalism,%20hope,%20high%20quality&image_size=landscape_16_9";

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageUrl} 
          alt="Happy family" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40 md:to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-3/5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
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

          {/* Right Content - WeChat QR Codes */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="bg-white/90 backdrop-blur-sm p-5 md:p-6 rounded-3xl shadow-2xl border border-white/50 transform hover:-translate-y-1 transition-all duration-300 max-w-[280px] w-full">
              <div className="text-center mb-5">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1.5">添加微信 专家1对1咨询</h3>
                <p className="text-xs md:text-sm text-slate-500">扫码获取最新报价及成功率评估</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-full relative rounded-2xl overflow-hidden bg-white border border-slate-100 p-1.5 shadow-inner">
                  <img 
                    src="/wechat-qrs.png" 
                    alt="微信客服二维码: Bellaliuliu 和 Haydonge" 
                    className="w-full h-auto object-contain mx-auto"
                    style={{ maxHeight: '420px' }}
                    onError={(e) => {
                      // Fallback visual if image is not yet uploaded
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;