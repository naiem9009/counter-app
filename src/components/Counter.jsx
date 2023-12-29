import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)
    const [countValue, setCountValue] = useState(1)
    const [inputValue, setInputValue] = useState(1)
    const [loading, setLoading] = useState(false)

    const increment = () => {
        setCount(count+countValue)
    }

    const async_increment = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setCount(count + countValue)
        }, 1000)

        
    }

    const async_decrement = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setCount(count - countValue)
        }, 1000)

        
    }

    const decrement = () => {

        if (count <= 0) {
            return alert("don't click again decrement button")
        }
        setCount(count-countValue)
    }

    const reset = () => {
        setCount(0)
        setCountValue(1)
        setInputValue(1)
    }



  return (
    <div>

        {!loading && (
            <div className='flex flex-row gap-2 justify-center'>
                <h1 className='text-gray-500 text-6xl font-bold text-center'>{count}</h1>
                <h1 className='text-gray-500 text-sm font-bold text-center'>{countValue}</h1>
            </div>
        )}

        {loading && (<h1>Loading ....</h1>)}

        <div className='flex flex-row gap-5 items-center my-10'>
            <button onClick={increment} className='bg-green-500 px-8 py-3 text-white rounded-md'>Increment</button>

            <button onClick={decrement} className='bg-red-500 px-8 py-3 text-white rounded-md'>Decrement</button>

            <button onClick={reset} className='bg-gray-400 px-8 py-3 text-white rounded-md'>Reset</button>
        </div>

        <div>
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="number" className='border h-10 px-2 mr-3' />
            <button onClick={() => setCountValue(Number(inputValue))} className='bg-green-500 px-8 py-3 text-white rounded-md'>Set</button>
        </div>

        <div>
            <button onClick={async_increment} className='bg-green-500 px-8 py-3 text-white rounded-md mr-5 mt-5'>Async Increment</button>
            <button onClick={async_decrement} className='bg-red-500 px-8 py-3 text-white rounded-md'>Async Decrement</button>
        </div>
    </div>
  )
}

export default Counter