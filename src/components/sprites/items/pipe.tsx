import React from 'react';
import styled from 'styled-components'

import tileset from '../../../assets/tileset.png'

const blockSize = 16;

const bgPos = [
  { x: 0 * blockSize * -1, y: 8 * blockSize * -1 }, // up left
  { x: 1 * blockSize * -1, y: 8 * blockSize * -1 }, // up right
  { x: 0 * blockSize * -1, y: 9 * blockSize * -1 }, // pipe left
  { x: 1 * blockSize * -1, y: 9 * blockSize * -1 }, // pipe right
]

const Container = styled.div<{ size: number }>`
  position: absolute;
  width: 32px;
  height: ${props => props.size * 16}px;
`

const Part = styled.div<{ step?: number }>`
  background-image: url(${tileset});
  background-repeat: no-repeat;
  position: absolute;
  width: 16px;
  height: 16px;
  top: ${props => (props.step || 0) * 16}px;
  left: 0;
`

const UpLeft = styled(Part)`
  background-position-x: ${bgPos[0].x}px;
  background-position-y: ${bgPos[0].y}px;
`
const UpRight = styled(Part)`
  background-position-x: ${bgPos[1].x}px;
  background-position-y: ${bgPos[1].y}px;
  left: 16px;
`
const PipeLeft = styled(Part)`
  background-position-x: ${bgPos[2].x}px;
  background-position-y: ${bgPos[2].y}px;
`
const PipeRight = styled(Part)`
  background-position-x: ${bgPos[3].x}px;
  background-position-y: ${bgPos[3].y}px;
  left: 16px;
`

function Pipe({ x, y, size = 1 }: { x: number, y: number, size?: number }) {
  return (
    <Container className='gomba' style={{ left: x * 16, bottom: y * 16 }} size={size} >
      <UpLeft />
      <UpRight />
      {
        [...Array(size-1)].map((n, i) => (
          <React.Fragment key={i}>
            <PipeLeft step={i+1} />
            <PipeRight step={i+1} />
          </React.Fragment>
        ))
      }
    </Container>
  );
}


export default Pipe;