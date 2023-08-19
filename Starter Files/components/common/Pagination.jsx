import React from 'react'

const Pagination = () => {

  return (
    <PaginationWrapper>
    </PaginationWrapper>
  )
}

export default Pagination;

const PaginationWrapper = styled.div`
  margin-top: 48px;
  .prev-btn, .next-btn{
    margin: 0 16px;
    font-size: 18px;
    letter-spacing: 2px;
  }

  .disabled{
    opacity: 0.6;
  }
`;
