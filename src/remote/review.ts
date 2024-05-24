import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from '@firebase/firestore'
import { store } from './firebase'
import { Review } from '../models/review'

export async function getReviews({ partyId }: { partyId: string }) {
  // 전체 리뷰 조회 (페이지네이션)
  // 1. 가져온 partyId 로 partyRef 조회
  // 2. 가져온 리뷰 데이터를 1에서 조회한 Party 의 REVIEW Collection 하위 Document 를 createdAt 역순으로 모두 가져오기
  // ※ user 도 관리할 경우, userId 도 받아야 하지만 해당 프로젝트에서는 user 가 없으므로 처리 X
  const partyRef = doc(store, 'PARTY', partyId)
  const reviewQuery = query(
    collection(partyRef, 'REVIEW'),
    orderBy('createdAt', 'desc'),
  )

  const reviewSnapshot = await getDocs(reviewQuery)

  const reviews = reviewSnapshot.docs.map((doc) => {
    const review = doc.data()

    return {
      id: doc.id,
      ...review,
      createdAt: review.createdAt,
    } as Review
  })

  return reviews
}

export function writeReview(review: Omit<Review, 'id'>) {
  // 리뷰 작성
  // 1. 가져온 리뷰 데이터 (id 는 FireStore 자동생성ID 사용하므로 생략(omit)되어 있음) 에서 partyId 로 partyRef 조회
  // 2. 가져온 리뷰 데이터를 1에서 조회한 Party 의 REVIEW Collection 하위 Document 로 생성
  const partyRef = doc(store, 'PARTY', review.partyId)
  const reviewRef = doc(collection(partyRef, 'REVIEW'))

  return setDoc(reviewRef, review)
}

export function updateReview(review: Review) {
  // 리뷰 쉉
  // 1. 가져온 리뷰 데이터 (id 는 FireStore 자동생성ID 사용하므로 생략(omit)되어 있음) 에서 partyId 로 partyRef 조회
  // 2. 가져온 리뷰 데이터를 1에서 조회한 Party 의 REVIEW Collection 하위 Document 조회
  // 3. 2에서 가져온 refiewRef의 Document 수정
  const partyRef = doc(store, 'PARTY', review.partyId)
  const reviewRef = doc(collection(partyRef, 'REVIEW'))

  return updateDoc(reviewRef, { title: review.text })
}

export function deleteReview({
  reviewId,
  partyId,
}: {
  reviewId: string
  partyId: string
}) {
  // 리뷰 삭제
  // 1. 가져온 partyId 로 partyRef 조회
  // 2. 가져온 reviewId 로 1에서 조회한 Party 의 Review Collection 중 reviewId 를 가진 Document 삭제
  const partyRef = doc(store, 'PARTY', partyId)
  const reviewRef = doc(collection(partyRef, 'REVIEW'), reviewId)

  return deleteDoc(reviewRef)
}
