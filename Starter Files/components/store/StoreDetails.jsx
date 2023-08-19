import React from 'react';

const StoreDetails = () => {
  return (
    <StoreDetailsWrapper>
    </StoreDetailsWrapper>
  )
}

export default StoreDetails;

const StoreDetailsWrapper = styled.div`
  padding: 32px 0;

  .card-title{
    font-size: 32px;
    display: inline-block;
    margin-bottom: 12px;
  }

  @media screen and (min-width: 992px){
    padding: 60px 0;

    .details-grid{
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
      align-items: stretch;
    }
  }
`;
