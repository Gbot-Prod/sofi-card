import { useState } from 'react'
import './Pricing.css'

const priceOptions = [
  { name: 'Budget Friendly', price: 'PHP 2,700', quantity: '25 edited photos', time: '1 hour shoot', description: 'A simple, easy session for quick portraits or a focused concept.' },
  { name: 'Starter', price: 'PHP 5,000', quantity: '40 edited photos', time: '2 hour shoot', description: 'A balanced package for personal branding, couples, or small lifestyle sets.' },
  { name: 'Standard', price: 'PHP 8,000', quantity: '80 edited photos', time: '4 hour shoot', description: 'More room for outfit changes, locations, and a fuller story from the day.' },
  { name: 'Full Creative Production', price: 'PHP 15,000', quantity: '100+ edited photos', time: 'Half-day shoot', description: 'A complete creative session with moodboard planning and styling direction.' },
]

const additionalServices = [
  { name: 'Short videos (Fully Edited / 30-60 seconds)', price: 'PHP 1,00' },
  { name: 'Duo session (2 people)', price: 'PHP 500' },
  { name: 'Small group (3-5 people)', price: 'PHP 1,500-2,500' },
]

function PricingCard() {
  const [selectedIndex, setSelectedIndex] = useState(1)
  const selectedOption = priceOptions[selectedIndex]

  return (
    <section className="pricing-card">
      <div className="pricing-header">
        <p className="eyebrow">Packages</p>
        <h2 className="header-title">Pricing</h2>
      </div>

      <div className="options" aria-label="Choose a package">
        {priceOptions.map((option, index) => (
          <button
            className={`price-button ${selectedIndex === index ? 'active' : ''}`}
            key={option.name}
            onClick={() => setSelectedIndex(index)}
            type="button"
          >
            {option.name}
          </button>
        ))}
      </div>

      <article className="selected-package">
        <div>
          <p className="package-name">{selectedOption.name}</p>
          <p className="package-price">{selectedOption.price}</p>
        </div>
        <p className="package-description">{selectedOption.description}</p>
        <dl className="package-details">
          <div>
            <dt>Includes</dt>
            <dd>{selectedOption.quantity}</dd>
          </div>
          <div>
            <dt>Session</dt>
            <dd>{selectedOption.time}</dd>
          </div>
        </dl>
      </article>

      <div className="add-ons">
        <h3>Add-ons</h3>
        <ul>
          {additionalServices.map((service) => (
            <li key={service.name}>
              <span>{service.name}</span>
              <strong>{service.price}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PricingCard
