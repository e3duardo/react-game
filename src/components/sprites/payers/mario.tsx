import { Ref } from 'react';
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

   transition: .2s all linear;
   transition: .2s all linear;

   @keyframes animation-mr {
     100% { 
       background-position-x: ${bgPos[1].x}px;
       background-position-y: ${bgPos[1].y}px;
     }
   }
 `

function Mario({ x, y, innerRef }: { x: number, y: number, innerRef: Ref<HTMLDivElement> }) {
  //
  return <Container className='mario' ref={innerRef} style={{ left: x, bottom: y }}  />;
}


export default Mario;