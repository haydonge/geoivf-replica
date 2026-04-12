import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">联系我们</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              无论您处于什么阶段，我们的医疗顾问团队随时准备为您解答疑问。免费咨询，让您的生育计划有个明确的开始。
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">微信咨询 (WeChat)</h4>
                  <p className="text-slate-600 mb-1">医疗顾问1：<span className="font-medium text-slate-900">haydonge</span></p>
                  <p className="text-slate-600">医疗顾问2：<span className="font-medium text-slate-900">bellaliuliu</span></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">电话联系</h4>
                  <p className="text-slate-600">我们提供24小时紧急咨询热线支持。</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">全球服务网点</h4>
                  <p className="text-slate-600">格鲁吉亚 · 吉尔吉斯斯坦 · 哈萨克斯坦 · 乌克兰</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">在线留言咨询</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">姓名</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="您的称呼"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">联系电话/微信</label>
                  <input 
                    type="text" 
                    id="phone" 
                    name="contact"
                    inputMode="tel"
                    autoComplete="tel"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="您的联系方式"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">感兴趣的目的地</label>
                <select 
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                >
                  <option value="">请选择...</option>
                  <option value="georgia">格鲁吉亚</option>
                  <option value="kyrgyzstan">吉尔吉斯斯坦</option>
                  <option value="kazakhstan">哈萨克斯坦</option>
                  <option value="ukraine">乌克兰</option>
                  <option value="other">还不确定，需要建议</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">具体情况描述（选填）</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="请简要描述您的需求，以便我们更好地为您服务..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                提交咨询请求
              </button>
              <p className="text-xs text-slate-500 text-center mt-4">
                提交即表示您同意我们的隐私政策，我们将严格保护您的个人信息安全。
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
