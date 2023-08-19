import React from 'react';

const ImageSlider = () => {
  return (
    <ImageSliderWrapper>
    </ImageSliderWrapper>
  )
}

export default ImageSlider;

const ImageSliderWrapper = styled.div`
  background-color: #050415;

  .game-slider{
    .slider-item{
      height: 400px;
      padding: 16px;
      outline: 0;

      img{
        border: 6px solid var(--clr-pink-normal);
      }
    }

    .slick-list{
      padding-top: 110px!important;
      padding-bottom: 110px!important;
    }

    .slick-dots{
      li{
        height: 10px;
        width: 60px;
        button{
          &::before{
            width: 100%!important;
            height: 100%!important;
            border: 2px solid var(--clr-pink-normal);
            color: unset;
            transition: var(--transition-default);
          }
        }

        &.slick-active{
          background-color: var(--clr-pink-normal);
        }
      }
    }

    .slick-center{
      transform: scale(1.5);
    }

    .slick-prev{
      position: absolute;
      left: 16px!important;
      z-index: 5;
      transform: scale(1.4);
    }

    .slick-next{
      position: absolute;
      right: 16px!important;
      z-index: 5;
      transform: scale(1.4);
    }
  }
`;
