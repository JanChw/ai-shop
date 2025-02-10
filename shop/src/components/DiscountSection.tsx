import { createSignal, onCleanup, onMount, For } from 'solid-js';

interface Discount {
  title: string;
  description: string;
  image: string;
  endTime: number;
}

function DiscountSection() {
  const [timeLeft, setTimeLeft] = createSignal(24 * 60 * 60); // 24小时倒计时
  const [currentSlide, setCurrentSlide] = createSignal(0);
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
      <h2 class="text-2xl font-bold mb-4">优惠专区</h2>
      <div class="relative overflow-hidden">
        <div class="flex transition-transform duration-300" style={`transform: translateX(-${currentSlide() * 100}%)`}>
          <For each={discounts}>
            {(discount: Discount) => (
              <div class="min-w-full">
                <img src={discount.image} alt={discount.title} class="w-full h-48 object-cover rounded-lg" />
                <div class="mt-2">
                  <h3 class="font-semibold">{discount.title}</h3>
                  <p class="text-sm text-gray-500">{discount.description}</p>
                </div>
              </div>
            )}
          </For>
        </div>
        <div class="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
          <For each={discounts}>
            {(_, index: () => number) => (
              <button
                class={`w-2 h-2 rounded-full ${index() === currentSlide() ? 'bg-blue-500' : 'bg-gray-300'}`}
                onClick={() => setCurrentSlide(index())}
              />
            )}
          </For>
        </div>
      </div>
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-500">优惠截止时间：</p>
        <p class="font-semibold">{formatTime(timeLeft())}</p>
      </div>
    </section>
  );
}

export default DiscountSection;