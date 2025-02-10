import { Component } from 'solid-js';

const Intro: Component = () => {
  return (
    <div class="px-[5%] py-6 space-y-6">
      {/* 头部区域 */}
      <header class="text-center">
        <h1 class="text-2xl font-bold">XX商店</h1>
        <div class="h-px bg-gray-300 mt-2"></div>
      </header>

      {/* 核心信息区 */}
      <div class="space-y-6">
        {/* 简介段落 */}
        <section>
          <p class="text-base leading-relaxed">
            【XX商店】创立于2014年，专注手工烘焙与咖啡文化。所有原料均采用本地有机农场直供，每日现做现售。
          </p>
        </section>

        {/* 地址模块 */}
        <section>
          <h2 class="flex items-center text-lg font-medium mb-2">
            <span class="mr-1">📍</span>
            门店地址
          </h2>
          <div class="text-sm space-y-1">
            <p>北京市朝阳区三里屯路1号院A座101室</p>
            <p>（近地铁10号线团结湖站D口）</p>
          </div>
        </section>

        {/* 营业事件 */}
        <section>
          <h2 class="flex items-center text-lg font-medium mb-2">
            <span class="mr-1">📍</span>
            营业时间
          </h2>
          <div class="text-sm space-y-1">
            <p>6:00 AM --- 21:00 PM</p>
          </div>
        </section>

        {/* 微信模块 */}
        <section>
          <h2 class="flex items-center text-lg font-medium mb-2">
            <span class="mr-1">💬</span>
            联系客服
          </h2>
          <div class="space-y-2">
            <div class="bg-gray-100 w-[120px] h-[120px] mx-auto">
              {/* 二维码占位区 */}
            </div>
            <p class="text-sm text-center">
              扫码添加店主微信，获取新品通知与专属优惠
            </p>
            <p class="text-xs text-gray-500 text-center">
              长按二维码保存至相册，通过微信扫一扫识别
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Intro;