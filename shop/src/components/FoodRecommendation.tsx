import { createSignal, For } from 'solid-js';

interface FoodItem {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}

interface FoodRecommendationProps {
  effect?: string;
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
    <section class={`px-4 py-8 mb-[73px] ${props.effect}`}>
      <h2 class="text-2xl font-bold">美食推荐</h2>
      <header class="flex justify-between items-center mb-4">
      
        <div class="tabs tabs-boxed">
          {['全部', '中餐', '西餐', '日料', '快餐', '甜品'].map(category => (
            <button
              class={`tab ${selectedCategory() === category ? 'tab-active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <div class="grid grid-cols-2 gap-4">
        <For each={visibleFoods()}>
          {(food) => (
            <div class="card bg-base-100 shadow-sm">
              <figure>
                <img src={food.image} alt={food.name} class="w-full h-32 object-cover" />
              </figure>
              <div class="card-body p-4">
                <h3 class="card-title text-sm">{food.name}</h3>
                <p class="text-sm text-gray-500">¥{food.price}</p>
              </div>
            </div>
          )}
        </For>
      </div>

      {visibleFoods().length < filteredFoods().length && (
        <button
          class="btn btn-ghost w-full mt-4"
          onClick={loadMore}
        >
          加载更多
        </button>
      )}
    </section>
  );
}

export default FoodRecommendation;