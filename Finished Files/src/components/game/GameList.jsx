import styled from 'styled-components';
import GameItem from './GameItem';
import PropTypes from "prop-types";

const GameList = ({ games, sliceValue = games.length }) => {
  // by default we are going to display all the games fetched from api if not any slicevalue is mentioned
  return (
    <GameListWrapper>
      <div className='card-list'>
        {
          games?.slice(0, sliceValue).map(item => (
            <GameItem key = { item.id } gameItem = { item } />
          ))
        }
      </div>
    </GameListWrapper>
  )
}

export default GameList;

GameList.propTypes = {
  games: PropTypes.array,
  sliceValue: PropTypes.number
}

const GameListWrapper = styled.div``;
