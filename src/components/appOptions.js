import React,{useState} from 'react'
import Authen from './Authen'



export default function AppOptions(){
    const[etValue,setValue]=useState(1);


    function submitOption(){

    }


    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value)
      };

      const handle1=()=>{

      }
      const handle2=()=>{
        
      }

      const handle3=()=>{
        
      }
      const handle4=()=>{
        
      }
   
    return (
        <div>
        <Authen className="authenButton"/>

        <hr/>
         <button onClick={handle1}>1</button><br/>
         <button onClick={handle2}>2</button><br/>
         <button onClick={handle3}>3</button><br/>
         <button onClick={handle4}>4</button><br/>
         <hr/>
          <button onClick={submitOption}>Go</button>
        </div>
    )
}
