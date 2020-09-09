"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _About = _interopRequireDefault(require("@/views/About.vue"));

var _shou = _interopRequireDefault(require("@/views/shou.vue"));

var _lunbotu = _interopRequireDefault(require("@/views/lunbotu.vue"));

var _xinzenglunbotu = _interopRequireDefault(require("@/views/xinzenglunbotu.vue"));

var _kecheng = _interopRequireDefault(require("@/views/kecheng.vue"));

var _jiaoyu = _interopRequireDefault(require("@/views/jiaoyu.vue"));

var _huodong = _interopRequireDefault(require("@/views/huodong.vue"));

var _mingxing = _interopRequireDefault(require("@/views/mingxing.vue"));

var _dingdan = _interopRequireDefault(require("@/views/dingdan.vue"));

var _yonghu = _interopRequireDefault(require("@/views/yonghu.vue"));

var _caiwu = _interopRequireDefault(require("@/views/caiwu.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Home',
  component: _Home["default"]
}, {
  path: '/About',
  name: 'About',
  component: _About["default"]
}, {
  path: '/shou',
  name: 'shou',
  component: _shou["default"]
}, {
  path: '/lunbotu',
  name: 'lunbotu',
  component: _lunbotu["default"]
}, {
  path: '/xinzenglunbotu',
  name: 'xinzenglunbotu',
  component: _xinzenglunbotu["default"]
}, {
  path: '/kecheng',
  name: 'kecheng',
  component: _kecheng["default"]
}, {
  path: '/jiaoyu',
  name: 'jiaoyu',
  component: _jiaoyu["default"]
}, {
  path: '/huodong',
  name: 'huodong',
  component: _huodong["default"]
}, {
  path: '/mingxing',
  name: 'mingxing',
  component: _mingxing["default"]
}, {
  path: '/dingdan',
  name: 'dingdan',
  component: _dingdan["default"]
}, {
  path: '/yonghu',
  name: 'yonghu',
  component: _yonghu["default"]
}, {
  path: '/caiwu',
  name: 'caiwu',
  component: _caiwu["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;