import Journality from '../img/Journality.png';
import JournalitySc from '../img/JournalitySc.png';


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
            
                <div className = "info1" data-tilt>   
                    This is the main interface of the program. Here, you can write down the tasks you wish to complete in the day. These could be <b>HOMEWORK</b>, <b> WRITING</b> or even <b>EXCERCISE</b>
                    <br></br><br></br>
                    These were limited to five tasks so the user would not be too fixated on the amount of work they have to complete.
                </div>
                <div className = "info2" data-tilt> 
                    Here you can see the exit, minimise and fullscreen buttons. These are clearly marked exits following usabiity engineering principles.
                </div>
                <div className = "info3" data-tilt>
                    The direction button pushes the corresponding task to another window. <b>Window C</b> 
                    <br></br><br></br>
                    The tick button, crosses out the corresponding task indicating completion.
                </div>
                <div className = "info4" data-tilt> 
                    Calender would open a calender linked where you could add tasks for given to repeat. As well as get an overview of tasks completed each month.
                    <br></br><br></br>
                    Journal allows the user to note down what they had not completed in time for another session. As well as save sessions and retrieve them.
                </div>
                <div className = "info5" data-tilt> 
                    <b>Window C: </b> Here you can see how the pop up window looks. After inputing time, you will be able to see the timer at the top left.
                    <br></br><br></br> Additionally, there is a pause button which will pause for 15 minutes before staring. There is no way to stop it indefinitely.
                    <br></br><br></br>There is also a directional button at the top left, which will (if timer hasn't started) cancel window C and revert back to the main interface.
                    <br></br><br></br>Finally, there is a tick, which you press when you have finished and time has run out.  
                </div>
                <div className = "info6" data-tilt> 
                    Desktop background image.
                </div>
            <div className = "Window">
            <img src = {JournalitySc} alt = "img of journality running"></img>
            </div>
            <script src="../vanilla-tilt.min.js"></script>
            
        </body>
        
    )
}

export default Notability