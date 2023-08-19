import React from 'react';

const HomePage = () => {

  return (
    <HomeWrapper>
    </HomeWrapper>
  )
}

export default HomePage;

const HomeWrapper = styled.div`
  .sc-popular{
    background-color: var(--clr-violet-dark-active);
    .section-btn{
      margin-top: 60px;
    }
  }

  .sc-join{
    min-height: 640px;

    .join-content{
      max-width: 600px;
    }

    .join-title{
      text-shadow: 0px 4px 4px 0px #00000040;
      font-size: 44px;
      letter-spacing: 0.09em;

      span{
        color: var(--clr-green-normal);
        font-family: var(--font-family-right);
      }
    }
  }

  .sc-genres{
    background-color: var(--clr-violet-dark-active);
  }

  .sc-stores{
    min-height: 841px;
  }
`;
