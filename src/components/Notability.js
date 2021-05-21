import Journality from '../img/Journality.png';
import JournalitySc from '../img/JournalitySc.png';
import Tilt from 'react-vanilla-tilt';


const Notability = () => {
    return (
        <body className = 'Notability'>
            
            <h1> Journality </h1>
            <h2> The Productivity Tool *</h2>
            
            <div className = "body1" data-tilt>
                Journality is a concept brought to life during the summer of 2019 before my first year of university.
                <br></br><br></br>I wanted to gain some coding experience before I started my course, and having had no
                previous experience in computer science other than modding games and *torrenting software, it was a great place to start.   
            </div>
            
            <div className = "body2" data-tilt>
            Using visual studio,  stack overflow and an impossible number of youtube videos, I brought my project to life.
            <br></br><br></br>The concept was to make an application to boost my productivity. 
            </div>
            <div className ="img" data-tilt>
            <img src = {Journality} alt = "img of journality main interface"></img>
            </div>
            
                <info1>
                    
                </info1>
                <info2>

                </info2>
                <info3>

                </info3>
                <info4>

                </info4>
            
            <script src="../vanilla-tilt.min.js"></script>
            
        </body>
        
    )
}

export default Notability