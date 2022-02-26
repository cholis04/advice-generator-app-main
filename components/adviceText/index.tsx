import styled, { ThemeProvider } from 'styled-components';

interface props {
  advice: string | undefined;
  loading: boolean;
  error: boolean;
}

const AdviceTextStyled = styled.h1`
  margin: 2rem auto;
  padding: 0 1.6rem;
  text-align: center;
  color: ${(props) => props.theme.colorText};
  font-size: 28px;
  line-height: 2.4rem;
  font-weight: 800;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  @media only screen and (max-width: 680px) {
    padding: 0 0;
    font-size: 24px;
  }
`;

function AdviceText({ advice, loading, error }: props) {
  const theme = {
    colorText: loading ? 'hsl(193, 10%, 50%)' : 'hsl(193, 38%, 86%)',
  };

  const errorText =
    'Looks like something went wrong. Please try again in a moment!';

  return (
    <ThemeProvider theme={theme}>
      <AdviceTextStyled>{error ? errorText : advice}</AdviceTextStyled>
    </ThemeProvider>
  );
}

export default AdviceText;
