'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare, FaWeixin } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'
import { MdOutlineContactPhone } from 'react-icons/md'
import Link from 'next/link'
import { Source_Code_Pro } from 'next/font/google'
import { useLocale } from 'next-intl'
import { useSectionInView } from '@/lib/hooks'
import { TypeAnimation } from 'react-type-animation'
import { useActiveSectionContext } from '@/context/action-section-context'
import { useTranslations } from 'next-intl'
import useSound from 'use-sound'
import { useState } from 'react'

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], weight: '400' })

export default function Intro() {
  const { ref } = useSectionInView('Home')
  const activeLocale = useLocale()
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const t = useTranslations('IntroSection')
  const [playHover] = useSound('/bubble.wav', { volume: 0.5 })

  const wx = process.env.NEXT_PUBLIC_WEIXIN
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER
  const mail = process.env.NEXT_PUBLIC_MAIL_TO_LINK_TEMPLATE
  // console.log('env--------local', wx, phone, mail)

  const [weixinNumber, setWeixinNumber] = useState<string | undefined>(wx)
  const [isCopied, setIsCopied] = useState(false)

  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(phone)
  const [isPhoneCopied, setIsPhoneCopied] = useState(false)

  const handleClickCopied = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(weixinNumber as string)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } else {
      // 备用复制方式
      const textArea = document.createElement('textarea')
      textArea.value = weixinNumber as string
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    }
  }
  const handlePhoneCopied = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(phoneNumber as string)
      setIsPhoneCopied(true)
      setTimeout(() => {
        setIsPhoneCopied(false)
      }, 2000)
    } else {
      // 备用复制方式
      const textArea = document.createElement('textarea')
      textArea.value = weixinNumber as string
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setIsPhoneCopied(true)
      setTimeout(() => {
        setIsPhoneCopied(false)
      }, 2000)
    }
  }

  const handleClickEmail = () => {
    // 构建邮件链接
    const mailToLink = mail as string
    window.location.href = mailToLink
  }

  const [isEmailShow, setIsEmailShow] = useState(false)
  const handleMouseMove = () => {
    setIsEmailShow(true)
  }
  const handleMouseLeave = () => {
    setIsEmailShow(false)
  }

  return (
    <section
      ref={ref}
      className="mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 pt-[7rem]"
      id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}>
            <Image
              src="/profile.png"
              alt="developer-image"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            onHoverStart={() => {
              console.log('sound')
              playHover()
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.25, rotate: 15 }}
            className="absolute text-4xl bottom-0 right-0 hover:rotate-2"
            transition={{
              type: 'spring',
              duration: 0.7,
              delay: 0.1,
              stiffness: 125
            }}>
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className={`${sourceCodePro.className} text-sm tracking-wider `}>
          {t('hello_im')}
        </span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-center text-4xl font-bold tracking-tight  sm:text-5xl bg-gradient-to-br from-blue-500 to-red-500 bg-clip-text text-transparent">
            {t('name')}
          </h1>

          <div className="text-center">
            <span className={`${sourceCodePro.className} text-sm tracking-wider`}>I&apos;m a </span>
            <h2
              id="name"
              className=" text-center  text-2xl  sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold">
              <TypeAnimation
                sequence={['Frontend Developer', 1000, 'Full Stack Developer', 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </div>
        </motion.div>
        <p>{t('short_intro')}</p>
        {activeLocale === 'en' && (
          <p>
            My focus is <span className="italic font-bold">React (Next.js)</span>.
          </p>
        )}
      </motion.h1>

      <motion.div
        className="relative flex flex-col sm:flex-row items-center justify-center  gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}>
        {/* <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}
          className="group bg-gray-900 px-4 py-2 text-sm sm:text-lg text-white sm:px-7 sm:py-3 flex items-center gap-2  rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link> */}
        {/* point start */}
        <div className="absolute -left-12 top-10 hidden sm:block">
          <Image
            src={activeLocale === 'en' ? '/downloadEn.png' : '/download.png'}
            alt="下载简历"
            width={150}
            height={1000}
            quality="95"
            priority={true}
            className="rounded-md  object-cover "
          />
        </div>
        <div className="absolute left-1 top-3 md:hidden">
          <Image
            src={'/sm_cv.png'}
            alt="下载简历"
            width={150}
            height={1000}
            quality="95"
            priority={true}
            className="rounded-md  object-cover "
          />
        </div>
        {/* point end */}

        <Link
          target="_blank"
          className="bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href={
            activeLocale == 'en'
              ? '/Front-end Development-huangshihao.pdf'
              : '/web前端开发-黄士豪.pdf'
          }
          locale={false}>
          {t('download_cv')}
          <HiDownload />
        </Link>

        <div
          className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          onClick={handleClickEmail}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>
          <TfiEmail className="text-yellow" />
          {isEmailShow && (
            <span className="text-yellow text-sm ">
              {activeLocale === 'en' ? 'Send me an email' : '向我发送邮件'}
            </span>
          )}
        </div>

        <div
          className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          onClick={handleClickCopied}>
          <FaWeixin className="text-green-500" />
          {isCopied && <span className="text-green-500 text-sm">Copied!</span>}
        </div>

        <a
          className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/ShihaoHuang310"
          target="_blank">
          <FaGithubSquare />
        </a>
        <div
          className=" bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          onClick={handlePhoneCopied}>
          <MdOutlineContactPhone className="text-green-500" />
          {t('contact')}
          {isPhoneCopied && <span className="text-green-500 text-sm">Copied!</span>}
        </div>
        <a
          className=" bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://blog.simple1.icu"
          target="_blank">
          {t('blog')}

          {/* <FaGithubSquare /> */}
        </a>
      </motion.div>
    </section>
  )
}
