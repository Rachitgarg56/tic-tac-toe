// import { useRef } from "react";
// import { useReducer } from "react";
import TicTacToe from "./TicTacToe";

// import Task from "./Task";

export default function App() {

  // const reducer = (state,action) => {
  //   if (action.type === 'color') {
  //     switch (action.payload) {
  //       case 1:
  //         return {
  //           ...state,
  //           one: true
  //         }
  //       case 2:
  //       return {
  //         ...state,
  //         two: true
  //       }
  //       case 3:
  //       return {
  //         ...state,
  //         three: true
  //       }
  //       case 4:
  //       return {
  //         ...state,
  //         four: true
  //       }
  //       case 5:
  //       return {
  //         ...state,
  //         five: true
  //       }
  //       case 6:
  //       return {
  //         ...state,
  //         six: true
  //       }
  //       case 7:
  //       return {
  //         ...state,
  //         seven: true
  //       }
  //       case 8:
  //       return {
  //         ...state,
  //         eight: true
  //       }
  //       case 9:
  //       return {
  //         ...state,
  //         nine: true
  //       }
  //       default:
  //         return state;
  //     }
  //   } else {
  //     return {
  //       one:false,two:false,three:false,four:false,five:false,six:false,seven:false,eight:false,nine:false
  //     }
  //   }
  // }

  // const [state,dispatch] = useReducer(reducer,{one:false,two:false,three:false,four:false,five:false,six:false,seven:false,eight:false,nine:false})

  // const inputRef = useRef(null);

  // const handleColorMe = () => {
  //   const num = parseInt(inputRef.current.value);
  //   dispatch({type: 'color', payload: num})
  // }

  // const handleClearMe = () => {
  //   dispatch({type: 'clear'})
  //   inputRef.current.value = '';
  // }

  return (
    
    <TicTacToe/>

    // <Task/>

    // <div style={{display:'flex', justifyContent:'center', padding:'5rem'}}>
    //   <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
    //     <input ref={inputRef} type="number" />

    //     <div style={{display:'flex', justifyContent:'space-between'}}>
    //       <button onClick={handleColorMe}>Color me</button>
    //       <button onClick={handleClearMe}>Clear me</button>
    //     </div>
        
    //     <div style={{display:"grid", gridTemplateColumns:'repeat(3,1fr)', height:'100px'}}>
    //       <div style={{border:'1px solid black', textAlign:'center', backgroundColor: state.one ? 'red' : ''}}>1</div>
    //       <div style={{border:'1px solid black', textAlign:'center', backgroundColor: state.two ? 'red' : ''}}>2</div>
    //       <div style={{border:'1px solid black', textAlign:'center', backgroundColor: state.three ? 'red' : ''}}>3</div>
    //       <div style={{border:'1px solid black', textAlign:'center', backgroundColor: state.four ? 'red' : ''}}>4</div>
    //       <div style={{border:'1px solid black', textAlign:'center', backgroundColor: state.five ? 'red' : ''}}>5</div>
    //       <div style={{border:'1px solid black', textAlign:'center', backgroundColor: state.six ? 'red' : ''}}>6</div>
    //       <div style={{border:'1px solid black', textAlign:'center', backgroundColor: state.seven ? 'red' : ''}}>7</div>
    //       <div style={{border:'1px solid black', textAlign:'center', backgroundColor: state.eight ? 'red' : ''}}>8</div>
    //       <div style={{border:'1px solid black', textAlign:'center', backgroundColor: state.nine ? 'red' : ''}}>9</div>
    //     </div>
    //   </div>
    // </div>
  );
}
