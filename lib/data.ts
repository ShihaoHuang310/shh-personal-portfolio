import React from 'react'
import { FaReact } from 'react-icons/fa'
import { FaVuejs } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
//项目图片
import SMImage from '@/public/sm_project.png'
import PuDongImage from '@/public/pdzb_project.jpg'
import ejrImage from '@/public/ejr_projects.png'
import fireImage from '@/public/fire_h5.png'

export type ProjectTags = (typeof projectsData)[number]['tags']

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experiences',
    hash: '#experience'
  }
  // {
  //     name: "Contact",
  //     hash: "#contact",
  // },
] as const

export const headerLanguageMap = {
  Home: '首页',
  About: '关于我',
  Projects: '我的项目',
  Skills: '我的技能',
  Experiences: '我的经历'
}

//我的项目

export const projectsData = [
  {
    isWx: true,
    wxName: 'e嘉人',
    title: 'eJiaren (mini program)',
    title_zh: 'e嘉人(小程序)',
    description:
      'WeChat Search eJiaren Mini Program (provides citizen reporting services and convenient citizen services. There are more than tens of thousands of registered users. It is currently being promoted in Malu Town, Jiading District, and will cover the entire Jiading District in the future.)',
    desc_zh:
      '微信搜索 e嘉人小程序（提供市民上报服务，以及提供市民便利服务。注册用户超过上万，目前在嘉定区马陆镇推广，后续将覆盖整个嘉定区。）',
    tags: [
      {
        zh: 'Vue3.0',
        en: 'Vue3.0'
      },
      {
        zh: 'uni-app',
        en: 'uni-app'
      },
      {
        zh: 'Vite',
        en: 'Vite'
      },
      {
        zh: 'Axios',
        en: 'Axios'
      },
      {
        zh: 'Tailwind',
        en: 'Tailwind'
      }
    ],
    imageUrl: ejrImage,
    projectUrl: '',
    demoUrl: ''
  },
  {
    isWx: false,
    wxName: '',
    title: 'Fire Brigade Management System (Mini Program / H5)',
    title_zh: '消防总队管理系统(小程序 / H5)',
    description:
      'The fire department management system is a comprehensive internal management platform for the Shanghai Fire Department, covering personnel management, team supervision, vehicle management, leave management, vehicle usage management, physical fitness assessment management, equipment management, financial management, and material management. By implementing process-oriented management, the system has improved the management efficiency of the fire department, ensured seamless integration between different modules, and enhanced the overall operational convenience and accuracy.',
    desc_zh:
      '消防总队管理系统是一个综合性内部管理平台,涵盖上海消防总队的人员管理、队伍督察、车辆管理、请销假管理、用车管理、体测考核管理、装备管理、资金管理和物资管理。该系统通过流程化管理提高了消防系统的管理效率,确保各模块之间的无缝衔接,提升了整体运行的便捷性和准确性。',
    tags: [
      {
        zh: 'Vue3.0',
        en: 'Vue3.0'
      },
      {
        zh: 'uni-app',
        en: 'uni-app'
      },
      {
        zh: 'Vite',
        en: 'Vite'
      },
      {
        zh: 'Axios',
        en: 'Axios'
      },
      {
        zh: '重构',
        en: 'Refactor'
      }
    ],
    imageUrl: fireImage,
    projectUrl: '',
    demoUrl: ''
  },
  {
    isWx: false,
    wxName: '',
    title: 'Fire equipment management system platform (Web)',
    title_zh: '消防装备管理系统平台(Web)',
    description: `
    The fire equipment management system achieves comprehensive management, monitoring, and deployment of fire equipment, records and tracks information on various types of equipment, efficiently manages the entire life cycle of equipment, monitors status in real-time, reminds of maintenance, generates reports, ensures equipment is in optimal condition, and provides reliable support for firefighting operations.
            `,
    desc_zh:
      '消防装备管理系统旨在提高消防装备管理效率，通过综合性解决方案实现对消防装备的全面管理、监控和调配。该系统记录和追踪各类消防装备的信息，包括消防车辆、灭火器材和防护设备等。用户可以高效管理消防装备的购置、维护、检修和报废，实时监测装备状态，提醒维护周期，生成相关报表，从而确保消防装备处于最佳使用状态，为灭火工作提供可靠支持。',
    tags: [
      {
        zh: 'React',
        en: 'React'
      },
      {
        zh: 'React-Router',
        en: 'React-Router'
      },
      {
        zh: 'Antd',
        en: 'Antd'
      },
      {
        zh: 'Echarts',
        en: 'Echarts'
      },
      {
        zh: 'Webpack',
        en: 'Webpack'
      },
      {
        zh: 'Axios',
        en: 'Axios'
      }
    ],
    imageUrl: PuDongImage,
    projectUrl: '',
    demoUrl: ''
  },
  {
    isWx: false,
    wxName: '',
    title: 'Inland Shipping Project',
    title_zh: '化工企业安全生产信息化管理平台(Web)',
    description:
      'The intelligent safety production management platform for chemical enterprises, powered by Internet+ industrial technology, provides web-based and mobile app access, enabling real-time data access and control from anywhere. The platform allows users to quickly understand the operational status, logs, and alarm information of the production process. It has established a comprehensive mechanism for identifying and managing major hazard sources, effectively controlling the root causes of major accidents, and ensuring the stable safety management of chemical enterprises.',
    desc_zh:
      '化工企业安全生产信息化管理平台通过互联网+工业技术,提供Web客户端和移动APP,实现随时随地的数据访问和控制,快速了解工艺流程的运行状态、日志及报警信息。该平台建立了完善的重大危险源辨识和管理机制,有效管控重大事故源头,确保化工企业安全管理的稳定性。',
    tags: [
      {
        zh: 'React',
        en: 'React'
      },
      {
        zh: 'Antd',
        en: 'Antd'
      },
      {
        zh: 'Dva',
        en: 'Dva'
      },
      {
        zh: 'Axios',
        en: 'Axios'
      },
      {
        zh: 'Qiankun',
        en: 'Qiankun'
      },
      {
        zh: 'ECharts',
        en: 'ECharts'
      }
    ],
    imageUrl: SMImage,
    projectUrl: '',
    demoUrl: 'http://www.saimoyun.com'
  }
]

