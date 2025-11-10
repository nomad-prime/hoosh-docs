import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hoosh - Intelligent Development Agent",
  description: "A powerful command-line coding agent built in Rust. Multi-backend support, offline capability with Ollama, and granular permission control.",
  ignoreDeadLinks: 'localhostLinks',
  base: '/hoosh-docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/hoosh.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/nomad-prime/hoosh' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' },
          ]
        },
        {
          text: 'Configuration',
          items: [
            { text: 'Configuration Guide', link: '/guide/configuration' },
            { text: 'Supported Backends', link: '/guide/backends' },
          ]
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Features', link: '/guide/features' },
            { text: 'Security & Permissions', link: '/guide/security' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nomad-prime/hoosh' }
    ],

    footer: {
      message: 'Released under the GNU General Public License v3.0',
      copyright: 'Copyright © 2024 Hoosh Contributors'
    },

    search: {
      provider: 'local'
    }
  }
})
