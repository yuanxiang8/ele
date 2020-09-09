import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'
import shou from '@/views/shou.vue'
import lunbotu from '@/views/lunbotu.vue'
import xinzenglunbotu from '@/views/xinzenglunbotu.vue'
import kecheng from '@/views/kecheng.vue'
import jiaoyu from '@/views/jiaoyu.vue'
import huodong from '@/views/huodong.vue'
import mingxing from '@/views/mingxing.vue'
import dingdan from '@/views/dingdan.vue'
import yonghu from '@/views/yonghu.vue'
import caiwu from '@/views/caiwu.vue'
import tongyong from '@/views/tongyong.vue'
import guanyu from '@/views/guanyu.vue'
import yuangong from '@/views/yuangong.vue'
import juese from '@/views/juese.vue'
import caozuo from '@/views/caozuo.vue'
import huishou from '@/views/huishou.vue'
import lunbo from '@/views/lunbo.vue'
import message from  "@/views/message.vue"
import baba from  "@/views/baba.vue"
import childer from  "@/views/childer.vue"



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/message',
    name: 'message',
    component: message
  },{
    path: '/shou',
    name: 'shou',
    component: shou
  },{
    path: '/lunbotu',
    name: 'lunbotu',
    component: lunbotu
  },{
    path: '/xinzenglunbotu',
    name: 'xinzenglunbotu',
    component: xinzenglunbotu
  },{
    path: '/kecheng',
    name: 'kecheng',
    component: kecheng
  },{
    path: '/jiaoyu',
    name: 'jiaoyu',
    component: jiaoyu
  },{
    path: '/huodong',
    name: 'huodong',
    component: huodong
  },{
    path: '/mingxing',
    name: 'mingxing',
    component: mingxing
  },{
    path: '/dingdan',
    name: 'dingdan',
    component: dingdan
  },{
    path: '/yonghu',
    name: 'yonghu',
    component: yonghu
  },{
    path: '/caiwu',
    name: 'caiwu',
    component: caiwu
  },{
    path: '/tongyong',
    name: 'tongyong',
    component: tongyong
  },{
    path: '/guanyu',
    name: 'guanyu',
    component: guanyu
  },{
    path: '/yuangong',
    name: 'yuangong',
    component: yuangong
  },{
    path: '/juese',
    name: 'juese',
    component: juese
  },{
    path: '/caozuo',
    name: 'caozuo',
    component: caozuo
  },{
    path: '/huishou',
    name: 'huishou',
    component: huishou
  },{
    path: '/lunbo',
    name: 'lunbo',
    component: lunbo
  },{
    path: '/baba',
    name: 'baba',
    component: baba
  },{
    path: '/childer',
    name: 'childer',
    component: childer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
