import { createSignal, For } from 'solid-js';

interface FoodItem {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}

interface FoodRecommendationProps {
  class?: string
}

function FoodRecommendation(props: FoodRecommendationProps) {
  const [selectedCategory, setSelectedCategory] = createSignal('全部');
  const [visibleItems, setVisibleItems] = createSignal(6);
  
  const foods: FoodItem[] = [
    {
      id: 1,
      name: '宫保鸡丁',
      image: 'https://picsum.photos/300/200?random=9',
      price: 28,
      category: '中餐'
    },
    {
      id: 2,
      name: '意大利面',
      image: 'https://picsum.photos/300/200?random=10',
      price: 32,
      category: '西餐'
    },
    {
      id: 3,
      name: '寿司拼盘',
      image: 'https://picsum.photos/300/200?random=11',
      price: 45,
      category: '日料'
    },
    {
      id: 4,
      name: '汉堡套餐',
      image: 'https://picsum.photos/300/200?random=12',
      price: 25,
      category: '快餐'
    },
    {
      id: 5,
      name: '提拉米苏',
      image: 'https://picsum.photos/300/200?random=13',
      price: 18,
      category: '甜品'
    },
    {
      id: 6,
      name: '麻辣香锅',
      image: 'https://picsum.photos/300/200?random=14',
      price: 38,
      category: '中餐'
    }
  ];

  const filteredFoods = () => 
    selectedCategory() === '全部'
      ? foods
      : foods.filter(food => food.category === selectedCategory());

  const visibleFoods = () => filteredFoods().slice(0, visibleItems());

  const loadMore = () => {
    setVisibleItems(prev => prev + 6);
  };

  return (
    <section class="px-4 py-8 mb-[73px]">
      <header class='flex space-between'>
        <h2 class="text-2xl font-bold mb-4">美食推荐</h2>
        {visibleFoods().length < filteredFoods().length && (
          <button
            class="mt-4 w-full bg-gray-100 text-gray-700 py-2 rounded-full hover:bg-gray-200 transition-colors"
            onClick={loadMore}
          >
            加载更多
          </button>
      )}
      </header>
      
      <div class="grid grid-cols-2 gap-4">
        <For each={visibleFoods()}>
          {(food) => (
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={food.image} alt={food.name} class="w-full h-32 object-cover" />
              <div class="p-2">
                <h3 class="font-semibold">{food.name}</h3>
                <p class="text-sm text-gray-500">¥{food.price}</p>
              </div>
            </div>
          )}
        </For>
      </div>
      {visibleFoods().length < filteredFoods().length && (
        <button
          class="mt-4 w-full bg-gray-100 text-gray-700 py-2 rounded-full hover:bg-gray-200 transition-colors"
          onClick={loadMore}
        >
          加载更多
        </button>
      )}
    </section>
  );
}

export default FoodRecommendation;