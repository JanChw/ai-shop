import { Component } from 'solid-js'

const Orders: Component = () => {
  const orders = [
    {
      id: 1,
      status: '已发货',
      image: 'https://picsum.photos/100/100?random=1',
      name: '鸡汤',
      price: 21
    },
    {
      id: 2,
      status: '待发货',
      image: 'https://picsum.photos/100/100?random=2',
      name: '藕汤',
      price: 23
    }
  ]

  return (
    <div>
      <h2 class="text-xl font-bold mb-4">我的订单</h2>
      <div class="space-y-4">
        {orders.map(order => (
          <div class="flex items-center p-4 bg-gray-50 rounded-lg">
            <img 
              src={order.image}
              alt={order.name}
              class="w-16 h-16 rounded-lg mr-4"
            />
            <div class="flex-1">
              <h3 class="font-medium">{order.name}</h3>
              <p class="text-sm text-gray-600">¥{order.price}</p>
            </div>
            <div class="ml-4">
              <span class="text-sm text-gray-600">{order.status}</span>
            </div>
            <div class="ml-4 space-x-2">
              <button class="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg">
                查看详情
              </button>
              <button class="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-lg">
                删除订单
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders