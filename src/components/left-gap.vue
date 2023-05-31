<style lang="scss">
.ov-a::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.ov-a {
  scrollbar-width: none;
  -ms-overflow-style: none; /* IE 10+ */
}
</style>

<template>
  <div
    class="ov-a"
    :style="{
      'padding-left': left,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      clientWidth: (s) => s.clientWidth,
    }),
  },
  data() {
    return {
      left: 0,
    };
  },
  watch: {
    clientWidth() {
      this.getLeft();
    },
  },
  mounted() {
    this.getLeft();
  },
  methods: {
    getLeft() {
      const len = Math.max(40, this.clientWidth - 1000);
      this.left = parseInt(len / 2) + "px";
    },
  },
};
</script>