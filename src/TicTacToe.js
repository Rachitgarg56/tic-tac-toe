import React, { useState } from 'react'
import './TicTacToe.css'
import Block from './Block'

const TicTacToe = () => {

    const [isCross, setIsCross] = useState(true);
    const [blocks,setBlocks] = useState(Array(9).fill(null));

    const [clicks,setClicks] = useState(0);

    const [crossWins, setCrossWins] = useState(0);
    const [zeroWins, setZeroWins] = useState(0);
    const [draws, setDraws] = useState(0);
    const [status, setStatus] = useState('Playing');

    const toggleIsCross = () => {
        setIsCross((prev) => !prev);
    }

    const handleRematch = () => {
        setBlocks(Array(9).fill(null));
        setStatus('Playing')
        setClicks(0);
        setIsCross(true);
    }

  return (
    <div className='container'>
        <div>
            <h1>Tic Tac Toe</h1>

            <h2 style={{textAlign:'center'}}>Status: {status === 'Playing' ? 'Playing' : (status)}</h2>

            <div className='result'>
                <div>
                    <p style={{textAlign:'center'}}>X</p>
                    <p>{crossWins} Wins</p>
                </div>
                <div>
                    <p style={{textAlign:'center'}}>O</p>
                    <p>{zeroWins} Wins</p>
                </div>
                <div>
                    <p style={{textAlign:'center'}}>=</p>
                    <p>{draws} Draws</p>
                </div>
            </div>

            <div className='playground'>
                {
                    blocks.map((block,i)=>{
                        return <Block key={i} setBlocks={setBlocks} blocks={blocks} blockIdx={i} isCross={isCross} toggleIsCross={toggleIsCross} crossWins={crossWins} setCrossWins={setCrossWins} zeroWins={zeroWins} setZeroWins ={setZeroWins} draws={draws} setDraws={setDraws} status={status} setStatus={setStatus} clicks={clicks} setClicks={setClicks}/>
                    })
                }
            </div>

            <button onClick={handleRematch} className='rematch'>Rematch</button>
        </div>
    </div>
  )
}

export default TicTacToe
