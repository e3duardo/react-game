import styled from 'styled-components'

import floor from '../../../assets/floor.png'
import floorDark from '../../../assets/floor-dark.png'

type Variant = 'normal' | 'dark';

const Container = styled.div<{ size: number, height: number, variant: Variant }>`
   background-image: url(${props => props.variant === 'dark' ? floorDark : floor});
   background-repeat: repeat;
   position: absolute;
   width: ${props => props.size * 16}px;
   height: ${props => props.height * 16}px;
 `

function Fllor({ x, y, size = 1, height = 2, variant = 'normal' }: { x: number, y: number, size?: number, height?: number, variant?: Variant }) {
  return <>
    <Container className='floor' style={{ left: x * 16, bottom: y * 16 }} size={size} height={height} variant={variant} />
  </>
}


export default Fllor;