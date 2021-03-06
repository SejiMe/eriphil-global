import React, { useState, useEffect, useMemo, useCallback , useContext} from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import HomePanel from '../components/sidepanels/HomePanel'
import SidePanelLayout from '../layouts/SidePanelLayout'
import '../styles/css/Home.min.css'

const Home = (props) => {

    
    const [overlay, setOverlay] = useState(true);
    const scrollY = props.scrollY;

    /* A hook that is used to get the screen size of the user. */
    const [screenX, setScreenX] = useState(window.innerWidth)
    const [screenY, setScreenY] = useState(window.innerHeight)
    const handleResize = useCallback(() => {
        setScreenX(() => window.innerWidth);
        setScreenY(() => window.innerHeight);
    }, [screenX, screenY])

    /* A hook that is used to get the screen size of the user. */
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log(screenX)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [handleResize])


    return (
        <div className='Home'>
            <div className={`home-container ${overlay ? "overlay" : ""}`}>
                <section>
                    <div className="img-carousel-container">
                        <Carousel >
                            <Carousel.Item>
                                <img src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                                <Carousel.Caption>
                                    <h1>Hello</h1>
                                    <span>Are you an Applicant? <Link to='/registration'>Be a member!</Link></span>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://images.unsplash.com/photo-1565383690591-1ee1b6582cef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                <Carousel.Caption>
                                    <h1>We Offer</h1>
                                    <span>Eiusmod et sunt aliqua elit sint enim officia.<Link to='/about'>Learn More</Link></span>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </section>
                <div className='page-container'>
                    <div className='mobile-content-container'>
                        <main>
                            <article className='article-1'>
                                <h2>Work With us!</h2>
                                <p>Quis incididunt labore sunt ut amet labore fugiat ex eiusmod dolor. Aliqua est adipisicing culpa quis labore nulla. Duis fugiat est magna cupidatat magna incididunt cillum non proident ex nisi. Officia incididunt adipisicing Lorem labore voluptate est sunt cillum sit dolore pariatur tempor occaecat in. Deserunt nisi eiusmod et ad non ea veniam quis est sit exercitation ut laboris laboris. Consequat nulla aute aute eiusmod enim voluptate do pariatur veniam sunt sunt. Ea cillum eiusmod dolor ea.</p>
                            </article>
                            <article className='article-2'>
                            <img src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBoYXBweXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <h2>Lorem</h2>
                                <p>Aliquip duis aliquip deserunt in esse do occaecat duis ullamco. Aute ea proident labore velit non dolor fugiat aliquip quis do. Elit commodo veniam anim laborum quis id irure quis magna. Pariatur aliquip in in voluptate nisi ullamco cupidatat dolore nisi. Lorem fugiat velit ut aliqua laborum excepteur irure ipsum exercitation non incididunt ipsum.</p>
                            </article>
                        </main>
                    </div>
                    <SidePanelLayout>
                        <HomePanel />
                    </SidePanelLayout>
                </div>
            </div>
        </div>
    )
}

export default Home;