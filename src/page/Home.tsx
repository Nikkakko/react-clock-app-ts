import { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/store';
import bgDayTime from '../assets/desktop/bg-image-daytime.jpg';
import bgNightTime from '../assets/desktop/bg-image-nighttime.jpg';
import Main from '../components/Main';

const Home = () => {
  const { isDayTime } = useAppSelector(state => state.clock);
  return (
    <HomeContainer>
      <Image src={isDayTime ? bgDayTime : bgNightTime} alt='background' />
      <Main />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  background: #000000;
  mix-blend-mode: normal;
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 0;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: -3px;
  z-index: -2;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  object-fit: cover;
`;

export default Home;
