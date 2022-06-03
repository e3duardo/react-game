import styled from 'styled-components'

import tileset from '../../../assets/tileset.png'

const blockSize = 16;
const bgx = 24;
const bgy = 0;

const bgPos = [
  { x: bgx * blockSize * -1, y: bgy * blockSize * -1 },
  { x: (bgx+1) * blockSize * -1, y: bgy * blockSize * -1 },
  { x: (bgx+2) * blockSize * -1, y: bgy * blockSize * -1 },
  { x: (bgx+3) * blockSize * -1, y: bgy * blockSize * -1 },
]

const Container = styled.div`
   background-image: url(${tileset});
   background-position-x: ${bgPos[0].x}px;
   background-position-y: ${bgPos[0].y}px;
   background-repeat: no-repeat;
   position: absolute;
   width: 16px;
   height: 16px;
   animation-timing-function: steps(1);
   animation-name: animation-qs;
   animation-duration: .40s;
   animation-iteration-count: infinite;

   @keyframes animation-qs {
    0% { 
       background-position-x: ${bgPos[0].x}px;
       background-position-y: ${bgPos[0].y}px;
     }
     33% { 
       background-position-x: ${bgPos[1].x}px;
       background-position-y: ${bgPos[1].y}px;
     }
     66% { 
       background-position-x: ${bgPos[2].x}px;
       background-position-y: ${bgPos[2].y}px;
     }
     100% { 
       background-position-x: ${bgPos[3].x}px;
       background-position-y: ${bgPos[3].y}px;
     }
   }
 `

function Question({ x, y, hide }: { x: number, y: number, hide?: boolean }) {
  return <Container className='question' style={{ left: x * 16, bottom: y * 16, opacity: hide ? 0.5 : 1 }} />;
}


export default Question;