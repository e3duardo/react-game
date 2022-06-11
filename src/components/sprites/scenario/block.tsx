import styled from 'styled-components'

import tileset from '../../../assets/tileset.png'

const blockSize = 16;
const bgx = 0;
const bgy = 1;

const bgPos = [
  { x: bgx * blockSize * -1, y: bgy * blockSize * -1 }
]

const Container = styled.div`
   background-image: url(${tileset});
   background-position-x: ${bgPos[0].x}px;
   background-position-y: ${bgPos[0].y}px;
   background-repeat: no-repeat;
   position: absolute;
   width: 16px;
   height: 16px;
   z-index: 2;
 `

function Block({ x, y, size = 1 }: { x: number, y: number, size?: number  }) {
  return <>
    {[...Array(size)].map((n, i) => (
      <Container className='block' style={{ left: x * 16, bottom: (y + i) * 16 }}  key={i}/>
    ))}
  </>
}


export default Block;