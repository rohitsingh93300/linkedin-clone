import React from 'react'
import { Button } from './ui/button'
import { MessageCircleMore, Repeat, Send, ThumbsUp } from 'lucide-react'

const SocialOptions = () => {
  return (
    <div>
      <div className='flex items-center m-1 justify-between'>
        <Button className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black' variant={'ghost'}>
            <ThumbsUp />
            <p>Like</p>
        </Button>
        <Button className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black' variant={'ghost'}>
            <MessageCircleMore />
            <p>Comment</p>
        </Button>
        <Button className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black' variant={'ghost'}>
            <Repeat />
            <p>Repost</p>
        </Button>
        <Button className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black' variant={'ghost'}>
            <Send />
            <p>Send</p>
        </Button>
      </div>
    </div>
  )
}

export default SocialOptions
