import styled from 'styled-components'

import tileset from '../../../assets/tileset.png'

const blockSize = 16;
const bgx = 1;
const bgy = 0;

const bgPos = {
  normal: [
    { x: bgx * blockSize * -1, y: bgy * blockSize * -1 }
  ],
  darkwall: [
    { x: 2 * blockSize * -1, y: 2 * blockSize * -1 }
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
   z-index: 2;
 `

function Brick({ x, y, size = 1, variant='normal' }: { x: number, y: number, size?: number, variant?: Variant }): JSX.Element {
  return <>
    {[...Array(size)].map((n, i) => (
      <Container className='brick' style={{ left: x * 16, bottom: (y + i) * 16 }} variant={variant} key={i}/>
    ))}
  </>
}


export default Brick;