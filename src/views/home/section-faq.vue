<style lang="scss">
.faq-item {
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}
.up-down {
  transform: rotateX(180deg);
}
</style>

<template>
  <div class="main">
    <div class="title-1" style="margin-bottom: 0">FAQ</div>
    <div class="faq-item" v-for="(it, i) in list" :key="i">
      <div class="al-c hover-1" @click="it.open = !it.open">
        <div class="fz-18">{{ it.ques }}</div>
        <div class="ml-auto pa-2">
          <img
            src="/img/ic-up.svg"
            :class="{
              'up-down': !it.open,
            }"
            width="12"
            class="d-b"
          />
        </div>
      </div>
      <div
        v-show="it.open"
        class="mt-4 op-7 fz-14 lh-15"
        style="max-width: 600px"
      >
        {{ it.ans }}
      </div>
    </div>
  </div>
</template>

<script>
const list = [
  {
    ques: "What's Template Center?",
    ans: "An open-source Template Center co-built by community developers. Approved templates will be showcased in the Template Center. Users can easily deploy template websites with simple configurations. In the future, we will open up features like paid templates and template advertisements to motivate more developers to offer engaging and user-friendly templates.",
  },
  {
    ques: "Any other activities to win rewards?",
    ans: "Welcome to submit great template suggestions on 4EVERLAND Discord and win T4EVER .",
  },
];
list.forEach((it) => {
  it.open = true;
});
export default {
  data() {
    return {
      list,
    };
  },
};
</script>