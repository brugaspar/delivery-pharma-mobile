import styled from 'styled-components/native'
import avatar from '../assets/avatar.png'

export function Header() {
    return (
        <HeaderContainer>
            <WelcomeTitle>
                Hey, <TextBold>Usuário</TextBold> {'\n'}
                O que vai pedir?
            </WelcomeTitle>
            <Avatar
               source={avatar} 
            />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const WelcomeTitle = styled.Text`
    font-size: 18px;
    line-height: 22px;
`

const TextBold = styled.Text`
    font-weight: bold;
`

const Avatar = styled.Image`
    width: 51px;
    height: 51px;
    border-radius: 50px;
`