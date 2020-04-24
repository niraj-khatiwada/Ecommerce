import styled from "styled-components"

export const AddToCart = styled.div`
    background:white;
    width:100%;
    opacity:0.7;
    padding:0.5rem;
    display:none;
    cursor:pointer;
    transition:all 100ms ease-in-out;
    &:hover{
        background:black;
        color:white;
        opacity:1
    }
    
    `
    
export const ItemDiv = styled.div`
    height:30rem;
    border: 1rem solid white;
    &:hover{
        ${AddToCart}{
            display:block;
        }
    }
`