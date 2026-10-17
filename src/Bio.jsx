import { UpArrow, DnArrow } from './Icons.jsx'
import coin from './assets/images/image02.png';
import interests from './Interests.jsx';

function Bio({ isMobile, onToggleWindow, openWindows }) {
    return (
        <section id="main-content">
            {isMobile && <><UpArrow dest="#header" /><h2>More About Me</h2></>}
            <div className="main-text">
                <p>
                    In my free time I really like to tinker with any sort of tech, especially building computers. I also like games, music, and books. My current games of choice are Overwatch and Minecraft. I haven't had time to read much since I've been in school, but I hope to start again soon.
                </p>
                {!isMobile && <WindowButtons onToggleWindow={onToggleWindow} openWindows={openWindows} />}
            </div>
            <p className="footer">
                Site version 7.0<br /><a href="https://catppuccin.com/">Catppuccin</a> color scheme used under the <a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE">MIT</a> license.<br />Super awesome background by <a href="https://github.com/FlipperDog">FlipperDog</a>.
            </p>
            <div className="coinlink">
                <div className="coin">
                    <a href="https://www.youtube.com/watch?v=EuIcDAevwuI"><img draggable="false" src={coin} alt="Click Me"/></a>
                </div>
            </div>
            {isMobile && <DnArrow dest="#projects-section" />}
        </section>  
    )
}

function WindowButtons({ onToggleWindow, openWindows }) {
    return (
        <div className="buttons" id="open-buttons">
            {interests.map((interest) => (
                <button 
                    key={interest.type}
                    className={`open-button ${openWindows[interest.type] ? "active" : ""}`}
                    onClick={() => onToggleWindow(interest.type)}
                >{interest.title}</button>
            ))}
        </div>
    )
}

export default Bio;