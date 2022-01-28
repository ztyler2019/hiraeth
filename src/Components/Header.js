import ReactPlayer from "react-player";

function Header() {
    return (
        <div className="col-12 videoContainer">
            <div className="overlay"/>
            <div className="video">
            <ReactPlayer
                url="https://www.youtube.com/watch?v=XzM79LAxXvg"
                playing={true}
                muted={true}
                loop={true}
                width="100%"
                height="40vw"
            />
            </div>
        </div>
    )
}

export default Header;