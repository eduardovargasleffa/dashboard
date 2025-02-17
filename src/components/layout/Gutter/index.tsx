import React, { ReactNode } from 'react'
import useStyles from './css'

type Props = {
  left?: boolean
  right?: boolean
  className?: string
  children: ReactNode
}

const Gutter: React.FC<Props> = ({ children, left = false, right = false, className }) => {
  const classes = useStyles()
  return (
    <div
      className={[left && classes.left, right && classes.right, className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}

export default Gutter
