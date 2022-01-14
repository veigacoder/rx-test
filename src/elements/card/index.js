import styled from 'styled-components'

export const Card = styled.div`
font-family: 'Lato', sans-serif;
position: absolute;
width: 60%;
height: 80%;
min-height: max-content;
padding: 2rem;
outline-offset: -8px;
background-color: #F0F0F0;
border-radius: 8px;
line-height: 48px;
font-size: 3rem;
display: flex;
outline: 4px double #CBCBCB;
flex-direction: column;
justify-content: space-between;
`

export const CardRow = styled.div`
width: 100%;
min-height: max-content;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

&+&{
  margin-top: 4rem;
}
`

export const CardHeader = styled.div`
height: max-content;
display: flex;
width: 100%;
justify-content: center;
align-items: center;
font-weight: 800;
font-family: 'Lato', sans-serif;
color: #000;
text-align: center;
`
export const CardFooter = styled.div`
height: max-content;
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: center;
align-items: center;
font-weight: 800;
font-family: 'Lato', sans-serif;
color: #000;
text-align: center;
`
