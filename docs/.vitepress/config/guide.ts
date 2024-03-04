export interface GuideConfig {
  name: string,
  i18n: string
}

export interface GuideGroup {
  name: string,
  guides: GuideConfig[]
}

export function getGuideConfig(): GuideGroup[] {
  return [
    {
      name: 'introduction',
      guides: [
        { name: 'intro', i18n: 'vexipui' },
        { name: 'getting-started', i18n: 'gettingStarted' },
      ]
    },
  ]
}
