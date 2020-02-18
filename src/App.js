import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import producTile from './components/producTile';
const productsArray=[
    {
        "id":1,
        "title":"Oneplus 7",
        "price":"Rs.30000"
    },
    {
        "id":2,
        "title":"Samsung",
        "price":"Rs.20000"
    },
    {
        "id":3,
        "title":"vivo v17",
        "price":"Rs.25000"
    }

]
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstState: 'hello world',
            cartCount: 0,
            products:[]
        
        
        }
    }
        


    componentDidMount(){
        this.loadProduct()
        }
    
    componentDidUpdate(prevProps,prevState)
    {
        if(this.state.cartCount>=10)
        alert('count exceeded!!')
    }

    addCount(){
        const newCount=this.state.cartCount+1;
        this.setState({
            cartCount:newCount
        })
    }

   loadProduct(){
       this.setState({
        products:productsArray 

       })
   }
   
    

 render() {
     const productsList=this.state.products.map((product)=>{
         return producTile(this.addCount.bind(this),product)
     })
     console.log(productsList)
    return (
   
        <div className="container">
          <nav className="navbar navbar-light" style={{"backgroundColor": "lightcoral"}}>
          
    
    <img src="download.jpg." width="70" height="150" className="d-inline-block align-top" alt=""/>
    {this.state.firstState}
    
    <p align="right">
        <button type="button" className="btn btn-warning">Cart{this.state.cartCount}</button>
    </p>
    </nav>
            <div className="row">
                {productsList}
                
                </div>
                
            <p align="right">
              <button type="button" className="btn btn-primary btn-lg">Checkout</button></p>
    
    </div>
    
    
    
      );

}




}


export default App;
