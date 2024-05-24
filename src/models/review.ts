export interface Review {
  id: string
  text: string
  userId: string
  partyId: string
  images: Array<string>
  createdAt: Date
}
