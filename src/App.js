import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  state = {
      jokes: ''
  }

  componentDidMount(){
    var url = 'https://safe-falls-22549.herokuapp.com/random_joke'
    axios.get(url)
    .then((x)=>{
        this.setState({
            jokes: x.data
        })
        console.log(x.data)
    })
    .catch()
  }

  render() {
    
    return (
      <div style={{margin: "100px"}}>
          <div className="col-sm-6">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{this.state.jokes.setup}</h5>
                <p className="card-text">{this.state.jokes.punchline} <br/><span role="img">😂😂😂</span></p>
                <button onClick={()=>{window.location.reload()}} className="btn btn-primary">Reload <i class="fas fa-sync-alt"></i></button>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;