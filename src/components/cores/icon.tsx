

import Login from 'assets/icons/login.svg'
import Close from 'assets/icons/close.svg'
import { FunctionComponent } from 'react'
import styled from 'styled-components'
const icons = {
    Login,Close
}

interface IIconProps {
    name: keyof typeof icons
}

const Container = styled.img``

const Icon:FunctionComponent<IIconProps> = (props) => {
    const {name} = props
    return (
        <Container src={icons[name]}/>
    )
}


export default Icon