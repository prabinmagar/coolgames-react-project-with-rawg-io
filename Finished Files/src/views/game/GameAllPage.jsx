import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAllGames, selectAllGamesStatus, selectGamesNextPage, selectGamesPrevPage } from '../../redux/store/gameSlice';
import { useEffect, useState } from 'react';
import { fetchAsyncGames } from '../../redux/utils/gameUtils';
import { Pagination, Preloader, Title } from '../../components/common';
import { STATUS } from '../../utils/status';
import { GameList } from '../../components/game';

const GameAllPage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);
  const nextPage = useSelector(selectGamesNextPage);
  const prevPage = useSelector(selectGamesPrevPage);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncGames(page));
  }, [page]);

  const pageHandler = (pageValue) => setPage(pageValue);

  return (
    <GameAllPageWrapper>
      <div className='sc-games section'>
        <div className='container'>
          <Title titleName={{
            firstText: "all",
            secondText: "games"
          }} />

          {
            gamesStatus === STATUS.LOADING ? <Preloader /> : games?.length > 0 ? <>
              <GameList games = { games } />
              <Pagination pageHandler = { pageHandler } nextPage = { nextPage } prevPage = { prevPage } currentPage = { page } />
            </> : "No games found!"
          }
        </div>
      </div>
    </GameAllPageWrapper>
  )
}

export default GameAllPage;

const GameAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  .sc-games{
    min-height: 100vh;
    padding-top: 65px;
  }
`;
