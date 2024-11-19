import { Topic } from '@/types/topic'

export function convertDocToObj(doc: Topic) {
  return {
    _id: doc._id.toString(),
    description: doc.description,
    createdAt: doc.createdAt || '',
    updatedAt: doc.updatedAt || '',
  }
}
