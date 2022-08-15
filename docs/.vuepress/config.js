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
    },
  }),
}