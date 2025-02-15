import React from 'react'
import { LogoByTheme } from '../LogoByTheme'
import { Geral } from '@/payload-types'
import { BasePayload } from 'payload'

const BeforeSidebar: React.FC<{ payload: BasePayload }> = async ({
  payload,
}: {
  payload: BasePayload
}) => {
  const result: Geral = await payload.findGlobal({
    slug: 'geral',
    depth: 2,
  })
  if (result && result?.logoWhite && result?.logoDark) {
    return <LogoByTheme result={result} />
  }
}

export default BeforeSidebar
