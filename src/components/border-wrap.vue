<template>
  <div :class="'wrap-' + color">
    <div class="bg-1">
      <div class="bd-1" :style="{ background }">
        <div
          class="pos-r"
          :style="{
            'min-height': minHeight,
          }"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "pink",
    },
    minHeight: {
      type: String,
      default: "180px",
    },
    background: String,
  },
};
</script>

<style lang="scss">
div[class^="wrap-"] {
  border-radius: 24px;
  padding: 1px;
  overflow: hidden;
  .bg-1 {
    border-radius: 24px;
  }
}
.bd-1 {
  padding: 30px;
  overflow: hidden;
}

.wrap-pink {
  background: linear-gradient(90deg, #fda9ff, #9747ff);
  .bd-1 {
    background: radial-gradient(
      54.5% 149.51% at 50.06% 100%,
      rgba(151, 71, 255, 0.25) 0%,
      rgba(151, 71, 255, 0) 100%
    );
  }
}

.wrap-blue {
  background: linear-gradient(90deg, #99a3f9, #459af8);
  .bd-1 {
    background: radial-gradient(
      61.68% 82.31% at 50.12% 100%,
      rgba(69, 154, 248, 0.25) 0%,
      rgba(69, 154, 248, 0) 100%
    );
  }
}
.wrap-yellow {
  background: linear-gradient(90deg, #ffed36, #ffad08);
  .bd-1 {
    background: radial-gradient(
      61.68% 82.31% at 50.12% 100%,
      rgba(255, 173, 8, 0.25) 0%,
      rgba(255, 173, 8, 0) 98.44%
    );
  }
}
.wrap-green {
  background: linear-gradient(90deg, #9ded1a, #0c8f8f);
  .bd-1 {
    background: radial-gradient(
      61.68% 82.31% at 50.12% 100%,
      rgba(12, 143, 143, 0.25) 0%,
      rgba(12, 143, 143, 0) 100%
    );
  }
}
.wrap-pink2 {
  background: #5865f2;
  .bd-1 {
    background: radial-gradient(
      61.68% 82.31% at 50.12% 100%,
      rgba(88, 101, 242, 0.25) 0%,
      rgba(88, 101, 242, 0) 96.35%
    );
  }
}
.wrap-blue2 {
  background: #1da1f3;
  .bd-1 {
    background: radial-gradient(
      61.68% 82.31% at 50.12% 100%,
      rgba(88, 101, 242, 0.25) 0%,
      rgba(88, 101, 242, 0) 96.35%
    );
  }
}
</style>