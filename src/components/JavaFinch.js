import Finch from '../img/FinchLogoView.gif';

const JavaFinch = () => {
    return (
        <div className = "JavaFinch">
            <div className = "Jtitle">
                    Java Finch Program
            </div>
            <div className = "Jtitle2">
                    Dancing Finch Robot
            </div>
            <div className = "Jinfo1">
                    This <span>Java</span> project was assigned to me during my first year of university. 
                    <br></br> It involved coding a finch robot supplied to us with its basic functions.
                    <br></br><br></br> My task in particular was the <span1>Dancing Finch Task</span1>. This involved coding an 
                    algorithm that would convert a <span2>Hexadecimal number</span2> into its <span2>binary</span2>, <span2>octal</span2> and <span2>decimal</span2> equivalents.
                   
            </div>
            <div className = "Jarrow1"> } </div>
            <div className = "Jinfo2">
                    User would be prompted to enter a single , or double digit hexadecimal number(<span>Hex.num</span>), or choose to run the program using a <span1>randomly.generated </span1> 
                    <span>Hex.num</span>. 
                    <br></br><br></br> 
                    Then, having converted the number, the program would instruct the finch robot to <span2>run</span2>.
            </div>
            <div className = "Jarrow2"> } </div>
            <div className = "Jinfo3">
                    The <span>Decimal.num</span> would be used to generate <r>R</r><g>G</g><bl>B</bl> values which in turn would change the colour of the finch lights.
                    <br></br><br></br> <r>Red</r>, would be the <span>Decimal.num</span>, <g>Green</g> = (<r>Red</r>%<bl2>80</bl2>) multiplied by <bl2>3</bl2>. <if>If</if> <g>Green</g> > <r>Red</r>, then <bl>Blue</bl> = <g>Green</g>;
                    Meanwhile, <if>if</if> <r>Red</r> => <g>Green</g>, <bl>Blue</bl> = <r>Red</r>; 
                    
            </div>
            <div className = "Jarrow3"> } </div>
            <div className = "Jinfo4">
                    The <span>Octal.num</span> would be assigned to the speed value (<span>spd</span>) of the finch. 
                    This would only occur <if>if</if> <span>spd</span> > <bl2>60</bl2>. <if>If</if> not, <span>spd</span> = <span>spd</span> + <bl2>50</bl2>; 
                    <br></br><br></br>
                    The <span1>Hex</span1>.<span2>length</span2>(length of the hexadecimal number) would determine the duration of movement.
                    <br></br>
                    <if>If</if> <span1>Hex</span1>.<span2>length</span2> = <bl2>2</bl2>, it would rotate(move) for <bl2>1000</bl2> miliseconds, otherwise, <if>if</if> <span1>Hex</span1>.<span2>length</span2> = 
                    <bl2>1</bl2>, it would move for <bl2>500</bl2> miliseconds. 
            </div>
            <div className = "Jarrow4"> } </div>
            <div className = "Jinfo5">
                    The <span>Binary.num</span> would determine the direction of the movement. <if>If</if> <span>Binary.num</span> (<g>charAt</g>(<span>x</span>)) = <bl2>1</bl2>,
                    the finch would move forwards, rotating wheels according to <span>spd</span>.  
                    <br></br><br></br>
                    Likewise, <if>if</if> <span>Binary.num</span> (<g>charAt</g>(<span>x</span>)) = <bl2>0</bl2>, it would backwards <span>-spd</span> for a duration of time specified by <span1>Hex</span1>.<span2>length</span2>. 
            </div>
            <div className = "Jarrow5"> } </div>
            <div className = "Jinfo6">
                    Finally, the user could be prompted to either restart the program selecting a new <span>Hex.num</span>, 
                    quit the program.
                    <br></br><br></br>
                    The program is repeatable potentially infinite times. Adding the <span>Hex.num</span> to a <span1>text.file</span1> after each turn.
                    This way, you can view all the numbers that have been input so far.
            </div>
            <div className = "Finch">
                    <img src = {Finch} alt = "image of finch robot"></img>
            </div>
        </div>
        
    )
}

export default JavaFinch