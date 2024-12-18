import React from 'react'
import { assets } from '../../assets/assets';
import "./Solution.css"
import Notification from "../../components/Notification/Notification";
import { useNavigate } from 'react-router-dom';
// import {navigateSolution} from "react-router-dom";


const Solution = () => {

    const navigate = useNavigate();

    return (
        <div className='allContent'>
            {/* <Notification /> */}
            <div className='sol-section-0'>
                <img src={assets.sol} alt="Solution" className='' />
            </div>

            <div>
                <div className='sol-content'>
                    <div className='sol-container'>
                        <section className='sol-section-1 sol-section'>
                            <img src={assets.sol1} alt="sol-1 section" />
                            <div>
                                <h3>Giải pháp phòng họp thông minh</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta omnis ipsam dolore aspernatur?
                                    Similique sit vero nihil beatae amet ab iste earum aperiam laboriosam facilis, labore sint? Et, iure perferendis?</p>
                                <button onClick = {()=>(navigate("/solutions/MeetingSolution"))} >Xem chi tiết</button>
                            </div>

                        </section>
                    </div>
                </div>

                <div className='sol-content'>
                    <div className='sol-container'>
                        <section className='sol-section-2 sol-section'>
                            <img src={assets.sol2} alt="sol-2 section" />
                            <div>
                                <h3>Giải pháp phòng học thông minh</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta omnis ipsam dolore aspernatur?
                                    Similique sit vero nihil beatae amet ab iste earum aperiam laboriosam facilis, labore sint? Et, iure perferendis?</p>
                                <button onClick = {()=>(navigate("/solutions/ClassroomSolution"))}>Xem chi tiết</button>
                            </div>
                        </section>
                    </div>
                </div>

                <div className='sol-content'>
                    <div className="sol-container">
                        <section className='sol-section-3 sol-section'>
                            <img src={assets.sol3} alt="sol-3" />
                            <div>
                                <h3>Giải pháp cho gian hàng</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta omnis ipsam dolore aspernatur?
                                    Similique sit vero nihil beatae amet ab iste earum aperiam laboriosam facilis, labore sint? Et, iure perferendis?</p>
                                <button onClick = {()=>(navigate("/solutions/BoothSolution"))} >Xem chi tiết</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution