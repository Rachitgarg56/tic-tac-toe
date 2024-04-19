import React from 'react'
import Box from './Box';

const arr = [];

for (let i = 1; i <= 18; i++) {
    arr.push(i);
    arr.push(i);
}

console.log(arr);

const Matrix = () => {
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:'1rem'}}>
        {
            arr.map((num,idx)=>{
                return <Box key={idx} num={num} />
            })
        }
    </div>
  )
}

export default Matrix
