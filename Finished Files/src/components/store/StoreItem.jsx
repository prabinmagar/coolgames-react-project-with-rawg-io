import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StoreItem = ({ storeItem }) => {
  return (
    <StoreItemWrapper className="card d-grid">
      <div className="card-img img-fit-cover">
        <img src={storeItem?.image_background} alt={storeItem?.id} />
      </div>
      <div className="card-text d-flex flex-column justify-content-center">
        <h5 className="card-title text-uppercase fw-7 text-uppercase">
          <Link className="text-white" to={`stores/${storeItem.id}`}>
            {storeItem?.name}
          </Link>
        </h5>
        <ul className="card-info">
          <li>
            <span className="fw-7">Domain: </span>
            <a href={"https://www." + storeItem?.domain}>{storeItem?.domain}</a>
          </li>
          <li>
            <span className="fw-7">Games Count: </span>
            {storeItem?.games_count}
          </li>
        </ul>
        {storeItem?.games && <p className="fw-7 text-white">Games:</p>}
        <ul className="card-games d-flex flex-wrap">
          {storeItem?.games?.map((item) => {
            return (
              <li className="card-game" key={item.id}>
                <Link to={`games/${item.id}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </StoreItemWrapper>
  );
};

export default StoreItem;

StoreItem.propTypes = {
  storeItem: PropTypes.object,
};

const StoreItemWrapper = styled.div`
  grid-template-columns: repeat(2, 1fr);
  min-height: 120px;
  margin: 16px 0;

  .card-text {
    padding: 16px;

    .card-title {
      letter-spacing: 0.04em;
      color: #0b082d;
      font-size: 16px;
      display: inline-block;
      transition: var(--transition-default);

      &:hover {
        color: #000;
        opacity: 0.9;
      }
    }

    .card-info {
      li {
        /* color: #050415; */
        color: #fff;

        a {
          color: #fff;
        }
      }
    }

    .card-games {
      gap: 8px;
      li {
        background-color: #b9198e;
        border-radius: 100vh;
        padding-right: 8px;
        padding-left: 8px;
        height: 23px;

        * {
          font-weight: 500;
          color: var(--clr-violet-darker);
        }

        a {
          color: var(--clr-white);
          font-size: 13px;
          display: inline-block;
          transform: translateY(-3px);
          font-style: italic;
        }
      }
    }
  }
`;
