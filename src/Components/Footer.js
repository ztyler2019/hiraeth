

function App() {
  return (
    <div>
    <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-5 info">
                <h5><i class="fa fa-road"></i> Cubic Collective Co.</h5>
                <div class="row">
                    <div class="col-6">
                        <ul class="list-unstyled">
                            <li><a href="#home">Product</a></li>
                            <li><a href="#home">Benefits</a></li>
                            <li><a href="#home">Partners</a></li>
                            <li><a href="#home">Team</a></li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul class="list-unstyled">
                            <li><a href="#home">Documentation</a></li>
                            <li><a href="#home">Support</a></li>
                            <li><a href="#home">Legal Terms</a></li>
                            <li><a href="#home">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-2 message">
                <h5 class="text-md-right">Contact Us</h5>
                <form>
                    {/*<fieldset class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
  </fieldset>*/}
                    <fieldset class="form-group">
                        <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
                    </fieldset>
                    <fieldset class="form-group text-xs-right">
                        <button type="button" class="btn btn-secondary-outline btn-lg">Send</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</footer>


    </div>
    
  );
}

export default App;
