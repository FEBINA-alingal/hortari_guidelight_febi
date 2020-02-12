import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   
    <div className="container">
      <nav className="navbar navbar-light" style={{"backgroundColor": "lightcoral"}}>

<img src="download.jpg." width="70" height="150" className="d-inline-block align-top" alt=""/>

<p align="right">
    <button type="button" className="btn btn-warning">Log In</button>
</p>
</nav>
        <div className="row">
            <div className="col-3">
                <div className="card mb-3" style={{"maxWidth": "540px"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="1.jpg" className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Headset</h5>
                                <p><a href="#" className="btn btn-primary">Add</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        <p align="right">
          <button type="button" className="btn btn-primary btn-lg">Checkout</button></p>

</div>
</div>


  );
}

export default App;
