import React from 'react';

const GameDetails = () => {

  return (
    <GameDetailsWrapper>
    </GameDetailsWrapper>
  )
}

export default GameDetails;

const GameDetailsWrapper = styled.div`
  background: rgba(0, 0, 0, 0.16);
  padding: 32px 14px;
  margin-top: 32px;

  .details-title{
    margin-bottom: 36px;

    &-text{
      font-size: 28px;
      letter-spacing: 0.04em;
      font-family: var(--font-family-poppins);
    }
  }

  .details-left{
    min-height: 320px;
  }

  .details-right{
    margin-top: 24px;

    &-title{
      font-size: 24px;
      letter-spacing: 2px;
    }
    .para-text{
      font-weight: 200;
      opacity: 0.9;
    }

    .details-list-group{
      padding: 30px 0;

      .list-group-item{
        margin: 8px 0;
      }

      .item-icon{
        overflow: hidden;
        width: 32px;
      }
      .item-title{
        letter-spacing: 0.04em;
        margin-right: 12px;
      }
    }
  }

  .platforms-list{
    gap: 16px;

    .platform-img-wrapper{
      height: 180px;
    }
  }

  @media screen and (min-width: 1080px){
    padding: 60px 42px;

    .details-grid{
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
      align-items: stretch;
    }

    .details-right{
      margin-top: 0;
    }

    .details-title{
      &-text{
        font-size: 42px;
      }
    }
  }

  .react-tabs{
    margin-top: 48px;

    &__tab{
      border-radius: 0;
      color: var(--clr-white);
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.08em;
      padding: 8px 16px;
      margin-top: 6px;
      text-transform: uppercase;

      &--selected{
        color: var(--clr-dark);
        font-weight: 700;
      }

      &:after{
        display: none;
      }
    }

    &__tab-panel{
      padding: 16px 0;
    }

    &__tab-list{

    }
  }

  @media screen and (min-width: 992px){
    .react-tabs{
      &__tab{
        font-size: 18px;
        padding: 10px 32px;
        display: inline-block;
        &--selected{
          color: var(--clr-dark);
        }
      }
    }

    .platforms-list{
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
  }
`;
