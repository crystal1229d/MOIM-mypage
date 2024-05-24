import styled from 'styled-components'
import Text from './Text'

function Header({ title }: { title: string }) {
  return (
    <Container>
      <Text typography="t1" bold>
        {title}
      </Text>
    </Container>
  )
}

const Container = styled.header`
  width: 100%;
  margin: 40px 0 72px 0;
`

export default Header
