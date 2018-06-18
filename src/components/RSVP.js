import React from 'react';
import PropTypes from 'prop-types';
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

const RSVP = ({ value, onChange, onSubmit }) => (
  <Wrapper>
    <h1>RSVP</h1>
    <p>If you can make it to this glamourous event, drop your name below so we know how much snacks <i>*cough*</i> tequila to buy 🍺👍🏻</p>
    <br />
    <h3>Name</h3>
    <Input value={value} onChange={onChange} type="text" placeholder="your name here" />
    <br />
    <Button onClick={() => onSubmit()}>submit</Button>
  </Wrapper>
)

RSVP.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default RSVP;
