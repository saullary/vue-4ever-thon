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
        <div class="pos-center">
          <img :src="'/img/' + it.img" height="150" />
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
          img: "sup-lens.png",
        },
        {
          img: "sup-rebase.png",
        },
        {
          img: "sup-kepler.png",
        },
      ],
    };
  },
};
</script>