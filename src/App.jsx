import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import { BsFillQuestionCircleFill } from "react-icons/bs";

function App() {
  const [duration, setDuration] = useState(0)
  const [price, setPrice] = useState(0)
  const [dpPercentage, setDpPercentage] = useState(0)
  const [downPayment, setDownPayment] = useState(0)
  const [inflationPercentage, setInflationPercentage] = useState(0)

  return (
    <>
      <Header />
      <div className="max-w-lg mx-auto px-0 py-6 px-6 md:px-0">
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">You want to achieve your dreams</span>
            <div className="tooltip" data-tip="How many more years you want to buy your dream property.">
              <BsFillQuestionCircleFill />
            </div>
          </label>
          <input type="text" placeholder="How many years to go" className="input input-bordered w-full" />
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Current price of your dream property</span>
          </label>
          <label className="input-group">
            <span>Rp</span>
            <input type="text" className="input input-bordered w-full" />
          </label>
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">% down payment you want to pay of</span>
          </label>
          <label className="input-group">
            <input type="text" className="input input-bordered w-full" />
            <span>%</span>
          </label>
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Your Down Payment is equivalent to</span>
          </label>
          <label className="input-group">
            <span>Rp</span>
            <input type="text" className="input input-bordered  w-full" />
          </label>
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Property inflation assumptions are</span>
          </label>
          <label className="input-group">
            <input type="text" className="input input-bordered w-full" />
            <span>%/Year</span>
          </label>
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">The total money you will need in 5 years to pay the down payment is</span>
            <div className="tooltip" data-tip="Due to inflation every year, this affects the price of your dream property.">
              <BsFillQuestionCircleFill />
            </div>
          </label>
          <label className="input-group">
            <span>Rp</span>
            <input type="text" className="input input-bordered  w-full" />
          </label>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
