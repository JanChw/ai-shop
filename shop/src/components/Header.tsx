import { createSignal } from 'solid-js'
import logo from '../assets/logo.jpg'
import avater from '../assets/user.png'
import { useNavigate } from '@solidjs/router';

interface HeaderProps {
  class?: string;
  toggleSidebar: () => void;
}

function Header(props: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = createSignal(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen());
    props.toggleSidebar();
  };
  
  const handleSearch = (e: KeyboardEvent | MouseEvent) => {
    e.preventDefault();
    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
    const searchTerm = input.value.trim();
    if (searchTerm) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <header class='w-full mb-4'>
      <div class='flex items-center justify-between p-4 bg-white shadow-md relative z-50 flex-grow'>
      
        <div class="flex items-center cursor-pointer" onClick={toggleSidebar}>
          <img src={logo} alt="Logo" class="h-9 mr-1" />
        </div>

        <div class='mx-3 transition-all duration-300 flex-grow relative'>
          <input
            type="text"
            placeholder="搜索..."
            class="w-full pl-4 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={handleKeyDown}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleSearch}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
     

      <div class="flex items-center cursor-pointer" onClick={() => navigate('/mine')}>
        <img src={avater} alt="User" class="w-8 h-8 rounded-full" />
        {/* <span class="ml-2 text-sm">欢迎回来</span> */}
      </div>
      </div>
    </header>
  )
}

export default Header