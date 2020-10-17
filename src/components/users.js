import React,{useState} from 'react'

function Users(){

    const [scoreMo,setScoreMo]=useState(0);
    const [scoreL,setScoreL]=useState(0);
    const [scoreMa,setScoreMa]=useState(0);
    const [scoreR,setScoreR]=useState(0);


    return (
        <div>
        <ul>
                <li key={1}>
                <Name value="Mo"/>   
                <Wedge score={scoreMo}/> 
                </li>
                <li key={2}>
                <Name value="Lu"/>   
                <Wedge score={scoreL}/> 

                </li>
                <li key={3}>
                <Name value="Ma"/> 
                <Wedge score={scoreMa}/> 

                    
                </li>
                <li key={4}>
                <Name value="Rj"/> 
                <Wedge score={scoreR}/> 

                    
                </li>
        </ul>
            
        </div>
    );
};

export default Users;


function Name(props){
    return(
        <p>{props.value}</p>
    )
}

function Wedge(props){
    return(
        <p>{props.score}</p>
    )
}