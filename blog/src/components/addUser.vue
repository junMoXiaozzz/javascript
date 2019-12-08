

<script>
import login from "@/components/login.vue";
import register from "@/components/register.vue";
export default {
  name: "addUser",
  data() {
    return {};
  },
  props: {
    status: {
      type: String,
      required: true,
      default: "login"
    },
    loading: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  components: { login, register },
  render(h) {
    let btn = this.loading?'<i class="el-icon-loading"></i>&nbsp;&nbsp;&nbsp;'+this.$slots.default[0].text:this.$slots.default[0].text;
    let vNode = h("el-button", {
      attrs: {
        type: "primary",
        size: "small"
      },
      props: {
        loading:this.loading
      },
      domProps: {
        innerHTML: btn
      },
      on:{
         click: this.submit
      }
    });
    if (this.status === "login") {
      return h("div", [h(login,{ref:'login'}), vNode]);
    } else {
      return h("div", [h(register,{ref:'register'}),vNode]);
    }
  },
  mounted() {},
  methods: {
    submit(){
      this.$emit('submit',this.$refs.login.form);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>