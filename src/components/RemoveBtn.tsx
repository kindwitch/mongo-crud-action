'use client'

import { deleteTopic } from '@/actions/topicActions'
import { useRouter } from 'next/navigation'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

export default function RemoveBtn({ id }: { id: string }) {
  const router = useRouter()

  async function removeTopic() {
    const confirmed = confirm(`이 토픽을 지울까요?${id}`)
    if (confirmed) {
      try {
        await deleteTopic(id)
      } catch (error) {
        console.error('삭제 중 오류 발생:', error)
        alert('삭제 중 오류가 발생했습니다.')
      }
    }
  }

  return (
    <button className="text-red-400" onClick={removeTopic}>
      <HiOutlineTrash size={24} />
    </button>
  )
}
