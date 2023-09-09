import { Parallax, ParallaxLayer } from '@react-spring/parallax'
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
            <Parallax pages={3.85} style={{ top: '0', left: '0' }} className="animation">
                <ParallaxLayer offset={0} speed={1.5} factor={1}>
                    <div className="animation_layer1 parallax" id="background" >
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.5} >
                    <div className="contentblock" >
                        <div className='head'>Advanced driver-assistance system</div>
                        <div className='infoblock1' >
                            <h2>Response Time Minimization for Lateral Control in Autonomous Vehicles</h2>
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
                            <h2>Merging Perception Algorithms - Object Detection and Lane Detection using Transfer Learning Techniques</h2>
                            <h3>Description</h3>
                            <p><span className='heading'>Introduction</span>:
                                The advancement of autonomous vehicles heavily relies on the integration of robust perception algorithms that can accurately detect and understand the surrounding environment. Object detection and lane detection are fundamental components of autonomous driving systems. In this competition, participants will explore the integration of these perception algorithms using transfer learning, a powerful technique that leverages pre-trained models to enhance the performance of specific tasks.
                                <br></br>
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
                            <h2>SLAM-Based Mapping of a Track for Autonomous Vehicles</h2>
                            <h3>Description</h3>
                            <p><span className='heading'>Introduction</span>:
                                In this exciting competition, students will embark on a hands-on journey to build a small autonomous robot capable of self-localization and mapping its surroundings. The challenge lies in designing and implementing sophisticated algorithms that enable the robot to navigate an unknown environment, estimate its position, and construct an accurate map in real-time using on-board sensors and processing.
                                <br></br>
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
                            <h2>Object Distance Measurement using Stereoscopic Vision</h2>
                            <h3>Description</h3>
                            <p><span className='heading'>Introduction</span>:
                                In this project, students will create a setup using stereoscopic vision techniques to observe and estimate rough distance measurements to objects in the environment. By leveraging a pair of synchronized cameras and disparity-based algorithms, students will gain valuable hands-on experience in depth perception and image processing. The project aims to foster understanding and practical skills in computer vision while enabling students to explore the potential applications of stereoscopic vision for distance estimation.
                            </p>
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
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default ExploreADAS;