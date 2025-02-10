import { createSignal } from 'solid-js'

interface TodaySpecialProps {
  class?: string
}

function TodaySpecial(props: TodaySpecialProps) {
  const [isHovered, setHovered] = createSignal(false)
  const [currentFood, setCurrentFood] = createSignal(0)
  const [isAnimating, setAnimating] = createSignal(false)

  const foods = [
    {
      id: 1,
      name: '香辣鸡翅套餐',
      description: '外酥里嫩，香辣过瘾，搭配清爽可乐，完美组合！',
      image: 'https://picsum.photos/300/200?random=15'
    },
    {
      id: 2,
      name: '芝士汉堡套餐',
      description: '浓郁芝士，多汁肉饼，搭配香脆薯条，满足你的味蕾！',
      image: 'https://picsum.photos/300/200?random=16'
    },
    {
      id: 3,
      name: '炸鸡桶套餐',
      description: '金黄酥脆，鲜嫩多汁，搭配冰爽啤酒，聚会必备！',
      image: 'https://picsum.photos/300/200?random=17'
    },
    {
      id: 4,
      name: '牛肉披萨套餐',
      description: '香浓芝士，丰富配料，搭配新鲜沙拉，意式风情！',
      image: 'https://picsum.photos/300/200?random=18'
    }
  ]

  const getRandomFood = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * foods.length)
    } while (newIndex === currentFood())
    return newIndex
  }

  const handleClick = () => {
    setAnimating(true)
    setTimeout(() => {
      setCurrentFood(getRandomFood())
      setAnimating(false)
    }, 300)
  }

  return (
    <section class="px-4 py-8">
      <h2 class="text-2xl font-bold mb-4">今日吃啥</h2>
      <div
        class="relative rounded-lg overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={foods[currentFood()].image}
          alt="今日特别推荐"
          class={`w-full h-64 object-cover transition-all duration-300 ${
            isHovered() ? 'scale-105' : ''
          } ${isAnimating() ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        />
        <div class="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
          <h3 class="text-white text-xl font-semibold mb-2">{foods[currentFood()].name}</h3>
          <p class="text-white/80 text-sm">{foods[currentFood()].description}</p>
        </div>
      </div>

      <div class='flex justify-around'>
        <button
          class="mt-4 w-1/3 bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 active:scale-95 transition-all"
          onClick={handleClick}
        >
          今日吃啥
        </button>
        
        <button
          class="mt-4 w-1/3 bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 active:scale-95 transition-all"
        >
          吃了你
        </button>
      </div>
    </section>
  )
}

export default TodaySpecial