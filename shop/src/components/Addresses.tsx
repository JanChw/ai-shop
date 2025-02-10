import { Component } from 'solid-js'

const Addresses: Component = () => {
  const addresses = [
    {
      id: 1,
      address: '北京市朝阳区建国路88号',
      contact: '张三',
      phone: '13800138000'
    },
    {
      id: 2,
      address: '上海市浦东新区世纪大道100号',
      contact: '李四',
      phone: '13900139000'
    }
  ]

  return (
    <div>
      <h2 class="text-xl font-bold mb-4">地址管理</h2>
      <div class="space-y-4">
        {addresses.map(address => (
          <div class="p-4 bg-gray-50 rounded-lg">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium">{address.address}</p>
                <p class="text-sm text-gray-600">
                  {address.contact} | {address.phone}
                </p>
              </div>
              <button class="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg">
                编辑
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Addresses