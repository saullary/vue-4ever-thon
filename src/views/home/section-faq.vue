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
        <div class="fz-20">{{ it.ques }}</div>
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
        class="mt-4 white-8 fz-14 lh-15"
        style="max-width: 600px"
        v-html="it.ans"
      ></div>
    </div>
  </div>
</template>

<script>
const list = [
  {
    ques: "What's Template Center?",
    ans: "An open-source Template Center co-built by community developers. Approved templates will be showcased in the Template Center.Users can easily deploy template websites with simple configurations. In the future, we will open up features like paid templates and template advertisements to motivate more developers to offer engaging and user-friendly templates.",
  },
  {
    ques: "Any other activities to win rewards?",
    ans: "Welcome to submit great template suggestions on 4EVERLAND Discord and win T4EVER .",
  },
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
    ans: "This is a long-term grants. There is no time limit for now, you will be able to participate from JUNE 1.",
  },
  {
    ques: "Are there any restrictions on the number of templates I can submit?",
    ans: "There is usually no limit on the number of templates you can submit. Feel free to submit as many templates as you'd like.",
  },
  {
    ques: "Are there any specific criteria for the template design or functionality?",
    ans: "Yes, please check the evaluation standards listed above.",
  },
  {
    ques: "Can I share my template after the Template-a-thon?",
    ans: "Absolutely! The purpose of the Template-a-thon is to collect and share an array of unique and engaging templates. You are encouraged to share your template with the community.",
  },
  {
    ques: "How will the winners be determined?",
    ans: "Winners will be selected by a panel of judges and 4EVERLAND core team based on various criteria, such as creativity, usability, etc and adherence to the event guidelines. ",
  },
  {
    ques: "Where can I ask questions?",
    ans: "Please post in help-forum on <a href='http://discord.gg/4everland' target='_blank'>Discord</a>.",
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