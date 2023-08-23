import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import { BsFillQuestionCircleFill } from "react-icons/bs";

function App() {
  const [duration, setDuration] = useState(0)
  const [price, setPrice] = useState(0)
  const [dpPercentage, setDpPercentage] = useState(0)
  const [downPayment, setDownPayment] = useState(0)
  const [inflationPercentage, setInflationPercentage] = useState(5)
  const [downPaymentFinal, setDownPaymentFinal] = useState(0)

  const calculateDownPayment = (price, dpPercentage) => {
    return setDownPayment(price * (dpPercentage / 100))
  }

  const calculateDownPaymentFinal = (price, dpPercentage, duration, inflationPercentage) => {
    let dpFinal = price;

    for (let i = 0; i < duration; i++) {
      dpFinal *= 1 + (inflationPercentage / 100);
    }

    dpFinal *= dpPercentage / 100;
    return setDownPaymentFinal(dpFinal);
  }

  const formatToRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(number);
  }

  const handlePriceInput = (e) => {
    const inputValue = e.target.value;
    const numericInput = inputValue.replace(/[^0-9]/g, '');
    setPrice(numericInput);
  };

  useEffect(() => {
    calculateDownPayment(price, dpPercentage)
    calculateDownPaymentFinal(price, dpPercentage, duration, inflationPercentage)
    console.log(downPayment)
    console.log(downPaymentFinal)
  }, [duration, price, dpPercentage, downPayment, inflationPercentage, downPaymentFinal])

  return (
    <>
      <div className='max-w-lg mx-auto px-4 py-4 px-6 md:px-6 bg-white'>
        <Header />
        <div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">You want to achieve your dreams</span>
              <div className="tooltip" data-tip="How many more years you want to buy your dream property.">
                <BsFillQuestionCircleFill />
              </div>
            </label>
            <label className="input-group shadow">
              <input type="number" className="input input-bordered input-primary w-full" value={duration} onInput={(e) => setDuration(e.target.value)} />
              <span className='bg-primary'>Years</span>
            </label>
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Current price of your dream property</span>
            </label>
            <label className="input-group">
              <span className='bg-primary'>Rp</span>
              <input type="text" className="input input-bordered input-primary w-full" value={formatToRupiah(price)} onInput={handlePriceInput} />
            </label>
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">% Down Payment you want to pay of</span>
            </label>
            <label className="input-group">
              <input type="number" className="input input-bordered input-primary w-full" value={dpPercentage} onInput={(e) => setDpPercentage(e.target.value)} />
              <span className='bg-primary'>%</span>
            </label>
            <label className="label">
              <span className="label-text-alt">*Input 100% if you want to pay in full.</span>
            </label>
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Your Down Payment is equivalent to</span>
            </label>
            <label className="input-group">
              <span className='bg-primary'>Rp</span>
              <input type="text" className="input input-bordered input-primary w-full" value={formatToRupiah(downPayment)} disabled />
            </label>
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Property inflation assumptions are</span>
              <div className="tooltip" data-tip="Inflation can be defined as a general and continuous increase in the prices of goods and services over a period of time.">
                <BsFillQuestionCircleFill />
              </div>
            </label>
            <label className="input-group">
              <input type="number" className="input input-bordered input-primary w-full" value={inflationPercentage} onInput={(e) => setInflationPercentage(e.target.value)} />
              <span className='bg-primary'>%/Year</span>
            </label>
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">The total money you will need in <span className='font-bold decoration-primary'>{duration}</span> years to pay the down payment is</span>
              <div className="tooltip" data-tip="Due to inflation every year, this affects the price of your dream property.">
                <BsFillQuestionCircleFill />
              </div>
            </label>
            <label className="input-group">
              <span className='bg-primary'>Rp</span>
              <input type="text" className="input input-bordered input-primary w-full" value={formatToRupiah(downPaymentFinal.toFixed(0))} disabled />
            </label>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
