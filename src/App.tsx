import './App.css'

import ProfileCard from './Components/ProfileCard'
import PricingCard from './Components/Pricing/Pricing'

function App() {
  return (
    <main className="app">
      <div className="left-container">
        <ProfileCard />
      </div>
      <div className="right-container">
        <PricingCard />
      </div>
    </main>
  )
}

export default App
