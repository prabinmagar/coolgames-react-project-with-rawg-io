import styled from 'styled-components';
import PropTypes from 'prop-types';

const CreatorItem = ({ creatorItem }) => {
  const positions = creatorItem?.positions?.map(position => position?.name);
  const games = creatorItem?.games?.map(game => game?.name);

  return (
    <CreatorItemWrapper className='card' style = {{
      background: `linear-gradient(rgba(7, 5, 27, 0.9), rgba(0, 0, 0, 0.95)), url(${creatorItem?.image_background }) center/cover no-repeat`
    }}>
      <div className='card-top'>
        <img src = { creatorItem?.image } />
      </div>
      <div className='card-bottom text-white'>
        <h4 className='card-title'>{ creatorItem?.name } </h4>
        <ul className='card-list-group text-white'>
          <li className='list-group-item'>
            <span className='item-left'>Games Count: </span>
            <span className='item-right'>{ creatorItem?.games_count }</span>
          </li>
          <li className='list-group-item'>
            <span className='item-left'>Position: </span>
            <span className='item-right'>{ positions.length > 0 ? positions.join(", ") : "N/A" }</span>
          </li>
          <li className='list-group-item'>
            <span className='item-left'>Games: </span>
            <span className='item-right'>{ games.length > 0 ? games.join(", ") : "N/A" }</span>
          </li>
        </ul>
      </div>
    </CreatorItemWrapper>
  )
}

export default CreatorItem;

CreatorItem.propTypes = {
  creatorItem: PropTypes.object
}

const CreatorItemWrapper = styled.div`
  min-height: 360px;
  margin-bottom: 80px;
  padding: 16px 32px 24px 32px;
  text-align: center;

  .card-title{
    font-size: 24px;
  }

  .card-top{
    height: 150px;
    width: 150px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 50%;
    overflow: hidden;
    margin-top: -75px;
    border: 2px solid var(--clr-white);
    transition: var(--transition-default);

    &:hover{
      transform: scale(1.1);
    }
  }

  .card-bottom{
    margin-top: 48px;
  }

  .list-group-item{
    margin-top: 8px;
    .item-left{
      font-weight: 600;
    }
  }
`;
