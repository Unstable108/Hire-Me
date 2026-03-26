import { useState } from 'react'
import ContentA from './components/contentA';
import ContentB from './components/contentB';
import './App.css'

function App() {
  const [isAltView, setIsAltView]= useState(false);

  return (
    <>
      <div >
        <button onClick={()=>setIsAltView(!isAltView)}>change</button>
        {isAltView}
      </div>
      {!isAltView ? <ContentA/> : <ContentB/>}
    </>
  )
}

export default App
