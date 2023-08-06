import { Button } from '@nextui-org/react';
import { animated } from '@react-spring/web';
import arrow_icon from '../../icons/arrow.svg';

import { useSpring } from '@react-spring/web';
import { useState } from 'react';
export default (props) => {
    const [open, setOpen] = useState(props.open || false);
    const [springs, api] = useSpring(() => ({
        from: { x: 0, height: props.open ? 'auto' : 0, opacity: props.open ? 1 : 0 },
    }))
    const [iconsprings, iconapi] = useSpring(() => ({
        transform: 'rotate(0deg)'
    }))
    const xunzhuan = () => {
        setOpen(!open)
        if (!open) {
            iconapi.start({
                transform: 'rotate(90deg)'
            })
            api.start({
                from: {
                    x: 0, height: 0, opacity: 0
                },
                to: {
                    x: 30, height: 'auto', opacity: 1
                },
            })
        } else {
            api.start({
                to: {
                    x: 0, height: 0, opacity: 0
                },
                from: {
                    x: 30, height: 'auto', opacity: 1
                },
            })
            iconapi.start({
                transform: 'rotate(0deg)'
            })
        }
    }
    return (
        <div>

            <div className='flex bg-primary w-[120px] pl-1 pr-1  rounded' >
                {props.children ? <div className={'w-[30px] h-[30px] min-w-[30px]'} onClick={xunzhuan} >
                    <animated.div className={'w-[14px] h-[14px]'} style={{ ...iconsprings }} >
                        <img className={'w-[14px] h-[14px]'} src={arrow_icon} />
                    </animated.div>
                </div> : <></>}
                <div>{props.title}</div>
            </div>
            <animated.div style={springs} >
                {props.children}
            </animated.div>
        </div>

    )
}