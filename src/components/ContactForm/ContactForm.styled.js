import styled from 'styled-components';

export const FormContact = styled.form`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: flex-start; */
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
  /* height: 39px; */

  border-color: transparent;
  background-color: #313f46;
  color: #f2f7fd;
  border-radius: 22px;
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
  background-color: #313f46;
  border: none;
  cursor: pointer;
  text-align: center;
  color: #506874;
  font-weight: 400;
  font-size: 32px;
  &:hover {
    color: #f2f7fd;
    background-color: #445760;
  }
`;
