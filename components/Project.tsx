'use client'

import { useEffect, useRef, useState } from 'react'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithubSquare } from 'react-icons/fa'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'
import { RiMiniProgramFill } from 'react-icons/ri'
import { useLocale } from 'next-intl'

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  isWx,
  wxName,
  title,
  description,
  desc_zh,
  title_zh,
  tags,
  imageUrl,
  projectUrl,
  demoUrl
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  const activeLocale = useLocale()
  // const tagsList = activeLocale === 'zh' ? tags : tags_en

  // 跳转微信小程序
  const [isWeixin, setIsWeixin] = useState(false)
  const [isWxOpened, setIsWxOpened] = useState(false)
  useEffect(() => {
    // 检测是否在微信环境中
    function isWechat() {
      // const ua = navigator.userAgent.toLowerCase()
      // return ua.indexOf('micromessenger') !== -1
      const ua = navigator.userAgent.toLowerCase()
      const match = ua.match(/MicroMessenger/i)
      return match !== null
    }
    setIsWeixin(isWechat())
  }, [])
  const searchMiniProgram = () => {
    // 小程序的名称或关键词
    const keyword = 'e嘉人'

    // 构建小程序搜索链接
    const url = `weixin://searchminapp/content?query=${encodeURIComponent(keyword)}`

    // 在微信环境中打开搜索链接
    if (isWx) {
      window.location.href = url
    } else {
      alert('请在微信中打开小程序搜索：e嘉人')
    }
  }
  // const openMiniProgram = () => {
  //   // 小程序的 appId 和 path
  //   const appId = 'wx123456789abcdef'
  //   const path = 'pages/index/index'
  //   const query = 'id=123&name=John'

  //   // 构建跳转链接
  //   const url = `weixin://miniprogram/appid=${appId}&path=${path}&query=${query}`

  //   // 在微信环境中打开链接
  //   if (isWx) {
  //     window.location.href = url
  //   } else {
  //     alert('请在微信中打开小程序')
  //   }
  // }
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess
      }}
      className="group mb-3 sm:mb-8 last:mb-0">
      <section className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[28rem]  transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 ">
        <div className="group pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col items-start gap-3 h-full sm:group-even:ml-[18rem]">
          <div className="flex flex-col gap-3 items-start ">
            <h3 className="text-2xl font-semibold group-hover:text-pink dark:group-hover:text-yellow hover:underline">
              <Link href={demoUrl} target="_blank">
                {activeLocale === 'zh' ? title_zh : title}
              </Link>
            </h3>

            <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-300">
              {' '}
              {/* wx start*/}
              {isWx && (
                <div
                  className="w-full flex items-center gap-1  hover:underline underline-offset-2"
                  onClick={searchMiniProgram}>
                  <span className="break-keep text-green-500">{wxName}</span>
                  <RiMiniProgramFill className="w-5 h-5 text-green-500" />
                </div>
              )}
              {/* wx end */}
              {projectUrl && (
                <Link
                  href={projectUrl}
                  target="_blank"
                  className="w-full flex items-center gap-1  hover:underline underline-offset-2 ">
                  <span className="break-keep ">Code</span>

                  <FaGithubSquare className="w-5 h-5" />
                </Link>
              )}
              {demoUrl && (
                <Link
                  href={demoUrl}
                  target="_blank"
                  className=" w-full flex items-center gap-1 hover:underline underline-offset-2">
                  <span className="break-keep text-blue-400 min-w-[4.5rem]">Live demo</span>
                  <FiExternalLink className="w-5 h-5 text-blue-400" />
                </Link>
              )}
            </div>
          </div>

          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {activeLocale === 'zh' ? desc_zh : description}
          </p>
          <div className="block sm:hidden">
            <ul className="flex flex-wrap mt-auto gap-2">
              {tags.map((tag, index) =>
                activeLocale === 'zh' ? (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 cursor-pointer tooltip"
                    key={index}>
                    {tag.zh}
                  </li>
                ) : (
                  tag.en && ( // 只有当 tag.en 不为空时才渲染该 li
                    <li
                      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 cursor-pointer tooltip"
                      key={index}>
                      {tag.en}
                    </li>
                  )
                )
              )}
            </ul>
          </div>
        </div>

        <div className="h-[15%]  w-full  justify-center items-center hidden sm:flex">
          <ul className="flex flex-wrap  gap-2">
            {tags.map((tag, index) =>
              activeLocale === 'zh' ? (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 cursor-pointer tooltip"
                  key={index}>
                  {tag.zh}
                </li>
              ) : (
                tag.en && ( // 只有当 tag.en 不为空时才渲染该 li
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 cursor-pointer tooltip"
                    key={index}>
                    {tag.en}
                  </li>
                )
              )
            )}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  )
}
