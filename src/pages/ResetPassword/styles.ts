import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh; /* 100% da tela*/

  /* Componentes dentro do container
  tambem terao tamanho 100% da pagina */
  display: flex;
  /* Maneira de alinhamento */
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  /*Tamanho máximo*/
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  /* Estilicacao para pegar o a de fora
  do formulário */
  > a {
    color: #ff9000;
    display: block;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 24px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  /*Utiliza todo o espaço - menos o 700px do Content */
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
