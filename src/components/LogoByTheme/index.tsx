'use client'
import { Geral, Media } from '@/payload-types'
import { useTheme } from '@payloadcms/ui'
import Image from 'next/image'
import React from 'react'

export const LogoByTheme = ({ result }: { result: Geral }) => {
  const { theme } = useTheme()

  return (
    <Image
      className="h-12 w-auto object-cover mb-16"
      src={theme === 'light' ? (result.logoWhite as Media).url! : (result.logoDark as Media).url!}
      alt={result.name!}
      width={300}
      height={300}
    />
  )
}
