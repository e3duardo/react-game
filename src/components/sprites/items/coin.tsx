import styled from 'styled-components'

import tileset from '../../../assets/tileset.png'

const blockSize = 16;
const bgx = 24;
const bgy = 1;

const bgPos = {
  normal: [
    { x: bgx * blockSize * -1, y: bgy * blockSize * -1 },
    { x: (bgx+1) * blockSize * -1, y: bgy * blockSize * -1 },
    { x: (bgx+2) * blockSize * -1, y: bgy * blockSize * -1 }
  ],
  darkwall: [
    { x: 24 * blockSize * -1, y: 3 * blockSize * -1 },
    { x: (24+1) * blockSize * -1, y: 3 * blockSize * -1 },
    { x: (24+2) * blockSize * -1, y: 3 * blockSize * -1 }
  ]
}

type Variant = keyof typeof bgPos;

const Container = styled.div<{variant: Variant}>`
  background-image: url(${tileset});
  background-position-x: ${props => bgPos[props.variant][0].x}px;
  background-position-y: ${props => bgPos[props.variant][0].y}px;
  background-repeat: no-repeat;
  position: absolute;
  width: 16px;
  height: 16px;
  animation-timing-function: steps(1);
  animation-name: animation-cn;
  animation-duration: .40s;
  animation-iteration-count: infinite;

  @keyframes animation-cn {
    0% { 
      background-position-x: ${props => bgPos[props.variant][0].x}px;
      background-position-y: ${props => bgPos[props.variant][0].y}px;
    }
    50% { 
      background-position-x: ${props => bgPos[props.variant][1].x}px;
      background-position-y: ${props => bgPos[props.variant][1].y}px;
    }
    100% { 
      background-position-x: ${props => bgPos[props.variant][2].x}px;
      background-position-y: ${props => bgPos[props.variant][2].y}px;
    }
  }
`

function Coin({ x, y, size = 1, variant='normal' }: { x: number, y: number, size?: number, variant?: Variant }): JSX.Element {
  return <>
    {[...Array(size)].map((n, i) => (
      <Container className='brick' style={{ left: x * 16, bottom: (y + i) * 16 }} variant={variant} />
    ))}
  </>
}


export default Coin;