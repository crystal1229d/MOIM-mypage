import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { NAVIGATION } from '../../constants'
import Text from './Text'
import {
  barAnimationOpenTop,
  barAnimationOpenBottom,
  barAnimationCloseTop,
  barAnimationCloseBottom,
} from '../styles/animation'

function Navbar() {
  const location = useLocation()

  const [isSelected, setSelected] = useState(NAVIGATION[4].label)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (location.pathname === '/my/reviewList') {
      setSelected(NAVIGATION[4].label)
    }
  }, [location.pathname])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <NavbarContainer>
      {/* @반응형 : 화면 너비가 좁아졌을 경우 등장하는 햄버거 메ㅁ뉴 */}
      <Hamburger onClick={toggleMenu} isOpen={isOpen}>
        <div />
        <div />
        <div />
      </Hamburger>

      <NavItems isOpen={isOpen}>
        {NAVIGATION.map(({ label, link }) => (
          <NavItem key={label} onClick={() => setSelected(label)}>
            <Link to={link}>
              <Text typography="t5" bold={isSelected === label}>
                {label}
              </Text>
            </Link>
          </NavItem>
        ))}
      </NavItems>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.nav`
  width: 100%;
  margin-bottom: 60px;

  position: relative;

  @media (max-width: 768px) {
    position: absolute;
    top: 40px;
    right: 5px;
  }
`

const NavItems = styled.ul.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8%;

  @media (max-width: 768px) {
    width: 100vw;
    margin-top: 40px;
    padding: 20px 0;

    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 30px;

    backdrop-filter: blur(10px) saturate(188%);
    -webkit-backdrop-filter: blur(10px) saturate(188%);
    background-color: rgba(255, 255, 255, 0.55);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
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

const Hamburger = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  width: 30px;
  height: 20px;

  display: none;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  top: 0px;
  right: 10px;

  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  & > div {
    background-color: #000;
    height: 3px;
    width: 100%;
    transition: all 0.3s ease;
  }

  & > div:nth-child(1) {
    animation: ${({ isOpen }) =>
      isOpen
        ? css`
            ${barAnimationOpenTop} 0.3s forwards
          `
        : css`
            ${barAnimationCloseTop} 0.3s forwards
          `};
  }

  & > div:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }

  & > div:nth-child(3) {
    animation: ${({ isOpen }) =>
      isOpen
        ? css`
            ${barAnimationOpenBottom} 0.3s forwards
          `
        : css`
            ${barAnimationCloseBottom} 0.3s forwards
          `};
  }
`

export default Navbar
