<template>
  <div
    style="min-width: 800px"
    :class="{
      'mr-5': asMobile,
    }"
  >
    <div class="d-flex">
      <border-wrap
        min-height="160px"
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
        <div class="op-8 fz-14 lh-15 mt-5" style="min-height: 90px">
          {{ it.desc }}
        </div>
        <div class="pos-r" style="bottom: -10px">
          <a :href="it.github" target="_blank">
            <img src="/img/ic-github.svg" height="22" />
          </a>
          <a :href="it.link" target="_blank" class="ml-5">
            <img src="/img/ic-link.svg" height="22" />
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
          github: "https://github.com/Recommended-Templates/web3-blog",
          link: "https://4everblog.4everland.app/",
        },
        {
          title: "Chat GPT",
          desc: "ChatGPT (Beta), API Key required.",
          github: "https://github.com/Recommended-Templates/chatgpt-tpl",
          link: "https://chat-1.4everland.app/",
        },
        {
          title: "Linkland",
          desc: "Simplify sharing your social media and other information with a single link.",
          github: "https://github.com/Recommended-Templates/linkland",
          link: "https://4everlinkland.4everland.app/",
        },
      ],
    };
  },
};
</script>