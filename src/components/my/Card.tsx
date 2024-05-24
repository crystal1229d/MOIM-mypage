import { useState } from 'react'
import styled from 'styled-components'

import formatDatetime from '../../utils/formatDate'
import { Party } from '../../models/party'
import Text from '../shared/Text'
import Button from '../shared/Button'
import TextField from '../shared/TextField'
import InputFile from '../shared/InputFile'
import { colors } from '../styles/colorPalette'
import Flex from '../shared/Flex'
import Spacing from '../shared/Spacing'

interface CardProps {
  party: Party
}

function Card({ party }: CardProps) {
  const [isEditMode, setEditMode] = useState(false)

  const { title, description, datetime } = party

  const handleFileChange = () => {}

  return (
    <Container>
      <Header>
        <Text typography="t3" color="white" bold>
          {title}
        </Text>
        <Text typography="t4" color="white">
          {description}
        </Text>
      </Header>

      <Content>
        <Flex justify="flex-start" gap="36px">
          <Text typography="t4" bold>
            모임 일자
          </Text>
          <Text typography="t4" color="black800" bold>
            {formatDatetime(datetime)}
          </Text>
        </Flex>

        {isEditMode ? (
          <Flex dir="column">
            <TextField />

            <Spacing size={20} />

            <Flex justify="flex-start" gap="20px">
              <InputFile onChange={handleFileChange} />
              <InputFile onChange={handleFileChange} />
              <InputFile onChange={handleFileChange} />
            </Flex>
          </Flex>
        ) : (
          <Text typography="t5" style={{ width: '100%', marginTop: '20px' }}>
            후기를 작성해주세요.
            <br />
            소정의 포인트가 지급됩니다.
          </Text>
        )}
      </Content>

      <Actions>
        {isEditMode ? (
          <>
            <Button label="취소" color="negative" />
            <Button label="등록하기" color="positive" />
          </>
        ) : (
          <>
            <Button label="후기 보기" color="negative" />
            <Button label="후기 수정" color="positive" />
          </>
        )}
      </Actions>
    </Container>
  )
}

const Container = styled.li`
  width: 680px;
  min-height: 220px;
  margin-bottom: 35px;

  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 0px 4px 15px 0px ${colors.grayForShadow};

  @media (max-width: 768px) {
    width: 90vw;
  }
`

const Header = styled.div`
  height: 40px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.grayishBlue};
  border-radius: 10px 10px 0 0;
`

const Content = styled.div`
  padding: 40px 22px 21px 22px;
  display: flex;
  flex-direction: column;
`

const Actions = styled.div`
  padding: 0 19px 35px 19px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`

export default Card
