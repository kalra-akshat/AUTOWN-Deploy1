
import './Styling/Exploreacs.css'
import bits_logo from './Images/bits_logo.png'
function ExploreADAS() {
    return (
        <div className="App">
            <nav >
                <ul >
                    <li>
                        <img src={bits_logo} style={{ width: '100%' }}></img>
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
                        <div className='head'>Advanced Driver Assistance Systems</div>




                        <div className='infoblock1' >
                            <h2>Autonomous Control Lightning Challenge: Accelerating Responsiveness for Safe and Efficient Driving</h2>
                            <h3>Description</h3>
                            <p><span className='heading'>Introduction</span>:
                                In this high-speed competition, participants will engage in a race against time to reduce response delays in autonomous vehicles' lateral and longitudinal control. The goal is to enhance the responsiveness of autonomous systems, ensuring safe and efficient driving in dynamic environments.
                                <br></br>
                                <span className='heading'>Competition Objective</span>:
                                Develop cutting-edge algorithms, control strategies, and sensor fusion techniques to significantly minimize response delays in the lateral and longitudinal control of autonomous vehicles.  </p>
                            <h3>Task</h3>
                            <p>
                                <span className='heading'>        Real-Time Decision-Making</span>: Create algorithms that enable real-time decision-making for autonomous vehicles, considering factors like vehicle dynamics, sensor data, and road conditions.
                                <br></br>
                                <span className='heading'>Sensor Fusion</span>: Develop advanced sensor fusion methods to improve perception accuracy and reduce latency in interpreting sensor inputs.
                                <br></br>
                                <span className='heading'>Dynamic Environment Handling</span>: Design strategies to handle rapidly changing traffic situations, such as sudden lane changes, unexpected obstacles, and fast-moving vehicles.
                                <br></br>
                                <span className='heading'>Safe Maneuvers</span>: Ensure that the autonomous vehicles can make safe and efficient maneuvers, such as lane changes, merging onto highways, and navigating intersections with minimal delays.
                                <br></br>
                                <span className='heading'>Performance Metrics</span>: Establish metrics for evaluating the responsiveness of autonomous control systems, including response time, control accuracy, and safety.
                            </p>

                        </div>



















                        <div className='infoblock2' >
                            <h2>Perception Fusion Showdown - Object & Lane Detection Duel</h2>
                            <h3>Description</h3>
                            <p><span className='heading'>Introduction</span>:
                                In this exciting competition, participants will engage in a showdown to advance the field of perception fusion in autonomous vehicles. The focus is on improving object detection and lane detection algorithms and integrating them seamlessly to enhance the perception capabilities of autonomous systems.
                                <span className='heading'>Competition Objective</span>:
                                Develop state-of-the-art perception fusion techniques that combine object detection and lane detection for autonomous vehicles, ultimately improving their ability to navigate safely and efficiently in complex environments.

                            </p>
                            <h3>Task</h3>
                            <p>
                                <span className='heading'>   Object Detection</span>: Create advanced object detection models capable of accurately identifying and tracking a wide range of objects in real-time, including vehicles, pedestrians, cyclists, and road signs.
                                <br></br>
                                <span className='heading'>Lane Detection</span>: Develop robust lane detection algorithms that can effectively identify lane markings, road boundaries, and lane geometry under varying weather and lighting conditions.
                                <br></br>
                                <span className='heading'>Perception Fusion</span>: Design and implement fusion strategies that seamlessly integrate object and lane detection outputs to provide a comprehensive understanding of the vehicle's surroundings.
                                <br></br>
                                <span className='heading'>Real-World Scenarios</span>: Evaluate the perception fusion systems in realistic driving scenarios, including urban environments, highways, and challenging weather conditions.
                                <br></br>
                                <span className='heading'>Scalability</span>: Ensure that the perception fusion solutions are scalable and adaptable to various autonomous vehicle platforms and sensor configurations.

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








