<template>
  <nav-header></nav-header>
  <router-view></router-view>
  <nav-footer></nav-footer>
</template>

<script>
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
export default {
  name: "order",
  components: {NavFooter, NavHeader}
}
</script>

<style scoped>

</style>