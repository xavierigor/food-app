import styled from "styled-components";
import { metrics } from "../../styles/metrics";

export const Container = styled.div`
  height: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Switch = styled.div`
  width: 400px;
  height: 550px;
  background: #fff;
  box-shadow: 0 1px 3px ${metrics.colors.boxShadow};

  .buttons {
    display: flex;
    justify-content: space-evenly;
    height: 60px;

    button {
      width: 100%;
      height: 100%;
      background: ${metrics.colors.secondary};
      border: none;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    button.active {
      background: ${metrics.colors.primary};
      color: #fff;
      font-weight: 500 !important;
    }
  }

  .forms {
    padding: ${metrics.padding.primary};

    input {
      border: none;
      border-bottom: 1px solid ${metrics.colors.darkerGray};
      margin-bottom: ${metrics.margin.md};
      width: 100%;
      padding: ${metrics.padding.sm} 0;
    }
  }
`;
