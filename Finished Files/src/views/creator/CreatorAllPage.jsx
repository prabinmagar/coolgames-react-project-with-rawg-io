import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAllCreators, selectAllCreatorsStatus, selectCreatorsNextPage, selectCreatorsPrevPage } from '../../redux/store/creatorSlice';
import { useEffect, useState } from 'react';
import { fetchAsyncCreators } from '../../redux/utils/creatorUtils';
import { Pagination, Preloader, Title } from '../../components/common';
import { STATUS } from '../../utils/status';
import { CreatorList } from "../../components/creator/index";

const CreatorAllPage = () => {
    const dispatch = useDispatch();
    const creators = useSelector(selectAllCreators);
    const creatorsStatus = useSelector(selectAllCreatorsStatus);
    const nextPage = useSelector(selectCreatorsNextPage);
    const prevPage = useSelector(selectCreatorsPrevPage);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchAsyncCreators(page));
    }, [page]);

    const pageHandler = (pageValue) => setPage(pageValue);

    return (
        <CreatorAllPageWrapper>
            <div className='sc-creators section'>
                <div className='container'>
                    <Title titleName={{
                        firstText: "our",
                        secondText: "creators"
                    }} />
                    {
                        creatorsStatus === STATUS.LOADING ? <Preloader /> : creators?.length > 0 ? <>
                            <CreatorList creators = { creators } />
                            <Pagination pageHandler={ pageHandler } nextPage={ nextPage } prevPage={ prevPage } currentPage={ page } />
                        </> : "No creators found!"
                    }
                </div>
            </div>
        </CreatorAllPageWrapper>
    )
}

export default CreatorAllPage;

const CreatorAllPageWrapper = styled.div`
    background-color: var(--clr-violet-dark-active);
    .sc-creators{
        min-height: 100vh;
        padding-top: 65px;
    }
`;