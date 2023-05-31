import BorderWrap from "./border-wrap.vue";
import AutoWrap from "./auto-wrap.vue";
import LeftGap from "./left-gap.vue";
import ElRow from "./el-row.vue";
import ElCol from "./el-col.vue";

export default {
  install(app) {
    app.component("border-wrap", BorderWrap);
    app.component("auto-wrap", AutoWrap);
    app.component("left-gap", LeftGap);
    app.component("el-row", ElRow);
    app.component("el-col", ElCol);
  },
};
