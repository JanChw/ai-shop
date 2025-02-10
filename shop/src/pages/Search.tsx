import { createSignal } from 'solid-js'
import Header from '../components/Header'

function Search() {
  const [searchTerm, setSearchTerm] = createSignal('')

  return (
    <div>
      <Header />
      <main class="flex-grow p-4">
        <h1 class="text-2xl font-bold mb-4">搜索结果</h1>
        <p>搜索词：{searchTerm()}</p>
      </main>
    </div>
  )
}

export default Search