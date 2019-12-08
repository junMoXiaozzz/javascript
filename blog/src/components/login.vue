<template>
  <div class="login">
    <el-form
      ref="form"
      :model="form"
      label-width="100px"
      :label-position="labelPosition"
      :rules="rules"
      size="small"
    >
      <el-form-item label="用户名:" prop="name">
        <el-input v-model.trim="form.name"></el-input>
      </el-form-item>
      <el-form-item label="登录密码:" prop="pass">
        <el-input v-model.trim="form.pass" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import mixin from "./mixin.js";
export default {
  mixins: [mixin],
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>