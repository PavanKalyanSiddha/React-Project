import styled from "styled-components";

export const HomePageContainer = styled.div`

`
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
`

export const GridContainer = styled.div`
display: grid;
grid-template-columns : repeat(4, 1fr);
grid-gap: 20px;
font-weight: 500;
`

export const BorderLine = styled.div`
height: 2px;
background: green;
border-radius: 6px;
margin: 2px 20px;
`

export const MoviesContainer = styled.div`
display: grid;
grid-template-columns : repeat(3, 1fr);
grid-gap: 20px;
padding: 20px;
cursor: pointer;
`

export const MovieTitle = styled.div`
font-size: 18px;
font-weight: 500;
`
export const MovieDetailContainer = styled.div`
padding: 20px;
`
export const FlexContainer = styled.div`
display: flex;
justify-content: flex-start;
`