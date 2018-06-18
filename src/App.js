import React, { Component } from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';

import Hero from './components/Hero';
import Lowdown from './components/Lowdown';
import RSVP from './components/RSVP';
import Thanks from './components/Thanks';

import { sendMessage } from './api'

import backgroundImage from './blue_texture.jpg'

const Wrapper = styled('div')`
  background-color: #0d19a3;
  background-image: url(${backgroundImage});
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  position: relative;
`;

const Title = styled('h1')`
  font-weight: 700;
  font-size: 55px;
  text-align: center;
`

class App extends Component {
  state = {
    value: '',
    sent: false,
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = () => {
    this.setState({ sent: true });
    const payload = {
      text: this.state.value,
    }
    sendMessage(payload)
  }

  render() {
    return (
      <Wrapper>
        <Hero />
        <Lowdown />
        {/* <Sound
          url="https://s3-eu-west-1.amazonaws.com/bo-personal/BoogieWonderland.mp3"
          playStatus={Sound.status.PLAYING}
        /> */}
        <RSVP value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        {this.state.sent && <Thanks />}
      </Wrapper>
    );
  }
}

export default App;
