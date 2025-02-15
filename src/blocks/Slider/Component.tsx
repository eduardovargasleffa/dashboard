import React from 'react'
import { Slide, Type } from '@/blocks/Slider'
import SliderOnBackground from '@/components/Slider/OnBackground'
import { useGridContainerWidth } from '@/components/layout/GridContainer'
import Image from 'next/image'
import { Type as BackgroundColorType } from '@/fields/backgroundColor'
import { Media } from '@/payload-types'

export type SliderBlockProps = {
  slides?: Type
}

type Props = SliderBlockProps & {
  backgroundColor: BackgroundColorType
}

const MediaSlider: React.FC<Props> = ({ backgroundColor, slides }) => {
  const gridContainerWidth = useGridContainerWidth()

  return (
    <SliderOnBackground
      backgroundColor={backgroundColor}
      slides={slides?.map(({ media }: Slide, i: number) => (
        <div key={i}>
          <Image
            src={`${media?.filename}`}
            alt={`${media?.alt || 'Carrossel'}`}
            style={{ maxWidth: gridContainerWidth }}
          />
        </div>
      ))}
    />
  )
}

export default MediaSlider
