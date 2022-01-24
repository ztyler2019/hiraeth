function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } 

function App() {
    return (
      <div className='to-top'>
          <button onClick={topFunction}><span>&#8638;</span></button>
      </div>
    );
  }
  
  export default App;
  