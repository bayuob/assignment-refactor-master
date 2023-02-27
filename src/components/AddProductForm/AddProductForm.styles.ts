import styled from 'styled-components';

export const Label = styled.span`
  font-family: "Open Sans";
  color: #0f2137;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-family: "Open Sans";
  font-size: 16px;
  border: 1px solid #e3e4e8;
  width: 100%;
  height: 40px;
  padding: 8px;
  margin-bottom: 8px;

  &:focus {
    outline: none;
    border: 1px solid #62bfad;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  font-family: "Open Sans";
  font-size: 16px;
  border: 1px solid #e3e4e8;
  width: 100%;
  height: 120px;
  padding: 8px;
  margin-bottom: 8px;

  &:focus {
    outline: none;
    border: 1px solid #62bfad;
  }
`;
