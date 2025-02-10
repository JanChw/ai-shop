import { Component, createSignal, onMount } from 'solid-js'

const Explore: Component = () => {
  const categories = ['早点', '蒸菜', '蒸肉', '小吃', '藕汤', '饮品']
  const [selectedCategory, setSelectedCategory] = createSignal(categories[0])
  const [items, setItems] = createSignal<any[]>([])
  const [loading, setLoading] = createSignal(false)
  const [page, setPage] = createSignal(1)

  const loadMore = async () => {
    if (loading()) return
    setLoading(true)
    // 模拟加载更多数据
    const newItems = Array.from({ length: 6 }).map((_, i) => ({
      id: i + page() * 6,
      name: `商品 ${i + page() * 6}`,
      image: `https://picsum.photos/300/200?random=${i + page() * 6}`,
      category: selectedCategory()
    }))
    setItems(prev => [...prev, ...newItems])
    setPage(prev => prev + 1)
    setLoading(false)
  }

  onMount(() => {
    loadMore()
  })

  return (
    <div class="overflow-hidden max-w-md mx-auto">
      {/* 食品分类标签 */}
      <div class="flex overflow-x-auto px-4 py-2 space-x-4 scrollbar-hide">
        {categories.map(category => (
          <button
            class={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory() === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => {
              setSelectedCategory(category)
              setItems([])
              setPage(1)
              loadMore()
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 商品展示区域 */}
      <div
        class="grid grid-cols-2 gap-4 p-4 overflow-y-auto h-[calc(100vh-120px)]"
        onScroll={(e) => {
          const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
          if (scrollHeight - scrollTop - clientHeight < 50) {
            loadMore()
          }
        }}
      >
        {items().map((item, index) => (
          <div
            class="bg-white rounded-lg shadow animate-fade-in-up"
            style={`animation-delay: ${index * 50}ms`}
          >
            <img
              src={item.image}
              alt="商品图片"
              class="w-full h-40 object-cover rounded-t-lg"
            />
            <div class="p-2">
              <h3 class="text-lg font-medium">{item.name}</h3>
              <div class="flex space-x-2 mt-2">
                <button class="flex-1 py-2 bg-gray-100 rounded-lg group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="size-6 stroke-gray-500 group-hover:stroke-blue-500 transition-colors mx-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                </button>
                <button class="flex-1 py-2 bg-gray-100 rounded-lg group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="size-6 stroke-gray-500 group-hover:stroke-red-500 transition-colors mx-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
        {loading() && (
          <div class="col-span-2 flex justify-center py-4">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Explore