//工作技能
export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next',
  'Vue2',
  'Vue3',
  'Uni-app',
  'React Native',
  'Tailwind',
  'Shadcn UI',
  'Antd Design',
  'Element UI',
  'Framer Motion',
  'Nest',
  'Express',
  'Git',
  'Github',
  'Prisma',
  'MySql'
]
export const skillsDataEn = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next',
  'Vue2',
  'Vue3',
  'Uni-app',
  'React Native',
  'Tailwind',
  'Shadcn UI',
  'Antd Design',
  'Element UI',
  'Framer Motion',
  'Nest',
  'Express',
  'Git',
  'Github',
  'Prisma',
  'MySql'
]

// 工作经历
export const experiencesData = [
  {
    title: 'Front-end development',
    location: 'Shanghai Huwan Intelligent Technology Co., Ltd.',
    description: [
      {
        info: 'In my work experience, I led the establishment of the basic development framework for the mini-program, optimized the packaging process, and significantly improved performance. I also participated in building the framework for the web project, enhancing code quality and development efficiency. Additionally, I set up an Echarts visualization platform to improve interactivity and introduced new technologies to optimize development tools and processes, elevating the overall technical level of the team.',
        title: ''
      }
      // {
      //   info: '1. Lead the construction of the basic development framework of the mini program mobile terminal, optimize the packaging process, and improve the performance of the mini program.',
      //   title: ''
      // },
      // {
      //   info: '2. Participate in and lead the construction and optimization of the basic framework of web-side projects to improve code quality and development efficiency.',
      //   title: ''
      // },
      // {
      //   info: '3. Participate in the construction of Echarts visualization platform to improve the interactivity and visualization level of data display.',
      //   title: ''
      // },
      // {
      //   info: '4. Introduce and promote new technologies, optimize development tools and processes, and improve the overall technical level of the team.',
      //   title: ''
      // }
    ],
    icon: React.createElement(FaVuejs),
    date: 'September 2023 - September 2024'
  },
  {
    title: 'Front-end development',
    location: 'Saimo (Shanghai) Industrial Internet Technology Co., Ltd.',
    description: [
      {
        info: 'In my work experience, I implemented the micro-frontend architecture Qiankun, significantly enhancing system flexibility. I also optimized redundant code and participated in the development of a component library, increasing code reusability. Additionally, I refactored a React project into a new project based on Vue3, improving system performance, and built a customized project scaffold to encapsulate reusable components, thereby enhancing development efficiency.',
        title: ''
      }
      // {
      //   info: '1. Introduce and implement the micro-front-end architecture Qiankun to achieve modular development and improve the flexibility and scalability of the system.',
      //   title: ''
      // },
      // {
      //   info: '2. Optimize redundant code and participate in component library development with colleagues to improve development convenience and code reuse rate.',
      //   title: ''
      // },
      // {
      //   info: '3. Re-split and adjust the original React 17/18 project modules and reconstruct them into new projects based on Vue3.',
      //   title: ''
      // },
      // {
      //   info: '4. Build customized project scaffolding and encapsulate a reusable common component library.',
      //   title: ''
      // }
    ],
    icon: React.createElement(FaReact),
    date: 'June 202 - May 2023'
  },
  {
    title: 'Bachelor of Computer Science and Technology',
    location: 'Hunan International Economics University',
    description: [
      {
        info: 'Major courses Java/Software Engineering/Computer Network/Database Principles, etc.',
        title: ''
      }
    ],
    icon: React.createElement(LuGraduationCap),
    date: 'September 2020 - June 2022'
  }
]

