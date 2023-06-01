<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8" :md="4" v-for="(it, i) in list" :key="i">
        <border-wrap
          :min-height="asMobile ? '50px' : '70px'"
          color="blue"
          class="mb-5"
        >
          <div class="pos-center">
            <img
              :src="'/img/' + it.img"
              :height="(it.height || 80) * (asMobile ? 0.6 : 1)"
            />
          </div>
        </border-wrap>
      </el-col>
    </el-row>
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
          img: "sup-dd.png",
        },
        {
          img: "sup-seedao.png",
        },
        {
          img: "sup-rebase.png",
        },
        {
          img: "sup-conflux.jpg",
          height: 34,
        },
        {
          img: "sup-buidler.png",
          height: 40,
        },
        {
          img: "sup-perma.png",
          height: 68,
        },
        {
          img: "sup-lens.png",
        },
        {
          img: "sup-kepler.png",
        },
        {
          img: "sup-mole.png",
          height: 80,
        },
        {
          img: "sup-rainbow.png",
          height: 32,
        },
        {
          img: "sup-tintin.png",
        },
      ],
    };
  },
};
</script>