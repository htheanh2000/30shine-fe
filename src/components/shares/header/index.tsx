
import logo from 'assets/images/logo.jpg'
import { Icon } from 'components/cores'
import { colors } from 'constants/color'
import { Row } from 'constants/styles'
import styled from 'styled-components'
// import Modal from '../modal'
import { useState } from 'react'
const routers = [{
    name: 'Trải nghiệm dịch vụ',
    url: './'
},
{
    name: 'Hành trình toả sáng',
    url: './1',
},
{
    name: 'Khám phá kiểu tóc',
    url: './2',
},
{
    name: '30shine shop',
    url: './3',
},
{
    name: 'Tìm 30shine gần nhất',
    url: './4',
},
{
    name: 'tuyển dụng',
    url: './5',
}]

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 82vw;
    margin: 0 auto;
    padding: 10px 0;
    background-color: ${colors.white}
`

const Text = styled.p`
    font-family: Oswald;
    text-transform: uppercase;
    font-size: 1rem;
    color: ${colors.black};
    margin: 0 10px;
    letter-spacing: -.5px;
`
const Logo = styled.img`
    margin-right: 30px
`

const Login = styled(Row)`
    background: ${colors.yellow};
    padding: 0 10px;
    border-radius: 5px;
`

const LoginText = styled.p`
    margin-left: 5px;
    font-family: Oswald;
    text-transform: uppercase;
    font-size: 1rem;
    color: #000;
    font-weight: 600;
    margin: 5px 5px;
`

const Header = () => {
    const [modalVisible, setModalVisibale] = useState<boolean>(false)

    const onClickLogin = () => {
        setModalVisibale(!modalVisible)
    }
    return (
        <Container>
            <Logo alt='logo' src={logo} width='80px' />
            <Nav>
                {routers.map(router => <Text key={router.url}>{router.name}</Text>)}
            </Nav>
            <Login onClick={onClickLogin}>
                <Icon name='Login' />
                <LoginText>{modalVisible ? 'Đăng nhập' : 'The Anh'}</LoginText>
            </Login>
            {/* <Modal visible={modalVisible}/> */}
        </Container>
    )
}

export default Header