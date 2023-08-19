import React from 'react';

const StarRating = () => {
    return (
        <StarRatingWrapper>
        </StarRatingWrapper>
    )
}

export default StarRating;

const StarRatingWrapper = styled.ul`
    position: absolute;
    right: 18px;
    bottom: 10px;
    z-index: 1;

    li{
        padding: 0 2px;
        font-size: 14px;
    }
`;
