<template>
  <div
    :class="{
      'd-flex': !asMobile,
    }"
  >
    <div class="flex-2">
      <border-wrap>
        <h1 class="fz-40 pink-1 pos-a z-10">TEMPLATE-A-THON</h1>
        <div class="fz-25 op-9 pos-a btm-0 left-0 z-10">
          Starting June 1, 2023
        </div>
        <div class="pos-a" style="right: -20px; top: -30px">
          <img src="/img/begin-pc.png" height="220" />
        </div>
      </border-wrap>
      <div
        class="mt-5"
        :class="{
          'd-flex': !asMobile,
        }"
      >
        <border-wrap color="blue" background="none" class="flex-1">
          <div class="pos-center">
            <img src="/mp4/1.gif" height="190" />
            <!-- <video
              src="/mp4/222.mp4"
              style="height: 190px"
              autoplay
              muted
              loop
              playsinline
            ></video> -->
          </div>
        </border-wrap>
        <border-wrap class="flex-1" :class="asMobile ? 'mt-5' : 'ml-5'">
          <h2 class="fz-16">TOTAL PRIZE POOL</h2>
          <h3 class="fz-40 mt-4">50,000,000</h3>
          <div class="pink-1 mt-1 op-8">T4EVER</div>
          <div class="pos-a" style="bottom: -30px; right: -30px">
            <img src="/img/begin-coin.png" height="120" />
          </div>
        </border-wrap>
      </div>
    </div>
    <div class="flex-1" :class="asMobile ? 'mt-5' : 'ml-5'">
      <border-wrap color="blue" background="none">
        <div class="pos-center">
          <img src="/img/begin-ball.png" height="190" />
        </div>
      </border-wrap>
      <div class="mt-5">
        <a
          class="bg-btn hover-2 al-c"
          href="https://github.com/4everland/Templates"
          target="_blank"
        >
          <div>
            <h3 class="fz-25">Join Now</h3>
            <p class="mt-2 op-8">Submit template</p>
          </div>
          <img src="/img/ic-right.svg" height="18" class="d-b ml-auto" />
        </a>
        <a
          class="bg-btn hover-2 al-c mt-5"
          href="https://forms.gle/pQ14y488WyLCrhRd6"
          target="_blank"
        >
          <div>
            <h3 class="fz-25">Apply Grants</h3>
            <p class="mt-2 op-8">Win T4EVER</p>
          </div>
          <img src="/img/ic-right.svg" height="18" class="d-b ml-auto" />
        </a>
      </div>
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