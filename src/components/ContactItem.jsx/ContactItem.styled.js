import styled from 'styled-components';

export const ContactItems = styled.li`
  color: #f2f7fd;
  margin-bottom: 8px;
  padding: 8px 32px;
  background-color: #00695c;
  display: flex;
  border-radius: 4px;
  max-width: 30%;
  align-items: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #445760a3;
  }
`;

export const ContactItemContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-grow: 1;
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

// export const ContactButtonDelet = styled.button`
//   margin-right: 5px;
//   margin-left: auto;
//   cursor: pointer;
//   color: red;
//   border: none;
//   background: transparent;

//   font-size: 20px;
//   font-weight: 700;
//   line-height: 1.18;
//   letter-spacing: 0.07em;

//   grid-column-start: 2;
//   grid-column-end: 3;
//   grid-row-start: 1;
//   grid-row-end: 3;
// `;


