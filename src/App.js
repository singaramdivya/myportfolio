import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {Component} from 'react' 
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

		
class App extends Component{
	render(){
		return(
				<>
          <BrowserRouter>
            <div className='routes'>
            <Header/>
            <Switch>
            <Route exact path="/" component={About}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/project" component={Project}/> 
              <Route exact path="/contact" component={Contact}/>
            </Switch>
            </div>
          </BrowserRouter>
				</>
				)
			}
		} 

    export default App;