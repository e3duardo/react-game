import styled from 'styled-components'

import enemies from '../../../assets/enemies.png'

const blockSize = 16;

const bgPos = [
  { x: 6 * blockSize * -1, y: .5 * blockSize * -1 },
  { x: (2+6) * blockSize * -1, y: .5 * blockSize * -1 },
]

const Container = styled.div`
   background-image: url(${enemies});
   background-position-x: ${bgPos[0].x}px;
   background-position-y: ${bgPos[0].y}px;
   background-repeat: no-repeat;
   position: absolute;
   width: 16px;
   height: 24px;
   animation-timing-function: steps(2);
   animation-name: animation-kt;
   animation-duration: .40s;
   animation-iteration-count: infinite;
   z-index: 5;

  @keyframes animation-kt {
     100% { 
       background-position-x: ${bgPos[1].x}px;
       background-position-y: ${bgPos[1].y}px;
     }
   }
`

function KoopaTropa({ x, y }:{ x: number, y: number }) {
  return (<Container className='koopa-tropa' style={{ left: x * 16, bottom: y * 16 }} />);
} 


export default KoopaTropa;