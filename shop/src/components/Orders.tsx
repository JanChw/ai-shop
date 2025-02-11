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
  <div class="card bg-base-100 shadow-sm p-4">
    <div class="flex flex-row justify-between">
      <figure>
        <img 
          src={order.image}
          alt={order.name}
          class="w-24 h-24 rounded-lg"
        />
      </figure>
      <div class="text-center mt-2">
        <h3 class="card-title">{order.name}</h3>
        <p class="text-sm text-base-content/60">¥{order.price}</p>
      </div>
    </div>
    <div class="card-actions justify-around items-center mt-4">
      <span class="badge badge-outline">{order.status}</span>
      <button class="btn btn-sm btn-ghost text-primary">查看详情</button>
      <button class="btn btn-sm btn-ghost text-error">删除订单</button>
    </div>
  </div>
))}

      </div>
    </div>
  )
}

export default Orders