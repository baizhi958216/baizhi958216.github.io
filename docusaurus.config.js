// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Cyan',
    url: 'https://baizhi958216.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/Cyan.png',
    organizationName: 'baizhi958216', // Usually your GitHub org/user name.
    projectName: 'baizhi958216.github.io', // Usually your repo name.
    deploymentBranch:'main',
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/baizhi958216/baizhi958216.github.io/blob/docusaurus/',
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
                items: [
                {
                    href: 'https://github.com/baizhi958216',
                    label: 'GitHub',
                    position: 'right',
                },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};
module.exports = config;