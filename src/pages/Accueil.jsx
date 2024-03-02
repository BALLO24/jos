import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import '../assets/accueil.css';
import iphone from '../assets/img/iphone.jpg';
import basket from '../assets/img/basket.jpg';
gsap.registerPlugin(ScrollTrigger);
export default function Accueil() {

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#sectOne",
                    start: "top top",
                    end: "20% top",
                    scrub: true,
                    markers: true
                }
            })
            timeline.to("#iphone", {
                top: "70vh",
                left: "10%"

            })
        })
        return () => ctx.revert();
    })

    return (
        <div className="accueil" id='accueil'>
            <section className='sect-one' id='sectOne'>
                <div className="left">
                    <h1>E-commerce</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro animi tempora eligendi aliquid, lapit voluptatem voluptate sequi facere quo totam tempore rerum quisquam!</p>
                    <button className='button'>Plus d'info</button>
                </div>
                <div className="right" id="right">
                    <img id="iphone" src={iphone} alt="iphone alt" />
                </div>
            </section>
            <section className='test'>
                <div className="left2">
                    l
                </div>
                <div className="right2">
                <h1>E-commerce</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro animi tempora eligendi aliquid, lapit voluptatem voluptate sequi facere quo totam tempore rerum quisquam!</p>
                <button className='button'>Plus d'info</button>
                </div>
            </section>
            <section className='products'>
ssj
            </section>
        </div>
    )
}