import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <PageNotFoundWrapper className='section'>
      <div className='container text-center'>
        <p className='value-404'>404</p>
        <p className='not-found-text text-uppercase text-white'>page not found</p>
        <Link to = "/" className = "section-btn">go to homepage</Link>
      </div>
    </PageNotFoundWrapper>
  )
}

export default PageNotFound;

const PageNotFoundWrapper = styled.div`
background-color: var(--clr-violet-dark-active);
  .value-404{
    font-size: 60px;
    font-weight: 800;
    color: var(--clr-green-normal);
  }
  .not-found-text{
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .section-btn{
    display: inline-block;
    margin-top: 18px;
  }
`;
