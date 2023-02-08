import styled from "styled-components";

export const Form = styled.form`
  width: 500px;
  height: 600px;
  border-radius: 8px;
  margin: 0 auto;
  padding: 20px 30px;
  box-sizing: border-box;
  font-family: 'Montserrat',sans-serif;
  position: relative;
  display: block;
  text-align: center;
  
  @media (max-width: 768px) {
    width: 350px;
  }
`

export const ContactTextInput = styled.input`
  padding: 30px;
  border: 0;
  width: 380px;
  font-size: 16px;
  background-color: #222222;
  color: white;
  border-radius: 4px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 250px;
    font-size: 14px;
    padding: 20px;
  }
`

export const ContactTextArea = styled.textarea`
  padding: 30px;
  border: 0;
  width: 380px;
  font-size: 16px;
  background-color: #222222;
  color: white;
  border-radius: 4px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 250px;
    font-size: 14px;
    padding: 20px;
  }
`