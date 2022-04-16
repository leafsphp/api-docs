const sidebar = {
  codelabs: [
    {
      title: 'codelabs',
      collapsable: false,
      children: ['/codelabs/', '/codelabs/template']
    }
  ],
  guide: [
    {
      title: 'Essentials',
      collapsable: false,
      children: ['/docs/', '/docs/new', '/docs/intro/first-app']
    },
    {
      title: 'Config',
      collapsable: false,
      children: [
        '/docs/config/env',
        '/docs/config/app',
        '/docs/config/aloe',
        '/docs/config/auth',
        '/docs/config/cors',
        '/docs/config/views',
        '/docs/config/paths'
      ]
    },
    {
      title: 'Utils',
      collapsable: false,
      children: ['/docs/utils/console', '/docs/utils/integrations']
    },
    {
      title: 'Core',
      collapsable: false,
      children: [
        '/docs/core/routing',
        '/docs/core/controllers',
        '/docs/core/models',
        '/docs/core/views'
      ]
    },
    {
      title: 'Links',
      collapsable: false,
      children: [
        {
          title: 'Modules',
          path: 'https://leafphp.dev/modules/'
        },
        {
          title: 'MVC Core',
          path: 'https://leafphp.dev/modules/mvc-core/'
        }
      ]
    }
  ],
}

module.exports = {
  title: 'Leaf API',
  description: 'Leaf API - Leaf API with APIs in mind',
  head: [
    [
      'link',
      {
        href:
          'https://fonts.googleapis.com/css?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500|DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700|Inter:300,400,500,600|Open+Sans:400,600;display=swap',
        rel: 'stylesheet',
        async: true
      }
    ],
    [
      'link',
      {
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        rel: 'stylesheet',
        async: true
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/logo-circle.png'
      }
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/images/icons/apple-icon-152x152.png'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/images/icons/ms-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    [
      'script',
      {
        src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
        type: 'module'
      }
    ],
    [
      'script',
      {
        src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
        nomodule: 'nomodule'
      }
    ]
  ],
  themeConfig: {
    logo: '/logo-circle.png',
    nav: [
      {
        text: 'Docs',
        ariaLabel: 'Documentation Menu',
        items: [
          {
            text: 'Guide',
            link: '/docs/'
          },
          {
            text: 'Codelabs',
            link: 'https://codelabs.leafphp.dev'
          },
          {
            text: 'Contribute',
            link: 'https://leafphp.dev/docs/contributing/writing-guide'
          }
          // {
          //   text: 'Migration from Leaf 2',
          //   link: '/docs/migration/introduction'
          // }
        ]
      },
      {
        text: 'Leaf Docs',
        link: 'https://leafphp.dev'
      },
      {
        text: 'Ecosystem',
        items: [
          {
            text: 'Community',
            ariaLabel: 'Community Menu',
            items: [
              {
                text: 'Blog',
                link: 'https://blog.leafphp.dev/'
              },
              {
                text: 'Team',
                link: 'https://leafphp.dev/community/team/'
              },
              {
                text: 'Join',
                link: 'https://leafphp.dev/community/join/'
              },
            ]
          },
          {
            text: 'Official Projects',
            items: [
              {
                text: 'Aloe CLI',
                link: 'https://leafphp.dev/aloe-cli/'
              },
              {
                text: 'Leaf CLI',
                link: 'https://cli.leafphp.dev/'
              },
              {
                text: 'Leaf Modules',
                link: 'https://leafphp.dev/modules/'
              },
              {
                text: 'Leaf API',
                link: 'https://mvc.leafphp.dev'
              },
              {
                text: 'Leaf Skeleton',
                link: 'https://skeleton.leafphp.dev'
              },
              {
                text: 'Leaf UI',
                link: 'https://ui.leafphp.dev'
              }
            ]
          }
        ]
      },
      {
        text: 'Support Leaf',
        link: 'https://leafphp.dev/support/'
      }
    ],
    repo: 'leafsphp/api-docs',
    editLinks: true,
    editLinkText: 'Edit this on GitHub!',
    lastUpdated: 'Last updated',
    docsDir: 'src',
    sidebarDepth: 2,
    sidebar: {
      collapsable: true,
      '/docs/': sidebar.guide,
    },
    smoothScroll: true,
    algolia: {
      indexName: 'leafphp-v3',
      appId: '',
      apiKey: ''
    },
    topBanner: true
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-150463804-1'
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer(timestamp) {
          const date = new Date(timestamp)

          const digits = [
            date.getUTCFullYear(),
            date.getUTCMonth() + 1,
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds()
          ].map(num => String(num).padStart(2, '0'))

          return '{0}-{1}-{2}, {3}:{4}:{5} UTC'.replace(
            /{(\d)}/g,
            (_, num) => digits[num]
          )
        }
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        }
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info =>
          `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
        after: '</div>'
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    /** @param {import('markdown-it')} md */
    extendMarkdown: md => {
      md.options.highlight = require('./markdown/highlight')(
        md.options.highlight
      )
    }
  }
}
