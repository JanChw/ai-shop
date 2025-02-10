import { Component, createEffect, createSignal, Show } from 'solid-js'

interface ConfirmProps {
  message: string
  status?: string
  onConfirm: () => void
  onCancel: () => void
}

const Confirm: Component<ConfirmProps> = (props) => {
    let [status, setStatus] = createSignal('text-green-500')
    createEffect(() => setStatus(props.status??'text-green-500'))
  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div class='bg-white rounded-lg shadow-lg p-6 max-w-sm w-full'>
        <p class={`mb-4 ${status()}`}>{props.message}</p>
        <div class="flex justify-end space-x-3">
          <button
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={props.onCancel}
          >
            取消
          </button>
          <button
            class={`px-4 py-2 bg-gray-200  rounded hover:bg-gray-300 ${status()}`}
            onClick={props.onConfirm}
          >
            确定
          </button>
        </div>
      </div>
    </div>
  )
}

export default Confirm