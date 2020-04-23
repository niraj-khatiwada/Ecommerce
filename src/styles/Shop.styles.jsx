import styled from "styled-components"

export const Collection  = styled.div`
    h1{ 
        font-family: 'Shadows Into Light', cursive;
    }
    `
export const AddToCart = styled.div`
    background:white;
    width:100%;
    opacity:0.7;
    padding:0.5rem;
    display:none;
    transition:all 100ms ease-in-out;
    &:hover{
        background:black;
        color:white;
        opacity:1
    }
    
    `
export const Item = styled.div`
    height:30rem;
    border: 1rem solid white;
    &:hover{
        ${AddToCart}{
            display:block;
        }
    }
`
export const Row = styled.div`
`