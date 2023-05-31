<script setup>
import SectionBegin from "./section-begin.vue";
import SectionIntro from "./section-intro.vue";
import SectionBenefit from "./section-benefit.vue";
import SectionTpl from "./section-tpl.vue";
import SectionSupport from "./section-support.vue";
import SectionFaq from "./section-faq.vue";
import SectionSocial from "./section-social.vue";
</script>

<template>
  <div class="pa-4"></div>
  <div class="pos-s top-0 z-100 bg-1">
    <div class="main">
      <header class="al-c pt-4 pb-4">
        <img src="/img/logo.png" height="30" class="mr-auto" />
        <span class="nav-btn hover-1" v-for="(txt, i) in headLinks" :key="i">{{
          txt
        }}</span>
        <div class="bg-pink-1 btn-1 bdrs-8 hover-1">Join Now</div>
      </header>
    </div>
  </div>

  <div class="main">
    <div class="pa-5"></div>
    <SectionBegin />
  </div>
  <div class="main">
    <div class="title-1">
      <span>Event Introduction</span>
    </div>
  </div>
  <auto-wrap>
    <SectionIntro />
  </auto-wrap>
  <left-gap>
    <SectionBenefit />
  </left-gap>

  <div class="main">
    <div class="title-1">Remarkable Templates</div>
  </div>
  <auto-wrap>
    <SectionTpl />
  </auto-wrap>

  <div class="main">
    <div class="title-1">Community Support</div>
  </div>
  <auto-wrap>
    <SectionSupport />
  </auto-wrap>

  <SectionFaq />

  <div class="pa-7"></div>
  <div class="main">
    <SectionSocial />
  </div>

  <div class="pa-8"></div>
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
    .nav-btn {
      display: none;
    }
  }
  .btn-1 {
    padding: 8px 12px;
    font-size: 15px;
  }
}
</style>