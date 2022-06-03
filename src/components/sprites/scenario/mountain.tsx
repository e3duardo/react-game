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

  .m{
    background-image: url('${tileset}');
    background-repeat: no-repeat;
    position: absolute;
    width: 16px;
    height: 16px;
  }
  .m11{background-position: ${-8 * 16}px ${-8 * 16}px }
  .m12{background-position: ${-9 * 16}px ${-8 * 16}px }
  .m13{background-position: ${-10 * 16}px ${-8 * 16}px }
  .m21{background-position: ${-8 * 16}px ${-9 * 16}px }
  .m22{background-position: ${-9 * 16}px ${-9 * 16}px }
  .m23{background-position: ${-10 * 16}px ${-9 * 16}px }
 `


function Mountain({ x, y, size = 0 }: { x: number, y: number, size?: number }) {
  let t = 32;
  let width = 16;
  let height = 16;

  if (size == 2) {
    width *= 3;
    height *= 2;
    t /= 2;
  } else {
    width *= 5;
    height *= 3;
    t *= 0;
  }

  return (
    <Container className='brick' style={{ width: width, height: height, left: x * 16, bottom: y * 16 }} size={size}>
      <div className="m m12" style={{ top: 0, left: 32 - t }}></div>
      {
        size > 1 && <>
          <div className="m m11" style={{ top: 16, left: 16 - t }}></div>
          <div className="m m21" style={{ top: 16, left: 32 - t }}></div >
          <div className="m m13" style={{ top: 16, left: 48 - t }}></div >
        </>
      }
      {
        size > 2 && <>
          <div className="m m11" style={{ top: 32, left: 0 }}></div>
          <div className="m m21" style={{ top: 32, left: 16 }}></div >
          <div className="m m22" style={{ top: 32, left: 32 }}></div>
          <div className="m m23" style={{ top: 32, left: 48 }}></div>
          <div className="m m13" style={{ top: 32, left: 64 }}></div>
        </>
      }
    </Container >
  );
}


export default Mountain;