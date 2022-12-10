import styled from 'styled-components';
import arrowDownIcon from '../assets/desktop/icon-arrow-down.svg';
import arrowUp from '../assets/desktop/icon-arrow-up.svg';
import { useAppDispatch } from '../app/store';
import { toggleMore } from '../features/clockSlice';
import { useAppSelector } from '../app/store';

import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const Button = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector(state => state.clock);

  return (
    <>
      <StyledButton onClick={() => dispatch(toggleMore())}>
        <Title>{!isOpen ? 'More' : 'Less'}</Title>
        <Arrows>
          <Image>
            {!isOpen ? (
              <IoMdArrowDropdown size={25} color='#ffffff' />
            ) : (
              <IoMdArrowDropup size={25} color='#ffffff' />
            )}
          </Image>
        </Arrows>
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  background: #ffffff;
  border-radius: 28px;
  border: none;

  display: flex;
  align-items: center;

  /* width: 146px; */
  /* height: 56px; */

  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 146px;
    height: 56px;
  }

  @media (max-width: 375px) {
    width: 115px;
    height: 39px;
  }
`;

const Arrows = styled.div`
  background: #303030;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 8px 9px 8px 13px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #999999 !important;
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 375px) {
    width: 32px !important;
    height: 32px !important;
    margin: 0;
    margin-left: 5px;
    /* padding: 3px 4px 4px 0; */
  }
`;

const Title = styled.span`
  text-transform: uppercase;
  opacity: 0.5;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 5px;
  padding: 15px 0 13px 21px;

  /* mix-blend-mode: normal;
  opacity: 0.5; */

  @media (max-width: 768px) {
  }

  @media (max-width: 375px) {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 3.6px;
  }
`;

const Image = styled.div`
  /* width: 12px;
  height: 6px; */
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    svg {
      width: 16px;
      height: 16px;
    }
    /* width: 12px;
    height: 6px; */
  }

  @media (max-width: 375px) {
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export default Button;
