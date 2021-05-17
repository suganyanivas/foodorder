
import './App.css';
import Menu from './components/menucomponent';
import React,{Component} from 'react';
import{Navbar,NavbarBrand} from 'reactstrap';

class App extends Component{
    render(){
    return(
        <div>
        <Navbar  dark color="primary">
        <div className="container">
            <NavbarBrand href="/">Nivas Cafe</NavbarBrand>
        </div>

        </Navbar>
        <Menu />
        </div>
    );
}
}


export default App;
