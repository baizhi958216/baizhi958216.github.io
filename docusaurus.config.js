// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Cyan',
    tagline: '刻晴我老婆',
    url: 'https://baizhi958216.github.io',
    baseUrl: '/baizhi958216/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/Cyan.png',
    organizationName: 'baizhi958216', // Usually your GitHub org/user name.
    projectName: 'baizhi958216', // Usually your repo name.

    i18n: {
        defaultLocale: 'zh-CN',
        locales: ['en', 'zh-CN'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/baizhi958216/baizhi958216/blob/docusaurus/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Cyan',
                logo: {
                    alt: 'Logo',
                    src: 'img/Cyan.png',
                },
                items: [{
                    type: 'doc',
                    docId: 'docusaurus入门',
                    position: 'left',
                    label: '文档',
                },

                {
                    type: 'localeDropdown',
                    position: 'right',
                },

                {
                    href: 'https://github.com/baizhi958216',
                    label: 'GitHub',
                    position: 'right',
                },

                ],
            },
            footer: {
                style: 'dark',
                links: [{
                    title: '文档',
                    items: [
                        {
                            label: 'Docusaurus入门',
                            to: '/docs/docusaurus入门',
                        },
                        {
                            label: '配置electron',
                            to: '/docs/玩具/配置electron'
                        }
                    ],
                },
                {
                    title: '社区',
                    items: [{
                        label: 'Stack Overflow',
                        href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                    },
                    {
                        label: 'Discord',
                        href: 'https://discordapp.com/invite/docusaurus',
                    },
                    {
                        label: 'Twitter',
                        href: 'https://twitter.com/docusaurus',
                    },
                    ],
                },
                {
                    title: '更多',
                    items: [{
                        label: 'GitHub',
                        href: 'https://github.com/facebook/docusaurus',
                    },
                    ],
                },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} baizhi958216, Inc. 由 Docusaurus 驱动.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;