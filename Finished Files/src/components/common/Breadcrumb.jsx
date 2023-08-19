import styled from 'styled-components';
import PropTypes from 'prop-types';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ dataNameById }) => {
  const breadcrumbs = useReactRouterBreadcrumbs();

  return (
    <BreadcrumbWrapper>
    {
      breadcrumbs.map(({ match, breadcrumb }) => {
        let id = breadcrumb?.props?.children;
        if(id === Object.keys(dataNameById)[0]){
          return <Link className = "breadcrumb-item" to = { match.pathname } key = {match.pathname}>{ dataNameById[id] }</Link>
        }

        return <Link className='breadcrumb-item' to = { match.pathname } key = { match.pathname }>{ breadcrumb }</Link>
      })
    }
    </BreadcrumbWrapper>
  )
}

export default Breadcrumb;

Breadcrumb.propTypes = {
  dataNameById: PropTypes.object
}

const BreadcrumbWrapper = styled.div`
  margin: 13px 0;
  .breadcrumb-item{
    color: var(--clr-white);
    display: inline-block;
    margin-right: 32px;
    position: relative;

    &::after{
      position: absolute;
      content: url(data:image/svg+xml,%3Csvg%20stroke%3D%22currentColor%22%20fill%3D%22currentColor%22%20stroke-width%3D%220%22%20viewBox%3D%220%200%2016%2016%22%20height%3D%221em%22%20width%3D%221em%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M3.646%201.646a.5.5%200%200%201%20.708%200l6%206a.5.5%200%200%201%200%20.708l-6%206a.5.5%200%200%201-.708-.708L9.293%208%203.646%202.354a.5.5%200%200%201%200-.708z%22%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M7.646%201.646a.5.5%200%200%201%20.708%200l6%206a.5.5%200%200%201%200%20.708l-6%206a.5.5%200%200%201-.708-.708L13.293%208%207.646%202.354a.5.5%200%200%201%200-.708z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E);
      top: calc(50% + 3px);
      transform: translateY(-50%);
      right: -32px;
      width: 32px;
      height: 32px;
      filter: invert(1);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }

    &:hover{
      opacity: 0.9;
      text-decoration: underline;
    }
  }
`;

