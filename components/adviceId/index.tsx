import styled, { ThemeProvider } from 'styled-components';

interface props {
  id: number | undefined;
  loading: boolean;
  error: boolean;
}

const IdTextStyled = styled.p`
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.colorText};
  font-size: 0.8em;
  font-weight: 800;
  letter-spacing: 5px;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

function AdviceId({ id, loading, error }: props) {
  const theme = {
    colorText: loading ? 'hsl(150, 10%, 50%)' : 'hsl(150, 100%, 66%)',
  };

  return (
    <ThemeProvider theme={theme}>
      <IdTextStyled>advice #{error ? '##' : id}</IdTextStyled>
    </ThemeProvider>
  );
}

export default AdviceId;
