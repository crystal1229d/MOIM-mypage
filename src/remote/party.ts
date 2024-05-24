import {
  QuerySnapshot,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from '@firebase/firestore'
import { Party } from '../models/party'
import { store } from './firebase'
import { Review } from '../models/review'

export async function getParties(pageParams?: QuerySnapshot<Party>) {
  // 전체 파티(혹은 모임) 조회 : 무한스크롤
  const partiesQuery =
    pageParams == null
      ? query(
          collection(store, 'PARTY'),
          orderBy('createdAt', 'desc'),
          limit(3),
        )
      : query(
          collection(store, 'PARTY'),
          orderBy('createdAt', 'desc'),
          startAfter(pageParams.docs[pageParams.docs.length - 1]),
          limit(3),
        )

  const partiesSnapshot = await getDocs(partiesQuery)

  const items = await Promise.all(
    partiesSnapshot.docs.map(async (doc) => {
      const partyData = doc.data() as Party
      const reviewsSnapshot = await getDocs(collection(doc.ref, 'REVIEW'))
      const reviews = reviewsSnapshot.docs.map(
        (reviewDoc) =>
          ({
            id: reviewDoc.id,
            ...reviewDoc.data(),
          }) as Review,
      )

      return {
        ...partyData,
        id: doc.id,
        reviews,
      } as Party
    }),
  )

  // const items = partiesSnapshot.docs.map(
  //   (doc) =>
  //     ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }) as Party,
  // )

  const lastVisible = partiesSnapshot.docs[partiesSnapshot.docs.length - 1]

  return {
    items,
    lastVisible,
  }
}
