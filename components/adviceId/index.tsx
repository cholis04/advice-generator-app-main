import styled, { ThemeProvider } from 'styled-components';

interface props {
  id: number | undefined;
  loading: boolean;
  error: boolean;
}

const IdTextStyled = styled.p`
  display: ${(props) => props.theme.display};
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  color: hsl(150, 100%, 66%);
  font-size: 0.8em;
  font-weight: 800;
  letter-spacing: 5px;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

function AdviceId({ id, loading, error }: props) {
  const theme = {
    display: loading ? 'none' : 'block',
  };

  return (
    <ThemeProvider theme={theme}>
      <IdTextStyled>advice #{error ? '##' : id}</IdTextStyled>
    </ThemeProvider>
  );
}

export default AdviceId;
