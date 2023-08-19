import React from 'react';

const CreatorItem = () => {
  return (
    <CreatorItemWrapper>
    </CreatorItemWrapper>
  )
}

export default CreatorItem;

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
