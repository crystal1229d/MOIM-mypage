import styled from 'styled-components'
import Flex from './Flex'

function Layout({ children }: { children: React.ReactNode }) {
  return <StyledFlex dir="column">{children}</StyledFlex>
}

const StyledFlex = styled(Flex)`
  width: 90vw;
  margin: 0px auto 175px auto;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 80vw;
  }

  @media (min-width: 1024px) {
    width: 70vw;
  }

  @media (min-width: 1280px) {
    width: 57vw;
  }
`

export default Layout
