import React from 'react';
import styled from 'styled-components'

import tileset from '../../../assets/tileset.png'

const blockSize = 16;
const bgx = 0;
const bgy = 20;

const bgPos = [
  { x: bgx * blockSize * -1, y: bgy * blockSize * -1 },
  { x: bgx * blockSize * -1, y: (bgy + 1) * blockSize * -1 },
  { x: (bgx + 1) * blockSize * -1, y: bgy * blockSize * -1 },
  { x: (bgx + 1) * blockSize * -1, y: (bgy + 1) * blockSize * -1 },
  { x: (bgx + 2) * blockSize * -1, y: bgy * blockSize * -1 },
  { x: (bgx + 2) * blockSize * -1, y: (bgy + 1) * blockSize * -1 },
]

const Container = styled.div<{ size: number }>`
   position: absolute;
   width: ${props => (props.size * 16) + 32}px;
   height: 32px;
 `

const Part = styled.div`
  background-image: url(${tileset});
  background-repeat: no-repeat;
  position: absolute;
  width: 16px;
  height: 16px;
`
const LeftTop = styled(Part)`
  background-position-x: ${bgPos[0].x}px;
  background-position-y: ${bgPos[0].y}px;
  top: 0;
  left: 0;
`
const LeftBottom = styled(Part)`
  background-position-x: ${bgPos[1].x}px;
  background-position-y: ${bgPos[1].y}px;
  top: 16px;
  left: 0;
`
const MiddleTop = styled(Part)<{ step: number }>`
  background-position-x: ${bgPos[2].x}px;
  background-position-y: ${bgPos[2].y}px;
  top: 0;
  left: ${props => props.step * 16}px;
`
const MiddleBottom = styled(Part)<{ step: number }>`
  background-position-x: ${bgPos[3].x}px;
  background-position-y: ${bgPos[3].y}px;
  top: 16px;
  left: ${props => props.step * 16}px;
`
const RightTop = styled(Part)`
  background-position-x: ${bgPos[4].x}px;
  background-position-y: ${bgPos[4].y}px;
  top: 0;
  right: 0;
`
const RightBottom = styled(Part)`
  background-position-x: ${bgPos[5].x}px;
  background-position-y: ${bgPos[5].y}px;
  top: 16px;
  right: 0;
`

function Cloud({ x, y, size = 0 }: { x: number, y: number, size?: number }) {
  size = size - 2;
  
  return (
    <Container className='brick' style={{ left: x * 16, bottom: y * 16 }} size={size}>
      <LeftTop />
      <LeftBottom />
      {
        [...Array(size)].map((n, i) => (
          <React.Fragment  key={i}>
            <MiddleTop step={i+1}/>
            <MiddleBottom step={i+1}/>
          </React.Fragment>
        ))
      }
      <RightTop />
      <RightBottom />
    </Container>
  );
}


export default Cloud;