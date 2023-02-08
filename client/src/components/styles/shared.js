import { Image } from "react-bootstrap";

import styled from "styled-components"

// HOMEPAGE ABOUT
export const cardContainer = styled.div `
    background-color: white;
    width: auto;
    height: auto;
    margin: 5vh;
    margin-inline: auto;
    align-items: center;
    border-radius: 10px;
    box-shadow: 6px 6px 5px #7c6c04;
    Label {
        font-size: 30px;
        Margin: 2vh 0.25vw;
    }
`
export const aboutCardContainer = styled.div `
    background-color: white;
    width: auto;
    height: auto;
    margin: 1vw;
    padding: 1vw;
    border-radius: 10px;
    box-shadow: 6px 6px 5px #7c6c04;
    text-align: center;
    vertical-align: left;
    h3 {
        text-align: center;
        vertical-align: left;
        padding: 2vh;
        text-decoration: underline;
    }
`
export const cardImageContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const CardImage = styled(Image)`
    width: 25vw;
    height: 30vw;
    margin: 10%;
    border-radius: 5px;
    box-shadow: 6px 6px 5px lightgrey;
`
export const cardText = styled.div`
    text-align: center;
    margin: auto;
    border-left: 2px solid lightgrey;
    font-size: 120%;
    h3 {
        text-decoration: underline #f3d304 3px;
    }
`
export const FooterContainer = styled.footer` 
height: 100px; 
text-align: center;
background: #2E2E2E;
color: #FFFFFF;
position: center;
bottom: 0;
width: 100%;

`
export const StyledContainer = styled.div`
    width: auto;
    height: auto;
    text-align: center;
    position: center;
    padding: 30vw;
  h1 {
    color: white;
    text-decoration: underline #f3d304 3px;
    font-weight: 700;
}

`
