import { Component, createSignal, Show } from 'solid-js'
import Orders from '../components/Orders'
import Addresses from '../components/Addresses'
import Profile from '../components/Profile'

const Mine: Component = () => {
  const [activeTab, setActiveTab] = createSignal('orders')

  return (
    <div class="min-h-screen bg-base-200 p-4">
      {/* 头部区域 */}
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center">
          <div class="avatar">
            <div class="w-12 rounded-full">
              <img src="/src/assets/user.png" alt="用户头像" />
            </div>
          </div>
          <span class="text-lg font-medium ml-3">张三</span>
        </div>

        {/* 标签切换 */}
        <div class="tabs tabs-boxed">
          <button
            class={`tab ${activeTab() === 'orders' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            订单
          </button>
          <button
            class={`tab ${activeTab() === 'addresses' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('addresses')}
          >
            地址管理
          </button>
          <button
            class={`tab ${activeTab() === 'profile' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            个人信息
          </button>
        </div>
      </div>

      {/* 内容区域 */}
      <div class="card bg-base-100 shadow-xl p-6">
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