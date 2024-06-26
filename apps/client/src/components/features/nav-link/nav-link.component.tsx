'use client'

import Link from 'next/link'

import type { TNavLinkProps } from './nav-link.models'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function NavLink({
  href,
  children,
  className,
  ...props
}: TNavLinkProps) {
  const [isActive, setIsActive] = useState<boolean>(false)

  const pathName = usePathname()

  useEffect(() => {
    setIsActive(Boolean(href === pathName))
  }, [pathName, href])

  return (
    <Link
      href={href}
      className={[
        className,
        `w-full flex gap-2 items-center p-1 outline outline-2 outline-transparent focus:outline-blue-300 focus-visible:outline-blue-300 rounded-sm transition-colors duration-75 text-neutral-800 ${isActive ? 'font-semibold bg-gray-200' : 'font-normal hover:text-neutral-700 hover:bg-gray-200'}`,
      ].join(' ')}
      {...props}
    >
      {children}
    </Link>
  )
}
