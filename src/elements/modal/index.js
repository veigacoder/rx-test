import styled from 'styled-components'

export const Modal = styled.div.attrs(props => ({
  show: props.show
}))`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: ${props => props.show};
align-items: center;
justify-content: center;
background-color: #00000033;
`
export const ModalContent = styled.div`
width: 70%;
background-color: #fff;
border-radius: 8px;

`
export const ModalBody = styled.div`
padding: 10px;
width: 100%;
min-width: max-content;
display: flex;
justify-content: center;
align-items: center;
`

export const ModalFooter = styled.div`
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const ModalHeader = styled.div`
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 24px;
font-weight: 800;
`

export const ModalInput = styled.input`
height: max-content;
outline: none;
border: none;
display: flex;
width: 50%;
border-radius: 50px;
justify-content: center;
text-align: center;
align-items: center;
font-weight: 400;
font-size: 34px;
color: #000;
background-color: #8C8C8C;
padding: 1rem;
text-decoration: none;
font-family: 'Lato', sans-serif;
`
export const ModalSpan = styled.span`
font-size: 14px;
font-family: 'Lato', sans-serif;
`
