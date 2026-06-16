import './Pricing.css'

const priceOptions = [
  { name: 'Budget Friendly', price: '$2,700', quantity: '25 edited photos', time: '1-2 hour shoots', description: 'Ideal for those on a tight budget who still want high-quality photos.' },
  { name: 'Starter', price: '$5,000', quantity: '30 edited photos', time: '2-3 hour shoots', description: 'Perfect for individuals looking for a balanced package.' },
  { name: 'Standard', price: '$8,000', quantity: '80 edited photos', time: '3-4 hour shoots', description: 'Great for larger projects or those who need a substantial number of edited photos.' },
  { name: 'Full Creative Production', price: '$15,000', quantity: '100+ edited photos', time: 'half day shoots', description: 'Comprehensive solution for extensive creative needs. inclusive of moodboard/styling' },
]

const additionalServices = [
  { name: 'Short Videos (30-60 seconds)', price: '$1,500' },
  { name: 'duo (2 people)', price: '₱500' },
  { name: 'Small Group (3-5 people)', price: '₱1,500-₱2,500' }
]

function PricingCard() {
  return (
    <div className="pricing-card flex flex-col p-8">
      <div className="pricing-header flex items-center justify-center mb-4">
        <h1 className="header-title">Pricing</h1>
      </div>
      <div className="pricing-options flex flex-col gap-4">
        <div className="options flex items-center justify-center gap-4">
          <button className="priceButton">Budget Friendly</button>
          <button className="priceButton">Starter</button>
          <button className="priceButton">Standard</button>
          <button className="priceButton">Full Creative Production</button>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;