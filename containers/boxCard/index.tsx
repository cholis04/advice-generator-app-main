import { useEffect, useState } from 'react';
import axios from 'axios';

import { ThemeProvider } from 'styled-components';
import { BoxCardStyled, ButtonDiceGenerate, DividerWrapStyled } from './styled';

import Divider from '../../components/divider';

import DiceIcon from '../../components/dice';

import AdviceId from '../../components/adviceId';
import AdviceText from '../../components/adviceText';

function BoxCard() {
  const apiURL = 'https://api.adviceslip.com/advice';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [quote, setQuote] = useState({
    id: 117,
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });

  // Theme
  const theme = {
    display: loading ? 'none' : 'block',
    color: error ? 'hsla(0, 100%, 78%, 1)' : 'hsl(193, 38%, 86%)',
  };

  // Generate Advice On Button Clicked
  const handleClick = () => {
    setLoading(true);
    setError(false);

    // Make Request
    axios
      .get(apiURL)
      .then((response) => {
        // handle success
        const { slip } = response.data;
        setQuote(slip);
      })
      .catch(() => {
        // handle error
        setLoading(false);
        setError(true);
      });
  };

  // Update Quote
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [quote]);

  return (
    <BoxCardStyled>
      {/* Display Quotes */}
      <ThemeProvider theme={theme}>
        <AdviceId id={quote?.id} loading={loading} error={error} />
        <AdviceText advice={quote?.advice} loading={loading} error={error} />
      </ThemeProvider>
      {/* Display Quotes */}

      {/* Divider */}
      <DividerWrapStyled>
        <Divider />
      </DividerWrapStyled>
      {/* Divider */}

      {/* Generate Button */}
      <ButtonDiceGenerate
        onClick={handleClick}
        disabled={loading}
        aria-label="Generate new Advice"
      >
        <DiceIcon loading={loading} />
      </ButtonDiceGenerate>
      {/* Generate Button */}
    </BoxCardStyled>
  );
}

export default BoxCard;
