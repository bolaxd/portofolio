import React, { ReactNode } from 'react'
import cn from 'clsx'
import s from './Container.module.css'

function Container({
  children,
  variant = 'default',
  className,
}) {
  const rootClassName = cn(s.root, { [s.default]: variant === 'default', [s.blog]: variant === 'blog' }, className)
  return <div className={rootClassName}>{children}</div>
}

export default Container