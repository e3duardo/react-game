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
  width: 15px;
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

const PipeLeft = styled(Part)`
  background-position-x: ${bgPos[2].x}px;
  background-position-y: ${bgPos[2].y}px;
`

const PipeUp = styled(Part)`
  background-position-x: ${props => (props.step||0)*16*-1}px;
  background-position-y: ${8*16*-1}px;
  top: initial;
  bottom: 16px;
  z-index: 2;
`
const PipeDown = styled(Part)`
  background-position-x: ${props => (props.step||0)*16*-1}px;
  background-position-y: ${9*16*-1}px;
  top: initial;
  bottom: 0;
  z-index: 2;
`

function PipeCave({ x, y, size = 1 }: { x: number, y: number, size?: number }) {
  return (
    <Container className='gomba' style={{ left: x * 16, bottom: y * 16 }} size={size} >
      <PipeUp step={2} style={{left: -16*2}}/>
      <PipeDown step={2} style={{left: -16*2}}/>
      <PipeUp step={3} style={{left: -16*1}}/>
      <PipeDown step={3} style={{left: -16*1}}/>
      <PipeUp step={4} style={{left: -16*0}}/>
      <PipeDown step={4} style={{left: -16*0}}/>
      {
        [...Array(size)].map((n, i) => (
          <React.Fragment key={i}>
            <PipeLeft step={i} />
          </React.Fragment>
        ))
      }
    </Container>
  );
}


export default PipeCave;