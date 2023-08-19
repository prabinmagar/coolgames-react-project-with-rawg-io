import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectSingleStore, selectSingleStoreStatus } from '../../redux/store/storeSlice';
import { useEffect } from 'react';
import { fetchAsyncStoresDetails } from '../../redux/utils/storeUtils';
import { Breadcrumb, Preloader } from "../../components/common/index";
import { STATUS } from '../../utils/status';
import { StoreDetails } from '../../components/store';

const StoreDetailsPage = () => {
    const { storeId } = useParams();
    const dispatch = useDispatch();
    const singleStoreData = useSelector(selectSingleStore);
    const singleStoreStatus = useSelector(selectSingleStoreStatus);

    useEffect(() => {
        dispatch(fetchAsyncStoresDetails(storeId));
    }, [storeId]);

    console.log(singleStoreData);

    const storeNameById = {
        [singleStoreData.id]: singleStoreData.name
    }

    return (
        <StoreDetailsPageWrapper>
            <div className='sc-details'>
                <div className='container'>
                    <Breadcrumb dataNameById = { storeNameById } />
                    {
                        singleStoreStatus === STATUS.LOADING ? <Preloader /> : <StoreDetails storeData = { singleStoreData } />
                    }
                </div>
            </div>
        </StoreDetailsPageWrapper>
    )
}

export default StoreDetailsPage;

const StoreDetailsPageWrapper = styled.div`
    background: var(--clr-violet-dark-active);
    
    .sc-details{
        min-height: 100vh;
        padding-top: 65px;
        padding-bottom: 65px;
    }
`;
