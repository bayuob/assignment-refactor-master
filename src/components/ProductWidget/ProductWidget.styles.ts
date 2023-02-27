import styled from 'styled-components';

export const ProductContainer = styled.span`
  display: inline-block;
  overflow-x: scroll;
  float: none;
  clear: both;
  color: #0f2137;
  background-color: #ffffff;
  border: 1px solid #e3e4e8;
  border-radius: calc(1.5 * 4px);
  width: 100%;
  height: auto;
  padding: 16px 24px 8px;
  padding-right: 24px;
  margin: inherit;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const ProductTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 16px;
  white-space: nowrap;
  overflowX: 'hidden';
`;

export const ProductBody = styled.p`
  margin: 0 0 16px;
`;

export const ActionBar = styled.span`
  display: block;
  justify-content: center;
  border-top: 1px solid #e3e4ee;
  padding-top: 8px;
  width: "100%";
`;

export const ActionBarItemLabel = styled.span`
  margin-left: 8px;
`;

export const ActionBarItem = styled.span`
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  &:hover {
    background-color: #f4f5f9;
  }
`;