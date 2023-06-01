<template>
  <div
    :class="{
      'd-flex': !asMobile,
    }"
  >
    <a
      class="flex-1 d-b hover-2"
      :href="it.link"
      target="_blank"
      :class="{
        [asMobile ? 'mt-4' : 'ml-5']: i > 0,
      }"
      v-for="(it, i) in list"
      :key="i"
    >
      <border-wrap min-height="90px" :color="i == 1 ? 'blue2' : 'pink2'">
        <img :src="'/img/' + it.img" width="50" />
        <div class="ta-r mt-3">
          <span class="fz-25">{{ it.label }}</span>
        </div>
      </border-wrap>
    </a>
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
  data() {
    return {
      list: [
        {
          img: "social-discord.svg",
          label: "Discord",
          link: "http://discord.gg/4everland",
        },
        {
          img: "social-twitter.svg",
          label: "Twitter",
          link: "https://twitter.com/4everland_org",
        },
        {
          img: "social-docs.svg",
          label: "Docs",
          link: "https://docs.4everland.org/hositng/guides/site-deployment/hosting-templates",
        },
      ],
    };
  },
};
</script>