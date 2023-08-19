import styled from 'styled-components';
import { banner_image } from '../../utils/images';
import { FaGamepad } from 'react-icons/fa';

const Banner = () => {
  return (
    <BannerWrapper className='d-flex align-items-center justify-content-start' style = {{
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), linear-gradient(248.75deg, rgba(0, 159, 157, 0.41) 0%, rgba(15, 10, 60, 0.41) 38.46%), url(${banner_image}) center/cover no-repeat`
    }}>
      <div className='banner-content w-100 container text-white'>
        <div className='banner-badge text-uppercase'>join streaming</div>
        <h1 className='banner-title text-uppercase'>best online game to play</h1>
        <p className='lead-text'>Live gaming with lots of other games. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        <button type="button" className='banner-btn d-flex align-items-center'>
          <span className='btn-icon'>
            <FaGamepad className='text-white' size = { 25 } />
          </span>
          <span className='btn-text text-green'>play now</span>
        </button>
      </div>
    </BannerWrapper>
  )
}

export default Banner;

const BannerWrapper = styled.div`
    min-height: 768px;

    .banner-badge{
      background-color: var(--clr-green-normal);
      padding: 4px 16px;
      font-weight: 600;
      font-size: 20px;
      letter-spacing: 0.1em;
      display: inline-block;
      margin-bottom: 25px;
    }

    .banner-title{
      font-family: var(--font-family-right);
      font-size: 48px;
      font-weight: 400;
      letter-spacing: 0.09em;
      line-height: 1.2;
      max-width: 600px;
      margin-bottom: 40px;
    }

    .lead-text{
      max-width: 600px;
    }
    .banner-btn{
      min-width: 140px;
      height: 45px;
      padding: 13px 16px;
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
      border: 2px solid var(--clr-green-normal);
      margin-top: 33px;

      .btn-icon{
        margin-right: 16px;
      }

      &:hover{
        background-color: var(--clr-green-normal);
        .btn-text{
          color: var(--clr-white);
        }
      }
    }

    @media screen and (min-width: 992px){
      .banner-badge{
        font-size: 26px;
      }

      .banner-title{
        font-size: 56px;
      }
    }
`;
