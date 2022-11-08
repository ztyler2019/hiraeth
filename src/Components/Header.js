import ReactPlayer from "react-player";

function Header() {
    return (
        <div className="col-12 videoContainer">
            <div className="overlay"/>
            <div className="video">
            <ReactPlayer
                url="https://youtu.be/uBg-9D7w_74"
                playing={true}
                muted={true}
                loop={true}
                width="100%"
                height="45vw"
                
            />
            </div>
        </div>
    )
}

export default Header;