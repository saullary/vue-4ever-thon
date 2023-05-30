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
    ques: "Who can participate in the Template-a-thon?",
    ans: "The Template-a-thon is open to all developers, regardless of their level of experience.",
  },
  {
    ques: "Can I collaborate with others on creating a frontend deployment template?",
    ans: "Yes, collaborative projects are allowed. You can form teams and work together to create your submission.",
  },
  {
    ques: "How long do I have to submit my template?",
    ans: "This is a long-term grants. There is no time limit for now, you will be able to participate from 6.1",
  },
  {
    ques: "Are there any restrictions on the number of templates I can submit?",
    ans: "There is usually no limit on the number of templates you can submit. Feel free to submit as many templates as you'd like.",
  },
  {
    ques: "Can I collaborate with others on creating a frontend deployment template?",
    ans: "Yes, collaborative projects are allowed. You can form teams and work together to create your submission.",
  },
  {
    ques: "Can I collaborate with others on creating a frontend deployment template?",
    ans: "Yes, collaborative projects are allowed. You can form teams and work together to create your submission.",
  },
];
list.forEach((it) => {
  it.open = false;
});
export default {
  data() {
    return {
      list,
    };
  },
};
</script>