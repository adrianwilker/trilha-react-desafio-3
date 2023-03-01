import { Header } from '../../components/Header'
import { UserInfo } from '../../components/UserInfo'
import { Card } from '../../components/Card'
import { Container, Title, TitleHighlight, Column } from './styles'

const Feed = () => {
  return (<>
    <Header autenticado={true} />
    <Container>
      <Column flex={3}>
        <Title>Feed</Title>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Column>
      <Column flex={1}>
        <TitleHighlight># RANKING DA SEMANA</TitleHighlight>
        <UserInfo percentual={100} nome="Fernando Levi Oliveira" image="https://picsum.photos/32"/>
        <UserInfo percentual={85} nome="Rosa Tereza" image="https://picsum.photos/33"/>
        <UserInfo percentual={66} nome="Bárbara Alícia" image="https://picsum.photos/34"/>
        <UserInfo percentual={60} nome="Leonardo Caio Souza" image="https://picsum.photos/35"/>
        <UserInfo percentual={58} nome="Gael Francisco" image="https://picsum.photos/36"/>
      </Column>
    </Container>
  </>)
}

export { Feed }