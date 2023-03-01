import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #3b3450;

  display: flex;
  align-items: center;
  margin-bottom: 21px;

  position: relative;
  top: 0;
  left: 0;
  }
`

export const IconContainer = styled.div`
  margin-right: 10px;
`

export const InputText = styled.input`
  background-color: transparent;
  color: #fff;
  width: 100%;
  border: 0;
  height: 30px;
  font-size: 100%;
  outline: none;
`

export const ErrorText = styled.p`
  color: #ff0000;
  font-size: 12px;
  position: absolute;
  top: 33px;
  left: 0;
  font-family: 'Open Sans', sans-serif;
`