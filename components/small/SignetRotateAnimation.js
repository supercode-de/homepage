import Link from "next/link";
import React, { useState, useEffect } from "react";

const SignetRotateAnimation = () => {
    const [rotateDeg, setRotateDeg] = useState(0)

    useEffect(() => {
// console.log("WINDOW",window);
let rotateEffectElements = document.querySelector(".rotateEffect")
for (let index = 0; index < rotateEffectElements.length; index++) {
    const element = rotateEffectElements[index];
    console.log(element);
    let compStyles = window.getComputedStyle(element)
    console.log("BGCOLOR",compStyles.getPropertyValue("background-color"));
}
// let compStyles = window.getComputedStyle(rotateEffectElements)
// console.log(compStyles.getPropertyValue("background-color"));


        let scrollLimit =
            Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            ) - document.documentElement.clientHeight;

        let numberOfRotations =
            Math.ceil(scrollLimit / document.documentElement.clientHeight / 3) * 0.5;
        let totalRotation = numberOfRotations * 360;
        setRotateDeg((window.scrollY / scrollLimit) * totalRotation)
    }, [])
    return (
        <>
            <Link href='/' passHref>
                <div className="roundLogo logo rotate"></div>
                {/* <a className='logo'>
                    <img src='/img/sc_logo2022.svg' alt='SuperCode-Logo' className='rotate' />
                    <img src='/img/c_2022.svg' alt='SuperCode-Logo' id="supercodeC" />
                    <img id="supercodeLogo2022" src="/img/supercode_logo_2022.svg" alt="supercode logo" />
                </a> */}

            </Link>
            <style jsx>{`
                .roundLogo {
                    width: 50px;
                    height: 50px;
                    border-radius: 50px;
                    border-width: 5px;
                    border-style: solid;
                    // border-top-color: var(--super-white);
                    border-top-color: ${window.scrollY >= 1280 ? 'var(--super-lila)' : "var(--super-white)"};
                    border-right-color: var(--super-green);
                    border-bottom-color: ${window.scrollY < 1280 || 2750 ? 'var(--super-white)' : 'var(--super-blau)'};
                    border-left-color: var(--super-green);
                    transition: border-color 1s ease;
                }
                .rotate {
                    transform: rotate(${rotateDeg}deg);
                }
            `}</style>
        </>

    );
}

export default SignetRotateAnimation;