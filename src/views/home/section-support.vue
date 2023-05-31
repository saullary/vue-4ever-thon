<template>
  <div>
    <el-row gutter="20">
      <el-col :span="8" :md="4" v-for="(it, i) in list" :key="i">
        <border-wrap min-height="100px" color="blue" class="mb-5">
          <div class="pos-center">
            <img :src="'/img/' + it.img" :height="it.height || 100" />
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
          img: "sup-buidler.png",
          height: 44,
        },
        {
          img: "sup-perma.png",
          height: 76,
        },
        {
          img: "sup-lens.png",
        },
        {
          img: "sup-rebase.png",
        },
        {
          img: "sup-kepler.png",
        },
        {
          img: "sup-rainbow.png",
          height: 32,
        },
        {
          img: "sup-seedao.png",
        },
        {
          img: "sup-mole.png",
          height: 80,
        },
        {
          img: "sup-tintin.png",
        },
      ],
    };
  },
};
</script>