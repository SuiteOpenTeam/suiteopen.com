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
        text: 'Home',
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
        text: 'Case Study',
        link: '/case'
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
      copyright: '© HongKong SuiteOpen Technology Limited',
      contact: {
        phone: '+86-15910420275',
        email: 'daniel.cai@suiteopen.com'
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
        name: 'ERP CASE STUDY',
        desc: 'See how we helped our customers integrate production, logistics, and management processes with Oracle NetSuite.',
        link: '/case/renogy'
      },
      welcome: `Welcome to SuiteOpen. We're a leading global technology solutions and services provider for cloud application implementation and management.`,
      solution: {
        title: 'Just some of the ways we can work together',
        subTitle: 'Explore our full navigation for more services and solutions.',
        items: [
          { title: 'NetSuite Implementations + Migrations', desc: 'Ensure a seamless business process transition whether you’re just starting your NetSuite journey or taking it to the next level.' },
          { title: 'NetSuite Maintenance', desc: 'Leverage on our 5x24 hours service to ensure your ERP system is always up and running. We provide daily trouble shooting for all different levels of problems. Save your employee’s valuable time to focus on your business itself.' },
          { title: 'SuiteHouse (WMS)', desc: 'A warehouse management system (WMS), comprehensively integrated with NetSuite. Precisely manage your daily warehouse activities through SuiteHouse. Connect to the ecommerce platform, including but no limited to: Amazon, Walmart, eBay, Shopify, BigCommerce. And decrease your delivery fee through auto comparison among all different carriers.'}
        ]
      },
      evalaute: {
        text: '“NetSuite helped us to complete our AmBeed’s global digital transformation. We successfully consolidate 12 business entities from 4 countries within NetSuite. And SuiteOpen helped AmBeed to integrate all of our other business systems with NetSuite, like WMS, PLM, Expense.“',
        person: 'Chief Finance Officer - Mr. Lu / 芦晓旭(Lu Xiaoxu)'
      },
      industry: {
        title: 'Industry know-how',
        subTitle: 'At SuiteOpen, we combine extensive industry experience with deep enterprise application, cloud, and security knowledge to deliver context to technology.',
        items: [
           { title: 'Manufacturing', link: '/industry/manufacturing', desc: 'Improve manufacturing processes from procurement to production, optimize workflows, and stand out from competitors.' },
           { title: 'Internet Company', link: '/industry/consumer-goods', desc: 'Optimize resource extraction, elevate safety standards, and boost compliance to achieve sustainable growth.' },
           { title: 'Furniture Industry', link: '/industry/manufacturing', desc: 'Empower your team with streamlined project and site management capabilities, reducing project timelines and enhancing efficiency.' },
           { title: 'eCommerce', link: '/industry/consumer-goods', desc: 'Advanced analytics, demand forecasting, supply chain optimization and more to redefine the definition of customer experience.' }
        ]
      }
    }
  },

})
