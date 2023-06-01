<template>
  <div
    class="d-flex"
    :class="{
      'mr-5': asMobile,
    }"
    style="min-width: 850px"
  >
    <div class="flex-1">
      <border-wrap>
        <div class="lh-17 pos-a top-0 z-10" style="max-width: 330px">
          Join <span class="pink-1">4EVERLAND</span> Template-a-thon to enrich
          the Template Center with an array of unique and engaging templates.
        </div>
        <div class="y-center op-9" style="right: 0px">
          <img src="/img/intro-circle.png" height="200" />
        </div>
      </border-wrap>
    </div>
    <div class="flex-2 ml-5">
      <border-wrap color="blue">
        <h3 class="pink-1">How to join?</h3>
        <div class="mt-4 fz-13 lh-15 white-8">
          Join by logging in to GitHub, locating our 4EVERLAND Templates
          repository, and submitting your pull request (PR) following the
          <a href="https://github.com/4everland/Templates" target="_blank"
            >README.md</a
          >
          guidelines. Don't forget to apply for grants after your submission to
          win T4EVER. For more details, please visit
          <a href="https://link.medium.com/a9s6LUTLgAb" target="_blank">here</a
          >.
        </div>
        <div class="x-center" style="bottom: -14px">
          <img src="/img/intro-join.png" :height="asMobile ? 65 : 75" />
        </div>
      </border-wrap>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      asMobile: (s) => s.clientWidth < 800,
    }),
  },
};
</script>