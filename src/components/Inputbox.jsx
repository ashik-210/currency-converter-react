import React, { useId } from 'react'

const Inputbox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) => {

  const id = useId();

  const handleAmountChange = (e) => {
    let value = e.target.value;

    // remove leading zeros like 010, 0112 -> 10, 112 (but allow "0" and "0.5")
    if (value.length > 1 && value.startsWith('0') && value[1] !== '.') {
      value = value.replace(/^0+/, '') || '0';
    }

    onAmountChange && onAmountChange(Number(value));
  };

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex flex-col sm:flex-row gap-2 sm:gap-0 ${className}`}>
      <div className='w-full sm:w-1/2'>
        <label htmlFor={id} className='text-black/40 inline-block mb-2'>{label}</label>
        <input
          id={id}
          type="number"
          step="0.01"
          min="0"
          className='outline-none w-full bg-transparent py-1.5 text-base sm:text-sm'
          placeholder='Amount'
          disabled={amountDisabled}
          value={amount}
          onChange={handleAmountChange}
        />
      </div>

      <div className='w-full sm:w-1/2 flex flex-wrap justify-start sm:justify-end text-left sm:text-right'>
        <p className='text-black/40 w-full mb-2'>Currency Type</p>
        <select
          className='rounded-lg px-2 py-1.5 bg-gray-100 cursor-pointer outline-none w-full sm:w-auto'
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value)
          }}
          disabled={currencyDisabled}
        >
          {
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default Inputbox