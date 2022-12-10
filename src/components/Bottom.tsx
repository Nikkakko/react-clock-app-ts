import styled from 'styled-components';
import sunIcon from '../assets/desktop/icon-sun.svg';
import moonIcon from '../assets/desktop/icon-moon.svg';
import Button from './Button';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/store';
import { fetchTime, fetchWorld, dayTimeTrue, dayTimeFalse } from '../features/clockSlice';

interface StyledProps {
  isOpen: boolean;
}

const Bottom: React.FC = () => {
  const { isOpen, worldContent, isDayTime } = useAppSelector<any>(state => state.clock);
  const [time, setTime] = useState<any>();

  const dispatch = useAppDispatch();

  const Greeting = () => {
    if (time >= '06:00' && time <= '11:59') {
      return (
        <>
          <Title>GOOD MORNING, IT’S CURRENTLY</Title>
          <ShortTitle>GOOD MORNING</ShortTitle>
        </>
      );
    } else if (time >= '12:00' && time <= '17:59') {
      return (
        <>
          <Title>Good afternoon, IT’S CURRENTLY</Title>
          <ShortTitle>GOOD MORNING</ShortTitle>
        </>
      );
    } else if (time >= '18:00' && time <= '23:59') {
      return (
        <>
          <Title>Good evening, IT’S CURRENTLY</Title>
          <ShortTitle>GOOD MORNING</ShortTitle>
        </>
      );
    } else if (time >= '00:00' && time <= '05:59') {
      return (
        <>
          <Title>GOOD night, IT’S CURRENTLY</Title>
          <ShortTitle>GOOD MORNING</ShortTitle>
        </>
      );
    } else {
      return (
        <>
          <Title>GOOD MORNING, IT’S CURRENTLY</Title>
          <ShortTitle>GOOD MORNING</ShortTitle>
        </>
      );
    }
  };

  const Display = () => {
    if (time >= '05:00' && time <= '17:59') {
      return <Image src={sunIcon} alt='sun' />;
    } else time >= '18:00' && time <= '04:59';
    return <Image src={moonIcon} alt='moon' />;
  };

  useEffect(() => {
    if (time >= '05:00' && time <= '17:59') {
      dispatch(dayTimeTrue());
    }
    if (time >= '18:00' && time <= '04:59') {
      dispatch(dayTimeFalse());
    }
  }, [time]);

  let recentDate;
  let hoursMinutes;
  useEffect(() => {
    //update recentDate every 1 second
    const interval = setInterval(() => {
      recentDate = new Date();
      hoursMinutes = recentDate.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      });
      setTime(hoursMinutes);
    }, 1000);

    return () => clearInterval(interval);
  }, [recentDate]);

  useEffect(() => {
    dispatch(fetchTime());
    dispatch(fetchWorld());
  }, []);

  return (
    <>
      <BottomContainer isOpen={isOpen}>
        <Header>
          <Display />
          <Greeting />
        </Header>
        <Clock>
          <Time>{time || '00:00'}</Time>
          <Gmt>BST</Gmt>
        </Clock>

        <BottomWrapper>
          <Country>
            IN {worldContent?.data?.location?.country.alpha3 || 'unknown'},
            {worldContent?.data?.location?.city.name || 'unknown'}
          </Country>
          <Button />
        </BottomWrapper>
      </BottomContainer>
    </>
  );
};

const BottomContainer = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  margin-top: ${props => (props.isOpen ? '0' : '253px')};

  //media\

  @media (max-width: 768px) {
    margin-top: ${props => (props.isOpen ? '0' : '388px')};
  }

  @media (max-width: 375px) {
    margin-top: ${props => (props.isOpen ? '0' : '227px')};
  }
`;

const Image = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  color: #ffffff;
  text-transform: uppercase;

  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  margin-left: 16.44px;

  @media (max-width: 768px) {
    font-size: 18px;
    letter-spacing: 3.6px;
  }

  @media (max-width: 375px) {
    font-size: 15px;
    letter-spacing: 3px;
    /* border: 1px solid red; */
    display: none;
  }
`;

const ShortTitle = styled.div`
  color: #ffffff;
  text-transform: uppercase;
  display: none;

  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  margin-left: 16.44px;

  @media (max-width: 768px) {
    font-size: 18px;
    letter-spacing: 3.6px;
  }

  @media (max-width: 375px) {
    font-size: 15px;
    letter-spacing: 3px;
    /* border: 1px solid red; */
    display: inline-block;
  }
`;

const Clock = styled.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: 375px) {
  }
`;

const Time = styled.p`
  letter-spacing: -5px;
  font-weight: 700;
  font-size: 200px;
  line-height: 200px;

  /* display: flex;
  align-items: center;
  text-align: center; This is important */

  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 175px;
    line-height: 175px;
    letter-spacing: -4.375px;
  }

  @media (max-width: 375px) {
    font-weight: 700;
    font-size: 100px;
    line-height: 100px;
    letter-spacing: -2.5px;
  }
`;

const Gmt = styled.p`
  color: #ffffff;
  font-weight: 300;
  font-size: 40px;
  line-height: 28px;

  /* display: flex; */
  margin-bottom: 43px;
  margin-left: 13px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 32px;
    display: flex;
    align-items: flex-end;
  }

  @media (max-width: 375px) {
    font-weight: 300;
    font-size: 15px;
    line-height: 28px;

    margin-left: 5px;
    margin-bottom: 10px;
  }
`;

const Country = styled.p`
  color: #ffffff;
  text-transform: uppercase;

  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 4.8px;

  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: 18px;
    letter-spacing: 3.6px;
    margin-bottom: 50px;
  }

  @media (max-width: 375px) {
    font-weight: 700;
    font-size: 15px;
    line-height: 28px;
    letter-spacing: 3px;
    /* margin-top: 16px; */
    margin-bottom: 48px;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Bottom;
