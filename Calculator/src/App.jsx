import Display from './components/Display'
import styles from './App.module.css'
import Buttonscontainer from './components/Buttonscontainer'
import { useState } from 'react'
 
function App(){

   let [calval,setcalval]=useState("");


   const changeval=(event)=>{
       
       
       if(event.target.innerText==='=')
       {
         let result= eval(calval)
         setcalval(result)

       }

       else if(event.target.innerText==='C')
       {
        setcalval("")
       }
       else
       {
        let newval=event.target.innerText
        newval=calval+newval
        setcalval(newval)
       }
   }

  return (
   <div className={styles.calculator}>
   <Display calval={calval}></Display>
    <Buttonscontainer calval={calval} changeval={changeval}></Buttonscontainer>
   </div>
  )
}
export default App
