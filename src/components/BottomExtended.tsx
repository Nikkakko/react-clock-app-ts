import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../app/store';
import { timeProps } from '../features/clockSlice';

interface StyledProps {
  isDayTime: boolean;
}

const BottomExtended: React.FC = () => {
  const { timeContent, isDayTime } = useAppSelector<any>(state => state.clock);

  return (
    <Container isDayTime={isDayTime}>
      <Content>
        <LeftSide>
          <TimeZone>CURRENT TIMEZONE</TimeZone>
          <Location>{timeContent.timezone}</Location>
          <DayOfYear>Day of the year</DayOfYear>
          <Day>{timeContent.day_of_year}</Day>
        </LeftSide>
        <Line isDayTime={isDayTime}></Line>
        <RightSide>
          <DayOfWeek>Day of the week</DayOfWeek>
          <DayOfNumber>{timeContent.day_of_week}</DayOfNumber>
          <WeekNumber>Week number</WeekNumber>
          <Week>{timeContent.week_number}</Week>
        </RightSide>
      </Content>
    </Container>
  );
};

const Container = styled.div<StyledProps>`
  background: ${props => (props.isDayTime ? '#ffffffbf' : '#000000bf')};
  backdrop-filter: ${props => (props.isDayTime ? 'blur(20.3871px);' : 'blur(20.3871px)')};
  margin-top: 56px;
  height: 565px;

  // 000000bf

  p {
    color: ${props => (props.isDayTime ? '#000000' : '#ffffff')};
  }

  h1 {
    color: ${props => (props.isDayTime ? '#000000' : '#ffffff')};
  }
  @media screen and (max-width: 1440px) {
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    height: 535px;
  }

  @media screen and (max-width: 375px) {
    height: 320px;
  }
`;

const Content = styled.div`
  padding: 74px 431px 74px 165px;
  position: relative;
  display: flex;
  /* flex-direction: row; */

  @media screen and (max-width: 768px) {
    padding: 119px 116px 199px 64px;
  }

  @media screen and (max-width: 375px) {
    padding: 48px 26px 48px 26px;
  }
`;
const LeftSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex: 0;
  }

  @media screen and (max-width: 375px) {
    /* flex-direction: row; */
    /* justify-content: space-between; */
  }
`;

const TimeZone = styled.p`
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;

  color: #303030;

  @media screen and (max-width: 768px) {
    font-size: 13px;
    letter-spacing: 2.6px;
  }

  @media screen and (max-width: 375px) {
    font-size: 10px;
    letter-spacing: 2px;
    position: absolute;
  }
`;
const Location = styled.h1`
  color: #303030;
  font-weight: 700;
  font-size: 56px;
  line-height: 68px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media screen and (max-width: 375px) {
    font-size: 20px;
    line-height: 24px;

    position: absolute;
    right: 25px;
  }
`;
const DayOfYear = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  /* identical to box height, or 187% */

  letter-spacing: 3px;
  text-transform: uppercase;

  color: #303030;

  @media screen and (max-width: 768px) {
    font-size: 13px;
    letter-spacing: 2.6px;
    margin-top: 49px;
  }

  @media screen and (max-width: 375px) {
    font-size: 10px;
    letter-spacing: 2px;
    top: 45px;
    position: absolute;
  }
`;
const Day = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 68px;
  /* identical to box height */

  color: #303030;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media screen and (max-width: 375px) {
    font-size: 20px;
    line-height: 24px;
    position: absolute;
    right: 25px;
    top: 95px;
  }
`;

const Line = styled.div<StyledProps>`
  /* position: absolute; */
  background: ${props => (props.isDayTime ? '#303030' : '#ffffff')};
  /* background: #ff0606; */
  mix-blend-mode: normal;
  opacity: 0.25;
  width: 1px;
  max-height: fit-content;
  /* margin-left: 148px; */
  left: 500px;
  top: 20px;

  @media screen and (min-width: 1800px) {
    /* display: none; */
    /* margin-right: 15%; */
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

const RightSide = styled.div`
  display: flex;
  /* flex:  */
  flex-direction: column;
  margin-left: 94px;

  @media screen and (max-width: 768px) {
    flex: 2;
    margin-left: 160px;
  }
`;

const DayOfWeek = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  /* identical to box height, or 187% */

  letter-spacing: 3px;
  text-transform: uppercase;

  color: #303030;

  @media screen and (max-width: 768px) {
    font-size: 13px;
    letter-spacing: 2.6px;
  }

  @media screen and (max-width: 375px) {
    font-size: 10px;
    letter-spacing: 2px;

    position: absolute;
    left: 25px;
    top: 135px;
  }
`;

const DayOfNumber = styled.p`
  font-weight: 700;
  font-size: 56px;
  line-height: 68px;
  /* identical to box height */

  color: #303030;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media screen and (max-width: 375px) {
    font-size: 20px;
    line-height: 24px;

    position: absolute;
    /* left: 0; */
    right: 25px;
    top: 135px;
  }
`;

const WeekNumber = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  /* identical to box height, or 187% */

  letter-spacing: 3px;
  text-transform: uppercase;

  color: #303030;

  @media screen and (max-width: 768px) {
    font-size: 13px;
    letter-spacing: 2.6px;
    margin-top: 49px;
  }

  @media screen and (max-width: 375px) {
    font-size: 10px;
    letter-spacing: 2px;

    position: absolute;
    left: 25px;
    top: 130px;
  }
`;
const Week = styled.p`
  font-weight: 700;
  font-size: 56px;
  line-height: 68px;
  /* identical to box height */

  color: #303030;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media screen and (max-width: 375px) {
    font-size: 20px;
    line-height: 24px;

    position: absolute;
    /* left: 0; */
    right: 25px;
    top: 180px;
  }
`;

export default BottomExtended;
