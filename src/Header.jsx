import { DiscordIcon,
  GitHubIcon,
  PcPartsIcon,
  YouTubeIcon,
  DnArrow } from './Icons.jsx'
import pcPhoto from './assets/images/pc.jpg';

function Header({ isMobile, discordRef, githubRef, pcPartsRef, youtubeRef }) {
    return (
        <section id="header">
            <div className="profile-photo">
            <img draggable="false" src={pcPhoto} />
            </div>

            <h1 id="title">ThatGiantSeth</h1>
            <h2 id="subtitle">Job Hunting | He/Him</h2>
            <h4 id="subtitle2">
                Hey, I'm Seth! I am a recent Computer Engineering graduate always looking for fun new projects to work on.
            </h4>
            <SocialButtons 
                isMobile={isMobile}
                discordRef={discordRef}
                githubRef={githubRef}
                pcPartsRef={pcPartsRef}
                youtubeRef={youtubeRef}
            />
            {isMobile && <DnArrow dest="#main-content" />}
        </section>
    )
}

function SocialButtons({ isMobile, discordRef, githubRef, pcPartsRef, youtubeRef }) {
    return (
        <div className="buttons">
            {isMobile ? 
            <a draggable="false" target="_blank" id="discordlink-mobile" href="https://discord.com/users/411994450370232321" ref={discordRef}><DiscordIcon /></a>
            :
            <a draggable="false" target="_blank" id="discordlink" href="https://discord.com/users/411994450370232321" ref={discordRef}><DiscordIcon />@thatgiantseth</a>
            }
            <a draggable="false" target="_blank" id="github" href="https://github.com/ThatGiantSeth" ref={githubRef}><GitHubIcon/></a>
            <a draggable="false" target="_blank" id="pcparts" href="https://pcpartpicker.com/b/xXqp99" ref={pcPartsRef}><PcPartsIcon/ ></a>
            <a draggable="false" target="_blank" id="youtube" href="https://www.youtube.com/@ThatGiantSeth" ref={youtubeRef}><YouTubeIcon /></a>
        </div>
    )
}

export default Header;