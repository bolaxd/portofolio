import React, { useEffect, useRef, useState } from 'react'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  EnvelopeClosedIcon,
  FileTextIcon,
} from '@radix-ui/react-icons'
import cn from 'clsx'

function Navbar() {
  const [yOffset, setYOffset] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true)

  const handleClickScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  function handleScroll() {
    const currentYOffset = window.pageYOffset
    const visible = yOffset > currentYOffset

    setYOffset(currentYOffset)
    setVisible(visible)
  }

  return (
    <nav
      className={cn('sticky top-0 ease-in duration-300', {
        '-top-16': !visible,
      })}
    >
      <ul className="flex gap-12 justify-center items-center p-4 backdrop-blur-lg border-b bg-indigo-900 bg-opacity-60 border-gray-200 md-gap-16">
        <a
          className="flex gap-4 justify-center items-center"
          href="https://github.com/bolaxd"
        >
          <GitHubLogoIcon width={20} height={20} />
          <li className="hidden md:block">Github</li>
        </a>
        <a
          className="flex gap-4 justify-center items-center"
          href="https://www.linkedin.com/in/achraf-garai/"
        >
          <LinkedInLogoIcon width={20} height={20} />
          <li className="hidden md:block">LinkedIn</li>
        </a>
        <a
          className="flex gap-4 justify-center items-center"
          href="https://www.instagram.com/iqblsh77/"
        >
          <InstagramLogoIcon width={20} height={20} />
          <li className="hidden md:block">Instagram</li>
        </a>
        <button
          onClick={() => handleClickScroll('#projectsSection')}
          className="flex gap-4 justify-center items-center"
        >
          <FileTextIcon width={20} height={20} />

          <p className="hidden md:block">My Projects</p>
        </button>
        <button
          onClick={() => handleClickScroll('contactSection')}
          className="flex gap-4 justify-center items-center"
        >
          <EnvelopeClosedIcon width={20} height={20} />

          <p className="hidden md:block">Contact me</p>
        </button>
      </ul>
    </nav>
  )
}

export default Navbar