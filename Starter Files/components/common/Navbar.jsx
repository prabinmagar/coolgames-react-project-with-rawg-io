import React from 'react';

const Navbar = () => {
  return (
    <NavbarWrapper>
    </NavbarWrapper>
  )
}

export default Navbar;

const NavbarWrapper = styled.div`
  min-height: 78px;
  background: #090624;

  .navbar-brand{
    font-weight: 700;
    font-size: 32px;

    span{
      color: var(--clr-green-normal);
    }
  }

  .nav-item{
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .nav-link{
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
    transition: var(--transition-default);

    &:hover{
      color: var(--clr-pink-normal);
    }
  }

  .connect-text{
    letter-spacing: 2px;
  }

  .connect-item{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2px;
    margin-left: 2px;
  }
  
  .connect-link{
    padding: 6px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-default);

    &:hover{
      color: var(--clr-violet-normal);
    }
  }

  .navbar-collapse{
    position: fixed;
    right: 0;
    top: 0;
    width: 280px;
    height: 100%;
    background-color: var(--clr-white);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 60px 20px 16px;
    text-align: center;
    transform: translateX(100%);
    transition: var(--transition-default);
    z-index: 999;

    &.show{
      transform: translateX(0);
    }
  }

  .navbar-hide-btn{
    position: absolute;
    top: 20px;
    right: 20px;
    transition: var(--transition-default);
    &:hover{
      transform: scale(1.2);
    }
  }

  .navbar-show-btn{
    transition: var(--transition-default);
    &:hover{
      transform: scale(1.2);
    }
  }

  @media screen and (min-width: 992px){
    .navbar-show-btn{
      display: none;
    }
    .navbar-collapse{
      transform: translateX(0);
      position: relative;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      background-color: transparent;
      box-shadow: none;
    }
    .navbar-content{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-item{
      margin-left: 6px;
    }
    .navbar-nav{
      display: flex;
    }
    .navbar-hide-btn{
      display: none;
    }
    .nav-link{
      color: var(--clr-white);
      padding: 1px 10px;
    }
    .connect-list{
      display: flex;
      margin-top: 0;
      color: var(--clr-white);
      margin-left: 40px;
      .connect-text{
        width: auto;
        margin-bottom: 0;
        margin-right: 22px;
        display: none;
      }
      .connect-link{
        color: var(--clr-white);
      }
    }
  }

  @media screen and (min-width: 1200px){
    .nav-link{
      padding-right: 16px;
      padding-left: 16px;
    }
    .connect-list{
      margin-left: 88px;

      .connect-text{
        display: inline-block;
      }
    }
  }
`;

