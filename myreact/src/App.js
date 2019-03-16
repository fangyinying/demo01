import React, { Component } from 'react';
// import './App.css';
import Text from './mypage/mytest'
class App extends Component {

  render() {
    return (
      <div>
        <header >
            <Text imgsrc={require('./mypage/images/1.png')}
                  title="Canmera"
                  subtitle="Canmera2"
                  btntext="Canmera3"
                  effect="5"
            />
            <Text imgsrc={require('./mypage/images/2.png')}
                  title="Canmera"
                  subtitle="Canmera2"
                  btntext="Canmera3"
                  effect="7"
            />

        </header>
      </div>
    );
  }
}

export default App;
