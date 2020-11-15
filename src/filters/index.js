import Vue from "vue";
import format from 'date-fns/format'
//注册全局过滤器 时间格式化
Vue.filter('dateFormat', function (val, formatstr = 'YYYY-MM-DD HH:mm:ss') {
  return format(val, formatstr)
})

Vue.filter('addressFormat', function (val) {
  let left = val.substring(0, 10);
  let right = val.substring(val.length - 10, val.length)
  return left + "..." + right
})
