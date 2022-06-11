import { Ref } from 'react';
import styled from 'styled-components'

import enemies from '../../../assets/enemies.png'

const blockSize = 16;

const bgPos = [
  { x: 0 * blockSize * -1, y: 1 * blockSize * -1 },
  { x: (2+0) * blockSize * -1, y: 1 * blockSize * -1 }
]

const Container = styled.div`
   background-image: url(${enemies});
   background-position-x: ${bgPos[0].x}px;
   background-position-y: ${bgPos[0].y}px;
   background-repeat: no-repeat;
   position: absolute;
   width: 16px;
   height: 16px;
   animation-timing-function: steps(2);
   animation-name: animation-gb;
   animation-duration: .40s;
   animation-iteration-count: infinite;
   z-index: 5;
   transition: .2s all linear;

   @keyframes animation-gb {
     100% { 
       background-position-x: ${bgPos[1].x}px;
       background-position-y: ${bgPos[1].y}px;
     }
   }
 `

function Gomba({ x, y, innerRef }: { x: number, y: number, innerRef?: Ref<HTMLDivElement> }) {
  return <Container className='gomba' style={{ left: x * 16, bottom: y * 16 }} ref={innerRef} />;
}


export default Gomba;