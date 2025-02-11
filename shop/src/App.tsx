import { Component, JSX } from 'solid-js'
import { Router, Route } from '@solidjs/router'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Cart from './pages/Cart'
import Mine from './pages/Mine'
import Search from './pages/Search'
import BottomNav from './components/BottomNav'
import './App.css'

const Layout: Component<{ children: JSX.Element }> = (props) => {
  return (
    <div class="flex flex-col h-full">
      <main class="flex-1 pt-0 fade-in-up">
        {props.children}
      </main>
      
      {/* 底部导航 */}
      <BottomNav />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Route path="/" component={() => (
        <Layout>
          <Home />
        </Layout>
      )} />
      <Route path="/explore" component={() => (
        <Layout>
          <Explore />
        </Layout>
      )} />
      <Route path="/cart" component={() => (
        <Layout>
          <Cart />
        </Layout>
      )} />
      <Route path="/mine" component={() => (
        <Layout>
          <Mine />
        </Layout>
      )} />
      <Route path="/search" component={() => (
        <Layout>
          <Search />
        </Layout>
      )} />
    </Router>
  )
}

export default App
