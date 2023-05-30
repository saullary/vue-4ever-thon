<script setup>
import LeftGap from "./left-gap.vue";
</script>

<template>
  <div class="main" v-if="clientWidth > 1000">
    <slot></slot>
  </div>
  <left-gap v-else>
    <slot></slot>
  </left-gap>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      clientWidth: (s) => s.clientWidth,
    }),
  },
};
</script>