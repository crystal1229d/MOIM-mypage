import styled from 'styled-components'
import Text from './Text'
import { Link } from 'react-router-dom'

function Header({ title, link = '/' }: { title: string; link?: string }) {
  return (
    <Container>
      <Link to={link}>
        <Text typography="t1" bold>
          {title}
        </Text>
      </Link>
    </Container>
  )
}

const Container = styled.header`
  width: 100%;
  margin: 40px 0 72px 0;

  & > span {
    cursor: pointer;
  }
`

export default Header
