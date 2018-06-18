import React from 'react';
import styled from 'styled-components';

import Logo from './logo.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 30px;
`;

const Title = styled('h1')`
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
  span {
    color: #1effbc;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  img {
    width: 100%;
  }
`;

const Hero = () => (
  <Wrapper>
    <ImageWrapper>
      <img src={Logo} />
    </ImageWrapper>
    <Title>Chantals super <span>suprise disco party</span> 🕺🔥</Title>
  </Wrapper>
)

export default Hero;
