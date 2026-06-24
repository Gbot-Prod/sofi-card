import React, { useState } from 'react';

import './App.css'

import ProfileCard from './Components/ProfileCard'
import PricingCard from './Components/Pricing/Pricing'
import ContactCard from './Components/ContactCard'

function App() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <main className="app">
      <div className="left-container">
        <ProfileCard onOpenContact={() => setModal(true)} />
      </div>
      <div className="right-container">
        <PricingCard />
      </div>

      {modal && (
        <ContactCard onClose={() => setModal(false)} />
      )}

    </main>
  )
}

export default App
