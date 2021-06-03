<template>
  <div>
    <bounce-loader :loading="isLoading" color="#68d391"></bounce-loader>
    <px-assets-table v-if="!isLoading" :assets="assets"></px-assets-table>
  </div>
</template>
<script>
import PxAssetsTable from '@/components/PxAssetsTable'
import api from '@/api'
export default {
  name: 'Home',
  components: { PxAssetsTable },
  data() {
    return {
      assets: [],
      isLoading: false,
    }
  },
  created() {
    this.isLoading = true
    api
      .getAssets()
      .then((res) => {
        this.assets = res.data
      })
      .finally(() => {
        this.isLoading = false
      })
  },
}
</script>
