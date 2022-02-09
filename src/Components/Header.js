import ReactPlayer from "react-player";

import yt from '../Images/yt.png';
import insta from '../Images/insta.png';
import reddit from '../Images/reddit.png';
import twitter from '../Images/twitter.png';
import patreon from '../Images/patreon.png';

function Header() {
    return (
        <div>
        <div className="col-12 videoContainer">
            <div className="overlay"/>
            <div className="video">
            <ReactPlayer
                url="https://www.youtube.com/watch?v=XzM79LAxXvg"
                playing={true}
                muted={true}
                loop={true}
                width="100%"
                height="30vw"
            />
            </div>
          
        </div>
          
        <div className='container social' >
            <div className="row">
            <div className="col-3"/>  
            <a href="https://www.youtube.com/channel/UCqU0YrP58xBnBTk4XzeJTPw" className="col-1"><img className='social-media ' src={yt} alt='YouTube'/></a>
            <a href="https://www.patreon.com/hiraeth2022" className="col-1"><img className='social-media ' src={patreon} alt='Patreon'/></a>
            <a href="https://www.instagram.com/zacks_cozy_corner/" className="col-1"><img className='social-media ' src={insta} alt='Instagram'/></a>
            <a href="https://www.reddit.com/user/ZskrillaVkilla" className="col-1"><img className='social-media ' src={reddit} alt='Reddit'/></a>
            <a href="https://twitter.com/SpayceKowBoi" className="col-1"><img className='social-media ' src={twitter} alt='Twitter'/></a>
            <div className="col-3"/>
            
            </div>
        </div>
        </div>
    )
}

export default Header;