import { createSignal } from 'solid-js'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import TodaySpecial from '../components/TodaySpecial'
import NewProducts from '../components/NewProducts'
import DiscountFood from '../components/DiscountFood'
import FoodRecommendation from '../components/FoodRecommendation'
import Intro from '../components/Intro'
function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = createSignal(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen());
  };
  return (
    <div class="overflow-hidden">
      <Header toggleSidebar={toggleSidebar} />
      <div class='flex flex-row'>
        {/* 侧边栏 */}
      <div class={`h-device-max bg-white shadow-lg transform transition-transform duration-300 z-40 ${
        isSidebarOpen() ? 'translate-x-0' : '-translate-x-full'
      }`} >
        <div class={`p-4 ${isSidebarOpen() ? 'visible' : 'hidden'}`} style='width:100vw'>
          <Intro />
        </div>
      </div>
      
      <main class={`transition-all duration-300 mt-6 ${isSidebarOpen() ? 'ml-device-max' : 'ml-0'}`}  style='width:100vw;'>
        <Carousel class="animate-fade-in-up" />
        <TodaySpecial class="animate-fade-in-up" />
        <NewProducts class="animate-fade-in-up" />
        <DiscountFood class="animate-fade-in-up" />
        <FoodRecommendation class="animate-fade-in-up" />
      </main>
      </div>
    </div>
  )
}

export default Home

