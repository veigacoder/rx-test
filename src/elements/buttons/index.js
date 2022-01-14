import styled from 'styled-components'

export const ActionButton = styled.div`
height: auto;
outline: none;
border: none;
display: flex;
width: fit-content;
border-radius: 8px;
justify-content: center;
text-align: center;
align-items: center;
font-weight: 400;
font-size: 5rem;
padding: .7rem;
color: #28D634;
text-decoration: none;
cursor: pointer;
transition: all 250ms cubic-bezier(1,.03,.56,.89);
:hover {
  background-color: #28D634;
  color: #1C1C1C;
}
`
export const CloseButton = styled.div`
border-radius: 8px;
cursor: pointer;
color: #FA3434;
width: max-content;
height: max-content;
display:flex;
justify-content: center;
font-size: 64px;
align-items: center;
transition: all 250ms cubic-bezier(1,.03,.56,.89);
:hover {
  background-color: #FA3434;
  color: #fff;
}
`
export const CheckButton = styled.div`
border-radius: 8px;
cursor: pointer;
color: #28D634;
width: max-content;
height: max-content;
display:flex;
justify-content: center;
font-size: 64px;
align-items: center;
transition: all 250ms cubic-bezier(1,.03,.56,.89);
:hover {
  background-color: #28D634;
  color: #fff;
}
`
