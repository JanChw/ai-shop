import { Component, createSignal, Show } from 'solid-js'
import Orders from '../components/Orders'
import Addresses from '../components/Addresses'
import Profile from '../components/Profile'

const Mine: Component = () => {
  const [activeTab, setActiveTab] = createSignal('orders')

  return (
    <div class="min-h-screen bg-primary-color p-4">
      {/* 头部区域 */}
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center">
          <img 
            src="/src/assets/user.png" 
            alt="用户头像"
            class="w-12 h-12 rounded-full mr-3"
          />
          <span class="text-lg font-medium">张三</span>
        </div>

        {/* 标签切换 */}
        <div class="flex space-x-4">
          <button
            class={`px-4 py-2 rounded-lg ${
              activeTab() === 'orders' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700'
            }`}
            onClick={() => setActiveTab('orders')}
          >
            订单
          </button>
          <button
            class={`px-4 py-2 rounded-lg ${
              activeTab() === 'addresses' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700'
            }`}
            onClick={() => setActiveTab('addresses')}
          >
            地址管理
          </button>
          <button
            class={`px-4 py-2 rounded-lg ${
              activeTab() === 'profile' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            个人信息
          </button>
        </div>
      </div>

      {/* 内容区域 */}
      <div class="bg-white rounded-lg shadow p-6">
        <Show when={activeTab() === 'orders'}>
          <Orders />
        </Show>

        <Show when={activeTab() === 'addresses'}>
          <Addresses />
        </Show>

        <Show when={activeTab() === 'profile'}>
          <Profile />
        </Show>
      </div>
    </div>
  )
}

export default Mine