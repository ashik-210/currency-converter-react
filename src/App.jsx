import React, { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { Inputbox } from './components/index.js';

const App = () => {

  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState('usd');
  const [to, setto] = useState('inr');
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setfrom(to);
    setto(from);
    setconvertedAmount(amount);
    setamount(convertedAmount);
  }

  const convert = () => {
    const result = amount * currencyInfo[to];
    setconvertedAmount(Number(result.toFixed(2)));
  }

  return (
    <div className='w-full min-h-screen flex flex-wrap items-center bg-cover bg-no-repeat bg-center px-4 sm:px-0'
      style={{ backgroundImage: `url(https://i.pinimg.com/736x/10/43/3c/10433c98906331e048c4a9d7cff10e3a.jpg)` }}>

      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border-gray-60 rounded-lg p-4 sm:p-5 backdrop-blur-sm bg-white/30'>

          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>

            <div>
              <Inputbox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => { setfrom(currency) }}
                onAmountChange={(amount) => { setamount(amount) }}
                selectedCurrency={from}
              />
            </div>
            <div className='relative h-0.5 w-full my-2 sm:my-0'>
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >Swap</button>
            </div>
            <div>
              <Inputbox
                label="to"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => { setto(currency) }}
                selectedCurrency={to}
                amountDisabled={true}
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 px-4 py-3 text-white rounded-lg mt-3'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>

        </div>
      </div>

    </div>
  )
}

export default App