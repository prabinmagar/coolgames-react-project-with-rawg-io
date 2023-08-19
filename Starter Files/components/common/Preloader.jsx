import React from 'react';

const Preloader = () => {
  return (
    <PreloaderWrapper>
    </PreloaderWrapper>
  )
}

export default Preloader;

const PreloaderWrapper = styled.div`
  img{
    max-width: 120px;
  }
`;
