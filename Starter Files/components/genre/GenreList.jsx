import React from 'react'

const GenreList = () => {
  return (
    <GenreListWrapper>
    </GenreListWrapper>
  )
}

export default GenreList

const GenreListWrapper = styled.div`
  div:has(.section-btn){
    margin-top: 60px;
  }
`;