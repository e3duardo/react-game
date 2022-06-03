import styled from 'styled-components'

import mario from '../../../assets/mario.png'

const blockSize = 16;

const bgPos = [
  { x: 5 * blockSize * -1, y: 2.125 * blockSize * -1 },
  { x: 5 * blockSize * -1, y: 2.125 * blockSize * -1 }
]

const Container = styled.div`
   background-image: url(${mario});
   background-position-x: ${bgPos[0].x}px;
   background-position-y: ${bgPos[0].y}px;
   background-repeat: no-repeat;
   position: absolute;
   width: 16px;
   height: 16px;
   animation-timing-function: steps(2);
   animation-name: animation-mr;
   animation-duration: .40s;
   animation-iteration-count: infinite;
   z-index: 7;

   @keyframes animation-mr {
     100% { 
       background-position-x: ${bgPos[1].x}px;
       background-position-y: ${bgPos[1].y}px;
     }
   }
 `

function Mario({ x, y }: { x: number, y: number }) {
  return <Container className='mario' style={{ left: x * 16, bottom: y * 16 }} />;
}


export default Mario;