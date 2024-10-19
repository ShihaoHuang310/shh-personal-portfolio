'use client'
import React, { useEffect, useState } from 'react'
import { GiRocketFlight } from 'react-icons/gi'
import { IoMdRocket } from 'react-icons/io'
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-[2.5rem] h-[2.5rem] bg-opacity-80  flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
          aria-label="Scroll to top">
          <IoMdRocket />
        </button>
      )}
    </div>
  )
}

export default ScrollToTopButton
