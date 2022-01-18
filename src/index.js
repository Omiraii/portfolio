import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Display from './Display';
import reportWebVitals from './reportWebVitals';

class Portfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentDisplay: "home"
    };
    this.changePage = this.changePage.bind(this);
  }
  changePage(props) {
    let id = props.target.className
    if(id === "n-home") {
      this.setState({
        currentDisplay: 'home'
      })
    } else if(id === "n-projects") {
      this.setState({
        currentDisplay: 'projects'
      })
    } else if(id === "n-about") {
      this.setState({
        currentDisplay: 'about'
      })
    } else if(id === "n-contact") {
      this.setState({
        currentDisplay: 'contact'
      })
    }
  }
  render() {
    return(
      <div id="portfolio">
        <Navbar 
          changePage={this.changePage}/>
        <Display 
          page={this.state.currentDisplay}
          changePage={this.changePage}/>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
