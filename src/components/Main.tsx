import styled from 'styled-components';
import refreshIcon from '../assets/desktop/icon-refresh.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Bottom from './Bottom';
import { useAppSelector } from '../app/store';
import BottomExtended from './BottomExtended';

const BASE_QUOTE_URL = 'https://api.quotable.io/random';

type TQuote = {
  quote: string;
  setQuote: React.Dispatch<React.SetStateAction<TQuote>>;
};

const Main = () => {
  const { isOpen } = useAppSelector(state => state.clock);
  const [quote, setQuote] = useState<any>(
    '“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”'
  );

  const handleRefresh = () => {
    const fetchQuote = async () => {
      const { data } = await axios.get(BASE_QUOTE_URL);
      setQuote(data);
    };
    fetchQuote();
  };

  // useEffect(() => {
  //   const fetchQuote = async () => {
  //     const { data } = await axios.get(BASE_QUOTE_URL);
  //     setQuote(data);
  //     console.log(data);
  //   };
  //   fetchQuote();
  // }, []);

  return (
    <>
      <MainContainer>
        <Wrapper>
          {!isOpen && (
            <Quotes>
              <Quote>{quote.content || quote}</Quote>
              <Author>{quote.author || 'Ada Lovelace'}</Author>
              <Refresh onClick={handleRefresh}>
                <RefreshIcon src={refreshIcon} alt='refresh' />
              </Refresh>
            </Quotes>
          )}
          <Bottom />
        </Wrapper>

        {isOpen && <BottomExtended />}
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div``;

const Wrapper = styled.div`
  padding: 56px 165px 0px 165px;
  z-index: 999;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 80px 164px 0px 64px;
  }

  @media (max-width: 375px) {
    padding: 32px 59px 0px 26px;
    /* width: 290px; */
  }
`;

const Quotes = styled.div`
  display: flex;
  flex-direction: column;
  width: 540px;
  position: relative;

  @media (max-width: 768px) {
    /* width: 290px; */
  }

  @media (max-width: 375px) {
    width: 290px;
  }
`;

const Quote = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;

  @media (max-width: 375px) {
    font-size: 12px;
    line-height: 22px;
  }
`;

const Author = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  margin-top: 13px;

  @media (max-width: 375px) {
    font-size: 12px;
    line-height: 22px;
  }
`;

const Refresh = styled.div`
  width: 16.67px;
  height: 16.67px;
  margin-left: 17px;
  position: absolute;
  top: 7px;
  right: -26px;
`;

const RefreshIcon = styled.img`
  opacity: 1;
  cursor: pointer;
`;

export default Main;
