import React, { useEffect, useState } from 'react'

const Block = ({isCross,toggleIsCross,blockIdx,blocks,setBlocks,crossWins,setCrossWins,zeroWins,setZeroWins,draws,setDraws,status,setStatus,clicks,setClicks}) => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setBlocks((prev)=>{
            const newBlocks = [...prev];
            newBlocks[blockIdx] = isCross?'X':'O';
            // console.log(newBlocks);
            return newBlocks
        })
        setClicked((prev) => !prev);
        toggleIsCross();
        setClicks(clicks+1);
    }

    const checkAnyWins = (blocks) => {
        // rowscheck
        for (let i=0; i<blocks.length; i+=3) {
            if (blocks[i] === null) continue;
            else {
                if (blocks[i] === blocks[i+1] && blocks[i] === blocks[i+2]) {
                    return blocks[i];
                }
            }
        }

        // colscheck
        for (let i=0; i<3; i++) {
            if (blocks[i] === null) continue;
            else {
                if (blocks[i] === blocks[i+3] && blocks[i] === blocks[i+6]) {
                    return blocks[i];
                }
            }
        }

        // firstDiagonalCheck
        if (blocks[0] !== null) {
            if (blocks[0] === blocks[4] && blocks[0] === blocks[8]) {
                return blocks[0];
            }
        }

        // secondDiagonalCheck
        if (blocks[2] !== null) {
            if (blocks[2] === blocks[4] && blocks[2] === blocks[6]) {
                return blocks[2];
            }
        }

        return null
    }

    useEffect(() => {

        let mounted = true;
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i] !== null) {
                mounted = false;
                break;
            }
        }
        if (mounted) setClicked(false);

        const winner = checkAnyWins(blocks);
        if (winner === 'X') {
            setCrossWins(crossWins+1)
            setStatus('Winner X')
        } else if (winner === 'O') {
            setZeroWins(zeroWins+1)
            setStatus('Winner O')
        } 

        if (clicks === 9) {
            setDraws(draws+1)
            setStatus('Draw');
        }
    },[blocks])

  return (
    <div className='block' onClick={()=>!clicked && handleClick()}>
      {clicked ? blocks[blockIdx] : ''}
    </div>
  )
}

export default Block
