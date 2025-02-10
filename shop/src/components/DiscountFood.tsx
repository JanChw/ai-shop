
import { onCleanup, onMount, For, createSignal } from 'solid-js'

interface Discount {
    title: string;
    description: string;
    image: string;
    endTime: number;
  }

  interface DiscountFoodProps {
    class?: string
  }

function DiscountFood(props: DiscountFoodProps) {
    const [timeLeft, setTimeLeft] = createSignal(24 * 60 * 60); // 24小时倒计时
    const discounts: Discount[] = [
        {
          title: '限时特惠',
          description: '全场商品8折优惠',
          image: 'https://picsum.photos/300/200?random=7',
          endTime: Date.now() + 24 * 60 * 60 * 1000
        },
        {
          title: '买一送一',
          description: '指定商品买一送一',
          image: 'https://picsum.photos/300/200?random=8',
          endTime: Date.now() + 12 * 60 * 60 * 1000
        }
      ];
  // 倒计时逻辑
  onMount(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    onCleanup(() => clearInterval(timer));
  });

  // 格式化时间
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m}:${s}`;
  };

  return (
    <section class="px-4 py-8">
      <div class='flex justify-between'>
        <h2 class="text-2xl font-bold mb-4">今日优惠</h2>
        <div class='text-red-400'>
            <p class="text-sm">优惠截止时间：</p>
            <p class="font-semibold">{formatTime(timeLeft())}</p>
        </div>
      </div>
      <div class="relative">
        <div class="overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div class="flex gap-4 pb-4" style="width: max-content;">
            <For each={discounts}>
              {(discount) => (
                <div class="w-64 flex-shrink-0 snap-center">
                  <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="relative">
                      <img
                        src={discount.image}
                        alt={discount.title}
                        class="w-full h-40 object-cover"
                      />
                      <div class="w-full absolute top-2 px-2 flex justify-between">
                        <button class="p-1.5 bg-white/80 rounded-full backdrop-blur hover:bg-white transition-colors group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="size-6 stroke-gray-500 group-hover:stroke-red-500 transition-colors">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

                        </button>
                        <button class="p-1.5 bg-white/80 rounded-full backdrop-blur hover:bg-white transition-colors group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="size-6 stroke-gray-500 group-hover:stroke-blue-500 transition-colors">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
                        </button>
                      </div>
                    </div>
                    <div class="p-3">
                      <div class="text-center">
                        <h3 class="font-semibold">{discount.title}</h3>
                        {/* <p class="text-sm text-gray-500">{discount.price}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>

    </section>
  )
}

export default DiscountFood