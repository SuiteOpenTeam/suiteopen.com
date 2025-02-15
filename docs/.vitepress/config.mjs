import { defineConfigWithTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  title: "SuiteOpen",
  description: "NetSuite ERP SuiteOpen  Oracle NS",
  head: [['link', { rel: 'icon', href: 'logo.ico' }]],
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
        text: 'Our Solutions',
        link: '',
        sublist: [
          { text: 'Cloud Technologies',
             items: [
              { text: 'NetSuite (ERP)', link: '/solution/netsuite' },
              { text: 'SuiteHouse (WMS)', link: '/solution/suitehouse' },
              { text: 'SuiteHub (OMS)', link: '/solution/suitehub' },
             ]
          }
        ]
      },
      {
        text: 'Industries',
        sublist: [
          {
            text: 'Industrial Solutions',
            items: [
              { text: 'Manufacturing', link: '/industry/manufacturing' },
              { text: 'Internet Company', link: '/industry/internet-company' },
              { text: 'Furniture & Furnishings', link: '/industry/furniture' },
              { text: 'eCommerce', link: '/industry/ecommerce' },
            ]
          }
        ]
      },
      {
        text: 'Case Studies',
        link: '',
        sublist: [
          {
            text: 'Our Customers\' Journeys',
            items: [
              { text: 'Bide Pharmatech (Manufacturing)', link: '/case/manufacturing' },
              { text: 'So-Young (Internet Company)', link: '/case/internet-company' },
              { text: 'Woodoo Cabinetry (Furniture)', link: '/case/furniture' },
              { text: 'Renogy (eCommerce)', link: '/case/ecommerce' },
            ]
          }
        ]
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
        {text: 'Terms-of-Use', link: '/terms'},
        {text: 'Privacy-Policy', link: '/privacypolicy'},
        {text: 'Security', link: '/security'},
      ]
    },
    // page data
    home: {
      caseOne: {
        name: 'CASE STUDY',
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
          { title: 'SuiteHouse (WMS)', desc: 'A warehouse management system (WMS), comprehensively integrated with NetSuite. Precisely manage your daily warehouse activities using mobile devices and real-time reports. And decrease your delivery fee through auto comparison among all different carriers.'},
          { title: 'SuiteHub (OMS)', desc: 'An order management system (OMS), collects and manages orders from the ecommerce platform, including but no limited to: Amazon, Walmart, eBay, Shopify, BigCommerce.'}
        ]
      },
      evalaute: {
        text: '“NetSuite helped us to complete Bide\'s global digital transformation. We successfully consolidate 12 business entities from 4 countries within NetSuite. And SuiteOpen helped AmBeed to integrate all of our other business systems with NetSuite, like WMS, PLM, Expense.“',
        person: 'Chief Finance Officer - Mr. Lu / 芦晓旭(Lu Xiaoxu)'
      },
      industry: {
        title: 'Industry know-how',
        subTitle: 'At SuiteOpen, we combine extensive industry experience with deep enterprise application, cloud, and security knowledge to deliver context to technology.',
        items: [
           { title: 'Manufacturing', link: '/industry/manufacturing', desc: 'Improve manufacturing processes from procurement to production, optimize workflows, and stand out from competitors.' },
           { title: 'Internet Company', link: '/industry/internet-company', desc: 'Optimize resource extraction, elevate safety standards, and boost compliance to achieve sustainable growth.' },
           { title: 'Furniture & Furnishings', link: '/industry/furniture', desc: 'Empower your team with streamlined product and customer management capabilities, reducing order delivery timelines and enhancing efficiency.' },
           { title: 'eCommerce', link: '/industry/ecommerce', desc: 'Advanced analytics, demand forecasting, supply chain optimization and more to redefine the definition of customer experience.' }
        ]
      }
    }
  },

})
