import type { HeadConfig } from 'vitepress'

const LANG_SCRIPT = `
(() => {
  const lang = typeof navigator !== 'undefined'
    ? ['zh-CN', 'en-US'].find(l => l  === navigator.language) || 'zh-CN'
    : 'zh-CN'
  if (location.pathname === '/') {
    window.location.href = \`/\${lang}/\`
  }
})()
`

export function getHeadConfig(): HeadConfig[] {
  return [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vexip-ui.svg' }],

    ['meta', { 'http-equiv': 'Expires', content: '0' }],
    ['meta', { 'http-equiv': 'Pragma', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'Cache', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'Cache-control', content: 'no-store,no-cache,must-revalidate' }],

    ['script', {}, LANG_SCRIPT],
  ]
}
