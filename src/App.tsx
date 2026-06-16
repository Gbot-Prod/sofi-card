import { useState } from 'react'
import './App.css'

import ProfileCard from './Components/ProfileCard'
import PricingCard from './Components/Pricing/Pricing'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <main className="app flex h-screen">
        <div className="left-container w-1/3">
          <ProfileCard />
        </div>
        <div className="right-container w-2/3">
          <PricingCard />
        </div>
      </main>
    </>
  )
}

export default App
