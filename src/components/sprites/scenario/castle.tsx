import styled from 'styled-components'

import tileset from '../../../assets/tileset.png'

const Container = styled.div`
  position: absolute;
  /* background: red; */
  z-index: 2;
  width: ${5*16}px;
  height: ${5*16}px;

  .m{
    background-image: url('${tileset}');
    background-repeat: no-repeat;
    position: absolute;
    width: 16px;
    height: 16px;
  }

  .m11 { background-position: ${-11 * 16}px ${-0 * 16}px }
  .m12 { background-position: ${-12 * 16}px ${-0 * 16}px }
  .m13 { background-position: ${-13 * 16}px ${-0 * 16}px }
  .m14 { background-position: ${-14 * 16}px ${-0 * 16}px }
  .m21 { background-position: ${-11 * 16}px ${-1 * 16}px }
  .m22 { background-position: ${-12 * 16}px ${-1 * 16}px }
  .m23 { background-position: ${-13 * 16}px ${-1 * 16}px }
  .m24 { background-position: ${-14 * 16}px ${-1 * 16}px }
`

function Castle({ x, y }: { x: number, y: number }) {
  return (
    <Container className='castle' style={{ left: x * 16, bottom: y * 16 }}>

      <div className="m m11" style={{ top: 16 * 0, left: 16 * 1 }}></div>        
      <div className="m m11" style={{ top: 16 * 0, left: 16 * 2 }}></div>        
      <div className="m m11" style={{ top: 16 * 0, left: 16 * 3 }}></div>        

      <div className="m m12" style={{ top: 16 * 1, left: 16 * 1 }}></div>        
      <div className="m m13" style={{ top: 16 * 1, left: 16 * 2 }}></div>        
      <div className="m m14" style={{ top: 16 * 1, left: 16 * 3 }}></div>        
      <div className="m m11" style={{ top: 16 * 2, left: 16 * 0 }}></div>        
      <div className="m m21" style={{ top: 16 * 2, left: 16 * 1 }}></div>        
      <div className="m m21" style={{ top: 16 * 2, left: 16 * 2 }}></div>        
      <div className="m m21" style={{ top: 16 * 2, left: 16 * 3 }}></div>        
      <div className="m m11" style={{ top: 16 * 2, left: 16 * 4 }}></div>        

      <div className="m m13" style={{ top: 16 * 3, left: 16 * 0 }}></div>        
      <div className="m m13" style={{ top: 16 * 3, left: 16 * 1 }}></div>        
      <div className="m m22" style={{ top: 16 * 3, left: 16 * 2 }}></div>        
      <div className="m m13" style={{ top: 16 * 3, left: 16 * 3, zIndex: 10 }}></div>        
      <div className="m m13" style={{ top: 16 * 3, left: 16 * 4, zIndex: 10 }}></div>        

      <div className="m m13" style={{ top: 16 * 4, left: 16 * 0 }}></div>        
      <div className="m m13" style={{ top: 16 * 4, left: 16 * 1 }}></div>        
      <div className="m m23" style={{ top: 16 * 4, left: 16 * 2 }}></div>        
      <div className="m m13" style={{ top: 16 * 4, left: 16 * 3, zIndex: 10 }}></div>        
      <div className="m m13" style={{ top: 16 * 4, left: 16 * 4, zIndex: 10 }}></div>        

    </Container>
  );
}


export default Castle;