import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <vue2-message msg="vue2 50"></vue2-message>
      <vue3-message msg="vue3 50"></vue3-message>
      <div className="hello">
        这是vite项目，通过class='hello'设置了2像素的蓝色边框。<br/>
        下面是通过prop传入的文本，通过h1标签样式设置了蓝色字体
        <h1>vite react</h1>    
      </div>
    </div>
  )
}

export default App
