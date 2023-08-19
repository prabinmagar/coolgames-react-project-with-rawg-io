import React from 'react';

const StoreList = () => {
    return (
        <StoreListWrapper>
        </StoreListWrapper>
    )
}

export default StoreList;

const StoreListWrapper = styled.div`
    .store-list{
        @media screen and (min-width: 992px){
            grid-template-columns: repeat(2, 1fr);
            column-gap: 32px;
        }
    }
`;
