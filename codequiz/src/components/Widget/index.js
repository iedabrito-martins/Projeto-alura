import styled from 'styled-components';

 const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  width: 30%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color:${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  overflow: hidden;
  color: white;

  h1, h2, h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0px;
    margin-right: 10px;
    padding:  2px;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 2;
    padding:  2px;
  }
`;

Widget.Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 2px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 0px 0px 22px 0px;
  & > *:first-child {
    margin-top: 2;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;
export default Widget;