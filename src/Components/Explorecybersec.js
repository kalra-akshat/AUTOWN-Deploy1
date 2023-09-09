import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Styling/Explorecybersec.css'
import bits_logo from './Images/bits_logo.png'
function Explorecybersec() {
    return (
        <div className="App2">
            <nav >
                <ul style={{

                }}>
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
                        <a href='/regcs'>REGISTER</a>
                    </li>

                </ul>
            </nav>
            <Parallax pages={5.75} style={{ top: '0', left: '0' }} className="animation">
                <ParallaxLayer offset={0} speed={1.5} factor={2}>
                    <div className="animation_layer1 parallax" id="background" >
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.5} >
                    <div className="contentblock" >
                        <div className='head'>CyberSecurity</div>
                        <div className='infoblock3' id='cs.1'>
                            <h2>AI and ML-Based Intrusion Detection System (IDS) for Automotive CAN Bus Systems</h2>
                            <h3>Description</h3>
                            <p><span className='heading'>Introduction</span>:
                                The integration of Artificial Intelligence (AI) and Machine Learning (ML) technologies has revolutionized the field of cybersecurity, providing innovative solutions to detect and prevent cyber threats. In this competition, participants will be challenged to develop an AI and ML-based Intrusion Detection System (IDS) tailored specifically for automotive Controller Area Network (CAN) bus systems. The competition aims to push the boundaries of automotive cybersecurity and enhance the safety and security of connected vehicles.
                                <br></br>
                                <span className='heading'>Competition Objective</span>:
                                The primary objective of this competition is to design, implement, and deploy an AI and ML-based IDS capable of effectively detecting and mitigating cyber intrusions and anomalous activities in the automotive CAN bus system. Participants will demonstrate their expertise in AI, ML, cybersecurity, and CAN bus protocols.
                            </p>
                            <h3>Task</h3>
                            <p><span className='heading'>CAN Bus Data Collection and Preprocessing</span>:
                                Participants will capture real-time CAN bus messages from a simulated or real automotive CAN network. They will preprocess the data to extract relevant features and prepare it for AI and ML analysis.
                                <br></br>
                                <span className='heading'>Baseline Creation and Feature Engineering</span>:
                                Participants will establish a baseline of normal behavior for the CAN bus system based on the collected data. They will perform feature engineering to transform the data into meaningful representations for AI and ML algorithms.
                                <br></br>
                                <span className='heading'>AI and ML Model Development</span>:
                                Participants will develop AI and ML models, such as Deep Learning, Support Vector Machines, Random Forests, or other suitable algorithms, to analyze the CAN bus data and detect intrusions and anomalies.
                                <br></br>
                                <span className='heading'>Model Training and Validation</span>:
                                Participants will train their AI and ML models on a labeled dataset containing both normal and anomalous CAN bus traffic. They will validate the models using appropriate metrics to ensure their effectiveness.
                                <br></br>
                                <span className='heading'> Real-Time Monitoring and Alerting</span>:
                                Participants will integrate the trained AI and ML models into a real-time IDS that continuously monitors the CAN bus traffic. The IDS will trigger alerts when it detects potential intrusions or suspicious activities.
                                <br></br>
                                <span className='heading'> Logging and Reporting</span>:
                                Participants will implement a logging mechanism to record all detected anomalies, alerts, and system events. They will generate detailed reports to aid in post-incident investigation and response."
                            </p>

                        </div>
                        <div className='infoblock4'>
                            <h2>"CANcrypt" - Cryptographic Techniques for Securing the CAN Bus</h2>
                            <h3>Description</h3>
                            <p><span className='heading'>Introduction</span>:
                                The "CANcrypt" competition is an exciting platform that challenges participants to explore and implement cryptographic techniques for defending the Controller Area Network (CAN) bus in modern vehicles. Participants will showcase their expertise in cryptography, cybersecurity, and automotive systems to devise innovative solutions that ensure the integrity, confidentiality, and authenticity of messages transmitted over the CAN bus.
                                <br></br>
                                <span className='heading'>Competition Objective</span>:
                                The primary objective of this competition is to develop robust cryptographic techniques that can effectively secure the CAN bus, protecting it from unauthorized access, message tampering, and cyber threats. Participants will demonstrate their ability to design and implement encryption, authentication, and integrity verification methods specifically tailored for the CAN bus environment.
                            </p>
                            <h3>Task</h3>
                            <p><span className='heading'>Cryptographic Algorithm Selection</span>:
                                Participants will choose suitable cryptographic algorithms for encryption and digital signatures, considering factors such as security, performance, and compatibility with CAN bus constraints.
                                <br></br>
                                <span className='heading'>  Secure Key Management</span>:
                                Participants will design and implement a secure key management system for generating, distributing, and protecting cryptographic keys used in the CAN bus communication.
                                <br></br>
                                <span className='heading'> Message Encryption</span>:
                                Participants will develop encryption techniques to ensure the confidentiality of sensitive data transmitted over the CAN bus. The encryption process should account for message size, latency, and computational efficiency.
                                <br></br><span className='heading'>
                                    Digital Signatures</span>:
                                Participants will implement digital signature algorithms to provide message authenticity and data integrity verification for CAN bus messages.
                                <br></br><span className='heading'>
                                    Real-Time Performance:</span>
                                Participants will optimize their cryptographic techniques for real-time performance, ensuring minimal impact on the latency-sensitive CAN bus communication.
                                <br></br>
                                <span className='heading'>    Resistance to Attacks</span>:
                                Participants should consider potential cryptographic attacks, such as side-channel attacks, and design countermeasures to enhance the robustness of their cryptographic solutions."
                            </p>
                        </div>
                        


                        <div className='infoblock3'>
                            <h2>Vehicle Anomaly Detection Challenge: Securing Connected Cars with Machine Learning</h2>
                            <h3>Description</h3>
                            <p><span className='heading'>Introduction</span>:
                                As vehicles become more connected and reliant on electronic systems, ensuring their security is paramount. This competition focuses on the development of machine learning techniques for anomaly-based intrusion detection in vehicles to protect them from cyber threats.
                                <br></br>
                                <span className='heading'>Competition Objective</span>:
                                Advance the field of vehicle cybersecurity by creating and testing machine learning models that can effectively detect anomalies and intrusions in connected car systems, including in-vehicle networks, communication interfaces, and control systems.
                            </p>
                            <h3>Task</h3>
                            <p>
                                <span className='heading'>
                                    Data Collection and Preparation:</span> Participants should collect and prepare datasets that represent normal vehicle operation and various types of anomalies or attacks that vehicles may encounter.
                                <br></br><span className='heading'>
                                    Model Development:</span> Develop machine learning models capable of identifying anomalies and intrusions in vehicle systems. Consider using techniques like deep learning, recurrent neural networks (RNNs), convolutional neural networks (CNNs), or ensemble methods.
                                <br></br><span className='heading'>
                                    Real-Time Detection:</span> Create algorithms and solutions that can perform real-time anomaly detection in a vehicle's network and control systems.
                                <br></br><span className='heading'>
                                    Integration with Vehicle Systems:</span> Develop mechanisms for integrating intrusion detection models into a vehicle's existing cybersecurity infrastructure.
                                <br></br><span className='heading'>
                                    Scalability and Resource Efficiency:</span> Ensure that the solutions are scalable and do not place undue computational burden on the vehicle's onboard systems.</p>
                        </div>


                        <div className='infoblock4'>
                            <h2>RKE Security Challenge: Defending Against Remote Keyless Entry Attacks</h2>
                            <h3>Description</h3>
                            <p><span className='heading'>Introduction</span>:
                                In recent years, concerns about the security of Remote Keyless Entry (RKE) systems in vehicles have grown as researchers have demonstrated vulnerabilities that could potentially be exploited by attackers. This competition aims to foster innovation and collaboration in the field of automotive security.
                                <br></br>
                                <span className='heading'>Competition Objective</span>:
                                Develop and demonstrate novel techniques, tools, or strategies to enhance the security of RKE systems in modern vehicles, protecting them from various types of attacks, including relay attacks, brute force attacks, and signal jamming.
                            </p>
                            <h3>Task</h3>
                            <p>
                                <span className='heading'>
                                    Relay Attack Mitigation:</span> Participants are tasked with developing and testing countermeasures to prevent or mitigate relay attacks, where attackers capture and relay signals between the key fob and the vehicle to gain unauthorized access.
                                    <br></br>     <span className='heading'>
                                    Encryption and Authentication:</span> Create and implement improved encryption and authentication methods for RKE systems to ensure that only authorized key fobs can access and start the vehicle.
                                    <br></br>   <span className='heading'>
                                    Signal Jamming Resilience:</span> Develop techniques to detect and respond to signal jamming attempts, ensuring that RKE systems can continue to function even in the presence of jamming devices.
                                    <br></br>  <span className='heading'>
                                    User-Friendly Solutions:</span> Consider the usability and convenience of the security enhancements to ensure that they do not overly inconvenience vehicle owners while providing robust protection
                            </p>
                        </div>










                        <div className='infoblock3'>
                            <h2>OTA Update Security Challenge: Safeguarding Connected Devices and Vehicles</h2>
                            <h3>Description</h3>
                            <p><span className='heading'>Introduction</span>:
                                As the number of connected devices, including vehicles, continues to grow, the importance of secure Over-the-Air (OTA) updates cannot be overstated. This competition aims to address the critical issue of OTA update security and inspire the development of robust solutions to protect devices and vehicles from potential cyber threats.
                                <br></br>
                                <span className='heading'>Competition Objective</span>:
                                Develop and demonstrate innovative techniques, protocols, or mechanisms to enhance the security of OTA updates for a wide range of connected devices, including IoT devices and vehicles, while ensuring data integrity, privacy, and device safety.
                            </p>
                            <h3>Task</h3>
                            <p>

                                <span className='heading'>
                                    OTA Update Authentication: </span>Create and implement improved methods for verifying the authenticity of OTA updates, ensuring that only authorized and legitimate updates are accepted by devices and vehicles.
                                <span className='heading'>
                                    Data Encryption:</span> Develop strong encryption methods to protect OTA update packages, preventing tampering or interception of update data during transmission.
                                <span className='heading'>
                                    Secure Boot and Rollback Protection: </span>Design and implement secure boot processes that safeguard devices from running compromised firmware. Additionally, establish mechanisms to prevent attackers from rolling back devices to vulnerable firmware versions.
                                <span className='heading'>
                                    Privacy Protection:</span> Implement measures to protect user privacy during OTA updates, ensuring that sensitive information is not exposed or misused.
                                <span className='heading'>
                                    Resilience to Attacks: </span>Develop techniques to detect and respond to OTA update attacks, such as man-in-the-middle attacks or malicious update servers.
                            </p>  </div>











                        <div className='infoblock4'>
                            <h2>Autonomous Vehicle Security Challenge: Defending Against Advanced Threats</h2>
                            <h3>Description</h3>
                            <p><span className='heading'>Introduction</span>:
                                The widespread adoption of autonomous vehicles is on the horizon, but so are potential security challenges unique to these vehicles. This competition aims to investigate and develop solutions to protect autonomous vehicles from threats like sensor spoofing, GPS manipulation, and control system vulnerabilities.
                                <br></br>
                                <span className='heading'>Competition Objective</span>:
                                Investigate and develop innovative techniques, algorithms, and technologies to enhance the security of autonomous vehicles, focusing on protecting against sensor spoofing, GPS manipulation, and control system vulnerabilities.
                            </p>
                            <h3>Task</h3>
                            <p>
                                <span className='heading'>
                                    Sensor Spoofing Detection:</span> Participants are tasked with developing methods to detect sensor spoofing attacks, where adversaries manipulate sensor data (e.g., lidar, radar, cameras) to mislead the autonomous vehicle's perception system.
                                <br></br><span className='heading'>
                                    GPS Integrity:</span> Create and implement solutions to verify the integrity of GPS signals to prevent GPS spoofing attacks, which can mislead autonomous vehicles' navigation systems.
                                <br></br><span className='heading'>
                                    Control System Resilience:</span> Develop strategies to protect the control systems of autonomous vehicles from cyberattacks that can manipulate vehicle behavior and compromise safety.
                                <br></br><span className='heading'>
                                    Machine Learning Security:</span> Investigate and enhance the security of machine learning models used in autonomous vehicles, ensuring they are resilient to adversarial attacks.
                                <br></br><span className='heading'>
                                    Redundancy and Fail-Safes:</span> Develop mechanisms to introduce redundancy and fail-safes in autonomous vehicle systems to mitigate the impact of security breaches.
                            </p>
                        </div>





                        <div className='register'><a href='/regcs'>REGISTER</a></div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default Explorecybersec;