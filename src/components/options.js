import React,{useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import io from "socket.io-client";

const ENDPOINT = "http://localhost:5000";
let socket = io(ENDPOINT);



export default function Options() {
    const [answerOption1,setAnswerOption1]=useState([])
    const [answerOption2,setAnswerOption2]=useState([])
    const [answerOption3,setAnswerOption3]=useState([])
    const [answerOption4,setAnswerOption4]=useState([])

    var [aValue, setAnswer] = useState({ personalInfo: {}, answer: 0 });

    useEffect(() => {
      socket.on("screenAns", (input) => {
        setAnswer(()=>(JSON.parse(input)));
      });
      console.log(aValue);
     
    }, []);



    useEffect(() => {
        console.log(answerOption1)
    switch(aValue.answer){
        case 1:
            setAnswerOption1([...answerOption1,aValue])
            break;
        case 2:
            setAnswerOption2([...answerOption2,aValue])
            break;
        case 3:
            setAnswerOption3([...answerOption3,aValue])

            break;
        case 4:
            setAnswerOption4([...answerOption4,aValue])

            break;
        }
      }, [aValue]);



    return (
        <div>
            <ul>
                <li key={1}>
                    <p>Nepal</p>
                        <ul>{answerOption1.map((item,index)=>(
                            <li key={uuidv4()}>{item.personalInfo.givenName}</li>
                        ))}
                        </ul>
                </li>
                <li key={2}>
                    <p>India</p>
                    <ul>{answerOption2.map((item,index)=>(
                            <li key={uuidv4()}>{item.personalInfo.givenName}</li>
                        ))}
                        </ul>
                </li>
                <li key={3}>
                    <p>China</p>
                    <ul>{answerOption3.map((item,index)=>(
                            <li key={uuidv4()}>{item.personalInfo.givenName}</li>
                        ))}
                        </ul>
                </li>
                <li key={4}>
                    <p>Philipines</p>
                    <ul>{answerOption4.map((item,index)=>(
                            <li key={uuidv4()}>{item.personalInfo.givenName}</li>
                        ))}
                        </ul>
                </li>
            </ul>
        </div>
    )
}
