import styled from 'styled-components';
import PropTypes from "prop-types";

const Title = ({ titleName }) => {
  return (
    <TitleWrapper>
      <h3>{titleName.firstText } <span>{ titleName.secondText }</span></h3>
      <div className='line'></div>
    </TitleWrapper>
  )
}

export default Title;

Title.propTypes = {
  titleName : PropTypes.object
}

const TitleWrapper = styled.div`
  padding: 12px 0;
  text-align: center;
  font-weight: 800;
  font-size: 32px;
  letter-spacing: 0.1em;
  color: var(--clr-white);
  margin-bottom: 40px;
  font-family: var(--font-family-poppins);
  
  h3{
    text-transform: uppercase;
    position: relative;

    span{
      color: var(--clr-pink-normal);
    }
  }

  .line{
    margin-top: 16px;
    height: 6px;
    width: 160px;
    margin-right: auto;
    margin-left: auto;
    background-color: var(--clr-green-normal);
    position: relative;

    &::after{
      content: "";
      position: absolute;
      left: -5px;
      border-right: 6px solid var(--clr-green-normal);
      border-bottom: 3.5px solid transparent;
      border-top: 3.5px solid transparent;
    }

    &::before{
      content: "";
      position: absolute;
      right: -6px;
      border-left: 6px solid var(--clr-green-normal);
      border-bottom: 3.5px solid transparent;
      border-top: 3.5px solid transparent;
    }
  }
`;

