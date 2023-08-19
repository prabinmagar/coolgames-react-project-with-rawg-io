import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { selectSingleGame, selectSingleGameStatus } from '../../redux/store/gameSlice';
import { useEffect } from 'react';
import { fetchAsyncGameDetails } from '../../redux/utils/gameUtils';
import { Breadcrumb, Preloader } from '../../components/common';
import { game_details_image } from '../../utils/images';
import { STATUS } from '../../utils/status';
import { GameDetails } from '../../components/game';

const GameDetailsPage = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const singleGameData = useSelector(selectSingleGame);
  const singleGameStatus = useSelector(selectSingleGameStatus);

  useEffect(() => {
    dispatch(fetchAsyncGameDetails(gameId));
  }, [gameId]);

  const gameNameById = {
    // for sending both id and name also
    [singleGameData.id] : singleGameData.name
  }

  return (
    <GameDetailsPageWrapper>
      <div className='sc-details' style = {{
        background: `linear-gradient(0deg, rgba(16, 14, 43, 0.8), rgba(16, 14, 43, 0.8)), url(${game_details_image}) center/cover no-repeat`
      }}>
        <div className='container'>
          <Breadcrumb dataNameById = { gameNameById } />
          {
            singleGameStatus === STATUS.LOADING ? <Preloader /> : <GameDetails gameData = { singleGameData } />
          }
        </div>
      </div>
    </GameDetailsPageWrapper>
  )
}

export default GameDetailsPage;

const GameDetailsPageWrapper = styled.div`
  .sc-details{
    min-height: 100vh;
    padding-top: 65px;
    padding-bottom: 65px;
  }
`;
