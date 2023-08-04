import { Button } from '@nextui-org/react';
import { animated } from '@react-spring/web';
import arrow_icon from '../../icons/arrow.svg';

import { useSpring } from '@react-spring/web';
import { useState } from 'react';
export default function MyComponent() {
    const [open, setOpen] = useState(false);
    const [springs, api] = useSpring(() => ({
        from: { x: 0, height: 0, opacity: 0 },
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
        } else {
            iconapi.start({
                transform: 'rotate(0deg)'
            })
        }

    }

    const handleClick = () => {
        api.start({
            from: {
                x: 0, height: 0, opacity: 0
            },
            to: {
                x: 30, height: 'auto', opacity: 1
            },
        })
    }
    const hideClick = () => {
        api.start({
            to: {
                x: 0, height: 0, opacity: 0
            },
            from: {
                x: 30, height: 'auto', opacity: 1
            },
        })
    }

    return (
        <div style={{ padding: 30 }}>
            <Button onClick={handleClick}>show </Button>
            <Button onClick={hideClick}>hide </Button>
            <div className='flex'>
                <Button color={'primary'} isIconOnly  variant="flat" aria-label="Take a photo" onClick={xunzhuan}>
                    <animated.div className={'w-[40px] h-[40px]'} style={{  ...iconsprings }} >
                        <img style={{ width: 16, height: 16 }} src={arrow_icon} />
                    </animated.div>
                </Button>
                <div className="bg-foreground2 w-">root</div>
            </div>


            <animated.div
                style={{
                    width: 80,
                    paddingLeft: 10,
                    background: '#ff6d6d',
                    borderRadius: 8,
                    ...springs,
                }}
            ><span>Hello</span>
                <animated.div

                    style={{
                        width: 80,
                        paddingLeft: 10,
                        background: '#ff6d6d',
                        borderRadius: 8,
                        ...springs,
                    }}
                ><span>World</span>


                </animated.div>
            </animated.div>

        </div>

    )
}