import { useCallback } from 'react'
import styled from 'styled-components'

import formatDatetime from '../../utils/formatDate'
import { Review } from '../../models/review'
import Flex from './Flex'
import Spacing from './Spacing'
import Text from './Text'
import { FaUser } from 'react-icons/fa'
import { colors } from '../styles/colorPalette'

function Comment({ review }: { review: Review | null }) {
  const renderedReview = useCallback(() => {
    if (!review) {
      return (
        <Text typography="t5" style={{ width: '100%', marginTop: '20px' }}>
          후기를 작성해주세요.
          <br />
          소정의 포인트가 지급됩니다.
        </Text>
      )
    }

    return (
      <Container
        justify="flex-start"
        align="flex-start"
        gap="10px"
        style={{ marginTop: '30px' }}
      >
        <UserProfile>
          <FaUser size={25} color={colors.white} />
        </UserProfile>

        <Flex dir="column" align="flex-start" style={{ paddingTop: '5px' }}>
          <Text typography="t5" bold>
            테스트유저
          </Text>
          <Spacing size={10} />

          <Text typography="t5">
            {/* dangerouslySetInnerHTML : 엔터 포함하여 표출  */}
            <span
              dangerouslySetInnerHTML={{
                __html: review.text.replace(/\n/g, '<br />'),
              }}
            />
          </Text>

          <Spacing size={10} />

          {review.images && review.images.length > 0 && (
            <>
              <Flex gap="10px">
                {review.images.map(
                  (image, index) =>
                    image && (
                      <img
                        key={index}
                        src={image}
                        alt="review"
                        style={{ width: 'fit-content', height: '100px' }}
                      />
                    ),
                )}
              </Flex>
              <Spacing size={10} />
            </>
          )}

          <Text typography="t6" color="gray300">
            {formatDatetime(review.createdAt.toString())}
          </Text>
        </Flex>
      </Container>
    )
  }, [review])

  return <>{renderedReview()}</>
}

const Container = styled(Flex)`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid ${colors.gray300};
  border-radius: 5px;
`

const UserProfile = styled(Flex)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.gray300};
`

export default Comment
