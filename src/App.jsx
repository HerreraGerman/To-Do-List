import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <>
      <div>
      <h1>Ger/Mane To-Do List</h1>
      <div class="AddBar"><input></input> <button>Add</button></div>
      <ul>
        <li>
          <input type="checkbox"></input>
          Task N
          <button class="delete">🗑️</button>
        </li>
        <li>
          <input type="checkbox"></input>
          Task Nº1
          <button class="delete">🗑️</button>
        </li>
        <li>
          <input type="checkbox"></input>
          <del>Completed Task Nº2</del>
          <button class="delete">🗑️</button>
        </li>
        <li>
          <input type="checkbox"></input>
          Task K
          <button class="delete">🗑️</button>
        </li>
        <li>
          <input type="checkbox"></input>
          Task 2
          <button class="delete">🗑️</button>
        </li>
        <li>
          <input type="checkbox"></input>
          <del>Completed Task Nº1</del>
          <button class="delete">🗑️</button>
        </li>
      </ul>
      </div>
    </>
  )
}

export default App