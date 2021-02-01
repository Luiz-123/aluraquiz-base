import styled from 'styled-components'

const Widget = styled.div`
   margin-top: 24px;
   margin-bottom: 24px;
   border: 1px solid ${({ theme }) => theme.colors.primary};
   background-color: ${({ theme }) => theme.colors.mainBg};
   border-radius: 4px;
   overflow: hidden;

   h1, h2, h3 {
   font-size: 16px;
   font-weight: 700;
   line-height: 1;
   margin-bottom: 0;
}

p{
   font-size: 14px;
   font-weight: 400;
   line-height: 1;
}

/*input{
   width: 100%;
   padding: 12px 20px;
   margin: 8px 0;
   box-sizing: border-box;
   border: 2px solid #6d1b7b;
   border-radius: 8px; 
}*/

/*button{
   background-color: #6d1b7b; 
   border: none;
   color: white;
   padding: 10px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   font-size: 16px;
   margin: 4px 2px;
   border-radius: 8px;
   cursor: pointer;
}*/

`;

Widget.Header = styled.header`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   padding: 18px 32px;
   color: black;
   background-color: ${({ theme }) => theme.colors.third};
   
   *{
   margin: 0;
   }
`;

Widget.Content = styled.div`
   padding: 24px 32px 32px 32px;
   & > *:first-child {
     margin-top: 0;
   }
   ul {
     list-style: none;
     padding: 0;
   }
   
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}70`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;



export default Widget;