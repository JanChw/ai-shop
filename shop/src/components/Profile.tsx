import { Component } from 'solid-js'

const Profile: Component = () => {
  return (
    <div>
      <h2 class="text-xl font-bold mb-4">个人信息</h2>
      <div class="space-y-4">
        <div class="card bg-base-100 p-4">
          <label class="label">
            <span class="label-text">用户名</span>
          </label>
          <input
            type="text"
            value="张三"
            class="input input-bordered w-full"
          />
        </div>

        <div class="card bg-base-100 p-4">
          <label class="label">
            <span class="label-text">手机号</span>
          </label>
          <input
            type="tel"
            value="13800138000"
            class="input input-bordered w-full"
          />
        </div>

        <div class="card bg-base-100 p-4">
          <label class="label">
            <span class="label-text">邮箱</span>
          </label>
          <input
            type="email"
            value="zhangsan@example.com"
            class="input input-bordered w-full"
          />
        </div>

        <button class="btn btn-primary w-full">
          保存修改
        </button>
      </div>
    </div>
  )
}

export default Profile