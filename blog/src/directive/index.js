import Vue from 'vue'
Vue.directive('permission', {
    bind(el, binding, vnode) {
        console.log(el, this.binding, vnode);
         // 获取每个路由页的权限
         let btnPermissionsArr = vnode.context.$route.meta.btnPermissions;
         if (!Vue.prototype.$_has(btnPermissionsArr)) {
             el.parentNode.removeChild(el);
         }
    }

})
// 权限检查方法
Vue.prototype.$_has = function (value) {
    let isExist = false;
    // 获取用户按钮权限
    let btnPermissionsStr = sessionStorage.getItem("btnPermissions");
    if (btnPermissionsStr == undefined || btnPermissionsStr == null) {
        return false;
    }
    if (value.includes(btnPermissionsStr) > -1) {
        isExist = true;
    }
    return isExist;
};