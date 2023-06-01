<template>
  <div
    class="d-flex"
    :class="{
      'mr-5': asMobile,
    }"
    style="min-width: 900px"
  >
    <div class="flex-2">
      <div class="title-1">Benefits</div>
      <div class="d-flex">
        <div class="flex-1">
          <border-wrap color="yellow">
            <div class="pos-a z-10">
              <h3 class="pink-1">T4EVER Reward</h3>
              <div class="op-7 mt-4 lh-15 fz-14">
                Win 5,000 - 100,000 T4EVER based on template quality and
                evaluation standards.
              </div>
            </div>
            <div class="pos-a" style="right: -28px; bottom: -28px">
              <img src="/img/benefit-cash.png" height="120" />
            </div>
          </border-wrap>
          <border-wrap color="green" class="mt-5">
            <div class="pos-a z-10">
              <h3 class="pink-1">Support Best Creators</h3>
              <div class="op-7 mt-4 lh-15 fz-14">
                Special reward system allows users support template creators to
                foster interaction and provide positive feedback.
              </div>
            </div>
            <div class="pos-a" style="right: -28px; bottom: -28px">
              <img src="/img/benefit-coffee.png" height="130" />
            </div>
          </border-wrap>
        </div>
        <div class="flex-1 ml-5">
          <border-wrap min-height="442px">
            <h3 class="pink-1">Exclusive Perks</h3>
            <div class="op-7 mt-4 lh-15 fz-14">
              <p>
                Remarkable templates will be featured on a template ranking
                page, Twitter, socials, and other channels, receiving a traffic
                boost from 4EVERLAND.
              </p>
              <p class="mt-5">
                Developer communities are welcome to build with us, building
                connections between participants and top builders, investors,
                and experts on Web3.
              </p>
            </div>

            <div class="pos-a" style="right: -20px; bottom: -20px">
              <img src="/img/benefit-gift.png" height="160" />
            </div>
          </border-wrap>
        </div>
      </div>
    </div>
    <div class="flex-1 ml-5">
      <div class="title-1">Evaluation Standards</div>
      <border-wrap color="blue" min-height="442px">
        <div class="pos-a left-0 z-10">
          <ul class="lh-2 fz-15 op-9 ml-4 l-space-1">
            <li>Originality</li>
            <li>Innovation</li>
            <li>Usability</li>
            <li>Sustainability</li>
            <li>Technical Capability</li>
            <li>User Experience</li>
            <li>Potential Impact</li>
            <li>Activity Level</li>
          </ul>
        </div>
        <div class="pos-a right-0" style="bottom: 100px">
          <img src="/img/benefit-checklist.png" width="200" />
        </div>
        <div class="pos-a btm-0 left-0 w100p d-flex pr-9 fz-13">
          <span>⚠️</span>
          <span class="ml-2 op-8 pr-5"
            >The 4EVERLAND core team and judges' evaluation determine rankings
            and rewards.</span
          >
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
      asMobile: (s) => s.clientWidth < 900,
    }),
  },
};
</script>