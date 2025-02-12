import { Component } from 'solid-js';

const Intro: Component = () => {
  return (
    <div class="px-[5%] py-6 space-y-6">
      {/* 头部区域 */}
      <header class="text-center">
        <h1 class="text-2xl font-bold">XX商店</h1>
        <div class="divider"></div>
      </header>

      {/* 核心信息区 */}
      <div class="space-y-6">
        {/* 简介段落 */}
        <section class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <p class="text-base leading-relaxed">
              【XX商店】创立于2014年，专注手工烘焙与咖啡文化。所有原料均采用本地有机农场直供，每日现做现售。
            </p>
          </div>
        </section>

        {/* 地址模块 */}
        <section class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <h2 class="flex items-center text-lg font-medium mb-2">
              <span class="mr-1">📍</span>
              门店地址
            </h2>
            <div class="text-sm space-y-1">
              <p>北京市朝阳区三里屯路1号院A座101室</p>
              <p>（近地铁10号线团结湖站D口）</p>
            </div>
          </div>
        </section>

        {/* 营业时间 */}
        <section class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <h2 class="flex items-center text-lg font-medium mb-2">
              <span class="mr-1">⏰</span>
              营业时间
            </h2>
            <div class="text-sm space-y-1">
              <p>6:00 AM --- 21:00 PM</p>
            </div>
          </div>
        </section>

        {/* 微信模块 */}
        <section class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <h2 class="flex items-center text-lg font-medium mb-2">
              <span class="mr-1">💬</span>
              联系客服
            </h2>
            <div class="space-y-2">
              <div class="bg-base-200 w-[120px] h-[120px] mx-auto rounded-lg flex items-center justify-center">
                <span class="text-sm text-gray-500">二维码占位</span>
              </div>
              <p class="text-sm text-center">
                扫码添加店主微信，获取新品通知与专属优惠
              </p>
              <p class="text-xs text-gray-500 text-center">
                长按二维码保存至相册，通过微信扫一扫识别
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Intro;