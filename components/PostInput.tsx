'use client'
import React, { useState } from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import { Input } from './ui/input'
import { PostDialog } from './PostDialog'
import { Button } from './ui/button'
import { Calendar, CalendarRange, Images, NotebookPen } from 'lucide-react'

const PostInput = ({ user }: { user: any }) => {
    const [open, setOpen] = useState<boolean>(false)
    const inputHandler = () => {
        setOpen(true)
    }
    return (
        <div className='bg-white p-4 m-2 md:m-0 border border-gray-300 rounded-lg'>
            <div className='flex items-center gap-3'>
                <ProfilePhoto src={user?.imageUrl} />
                <Input
                    type='text'
                    placeholder='Start a Post, try writing with AI'
                    className='rounded-full hover:bg-gray-100 h-12 cursor-pointer'
                    onClick={inputHandler}
                />
                <PostDialog setOpen={setOpen} open={open} src={user?.imageUrl} />
            </div>
            <div className='flex items-center justify-between mt-3'>
            <Button variant={'ghost'} className="gap-2"  onClick={inputHandler}>
                <Images className="text-blue-500" />
                <p>Media</p>
            </Button>
            <Button variant={'ghost'} className="gap-2"  onClick={inputHandler}>
                <CalendarRange className="text-[#C37D16]" />
                <p>Event</p>
            </Button>
            <Button variant={'ghost'} className="gap-2"  onClick={inputHandler}>
                <NotebookPen className="text-[#E06847]" />
                <p>Write article</p>
            </Button>

            </div>
        </div>
    )
}

export default PostInput
