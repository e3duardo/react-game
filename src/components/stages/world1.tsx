import { KeyboardEvent, KeyboardEventHandler, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import Gomba from "../sprites/enemies/gomba";
import KoopaTropa from "../sprites/enemies/koopaTropa";
import Brick from "../sprites/items/brick";
import Flag from "../sprites/items/flag";
import Pipe from "../sprites/items/pipe";
import Question from "../sprites/items/question";
import Block from "../sprites/scenario/block";
import Castle from "../sprites/scenario/castle";
import Cloud from "../sprites/scenario/cloud";
import Bush from "../sprites/scenario/bush";
import Mountain from "../sprites/scenario/mountain";
import Floor from "../sprites/scenario/floor";
import PipeCave from "../sprites/items/pipeCave";
import Coin from "../sprites/items/coin";
import Mario from "../sprites/payers/mario";
import useInterval from "../../hooks/useInterval";


const validKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Shift']
const fps = 30;


function World1() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const marioRef = useRef<HTMLDivElement | null>(null);
  const gomba1Ref = useRef<HTMLDivElement | null>(null);
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  const [delay, setDelay] = useState<number>(1000 / fps)
  const [isPlaying, setPlaying] = useState<boolean>(true)

  const downHandler = (e: globalThis.KeyboardEvent) => {
    if (validKeys.includes(e.key) && !pressedKeys.includes(e.key)) {
      setPressedKeys([...pressedKeys, e.key]);
    }
  }

  const upHandler = (e: globalThis.KeyboardEvent) => {
    setPressedKeys(pressedKeys.filter(key => key != e.key));
  }

  const frameLoop = () => {
    // console.log(pressedKeys);

    if (marioRef.current == null) return;
    if (stageRef.current == null) return;
    if (gomba1Ref.current == null) return;

    let left = parseInt(marioRef.current.style.left);
    let top = parseInt(marioRef.current.style.bottom);
    let stageLeft = parseInt(stageRef.current.style.left);

    const amount = pressedKeys.includes('Shift') ? 10 : 5;

    if (pressedKeys.includes('ArrowLeft')) {
      left -= amount;
    } else if (pressedKeys.includes('ArrowRight')) {
      left += amount;
      stageLeft -= 5;
    }

    console.log(top);

    if (top <= 33 && pressedKeys.includes('ArrowUp')) {
      // setPressedKeys(pressedKeys.filter(e => e !== 'ArrowUp'));
      top += 150;
    } else {
      top -= 15;
    }

    // fixed on floor
    if (top < 32) {
      top = 32
    }

    // fixed stage on left
    if (left < Math.abs(stageLeft)) {
      left = Math.abs(stageLeft);
    }

    // fixed stage on right
    if (left > Math.abs(stageLeft) + 240) {
      left = Math.abs(stageLeft) + 240;
    }


    console.log(left, stageLeft)

    marioRef.current.style.left = `${left}px`;
    marioRef.current.style.bottom = `${top}px`;


    if (left > Math.abs(stageLeft) + 20) {
      stageRef.current.style.left = `${stageLeft}px`;
    }


    // gomba 1 inteligence
    let gomba1Left = parseInt(gomba1Ref.current.style.left);
    gomba1Ref.current.style.left = `${gomba1Left - 1}px`;
  }

  useLayoutEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [pressedKeys]);


  useInterval(
    frameLoop,
    // Delay in milliseconds or null to stop it
    isPlaying ? delay : null,
  )

  // useLayoutEffect(() => {

  // }, [pos]);

  return (
    <div className="scene">
      <div className="stage" ref={stageRef} style={{ position: 'absolute', left: 0 }}>
        <Mario x={20} y={32} innerRef={marioRef}></Mario>


        {/* enemies */}
        <Gomba x={22} y={2} innerRef={gomba1Ref}></Gomba>
        <Gomba x={40} y={2}></Gomba>
        <Gomba x={51} y={2}></Gomba>
        <Gomba x={52.5} y={2}></Gomba>
        <Gomba x={80} y={10}></Gomba>
        <Gomba x={82} y={10}></Gomba>
        <Gomba x={97} y={2}></Gomba>
        <Gomba x={98.6} y={2}></Gomba>
        <Gomba x={114} y={2}></Gomba>
        <Gomba x={115.6} y={2}></Gomba>
        <Gomba x={124} y={2}></Gomba>
        <Gomba x={125.6} y={2}></Gomba>

        <Gomba x={128} y={2}></Gomba>
        <Gomba x={129.6} y={2}></Gomba>

        <Gomba x={174} y={2}></Gomba>
        <Gomba x={175.6} y={2}></Gomba>

        <KoopaTropa x={107} y={2}></KoopaTropa>
        {/* end enemies */}

        {/* interable */}
        <Question x={16} y={5} />

        <Brick x={20} y={5} />
        <Question x={21} y={5} />
        <Brick x={22} y={5} />
        <Question x={22} y={10} />
        <Question x={23} y={5} />
        <Brick x={24} y={5} />

        <Question x={64} y={6} hide={true} />

        <Brick x={77} y={5} />
        <Question x={78} y={5} />
        <Brick x={79} y={5} />
        <Brick x={80} y={9} />
        <Brick x={81} y={9} />
        <Brick x={82} y={9} />
        <Brick x={83} y={9} />
        <Brick x={84} y={9} />
        <Brick x={85} y={9} />
        <Brick x={86} y={9} />
        <Brick x={87} y={9} />

        <Brick x={91} y={9} />
        <Brick x={92} y={9} />
        <Brick x={93} y={9} />
        <Brick x={94} y={5} />
        <Question x={94} y={9} />

        <Brick x={100} y={5} />
        <Brick x={101} y={5} />

        <Question x={106} y={5} />

        <Question x={109} y={9} />
        <Question x={109} y={5} />

        <Question x={112} y={5} />

        <Brick x={118} y={5} />

        <Brick x={121} y={9} />
        <Brick x={122} y={9} />
        <Brick x={123} y={9} />

        <Brick x={128} y={9} />
        <Question x={129} y={9} />
        <Brick x={129} y={5} />
        <Question x={130} y={9} />
        <Brick x={130} y={5} />
        <Brick x={131} y={9} />

        <Brick x={168} y={5} />
        <Brick x={169} y={5} />
        <Question x={170} y={5} />
        <Brick x={171} y={5} />
        {/* end interable */}


        {/* pipes */}
        <Pipe x={28} y={2} size={2} />
        <Pipe x={38} y={2} size={3} />
        <Pipe x={46} y={2} size={4} />
        <Pipe x={57} y={2} size={4} />
        <Pipe x={163} y={2} size={2} />
        <Pipe x={179} y={2} size={2} />
        {/* end pipes */}


        {/* 
         
         scenario 
         
      */}


        {/* air */}
        <Cloud size={3} x={8} y={10}></Cloud>
        <Cloud size={3} x={19} y={12}></Cloud>
        <Cloud size={5} x={27} y={10}></Cloud>
        <Cloud size={4} x={36} y={12}></Cloud>
        <Cloud size={3} x={56} y={10}></Cloud>
        <Cloud size={3} x={67} y={12}></Cloud>
        <Cloud size={5} x={75} y={10}></Cloud>
        <Cloud size={4} x={84} y={12}></Cloud>
        <Cloud size={3} x={104} y={10}></Cloud>
        <Cloud size={3} x={115} y={12}></Cloud>
        <Cloud size={5} x={123} y={10}></Cloud>
        <Cloud size={4} x={132} y={12}></Cloud>
        <Cloud size={3} x={152} y={10}></Cloud>
        <Cloud size={3} x={163} y={12}></Cloud>
        <Cloud size={5} x={171} y={10}></Cloud>
        <Cloud size={4} x={180} y={12}></Cloud>
        <Cloud size={3} x={200} y={10}></Cloud>
        <Cloud size={3} x={211} y={12}></Cloud>
        <Cloud size={5} x={219} y={10}></Cloud>
        {/* end-air */}

        <Flag x={198} y={3} size={10} />
        <Block x={198} y={2} />

        <Castle x={202} y={2} />

        {/* blocks */}
        <Block size={1} x={134} y={2}></Block>
        <Block size={2} x={135} y={2}></Block>
        <Block size={3} x={136} y={2}></Block>
        <Block size={4} x={137} y={2}></Block>

        <Block size={4} x={140} y={2}></Block>
        <Block size={3} x={141} y={2}></Block>
        <Block size={2} x={142} y={2}></Block>
        <Block size={1} x={143} y={2}></Block>

        <Block size={1} x={148} y={2}></Block>
        <Block size={2} x={149} y={2}></Block>
        <Block size={3} x={150} y={2}></Block>
        <Block size={4} x={151} y={2}></Block>
        <Block size={4} x={152} y={2}></Block>

        <Block size={4} x={155} y={2}></Block>
        <Block size={3} x={156} y={2}></Block>
        <Block size={2} x={157} y={2}></Block>
        <Block size={1} x={158} y={2}></Block>

        <Block size={1} x={181} y={2}></Block>
        <Block size={2} x={182} y={2}></Block>
        <Block size={3} x={183} y={2}></Block>
        <Block size={4} x={184} y={2}></Block>
        <Block size={5} x={185} y={2}></Block>
        <Block size={6} x={186} y={2}></Block>
        <Block size={7} x={187} y={2}></Block>
        <Block size={8} x={188} y={2}></Block>
        <Block size={8} x={189} y={2}></Block>
        {/* end blocks */}

        {/* vegetation */}
        <Mountain size={3} x={0} y={2}></Mountain>
        <Bush size={5} x={11} y={2}></Bush>
        <Mountain size={2} x={16} y={2}></Mountain>
        <Bush size={3} x={23} y={2}></Bush>
        {/* pipe */}
        <Bush size={4} x={41} y={2}></Bush>
        {/* pipe */}
        {/* pipe */}
        <Mountain size={3} x={48} y={2}></Mountain>
        {/* pipe */}
        <Bush size={5} x={59} y={2}></Bush>
        <Mountain size={2} x={64} y={2}></Mountain>
        {/* floor break */}
        <Bush size={3} x={71} y={2}></Bush>
        {/* floor break */}
        <Bush size={4} x={89} y={2}></Bush>
        <Mountain size={3} x={96} y={2}></Mountain>
        <Bush size={5} x={107} y={2}></Bush>
        <Mountain size={2} x={112} y={2}></Mountain>
        <Bush size={3} x={119} y={2}></Bush>
        <Bush size={4} x={137} y={2}></Bush>
        <Mountain size={3} x={144} y={2}></Mountain>
        {/* floor break */}
        <Bush size={2} x={158} y={2}></Bush>
        <Mountain size={2} x={160} y={2}></Mountain>
        {/* pipe */}
        <Bush size={3} x={167} y={2}></Bush>
        {/* pipe */}
        <Mountain size={3} x={192} y={2}></Mountain>
        <Bush size={2} x={206} y={2}></Bush>
        <Mountain size={2} x={208} y={2}></Mountain>
        <Bush size={3} x={215} y={2}></Bush>
        {/* end vegetation */}

        <Floor x={0} y={0} size={69}></Floor>
        <Floor x={71} y={0} size={15}></Floor>
        <Floor x={89} y={0} size={64}></Floor>
        <Floor x={155} y={0} size={69}></Floor>


        {/* sub world */}

        <Brick x={48} y={-13} size={11} variant="darkwall"></Brick>

        <Coin x={53} y={-6} variant="darkwall"></Coin>
        <Coin x={54} y={-6} variant="darkwall"></Coin>
        <Coin x={55} y={-6} variant="darkwall"></Coin>
        <Coin x={56} y={-6} variant="darkwall"></Coin>
        <Coin x={57} y={-6} variant="darkwall"></Coin>

        <Coin x={52} y={-8} variant="darkwall"></Coin>
        <Coin x={53} y={-8} variant="darkwall"></Coin>
        <Coin x={54} y={-8} variant="darkwall"></Coin>
        <Coin x={55} y={-8} variant="darkwall"></Coin>
        <Coin x={56} y={-8} variant="darkwall"></Coin>
        <Coin x={57} y={-8} variant="darkwall"></Coin>
        <Coin x={58} y={-8} variant="darkwall"></Coin>

        <Coin x={52} y={-10} variant="darkwall"></Coin>
        <Coin x={53} y={-10} variant="darkwall"></Coin>
        <Coin x={54} y={-10} variant="darkwall"></Coin>
        <Coin x={55} y={-10} variant="darkwall"></Coin>
        <Coin x={56} y={-10} variant="darkwall"></Coin>
        <Coin x={57} y={-10} variant="darkwall"></Coin>
        <Coin x={58} y={-10} variant="darkwall"></Coin>

        <Brick x={52} y={-3} variant="darkwall"></Brick>
        <Brick x={53} y={-3} variant="darkwall"></Brick>
        <Brick x={54} y={-3} variant="darkwall"></Brick>
        <Brick x={55} y={-3} variant="darkwall"></Brick>
        <Brick x={56} y={-3} variant="darkwall"></Brick>
        <Brick x={57} y={-3} variant="darkwall"></Brick>
        <Brick x={58} y={-3} variant="darkwall"></Brick>


        <Brick x={52} y={-13} size={3} variant="darkwall"></Brick>
        <Brick x={53} y={-13} size={3} variant="darkwall"></Brick>
        <Brick x={54} y={-13} size={3} variant="darkwall"></Brick>
        <Brick x={55} y={-13} size={3} variant="darkwall"></Brick>
        <Brick x={56} y={-13} size={3} variant="darkwall"></Brick>
        <Brick x={57} y={-13} size={3} variant="darkwall"></Brick>
        <Brick x={58} y={-13} size={3} variant="darkwall"></Brick>

        <Floor x={48} y={-15} size={16} variant="dark"></Floor>

        <PipeCave x={63} y={-13} size={11}></PipeCave>

        <div style={{ position: 'absolute', top: 15 * 16, left: 48 * 16, width: 16 * 16, height: 15 * 16, background: 'black', zIndex: -1 }}></div>
      </div>
    </div>
  );
}

export default World1;