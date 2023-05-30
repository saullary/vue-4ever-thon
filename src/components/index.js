import BorderWrap from "./border-wrap.vue";
import AutoWrap from "./auto-wrap.vue";
import LeftGap from "./left-gap.vue";

export default {
  install(app) {
    app.component("border-wrap", BorderWrap);
    app.component("auto-wrap", AutoWrap);
    app.component("left-gap", LeftGap);
  },
};
