import { Component, createSignal, Show } from 'solid-js'
import Confirm from '../components/Confirm'

interface CartItem {
  name: string
  price: number
  image: string
  quantity: number
}

const Cart: Component = () => {
  const [showConfirm, setShowConfirm] = createSignal(false)
  const [confirmIndex, setConfirmIndex] = createSignal<number | null>(null)
  const [items, setItems] = createSignal([
  
    { name: '鸡汤', price: 21, image: 'https://picsum.photos/200/200?random=1', quantity: 1 },
    { name: '藕汤', price: 23, image: 'https://picsum.photos/200/200?random=2', quantity: 1 },
    { name: '粉蒸排骨', price: 23, image: 'https://picsum.photos/200/200?random=3', quantity: 1 },
    { name: '炒豆皮', price: 13, image: 'https://picsum.photos/200/200?random=4', quantity: 1 }
  ])

  const handleConfirmRemove = (index: number) => {
    setItems(prev => {
      const newItems = [...prev]
      newItems.splice(index, 1)
      return newItems
    })
    setShowConfirm(false)
  }

  const updateQuantity = (index: number, delta: number) => {
    setItems(prev => {
      const newItems = [...prev]
      const newQuantity = newItems[index].quantity + delta
      if (newQuantity < 0) return prev
      if (newQuantity === 0) {
        setConfirmIndex(index)
        setShowConfirm(true)
        return prev
      }
      newItems[index].quantity = newQuantity
      return newItems
    })
  }

  const total = () => items().reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItems = () => items().reduce((sum, item) => sum + item.quantity, 0)


  return (
    <div class="min-h-screen bg-base-200 p-4">
      {/* 商品列表 */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {items().map((item: CartItem, index: number) => (
          <div class="card bg-base-100 shadow-sm">
            <div class="card-body">
              <div class="flex items-center">
                <figure>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    class="w-16 h-16 rounded-lg object-cover"
                  />
                </figure>
                <div class="ml-4 flex-1">
                  <h3 class="card-title">{item.name}</h3>
                  <p class="text-gray-600">¥{item.price}</p>
                </div>
              </div>
              <div class="card-actions justify-end">
                <div class="join">
                  <button 
                    class="btn btn-sm join-item"
                    onClick={() => updateQuantity(index, -1)}
                  >
                    -
                  </button>
                  <span class="btn btn-sm join-item no-animation">
                    {item.quantity}
                  </span>
                  <button 
                    class="btn btn-sm join-item"
                    onClick={() => updateQuantity(index, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 总计区域 */}
      <div class="card bg-base-100 mt-6 p-4 shadow-sm">
        <div class="flex justify-between">
          <span class="text-gray-600">一共</span>
          <span class="font-bold">{totalItems()}份</span>
        </div>
        <div class="flex justify-between mt-2">
          <span class="text-gray-600">共花费</span>
          <span class="text-xl font-bold text-primary">¥{total()}</span>
        </div>
      </div>

      {/* 购买按钮 */}
      <button class="btn btn-primary w-full mt-6">
        购买
      </button>

      {/* 确认对话框 */}
      <Show when={showConfirm() && confirmIndex() !== null}>
        <Confirm
          status='text-error'
          message="确定要移除该商品吗？"
          onConfirm={() => handleConfirmRemove(confirmIndex()!)}
          onCancel={() => setShowConfirm(false)}
        />
      </Show>
    </div>
  )

}

export default Cart