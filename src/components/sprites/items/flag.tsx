import React from 'react';
import styled from 'styled-components'

import items from '../../../assets/items.png'
import tileset from '../../../assets/tileset.png'

const blockSize = 16;

const Container = styled.div<{ size: number }>`
  position: absolute;
  width: 16px;
  height: ${props => props.size * 16}px;
`

// flag - img items
const bgx = 35;
const bgy = 2;
const bgPos = [
  { x: bgx * blockSize * -1, y: bgy * blockSize * -1 }
]

const ItemFlag = styled.div<{ flagPosition: number }>`
  background-image: url(${items});
  background-position-x: ${bgPos[0].x}px;
  background-position-y: ${bgPos[0].y}px;
  background-repeat: no-repeat;
  position: absolute;
  width: 16px;
  height: 16px;
  left: -8px;
  bottom: ${props => props.flagPosition * 16}px;
`

// pedestal - img tileset
const bg2x = 16;
const bg2y = 10;
const bg2Pos = [
  { x: bg2x * blockSize * -1, y: bg2y * blockSize * -1 },
  { x: bg2x * blockSize * -1, y: (bg2y + 1) * blockSize * -1 }
]

const Part = styled.div<{ step?: number }>`
  background-image: url(${tileset});
  background-repeat: no-repeat;
  position: absolute;
  width: 16px;
  height: 16px;
  top: ${props => (props.step || 0) * 16}px;
  left: 0;
`
const UpFlag = styled(Part)`
  background-position-x: ${bg2Pos[0].x}px;
  background-position-y: ${bg2Pos[0].y}px;
`
const Base = styled(Part)`
  background-position-x: ${bg2Pos[1].x}px;
  background-position-y: ${bg2Pos[1].y}px;
`

function Flag({ x, y, size = 1, flag = size-2 }: { x: number, y: number, size?: number, flag?: number }) {
  if(flag > size - 2){
    flag = size -2;
  }

  return (
    <Container className='flag' style={{ left: x * 16, bottom: y * 16 }} size={size}>
      <ItemFlag flagPosition={flag} />
      <UpFlag />
      {
        [...Array(size - 1)].map((n, i) => (
          <Base key={i} step={i + 1} />
        ))
      }
    </Container>
  );
}


export default Flag;