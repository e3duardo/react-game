import styled from 'styled-components'

import tileset from '../../../assets/tileset.png'

const blockSize = 16;
const bgx = 11;
const bgy = 9;

const bgPos = [
  { x: bgx * blockSize * -1, y: bgy * blockSize * -1 },
  { x: (bgx + 1) * blockSize * -1, y: bgy * blockSize * -1 },
  { x: (bgx + 2) * blockSize * -1, y: bgy * blockSize * -1 },
]

const Container = styled.div<{ size: number }>`
   position: absolute;
   width: ${props => (props.size * 16) + 32}px;
   height: 16px;
 `

const Part = styled.div`
  background-image: url(${tileset});
  background-repeat: no-repeat;
  position: absolute;
  width: 16px;
  height: 16px;
`
const Left = styled(Part)`
  background-position-x: ${bgPos[0].x}px;
  background-position-y: ${bgPos[0].y}px;
  top: 0;
  left: 0;
`
const Middle = styled(Part) <{ step: number }>`
  background-position-x: ${bgPos[1].x}px;
  background-position-y: ${bgPos[1].y}px;
  top: 0;
  left: ${props => props.step * 16}px;
`
const Right = styled(Part)`
  background-position-x: ${bgPos[2].x}px;
  background-position-y: ${bgPos[2].y}px;
  top: 0;
  right: 0;
`

function Bush({ x, y, size = 0 }: { x: number, y: number, size?: number }) {
  size = size - 2;

  return (
    <Container className='bush' style={{ left: x * 16, bottom: y * 16 }} size={size}>
      <Left />
      {
        [...Array(size)].map((n, i) => <Middle step={i + 1} />)
      }
      <Right />
    </Container>
  );
}


export default Bush;