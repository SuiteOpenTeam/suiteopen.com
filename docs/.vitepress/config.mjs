import { defineConfigWithTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  title: "SUITEOPEN",
  description: "NetSuite ERP SuiteOpen  Oracle NS",
  head: [['link', { rel: 'icon', href: 'logo.png' }]],
  themeConfig: {
    logo: '/logo.png',
    logoLink: '/',
    nav: [
      {
        text: 'Professional Services',
        link: '/'
        // sublist: [
        //   { text: 'Oracle Consulting',
        //      items: [
        //       { text: 'NetSuite ERP', link: '/netsuite/solutions' },
        //       { text: 'SuiteCloud Solutions ', link: '/' },
        //       { text: 'NetSuite SuiteSuccess', link: '/' },
        //       { text: 'NetSuite Ecommerce', link: '/' },
        //      ]
        //   },
        //   { text: 'Business',
        //      items: [
        //       { text: 'Cloud Application Deployment', link: '/' },
        //       { text: 'Training ', link: '/' },
        //       { text: 'Support', link: '/' },
        //      ]
        //   }
        // ]
      },
      {
        text: 'NetSuite Solutions',
        link: '/netsuite/solutions'
        // sublist: [
        //   { text: 'Cloud Service',
        //      items: [
        //       { text: 'AWS', link: '/' },
        //       { text: 'Azure', link: '/' },
        //       { text: 'OCI', link: '/' },
        //       { text: 'AliCloud', link: '/' },
        //      ]
        //   }
        // ]
      },
      {
        text: 'Industries',
        sublist: [
          {
            text: 'Industries Solutions',
            items: [
              { text: 'Consumer Goods', link: '/industry/consumer-goods' },
              { text: 'Manufacturing', link: '/industry/manufacturing' },
            ]
          }
        ]
      },
      {
        text: 'Cloud & Software',
        link: ''
      },
      {
        text: 'About',
        link: '/about'
      },
      {
        text: 'Contact',
        link: '/contact'
      }
    ],
    footer: {
      copyright: '© Guangzhou SuiteOpen Technology Co.,Ltd.',
      contact: {
        phone: '',
        email: 'sales@suiteopen.com'
      },
      terms: [
        {text: 'Terms', link: ''},
        {text: 'Privacy Policy', link: ''},
        {text: 'Security', link: ''},
      ]
    },
    // page data
    home: {
      caseOne: {
        name: 'XXX CASE STUDY',
        desc: 'See how we helped xxx integrate production, logistics, and management processes with Oracle NetSuite.',
        link: '/case/renogy'
      },
      welcome: `Welcome to SuiteOpen. We're a leading global technology solutions and services provider for cloud application implementation and management.`,
      solution: {
        title: 'Just some of the ways we can work together',
        subTitle: 'Explore our full navigation for more services and solutions.',
        items: [
          { title: 'NetSuite Implementations + Migrations', desc: 'Ensure a seamless business process transition whether you’re just starting your NetSuite journey or taking it to the next level.' },
          { title: 'NetSuite Cloud Solutions', desc: 'Leverage flexible, cloud-based solutions powered by leading-edge AI and machine learning technologies to adapt quickly to changing market demands and drive innovation.' },
          { title: 'RISE with NetSuite', desc: 'A comprehensive and holistic approach to business processes, enabling companies to effectively navigate complexities and achieve long-term success.'}
        ]
      },
      evalaute: {
        text: '“Digital manufacturing is the tool that will allow us to control the entire process from a central location, from analyzing the dough we’re mixing to getting a delicious, consistent product out the door to the consumer.“',
        person: 'Chief Data & Analytics Officer - Lee'
      },
      industry: {
        title: 'Industry know-how',
        subTitle: 'At SuiteOpen, we combine extensive industry experience with deep enterprise application, cloud, and security knowledge to deliver context to technology.',
        items: [
           { title: 'Manufacturing', link: '/industry/manufacturing', desc: 'Improve manufacturing processes from procurement to production, optimize workflows, and stand out from competitors.' },
           { title: 'Mining + Metals', link: '/industry/consumer-goods', desc: 'Optimize resource extraction, elevate safety standards, and boost compliance to achieve sustainable growth.' },
           { title: 'Engineering + Construction', link: '/industry/manufacturing', desc: 'Empower your team with streamlined project and site management capabilities, reducing project timelines and enhancing efficiency.' },
           { title: 'Consumer Goods', link: '/industry/consumer-goods', desc: 'Advanced analytics, demand forecasting, supply chain optimization and more to redefine the definition of customer experience.' }
        ]
      }
    }
  },

})
