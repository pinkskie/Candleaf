import './App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Navbar,Footer} from './components'
import {MainPage} from './pages'


function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <Switch>
         <Route path='/' exact><MainPage/></Route>
       </Switch>
       <Footer/>
    </BrowserRouter>
  
  );
}

export default App;
