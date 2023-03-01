import {Button} from '../Button'
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  UserPicture
} from './styles'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo-dio.png'

const Header = ({autenticado, ocultarBotoes}) => {
  const navigate = useNavigate()
  return(
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da DIO"/>
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." aria-label="Buscar"/>
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://picsum.photos/30" />
          ) : (
            <>
              <MenuRight href="#" onClick={() => navigate('/')}>Home</MenuRight>
              <MenuRight href="#">Catálogo</MenuRight>
              <MenuRight href="#">Planos</MenuRight>
              <MenuRight href="#">Para Empresas</MenuRight>
              { ocultarBotoes ? null : (
                <>
                  <Button title="Entrar" onClick={() => navigate('/login')} />
                  <Button title="Cadastrar" onClick={() => navigate('/signup')} />
                </>
              )}
              
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export {Header}