'use client'
import { useAuth } from '@payloadcms/ui'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import React from 'react'

const UserAvatar: React.FC = () => {
  const { user } = useAuth()
  return (
    <div className="flex no-underline decoration-none">
      <Avatar>
        <AvatarImage src={`${user?.image.sizes.thumbnail.url}`} alt="@shadcn" />
        <AvatarFallback className="bg-black text-white">
          {user?.name
            .split(' ')
            .map((e: string) => e.charAt(0))
            .join('')}
        </AvatarFallback>
      </Avatar>
      <div className="grid ml-2 flex-1 text-left text-sm leading-tight">
        <p className="truncate font-semibold">{user?.name}</p>
        <p className="truncate text-xs">{user?.email}</p>
      </div>
    </div>
  )
}

export default UserAvatar
