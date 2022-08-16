const { defaultTheme } = require('vuepress')
module.exports = {
  lang: 'en-US',
  title: 'Ciao!',
  description: 'Qui trovi i miei appunti di informatica',
  theme: defaultTheme({
    logo: '/images/hero.png',
    navbar: [
      // NavbarGroup
      {
        text: 'Coding',
        children: [
          {
            text: 'Arduino',
            link: '/coding/arduino/README.md'
          },
          {
            text: 'C++',
            link: '/coding/cpp/README.md'
          },
          {
            text: 'Rust',
            link: '/coding/rust/README.md'
          },
          {
            text: 'RegEx',
            link: '/coding/regex/README.md'
          },
          {
            text: 'Node.js',
            link: '/coding/nodejs/README.md'
          },
          {
            text: 'Typescript',
            link: '/coding/typescript/README.md'
          },
          {
            text: 'Raspberry pi pico',
            link: '/coding/raspberry-pi-pico/README.md'
          },
          {
            text: 'Python',
            link: '/coding/python/README.md'
          },
          {
            text: 'Git',
            link: '/coding/git/README.md'
          }
        ]
      },
    ],
    sidebar: {
      '/coding/arduino/': [
        {
          text: 'Arduino',
          collapsible: true,
          children: ['/coding/arduino/01.md',
            '/coding/arduino/02.md',
            '/coding/arduino/03.md',
            '/coding/arduino/04.md',
            '/coding/arduino/05.md',
            '/coding/arduino/06.md',
            '/coding/arduino/07.md',
            '/coding/arduino/08.md',
          ],
        },
        {
          text: 'Reference',
          collapsible: true,
          children: ['/coding/arduino/README.md'],
        },
      ],
      '/coding/rust/': ['/coding/rust/README.md'],
      '/coding/cpp/': ['/coding/cpp/README.md'],
      '/coding/regex/': ['/coding/regex/README.md'],
      '/coding/regex/': ['/coding/regex/README.md'],
      '/coding/nodejs/': ['/coding/nodejs/README.md'],
      '/coding/typescript/': ['/coding/typescript/README.md'],
      '/coding/raspberry-pi-pico/': ['/coding/raspberry-pi-pico/README.md'],
      '/coding/python/': ['/coding/python/README.md'],
      '/coding/git/': ['/coding/git/README.md'],
    },
  }),
}