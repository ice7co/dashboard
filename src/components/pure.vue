<!-- pure主题 -->
<template>
  <div>
    <loading :show="loadingShow"></loading>
    <div class="logo">
      <h1>{{d.logo}}</h1>
    </div>
    <h2 class="motto">{{d.motto==null?hitokoto:d.motto}}</h2>
    <hr class="separate">
    <div id="wrapper"
         v-show="!loadingShow">
      <a class="cube"
         :class="!item.link?'cube-inactive':''"
         :href="item.link"
         target="_blank"
         v-for="(item,index) in d.conf"
         :key="index">
        <font-awesome-icon :icon="getIcon(item.icon)"
                           fill="currentColor"
                           size="2x" />
        <p>{{item.text}}</p>
      </a>
    </div>
    <div class="copyright">{{d.copyright}}</div>
  </div>
</template>

<script>
import loading from "@/components/loading";
import * as CONFIG from "@/config";
export default {
  components: { loading },
  computed: {
    getIcon(d) {
      return d => {
        return [`${d.split(" ")[0]}`, `${d.split(" ")[1]}`];
      };
    }
  },
  watch: {
    renderData: {
      handler(n) {
        this.d = n;
        // 隐藏loading
        this.loadingShow = false;
      },
      deep: true
    }
  },
  data() {
    return {
      d: {},
      loadingShow: true,
      hitokoto: ""
    };
  },
  props: {
    renderData: {
      type: Object
    }
  },
  async created() {
    let motto = await this.$http.get(CONFIG.API_HITOKOTO);
    if (motto.data.hitokoto.length > 20)
      this.hitokoto = `「${motto.data.hitokoto.substring(0, 20)}...」`;
    else this.hitokoto = `「${motto.data.hitokoto}」`;
  }
};
</script>

<style lang="less" scoped>
// 核心样式表
@import "../assets/theme/pure/core.less";
</style>