import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0px 30px 30px;
  p {
    font-size: 20px;
    line-height: 26px;
    span {
      color: #1effbc;
    }
  }
  h2 {
    span {
      color: #1effbc;
    }
  }
`;

const Title = styled.h1``;


const Hero = () => (
  <Wrapper>
    <Title>The Lowdown</Title>
    <p>Next month is Chantals 30th birthday.</p>
    <p>She is too busy making offices all nice and plantsy green and said "I dont wanna organise anything big".</p>
    <h2>We say fuck that, <span>lets disco</span> 🕺</h2>
    <br />
    <Title>Keep it on the DL...</Title>
    <p>She has no idea we throwing this party and is expecting a chilled drink with friends at van hunks 🧐.</p>
    <p>If she asks or mentions anything either say u have plans or will meet her at van hunks later.</p>
    <h2>Nobody likes a <span>party pooper</span> 🙅🏻‍🎉💩</h2>
    <br />
    <Title>Dress for disco</Title>
    <p>Speaking of party poopers... nobody wants to be the person who doesn't dress up. </p>
    <p>Please dress appropriately for the discotheque.</p>
    <h2>Prizes on the night for <span>best dressed</span> and <span>best dance move</span></h2>
    <br />
    <Title>When and Where</Title>
    <p>Get to <span>House of H</span> on <span>Friday 06 July</span> before 7pm, unless you wanna be a dick and miss the suprise 🙅🏻‍🎉💩</p>
  </Wrapper>
)

export default Hero;
