import { useRef } from "react"
import "./Portfolio.scss"
import { useSpring, motion, useScroll, useTransform } from "framer-motion";


const items= [
    {
        id: 1,
        title: "E-commerce",
        img: "Ecommerce .png",
        desc: "lorem hello how this is it when ever their so how is that",
        gitLink: "https://github.com/Harsh-deepsingh/E-commerce-",
        demo: "#"
    },
    {
        id: 2,
        title: "Ironman AI",
        img: "IronMan.png",
        desc: "lorem hello how this is it when ever their so how is that",
        gitLink: "https://github.com/Harsh-deepsingh/Iron-Man",
        demo: "#"
    },
    {
        id: 3,
        title: "Job Tracker",
        img: "job.png",
        desc: "lorem hello how this is it when ever their so how is that hello how this is it when ever their so how is that",
        gitLink: "https://github.com/Harsh-deepsingh/Chrome-Extension",
        demo: "#"
    }
]

const Single = ({item}) => {
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                <img src={item.img} alt="" />
                </div>
                <div className="textContainer">
                    <h2>{item.title}</h2>
                    <div className="desc">
                    <p>{item.desc}</p>
                    </div>
                    <button><a href={item.gitLink} target="_blank">GitHub</a></button>
                    <button><a href={item.demo} target="_blank">See Demo</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref, 
        offset:["end end", "start start"],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })


  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Projects</h1>
            <motion.div style={{scaleX}} className="progressbar"></motion.div>
        </div>
      {items.map(item => (
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
