<script setup>
import SectionBegin from "./section-begin.vue";
</script>

<template>
  <main>
    <header class="al-c pt-2 pb-2">
      <img src="/img/logo.svg" height="50" class="mr-auto" />
      <span class="nav-btn hover-1" v-for="(txt, i) in headLinks" :key="i">{{
        txt
      }}</span>
      <div class="bg-pink-1 btn-1 bdrs-8 hover-1">Join</div>
    </header>
    <div class="pa-5"></div>
    <SectionBegin></SectionBegin>
  </main>
</template>

<script>
export default {
  data() {
    return {
      headLinks: ["Introduction", "Benefits", "Judges", "FAQ"],
    };
  },
};
</script>

<style lang="scss">
header {
  font-size: 18px;
  .nav-btn {
    margin-right: 45px;
  }
}
.btn-1 {
  font-weight: bold;
  padding: 10px 40px;
}
@media screen and (max-width: 800px) {
  header {
    font-size: 15px;
    .nav-btn {
      margin-right: 16px;
    }
  }
  .btn-1 {
    padding: 8px 12px;
  }
}
</style>