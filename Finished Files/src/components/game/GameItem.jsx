import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsStar } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { StarRating } from '../common';

const GameItem = ({ gameItem }) => {
  return (
    <GameItemWrapper className='card'>
      <div className='card-top img-fit-cover'>
        <img src = { gameItem?.background_image } alt={gameItem?.name} />
        <StarRating rating = { gameItem?.rating } />
        <div className='ratings-count'>
          { gameItem?.ratings_count } <BsStar className='ms-1' size = { 12 } />
        </div>
      </div>
      <div className='card-bottom'>
        <h4 className='text-white text-uppercase card-title'>
          { gameItem?.name }
        </h4>
        <div className='block-wrap d-flex align-items-end justify-content-between'>
          <div className='details-group'>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Release Date: &nbsp;</p>
              <p className='details-item-value'>{ gameItem?.released } </p>
            </div>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Updated: &nbsp;</p>
              <p className='details-item-value'>{ gameItem?.updated } </p>
            </div>
          </div>
          <Link to = { `/games/${gameItem?.id }`} className='card-button text-uppercase'>see more</Link>
        </div>
      </div>
    </GameItemWrapper>
  )
}

export default GameItem;

GameItem.propTypes = {
  gameItem: PropTypes.object
}

const GameItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .card-top{
    height: 280px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.27) 92.08%);
    position: relative;

    &::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }

    .ratings-count{
      position: absolute;
      left: 18px;
      bottom: 10px;
      font-weight: 700;
      font-size: 14px;
      padding: 0px 12px;
      border-radius: 16px;
      background-color: var(--clr-white);
      z-index: 1;
    }
  }

  .card-bottom{
    flex: 1;
    background-color: var(--clr-violet-light);
    padding: 20px 18px;

    .card-title{
      font-size: 18px;
      font-weight: 800px;
      font-family: var(--font-family-poppins)!important;
      letter-spacing: 0.06em;
      margin-bottom: 10px;
    }

    .card-button{
      height: 34px;
      text-align: center;
      border: 1px solid var(--clr-green-normal);
      padding: 0px 16px;
      min-width: 108px;
      color: var(--clr-white);
      font-weight: 600;
      letter-spacing: 0.03em;
      display: flex;
      align-items: center;
      transition: var(--transition-default);

      &:hover{
        background-color: var(--clr-green-normal);
      }
    }
  }

  .details-group{
    padding-top: 12px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }
`;
