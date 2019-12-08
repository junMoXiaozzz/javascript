<template>
  <div>
    <el-form
      ref="form"
      :model="form"
      label-width="100px"
      :label-position="labelPosition"
      :rules="rules"
      size="small"
    >
      <!-- 考虑到注册组件一些验证和登录一样，如果重写的话很麻烦，是否可以extends -->
      <!-- 时间不够没搞完。。。。。 -->
      <el-form-item label="用户名:" prop="name">
        <el-input v-model.trim="form.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号:" prop="phone">
        <el-input v-model.trim="form.phone" ></el-input>
      </el-form-item>
      <el-form-item label="登录密码:" prop="pass">
        <el-input v-model.trim="form.pass" show-password></el-input>
      </el-form-item>
      <el-form-item label="重复密码:" prop="repeatPass">
        <el-input v-model.trim="form.repeatPass" show-password></el-input>
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
    // 正则校验手机号
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error("手机号有误"));
      } else {
        callback();
      }
    };
    var validateRepeatPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      rules: {
        phone: [  { required: true, message: "请输入手机号", trigger: "blur" },{ validator: validatePhone, trigger: "blur" }],
        repeatPass: [  { required: true, message: "请再次输入密码", trigger: "blur" },{ validator: validateRepeatPass, trigger: "blur" }]
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>