export const experiencesDataZn = [
  {
    title: '前端开发',
    location: '上海沪万智能科技有限公司',
    description: [
      {
        info: '在我的工作经历中，我主导了小程序基础开发框架的搭建，优化了打包流程，显著提升了性能。同时，我参与了Web端项目框架的搭建，提升了代码质量和开发效率。此外，我搭建了Echarts可视化平台，增强了交互性，并引入新技术以优化开发工具和流程，提升了团队的整体技术水平',
        title: ''
      }
      // {
      //   info: '1、主导小程序移动端基础开发框架搭建,优化打包流程,提升小程序性能。',
      //   title: ''
      // },
      // {
      //   info: '2、参与和主导 Web 端项目基本框架搭建和优化,提高代码质量和开发效率',
      //   title: ''
      // },
      // {
      //   info: '3、参与 Echarts 可视化平台的搭建,提升数据展示的交互性和可视化水平',
      //   title: ''
      // },
      // {
      //   info: '4、引入并推广新技术，优化开发工具和流程,提升团队整体技术水平。',
      //   title: ''
      // }
    ],
    icon: React.createElement(FaVuejs),
    date: '2023年9月 - 2024年9月'
  },
  {
    title: '前端开发',
    location: '赛摩(上海)工业互联网科技有限公司',
    description: [
      {
        info: '在我的工作经历中，我实施了微前端架构Qiankun，显著提升了系统的灵活性。同时，我优化了冗余代码并参与了组件库的开发，提高了代码的复用率。此外，我将React项目重构为基于Vue3的新项目，提升了系统性能，并搭建了定制化项目脚手架，封装了可复用组件，从而提升了开发效率。',
        title: ''
      }
      // {
      //   info: '1、引入和实施微前端架构 Qiankun，实现模块化开发，提升系统的灵活性和可扩展性。',
      //   title: ''
      // },
      // {
      //   info: '2、优化冗余代码，与同事共同参与组件库开发，提高开发便利性和代码复用率。',
      //   title: ''
      // },
      // {
      //   info: '3、将原有 React 17/18 项目模块重新拆分和调整，重构为基于 Vue3 的新项目。',
      //   title: ''
      // },
      // {
      //   info: '4、搭建定制化的项目脚手架，并封装可复用的通用组件库。',
      //   title: ''
      // }
    ],
    icon: React.createElement(FaReact),
    date: '2022年6月 - 2023年5月'
  },
  {
    title: '计算机科学与技术学士',
    location: '门头沟学院',
    description: [
      {
        info: '主修课程Java/软件工程/计算机网络/数据库原理等',
        title: ''
      }
    ],
    icon: React.createElement(LuGraduationCap),
    date: '2020年9月 - 2022年6月'
  }
]
