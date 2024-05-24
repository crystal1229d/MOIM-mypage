import { Review } from './review'

export interface Party {
  id: string
  title: string
  description: string
  datetime: string
  createdAt: string

  reviews: Review[]
}
