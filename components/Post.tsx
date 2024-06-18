'use client'
import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import { useUser } from '@clerk/nextjs'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'
import { Badge } from './ui/badge'
import PostContent from './PostContent'
import SocialOptions from './SocialOptions'
import { IPostDocument } from '@/models/post.model'
import ReactTimeago from 'react-timeago'

const Post = ({post}:{post:IPostDocument}) => {
    const user = useUser()
     console.log("Rohit",post)
    //  console.log("pohit", user)
    const fullName = post?.user?.firstName + " " + post?.user?.lastName;
    const userName = (post?.user?.firstName + post?.user?.lastName).toLowerCase();

    // const userName = user?.user?.primaryEmailAddress?.emailAddress.split('@')[0]

    return (
        <div className='bg-white my-2 mx-2 md:mx-0 rounded-lg border border-gray-300'>
            <div className='flex gap-2 p-4'>
                <ProfilePhoto src={post?.user?.profilePhoto!}/>
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <h1 className='text-sm font-bold'>{fullName} <Badge variant={'secondary'} className='ml-2'>You</Badge></h1>
                        <p className='text-xs text-gray-500'>@{userName}</p>
                      
                        <p className='text-xs text-gray-500'>
                            <ReactTimeago date={new Date(post.createdAt)}/>
                        </p>
                    </div>
                </div>
                <div>
                    <Button className='rounded-full ' size={'icon'} variant={'outline'}>
                        <Trash2 />
                    </Button>
                </div>
            </div>
            <PostContent post={post}/>
            <SocialOptions/>
        </div>
    )
}

export default Post
