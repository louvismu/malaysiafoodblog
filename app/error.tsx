'use client'

import { useEffect } from 'react'
import { Button } from '@/malaysiafoodblog/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">出错了</h2>
        <p className="mb-6 text-gray-600">抱歉，发生了一些错误。</p>
        <Button onClick={() => reset()}>重试</Button>
      </div>
    </div>
  )
}