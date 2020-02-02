import React ,{Component}from 'react';
import $ from "jquery" 
import './App.css';

class App extends Component {
  test=()=>{
    console.log("hi")
   
  }
  componentDidMount(){
    $(".a").click(function(){
      $(this).hide();
    })
  }
 
  render() {
    return (
      <div>
        <h1 className="a" onClick={this.test}> mohammed eshtayah </h1>
       </div>
    );
  }
}


export default App;
