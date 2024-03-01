import { Button } from '@arco-design/web-vue'
import { FormContextKey } from '../Form'
import { defineSetter } from './util'
import { inject } from 'vue'

export default defineSetter<{}, 'none'>({
  setter() {
    const { submitForm, resetForm } = inject(FormContextKey)!
    return (
      <>
        <Button type="primary" onClick={submitForm} class="mr-3">
          提交
        </Button>
        <Button onClick={resetForm} style="margin-left: 12px">
          重置
        </Button>
      </>
    )
  },
  setterProps: {},
  setterSlots: {},
})
