import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './styles/App.css';
import Title from './components/title';
import InputBar from './components/inputBar';
import Task from './components/task'

function App() {

  return (
    <>
      <div>
      <Title title={'Ger/Mane To-Do List'}></Title>
      <InputBar></InputBar>
      <ul>
        <Task task={'Task N'}></Task>
        <Task task={'Task Nº1'}></Task>
        <Task task={'Completed Task Nº2'}></Task>
        <Task task={'Task K'}></Task>
        <Task task={'Task 2'}></Task>
        <Task task={'Completed Task Nº1'}></Task>
      </ul>
      </div>
    </>
  )
}

export default App