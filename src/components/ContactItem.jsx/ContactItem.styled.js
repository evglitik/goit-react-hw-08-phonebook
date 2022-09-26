import styled from 'styled-components';

export const ContactItems = styled.li`
  color: #f2f7fd;

  margin-bottom: 8px;
  padding: 8px 32px;
  background-color: #313f46;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  border-radius: 32px;
  max-width: 30%;
  align-items: center;
  &:hover {
    background-color: #445760;
  }
`;

export const ContactText = styled.span`
  margin-right: 5px;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: 0.07em;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

export const ContactNumber = styled.span`
  margin-right: 5px;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
`;

export const ContactButtonDelet = styled.button`
  margin-right: 5px;
  margin-left: auto;
  cursor: pointer;
  color: red;
  border: none;
  background: transparent;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: 0.07em;

  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
`;
