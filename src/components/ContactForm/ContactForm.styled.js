import styled from 'styled-components';

export const FormContact = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 150px 2fr;
  gap: 10px;
`;
export const FormLable = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #f2f7fd;
`;

export const FormInput = styled.input`
  padding: 8px 16px;
  font-size: 16px;
  border-color: transparent;
  background-color: #009688;
  color: #e0f2f1;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.62);
  text-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  &:focus {
    outline: none;
    border: 2px solid #506874;
  }
`;

export const FormSubmitButton = styled.button`
  margin-top: auto;

  width: 39px;
  height: 39px;
  border-radius: 50%;
  background-color: #009688;
  border: none;
  cursor: pointer;
  text-align: center;
  color: #506874;
  font-weight: 400;
  font-size: 32px;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.62);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #e0f2f1;
    background-color: #004d40;
  }
`;
