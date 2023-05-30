<template>
  <div style="min-width: 800px">
    <div class="d-flex">
      <border-wrap
        class="flex-1 ta-c"
        :class="{
          'mr-5': i < list.length - 1,
        }"
        v-for="(it, i) in list"
        :key="i"
      >
        <h2 class="pink-1" :class="asMobile ? 'fz-25' : 'fz-35'">
          {{ it.title }}
        </h2>
        <div class="op-8 fz-14 lh-15 mt-5" style="min-height: 120px">
          {{ it.desc }}
        </div>
        <div class="mt-auto">
          <a :href="it.github">
            <img src="/img/ic-github.svg" height="18" />
          </a>
          <a :href="it.link" class="ml-5">
            <img src="/img/ic-link.svg" height="18" />
          </a>
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
      asMobile: (s) => s.clientWidth < 1000,
    }),
  },
  data() {
    return {
      list: [
        {
          title: "Web3 Page",
          desc: "Consolidates your social media interactions from various channels into a single page.",
          github: "",
          link: "",
        },
        {
          title: "Chat GPT",
          desc: "ChatGPT (Beta), API Key required.",
          github: "",
          link: "",
        },
        {
          title: "Linkland",
          desc: "Simplify sharing your social media and other information with a single link.",
          github: "",
          link: "",
        },
      ],
    };
  },
};
</script>