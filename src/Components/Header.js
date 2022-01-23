import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {days} Days {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

function App() {
    return (
      <div className='header'>
        <h1>
          <Countdown date="11/11/2022"/>
        </h1>
      </div>
    );
  }
  
  export default App;
  