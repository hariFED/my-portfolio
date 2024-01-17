import gsap from "gsap"
import { useEffect, useRef } from "react"
import { useGSAP } from "@gsap/react"






const LandingPage = () => {


    const tl = useGSAP(() => {
        const text = gsap.utils.toArray('#hello')
        return gsap.timeline().to(text, { x: -550, y: 0, rotation: 0 }).to(text, { x: 0, y: 150 }).to(text, { x: 0, y: -150 }).to(text, { x: 150, y: 0 })

    })
    useEffect(() => {
        const onLoad = () => { tl.current.play() }


        return () => {
            window.removeEventListener('load', onLoad);
        };
    })

    return (
        <>
            <div className='flex items-center justify-center h-screen text-9xl' id="hello">
                Hello
            </div>

        </>
    )
}

export default LandingPage