<template>
  <div id="app"
       :class="renderData.random_cover ? 'mask' : ''">
    <templ-pure :renderData="renderData"></templ-pure>
  </div>
</template>

<script>
// 引入主题组件
import Pure from "@/components/pure";
import * as CONFIG from "./config";
export default {
  name: "app",
  data() {
    return {
      renderData: {}
    };
  },
  async beforeCreate() {
    let [src, renderCover] = [{}, ""];
    // 获取配置文件conf.yml
    src = await this.$http.get("./conf.yml");
    this.renderData = this.$Y.safeLoad(src.data);
    // 修改网页html标题
    document.title = this.renderData.html_title;
    // 根据配置文件判断封面渲染
    if (this.renderData.random_cover)
      renderCover = `background-image:url('${CONFIG.UNSPLASH_API}')`;
    else renderCover = CONFIG.DEFAULT_COVER_RED;
    document.querySelector("body").setAttribute("style", renderCover);
  },
  components: {
    "templ-pure": Pure
  }
};
</script>

<style lang="less" scoped>
#app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    padding-top: 40px;
    align-items: flex-start;
  }
}
.mask {
  background-color: rgba(102, 102, 102, 0.7);
}
</style>
 