import { useState } from 'react'
import styled from 'styled-components'
import { NAVIGATION } from '../../constants'
import Text from './Text'

const NavbarContainer = styled.nav`
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const NavItems = styled.ul.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  display: flex;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`

const NavItem = styled.li`
  cursor: pointer;
  &: hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 4px 0;
`

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <NavbarContainer>
      <Hamburger onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
      <NavItems isOpen={isOpen}>
        {NAVIGATION.map((nav, index) => (
          <NavItem key={index}>
            <Text typography="t5">{nav}</Text>
          </NavItem>
        ))}
      </NavItems>
    </NavbarContainer>
  )
}

export default Navbar
