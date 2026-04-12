import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">
          <div>
            <span className="text-2xl font-bold text-white mb-4 block">GeoIVF</span>
            <p className="text-sm leading-relaxed">
              专业海外代孕与试管婴儿服务平台。致力于为您提供安全、合法、透明的生育解决方案。
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">快捷链接</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#top" className="hover:text-white transition-colors">首页</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">服务项目</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">价格套餐</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">法律声明</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#top" className="hover:text-white transition-colors">隐私政策</a></li>
              <li><a href="#top" className="hover:text-white transition-colors">服务条款</a></li>
              <li><a href="#top" className="hover:text-white transition-colors">免责声明</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} GeoIVF. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#top" className="hover:text-white transition-colors">友链: 吉尔吉斯斯坦代孕网</a>
            <a href="#top" className="hover:text-white transition-colors">哈萨克斯坦代孕网</a>
            <a href="#top" className="hover:text-white transition-colors">乌克兰代孕官网</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
