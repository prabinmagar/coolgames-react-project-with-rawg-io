import styled from 'styled-components';
import PropTypes from 'prop-types';
import StoreItem from './StoreItem';

const StoreList = ({ stores }) => {
    return (
        <StoreListWrapper>
            <div className='store-list d-grid'>
                {
                    stores?.map(item => (
                        <StoreItem key = { item.id } storeItem = { item } />
                    ))
                }
            </div>
        </StoreListWrapper>
    )
}

export default StoreList;

StoreList.propTypes = {
    stores: PropTypes.array
}

const StoreListWrapper = styled.div`
    .store-list{
        @media screen and (min-width: 992px){
            grid-template-columns: repeat(2, 1fr);
            column-gap: 32px;
        }
    }
`;
