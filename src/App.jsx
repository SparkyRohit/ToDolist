import React from 'react'

const App = () => {
  return (
    <div>
      <h1 className='bg-blue-500 text-white flex content-center justify-center text-5xl font-bold shadow-lg'>
        SPARKY TODOLIST
      </h1>

      <ul>
        <li>
        </li>
      </ul>

      <textarea className='border-2 shadow-sm text-2xl font-semibold' cols="100" rows="2" placeholder='Enter your task'></textarea>
    </div>
  )
}

export default App