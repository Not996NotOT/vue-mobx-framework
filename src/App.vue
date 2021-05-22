<template>
  <router-view />
</template>
<style lang="scss">
// .ant-calendar-picker-container {
//   z-index: 99999;
// }
// .ant-cascader-menus {
//   z-index: 99999!important;
// }
// .ant-modal-mask{
//   z-index: 99999;
// }
</style>
<script>
import AppMain from "./AppMain";
export default {
  created() {
    new AppMain(this).start();
  },
};
</script>
