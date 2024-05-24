import styled from 'styled-components'
import Flex from './Flex'

function Layout({ children }: { children: React.ReactNode }) {
  return <StyledFlex dir="column">{children}</StyledFlex>
}

const StyledFlex = styled(Flex)`
  width: 57vw;
  margin: 0px auto 175px auto;
  align-items: center;
  justify-content: center;
`

export default Layout
