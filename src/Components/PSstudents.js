import { FaHouse } from "react-icons/fa6";
import Studentcard from "./Studentcard"
import './Styling/PSstudents.css'
import sayantan from './Images/sayantan.jpg'
import sunjay from './Images/sunjay.jpg'
import samarth from './Images/samarth.jpg'
import antony from './Images/antony.jpg'
import aditya from './Images/aditya.jpg'
import raghu from './Images/raghu.jpg'
import omkar from './Images/omkar.jpg'
import akshat from './Images/akshat.jpg'
import rupesh from './Images/rupesh.jpg'
import shivam from './Images/shivam.jpg'
import tanushri from './Images/Tanushri.jpg'
import anirudh from './Images/anirudh.jpg'

function PSstudents() {
    const students = [
        {
            name: 'Akshat Kalra',
            url: akshat,
            details: "C++, DSA, Python, Machine Learning, OpenCV, HTML, CSS, Javascript, React.JS",
            detailsproj: "Projects:  ",
resume: "https://drive.google.com/file/d/1lrtFHuAPeT1gE9Bq9cS492zwKEH-p6zs/view?usp=drive_link"
        },
        {
            name: 'Omkar Pampattiwar',
            url: omkar,
            details: "AutoCAD, Ansys Workbench, Ansys APDL, python",

detailsproj: "Projects:  ",          resume: "https://drive.google.com/file/d/1DSw68cYHIiI2Mzr_gXXWK0MNCuH4Dc3T/view?usp=drive_link"
        },
        {
            name: 'Raghukul Reddy',
            url: raghu,
            details: "MATLAB, Fusion 360, Python, Machine Learning, Market Research, Product Development",

detailsproj: "Projects:  ",          resume: "https://drive.google.com/file/d/1aaU43a8WnJdkmPb4JmITZ0_nlze86xTC/view?usp=drive_link"
        },
        {
            name: 'Shivam Mittal',
            url: shivam,
            details: "openCV, python, C++, DSA, Deep learning, Operations management, CAD",

detailsproj: "Projects:  ",          resume: "https://drive.google.com/file/d/1D8Cjnh1QvuTxPvzqLKiZJPLXVCzrP9pm/view?usp=drive_link"
        },
        {
            name: 'Rupesh',
            url: rupesh,
            details: "C++, python, MATLAB, 3D CAD (solid works, siemens NX), AutoCAD, DSA, deep learning",

detailsproj: "Projects:  ",          resume: "https://drive.google.com/file/d/11m7ydJGI091eCABGb7f9h2VlAkstOj7_/view?usp=drive_link"
        },
        {
            name: 'Aditya Chikkam',
            url: aditya,
            details: "Java, DSA, AutoCAD, Fusion 360, Python, Machine Learning",

detailsproj: "Projects:  ",          resume: "https://drive.google.com/file/d/1A8TYVGQI6NPwljBDwM_2e9-WZ-pYbxFV/view?usp=drive_link"
        }, {
            name: 'Sunjay Roshan',
            url: sunjay,
            details: "SIMULINK, CREO, AutoCAD, ANSYS, MS Word, MS Excel, MS PowerPoint",

detailsproj: "Projects:  ",          resume: "https://drive.google.com/file/d/1jMNH8DpUjILmNH53fI7m_m28fdR_5w9z/view?usp=drive_link"
        }, {
            name: 'Anirudh',
            url: anirudh,
            details: "Deep Learning, Machine learning, Python, Computer vision",

detailsproj: "Projects:  ",          resume: "https://drive.google.com/file/d/11r6PkxXoPaG-i7gTqREGhDgMznnRTKFT/view?usp=drive_link"
        }, {
            name: 'Sayantan',
            url: sayantan,
            details: "SolidWorks, Creo Parametric, AutoCAD, Python3, MATLAB, HTML/CSS, MySQL",

detailsproj: "Projects:  ",          resume: "https://drive.google.com/file/d/1F0Byp15lKzB8FhjXojzjYm9yNtmNibXR/view"
        },
        {
            name: 'Samarth',
            url: samarth,
            details: "Computer Vision, ML, POSIX-compliant multi-threading C programming, Spring Boot, CSS, JavaScript, AutoCAD, Ansys, Creo Parametric, Python, Matlab, Java",

detailsproj: "Projects:  ",          resume: "https://drive.google.com/file/d/1a5mNd4NSbnPFxVHrv-N4EJjIeNHDtJXx/view"
        },
        {
            name: 'CM Antony',
            url: antony,
            details: "Python, Simulink, Matlab, Computer Vision, ROS, Gazebo, MS Azure, Iot Hub, PX-4, Fusion 360",

detailsproj: "Projects:  ",          resume: "https://drive.google.com/file/d/1hGQ3Srs1CoShHPrTyzdLyNPbOl9pVVco/view?usp=drive_link"
        },{
            name: 'Tanushri Tripathi',
            url: tanushri,
            details: "MatLab, Simulink, Arduino, AutoCAD, Fusion360, C++, HTML, CSS, Graphic Design",

detailsproj: "Projects:  ",          resume: "https://drive.google.com/file/d/110Sj1qADH8B4MhkPBy26cO3v6X1vIJ5B/view?usp=drive_link"
        }]
        
    








    return (
        <div className="pspage">
        <div className="ps-heading"><a className='home' href="/"><FaHouse/></a>  Student Partners</div>
        <div className="card-list">
            {students.map(student =>
                <Studentcard data={student} />
            )}
        </div>
        </div>
    )

}
export default PSstudents