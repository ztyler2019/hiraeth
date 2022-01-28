import Accordion from 'react-bootstrap/Accordion'

function App() {
  return (
    <div className='container'>
        <div className="col-12">
      <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header><h1>What is Hiraeth?</h1></Accordion.Header>
    <Accordion.Body>
      <p>n. (Welsh) A spiritual longing for a home which maybe 
            never was. Nostalgia for ancient places to which we cannot return.
            It is the echo of the lost places of our soul's past and our grief
            for them. It is in the wind, the rocks, and the waves. It is nowhere
            and it is everywhere.</p>
            <br/>
            <p>This project was created as a means of conveying something I am unable to
            achive in words. A self-exploration and a general study on human behavior.
            It is accepted that certain meanings will get lost in the noise, but the goal
            for this project was to create something that taps into everyone's
            inner being, without being too generic to loose all meaning.
          </p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

        </div>
    </div>
  );
}

export default App;
