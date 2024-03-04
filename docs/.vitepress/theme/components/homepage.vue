<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { useBEM } from '@vexip-ui/bem-helper'
import { useRouter } from 'vitepress'
import Wave from './wave.vue'

const router = useRouter()
const { t, locale } = useI18n({ useScope: 'global' })

const nh = useBEM('homepage')

const wave = ref<InstanceType<typeof Wave>>()
const sign = ref<HTMLElement>()

const waveTop = ref(494)

function getStarted() {
  router.go(`/${locale.value}/guide/intro`)
}

function getComponents() {
  router.go(`/${locale.value}/component/form`)
}
</script>

<template>
  <section :class="nh.b()" :style="{ '--wave-top': `${waveTop}px` }">
    <ClientOnly>
      <div :class="nh.be('wave')">
        <div :class="nh.be('wave-block')"></div>
        <Wave ref="wave" style="position: relative"></Wave>
      </div>
    </ClientOnly>
    <div ref="sign" :class="nh.be('sign')">
      <img :class="nh.be('logo')" src="/vexip-ui.svg" alt="vexip-ui" />
      <h1 :class="nh.be('title')">Arconify UI</h1>
      <p :class="nh.be('description')">
        {{ t('common.slogan') }}
      </p>
      <div :class="nh.be('actions')">
        <Button type="primary" size="large" @click="getStarted">
          {{ t('common.getStarted') }}
        </Button>
        <Button size="large" @click="getComponents">
          {{ t('common.getComponents') }}
        </Button>
      </div>
      <div class="feature-list">
        <div class="feature-item">
          <h2 class="feature-title">⚡TypeScript支持</h2>
          <p class="feature-desc">使用 TypeScript 构建，提供完善的类型支持，上手即是文档。</p>
        </div>
        <div class="feature-item">
          <h2 class="feature-title">💎按需加载</h2>
          <p class="feature-desc">使用 ESM 格式导入，将按需打包所用到的组件和样式。</p>
        </div>
        <div class="feature-item">
          <h2 class="feature-title">📦Hook调用</h2>
          <p class="feature-desc">一个 hook 完成所有增删改查逻辑，然后在需要的地方使用即可。</p>
        </div>
        <div class="feature-item">
          <h2 class="feature-title">🎨组件透传</h2>
          <p class="feature-desc">原有组件参数均可透传，且带有类型提示，满足一切自定义场景。</p>
        </div>
        <div class="feature-item">
          <h2 class="feature-title">✨参数灵活</h2>
          <p class="feature-desc">同一参数支持多种类型，根据需求选择合适的参数类型，灵活多变。</p>
        </div>
        <div class="feature-item">
          <h2 class="feature-title">📋易于扩展</h2>
          <p class="feature-desc">内置常见表单控件和表格功能，可自定义扩展满足开发需求。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.feature-list {
  text-align: left;
  display: grid;
  // grid-template-columns: repeat(3, 1fr);
  padding: 0 20px;
  gap: 20px;
  max-width: 1100px;
  margin-top: 98px;
  .feature-item {
    background-color: #f1f5f9;
    border-radius: 4px;
    padding: 12px 16px;
  }
  .feature-title {
    margin: 0;
    font-weight: normal;
  }
  .feature-desc {
    margin: 4px;
  }
}
.dark {
  .feature-item {
    background-color: rgba(255, 255, 255, 0.05);
  }
}
@media (min-width: 1100px) {
  .feature-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
.homepage {
  --wave-top: 494px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 120px;
  text-align: center;
  user-select: none;

  &__wave {
    position: absolute;
    top: 0;
    z-index: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: none;

    &-block {
      height: var(--wave-top);
      background-image: linear-gradient(to bottom, transparent, var(--vxp-color-primary-opacity-8));
    }
  }

  &__sign {
    position: relative;
    margin-bottom: 100px;
  }

  &__logo {
    height: 210px;
    margin-top: 50px;
  }

  &__title {
    margin: 1rem 0;
    font-size: 3rem;
    font-weight: 400;
  }

  &__description {
    padding: 0 1rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.2;
    color: var(--vxp-content-color-base);
    text-align: center;
  }

  &__actions {
    padding: 2rem 0;

    .vxp-button {
      width: 8rem;
      font-size: 1rem;
    }
  }

  &__prefix {
    max-width: 200px;
    margin-bottom: 20px;

    .vxp-input__control {
      width: 100%;
    }
  }

  &__sfc-order {
    width: 100%;
    max-width: 200px;
    margin-bottom: 20px;
  }

  &__colors {
    position: relative;
    width: 100%;
  }

  &__users {
    width: 100%;
    max-width: 800px;
    padding: 0 20px;
  }

  &__user {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 84px;
    padding: 6px 0 24px;

    img {
      height: 100%;
      object-fit: contain;
      pointer-events: none;
    }
  }
}
</style>
