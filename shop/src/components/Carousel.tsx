import { createSignal, onCleanup, onMount } from 'solid-js'

interface CarouselProps {
  effect?: string
}

function Carousel(props: CarouselProps) {
  const images = [
    'https://picsum.photos/400/600?random=1',
    'https://picsum.photos/400/600?random=2',
    'https://picsum.photos/400/600?random=3'
  ]
  const [currentIndex, setCurrentIndex] = createSignal(0)
  let carouselRef: HTMLDivElement

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // 自动轮播
  let interval = setInterval(nextSlide, 5000)
  onCleanup(() => clearInterval(interval))

  // 手势滑动
  let startX = 0
  let isDragging = false

  const handleTouchStart = (e: TouchEvent) => {
    startX = e.touches[0].clientX
    isDragging = true
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = startX - currentX
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
      isDragging = false
    }
  }

  onMount(() => {
    carouselRef.addEventListener('touchstart', handleTouchStart)
    carouselRef.addEventListener('touchmove', handleTouchMove)
  })

  onCleanup(() => {
    carouselRef.removeEventListener('touchstart', handleTouchStart)
    carouselRef.removeEventListener('touchmove', handleTouchMove)
  })

  return (
    <div class={`relative w-full px-4 aspect-[3/4] h-48 overflow-hidden ${props.effect}`} ref={carouselRef!}>
      <div class="relative h-full w-full rounded-lg overflow-hidden">
        <div
          class="absolute inset-0 flex transition-transform duration-500"
          style={`width: ${images.length * 100}%; transform: translateX(-${currentIndex() * (100 / images.length)}%)`}
        >
          {images.map((img) => (
            <div class="w-full h-full flex-shrink-0" style={`width: ${100 / images.length}%`}>
              <img src={img} alt="Carousel" class="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* 圆点指示器 */}
      <div class="absolute bottom-4 right-6 flex space-x-2">
        {images.map((_, index) => (
          <div
            class={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex() ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel