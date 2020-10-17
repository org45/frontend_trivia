import React,{useState} from 'react'
import { Radio, Input } from 'antd';

export default function AppOptions(){
    const[etValue,setValue]=useState(1);


    function submitOption(){

    }


    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value)
      };


    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };
    return (
        <div>
           <Radio.Group onChange={onChange} value={etValue}>
          <Radio style={radioStyle} value={"min45"}>
            45 minutes
          </Radio>
          <Radio style={radioStyle} value={"hrs2"}>
            2 hrs
          </Radio>
          <Radio style={radioStyle} value={"hrs4"}>
            4 hrs
          </Radio>
          <Radio style={radioStyle} value={"hrs6"}>
            6 hrs
          </Radio>
        </Radio.Group>
            <button onClick={submitOption}>Go</button>
        </div>
    )
}
