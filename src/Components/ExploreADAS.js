
import './Styling/ExploreADAS.css'
import bits_logo from './Images/bits_logo.png'
function ExploreADAS() {
    return (
        <div className="App">
            <nav >
                <ul >
                    <li>
                        <img src={bits_logo} style={{width:'100%'}}></img>
                    </li>
                    <li>
                        <a href='/'>HOME</a>
                    </li>
                    <li>
                        <a href='/exploreacs'>Connected</a>
                    </li>
                    <li>
                        <a href='/exploreadas'>Autonomous</a>
                    </li><li>
                        <a href='/explorecybersec'>Secured</a>
                    </li>
                    <li>
                        <a href='/exploreev'>Electrified</a>
                    </li>
                    <li>
                        <a href='/regadas'>REGISTER</a>
                    </li>
                     
                </ul>
            </nav>
            <div className="animation">
            
                <div offset={0} speed={0.5} >
                    <div className="contentblock" >
                        <div className='head'>Autonomous Control Lightning Challenge</div>
                        <div className='infoblock1' >
                            <h2>Race against time to minimize response delays in autonomous vehicles' lateral & longitudinal control!</h2>
                            <h3>Description</h3>
                            <p><span className='heading'>Introduction</span>:
                                Autonomous vehicles have emerged as a transformative technology, promising safer and more efficient transportation systems. One of the critical challenges in developing autonomous vehicles is ensuring precise and efficient lateral control, which governs the vehicle's ability to navigate curves, turns, and lane changes. Response time plays a crucial role in the vehicle's ability to react swiftly and accurately to dynamic road conditions and potential hazards.
                                <br></br>
                                <span className='heading'>Competition Objective</span>:
                                The primary goal of this competition is to develop innovative solutions and algorithms that minimize response time for lateral control in autonomous vehicles. Participants are expected to design control systems that enhance the vehicle's ability to follow desired paths while ensuring smooth and timely adjustments to various driving scenarios."
                            </p>
                            <h3>Task</h3>
                            <p><span className='heading'>Algorithm Development</span>: Participants will be required to develop advanced control algorithms that optimize response time for lateral control in autonomous vehicles. The algorithms should prioritize safety, stability, and efficiency while achieving rapid and precise vehicle maneuvers.
                                <br></br>
                                <span className='heading'>Real-World Demonstration</span>: Top-performing participants will have the opportunity to demonstrate their algorithms in real-world tests using autonomous vehicle in ADAS lab"
                            </p>

                        </div>
                        <div className='infoblock2' >
                            <h2>Perception Fusion Showdown - Object & Lane Detection Duel</h2>
                            <h3>Description</h3>
                            <p><span className='heading'>Introduction</span>:
                            Compete in the Perception Fusion Showdown! Harness transfer learning techniques to merge object detection and lane detection algorithms.<br></br>
                                <span className='heading'>Competition Objective</span>:
                                The main objective of this competition is to develop innovative solutions that merge object detection and lane detection algorithms using transfer learning techniques. Participants are expected to create a seamless and efficient perception system capable of simultaneously detecting objects and identifying lane boundaries to enable safe and autonomous navigation."
                            </p>
                            <h3>Task</h3>
                            <p><span className='heading'>Dataset Preparation</span>:
                                Collect a diverse dataset containing real-world driving images and corresponding annotations, including object bounding boxes and lane markings. The dataset will cover various environmental conditions, lighting, and road types.
                                <br></br>
                                <span className='heading'>Algorithm Development</span>:
                                Using transfer learning, competitors will design and train perception models capable of jointly detecting objects and identifying lane boundaries in a given image. Participants can use pre-trained models, fine-tuning them on the provided dataset, or explore novel architectures to achieve optimal performance.
                                <br></br>
                                <span className='heading'>Integration of Perception Algorithms</span>:
                                Participants will develop techniques to seamlessly integrate the object detection and lane detection models into a cohesive perception system. The goal is to achieve efficient parallel processing while ensuring accurate and real-time results.
                                <br></br>
                                <span className='heading'>Evaluation and Optimization</span>:
                                The developed perception system will be evaluated on a separate test dataset with metrics that assess the accuracy and efficiency of object detection and lane detection. Participants are encouraged to optimize their models for both speed and accuracy."
                            </p>
                        </div>
                        <div className='infoblock1' >
                            <h2>SLAMMaster Mapping Race</h2>
                            <h3>Description</h3>
                            <p><span className='heading'>Introduction</span>:
                            Enter the SLAMMaster Mapping Race and conquer the track! Use SLAM techniques to map a predetermined route with precision.<br></br>
                                <span className='heading'>Competition Objective</span>:
                                The main objective of this competition is to foster creativity, problem-solving skills, and robotics knowledge among students by building a small robot that demonstrates the ability to autonomously navigate, self-localize, and construct a map of its surroundings. Students will apply concepts from robotics, computer vision, and sensor fusion to develop a fully functional and efficient robot capable of real-time mapping."
                            </p>
                            <h3>Task</h3>
                            <p><span className='heading'>Robot Hardware Setup</span>:
                                Each student/team will be provided with a robot kit that includes a chassis, motors, sensors (e.g., wheel encoders, ultrasonic sensors, IMU), and a microcontroller or single-board computer (e.g., Arduino, Raspberry Pi) for control.
                                <br></br>
                                <span className='heading'>Robot Software Development</span>:
                                Participants will develop the robot's control software and implement algorithms for self-localization and mapping. This will involve sensor data processing, sensor fusion techniques, and decision-making logic for navigation.
                                <br></br>
                                <span className='heading'>Real-Time Mapping and Localization</span>:
                                The robot should be able to move autonomously in an unknown environment while simultaneously estimating its position and constructing a map of its surroundings. The map can be visualized in real-time using an interface or displayed on a screen.
                                <br></br>
                                <span className='heading'>Competition Environment</span>:
                                The competition will be conducted in a controlled environment, such as a maze or an indoor area with obstacles. The robot's performance will be evaluated based on its ability to accurately navigate the environment, localize itself, and create a complete map."
                            </p>
                        </div>
                        <div className='infoblock2' >
                            <h2>Stereoscopic Vision Depth Challenge</h2>
                            <h3>Description</h3>
                            <p><span className='heading'>Introduction</span>:
                            Engage in the Stereoscopic Vision Depth Challenge! Leverage the power of dual cameras to measure object distances accurately. </p>
                            <h3>Task</h3>
                            <p><span className='heading'>Stereo Camera Setup</span>: Participants will set up a stereo camera system consisting of two or more synchronized cameras, capturing images simultaneously from slightly different viewpoints.
                                <br></br>
                                <span className='heading'>Image Calibration</span>: Participants will calibrate the stereo camera system, ensuring accurate alignment and accurate depth measurement.
                                <br></br>
                                <span className='heading'>Depth Map Generation</span>: Using the captured stereo images, participants will develop algorithms to generate dense and accurate depth maps, portraying the relative distances of objects in the scene.
                                <br></br>
                                <span className='heading'>Object Distance Measurement</span>: Participants will devise techniques to measure the distances to specific objects within the captured scenes, validating their accuracy against ground truth measurements.
                                <br></br>
                                <span className='heading'>Real-World Scenario Simulation</span>: Participants may simulate real-world scenarios, such as indoor environments, outdoor landscapes, or urban scenes, to showcase the adaptability of their depth measurement solutions."
                            </p>
                        </div>
                        <div className='register'><a href='/regadas'>REGISTER</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreADAS;








