 import { Component } from 'solid-js'

const Profile: Component = () => {
  return (
    <div>
      <h2 class="text-xl font-bold mb-4">个人信息</h2>
      <div class="space-y-4">
        <div class="p-4 bg-gray-50 rounded-lg">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            用户名
          </label>
          <input
            type="text"
            value="张三"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="p-4 bg-gray-50 rounded-lg">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            手机号
          </label>
          <input
            type="tel"
            value="13800138000"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="p-4 bg-gray-50 rounded-lg">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            邮箱
          </label>
          <input
            type="email"
            value="zhangsan@example.com"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button class="w-full py-3 bg-blue-600 text-white rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors">
          保存修改
        </button>
      </div>
    </div>
  )
}

export default Profile