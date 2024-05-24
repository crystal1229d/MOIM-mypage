import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

import formatDatetime from '../../../utils/formatDate'
import { Party } from '../../../models/party'
import { colors } from '../../styles/colorPalette'
import Text from '../../shared/Text'
import Button from '../../shared/Button'
import Flex from '../../shared/Flex'
import ReviewForm from './ReviewForm'
import Comment from '../../shared/Comment'
import useReview from '../../../hooks/useReview'
import useFileUpload from '../../../hooks/useFileUpload'

interface CardProps {
  party: Party
}

function Card({ party }: CardProps) {
  const { id, title, description, datetime, reviews } = party

  const {
    comment,
    setComment,
    images,
    setImages,
    updatedReview,
    handleCreateReview,
    handleUpdateReview,
  } = useReview({ partyId: id })
  const { files, filePreviews, handleFileChange, uploadFiles } = useFileUpload()

  const [isEditMode, setEditMode] = useState(false)

  const review = reviews?.length > 0 ? reviews[0] : undefined

  const handleSwitchMode = () => {
    if (review) {
      setComment(review.text)
      setImages(review.images || [])
    }
    setEditMode((prev) => !prev)
  }

  const handleChangeReview = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleSubmit = async () => {
    if (comment.length < 30) {
      alert('30자 이상 입력해주세요')
      return
    }

    if (comment.length > 500) {
      alert('500자 이하로 입력해주세요')
      return
    }

    const uploadedUrls = await uploadFiles()
    setImages(uploadedUrls)

    // 필수 작업 조건 : 후기 작성 기능
    console.log(
      `후기 데이터 - 내용: ${comment}, 파일 개수: ${files.length}, 파일 원본 이름: [${files.map((file) => file?.name).join(', ')}]`,
    )

    // 이미 존재하는 리뷰(id가 있음) : 생성
    // 존재하지 않는 리뷰(id가 없음)) : 수정
    if (updatedReview && updatedReview.id) {
      await handleUpdateReview({ uploadedUrls })
    } else {
      await handleCreateReview({ uploadedUrls })
    }

    setComment('')
    setImages([])
    setEditMode(false)
  }

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

        {/* @TODO : 이미지 수정 기능  */}
        {isEditMode ? (
          <ReviewForm
            comment={comment}
            onChange={handleChangeReview}
            filePreviews={filePreviews.length > 0 ? filePreviews : images || []}
            handleFileChange={handleFileChange}
          />
        ) : (
          <Comment review={updatedReview} />
        )}
      </Content>

      <Actions>
        {isEditMode ? (
          <>
            <Button label="취소" color="negative" onClick={handleSwitchMode} />
            <Button label="등록하기" color="positive" onClick={handleSubmit} />
          </>
        ) : (
          <>
            <Button
              label="후기 보기"
              color="negative"
              onClick={handleSwitchMode}
            />
            <Button
              label="후기 수정"
              color="positive"
              onClick={handleSwitchMode}
            />
          </>
        )}
      </Actions>
    </Container>
  )
}

const Container = styled.li`
  width: 680px;
  min-height: 220px;
  margin: 0 15px 35px 15px; /* 양 옆 그림자 보이게 하기 위해 양 옆에도 margin 주기 */
  box-sizing: border-box;

  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow:
    0px 4px 15px 0px ${colors.grayForShadow},
    0px -4px 15px 0px ${colors.grayForShadow};
  -webkit-box-shadow:
    0px 4px 15px 0px ${colors.grayForShadow},
    0px -4px 15px 0px ${colors.grayForShadow};
  -moz-box-shadow:
    0px 4px 15px 0px ${colors.grayForShadow},
    0px -4px 15px 0px ${colors.grayForShadow};

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
