import { Icon } from "components/cores"
import { backgroundColor, colors } from "constants/color"
import { useState } from "react"
import styled from 'styled-components'
import {validPhonenumber} from 'utils/valid'


const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${backgroundColor.layout};
    width: 100vw;
    height: 100vh;
`

const Card = styled.div`
    position: absolute;
    width: 450px;
    height: 270px;
    border-radius: 5px;
    justify-content: center;
    align-item: center;
    left: 50vw;
    top: 100px;
    text-align: center;
    justify-content: center;
    transform: translateX(-225px);
    background-color: ${colors.white}
`

const Title = styled.p`
    font-size: 24px
`
const Subtitle = styled.p`
    font-family: be vietnam pro,sans-serif;
    font-weight: 500;
    font-size: 16px;
`

const Input = styled.input`
    padding: 10px 10px;
    width: 85%;
    font-size: 16px;
    margin-top: 20px;
    line-height: 1.25rem;
    border-radius: 4px;
    height: 20px;
    border: 2px solid #a3a3a3;
    &:focus {
        outline: 0;
      }

`

const Button = styled.div`
    margin-top: 20px;
    width: 85%;
    padding: 15px;
    height: 20px;
    margin: 5px auto;
    border-radius: 4px;
    background-color: ${colors.yellow}
`

const ButtonText = styled.span `
    font-family: 'Oswald'
`

const CloseButton = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`

const ErrorText = styled.p`
    font-family: be vietnam pro,sans-serif;
    color: ${colors.red};
    text-align: left;
    width: 90%;
    margin: 0 auto;
    margin-top: 5px;
    font-size: 14px;
`

const Modal = () => {
    const [phonenumber, setPhonenumber] = useState('')
    const [error, setError] = useState(false)

    const onTextChange = (e: any) => {
        setPhonenumber(e.target.value)
        const isValid = validPhonenumber(e.target.value)
        if(e.target.value === '') {
            setError(false) // reset error
        }
        else {
            setError(isValid)

        }
    }

    return (
        <Container>
            <Card>
                <CloseButton><Icon name='Close'/></CloseButton>
                <Title>Đăng nhập</Title>
                <Subtitle>Số điện thoại của anh là gì ạ ?</Subtitle>
                <Input placeholder='Ví dụ: 0912.xxx.xxx' value={phonenumber} onChange={(e)=> onTextChange(e)}/>
                {error && <ErrorText>Số điện thoại sai định dạng</ErrorText>}
                <Button><ButtonText>Tiếp tục</ButtonText></Button>
            </Card>
        </Container>
    )
}

export default Modal