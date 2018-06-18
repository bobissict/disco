import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0px 30px 90px;
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

const Input = styled.input`
  width: 100%;
  font-size: 20px;
  line-height: 50px;
  padding: 0px 15px
  box-sizing: border-box;
  display: block;
`;

const Button = styled.button`
  background: #1effbc;
  display: block;
  border: 0px none;
  width: 100%;
  line-height: 50px;
  font-size: 20px;
  font-weight: bold;
`

const RSVP = () => (
  <Wrapper>
    <h1>RSVP</h1>
    <p>If you can make it drop your detz below so we know how much snacks <i>*cough*</i> tequila to buy 🍺👍🏻</p>
    <br />
    <h3>Name</h3>
    <Input type="text" placeholder="your name here" />
    <h3>Extra guests</h3>
    <Input type="number" placeholder="number extra guests here" />
    <br />
    <Button>submit</Button>
  </Wrapper>
)

export default RSVP;
