'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { useLocale, useTranslations } from 'next-intl'

export default function About() {
  const { ref } = useSectionInView('About')
  const t = useTranslations('AboutSection')
  const sectionLan = useTranslations('SectionName')
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>{sectionLan('about')}</SectionHeading>
      {activeLocale == 'zh' ? (
        // <p>{t("desc")}</p> //这样一段话没法分段
        <div className="flex flex-col gap-2">
          <div>我是一个喜欢折腾的人。</div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对技术充满热情，乐于接触并掌握新技术。积极追求技术的深度和广度，善于自主学习并将新知识应用于实际项目中。
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;具备创新思维，关注行业前沿技术和趋势。乐于尝试新方法和工具，不断优化现有系统和流程，提升团队和个人的工作效率和质量。
          </div>
        </div>
      ) : (
        <>
          <p className="mb-3">
            I'm a person who likes to mess around.
            {/* <span className="font-medium italic"> Digital Publishing</span> at {}
            <span className="italic underline">
              <a href="https://en.wikipedia.org/wiki/Wuhan_University" target="_blank">
                Wuhan University.
              </a>
            </span>{' '} */}
          </p>

          <p className="mb-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Passionate about technology and willing to
            contact and master new technologies. Actively pursue the depth and breadth of
            technology, be good at independent learning and apply new knowledge to actual projects.
          </p>

          <p className="mb-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have innovative thinking and pay attention to
            cutting-edge technologies and trends in the industry. Be willing to try new methods and
            tools, continuously optimize existing systems and processes, and improve the work
            efficiency and quality of teams and individuals.
          </p>
        </>
      )}
    </motion.section>
  )
}
