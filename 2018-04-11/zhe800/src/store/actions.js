import Vue from 'vue';
//import axios from 'axios';
//
//import VueResource from 'vue-resource';
//Vue.use(VueResource);

export default {
  // keyType:valueFn
  SHOW_LOADING:({commit,state})=>{
    commit('SHOW_LOADING')
  },
  HIDE_LOADING:({commit,state})=>{
    commit('HIDE_LOADING')
  },
  SHOW_NAV:({commit,state})=>{
    commit('SHOW_NAV')
  },
  HIDE_NAV:({commit,state})=>{
    commit('HIDE_NAV')
  },
  SHOW_TOP:({commit,state})=>{
    commit('SHOW_TOP')
  },
  HIDE_TOP:({commit,state})=>{
    commit('HIDE_TOP')
  },
  SHOW_LINK:({commit,state})=>{
    commit('SHOW_LINK')
  },
  HIDE_LINK:({commit,state})=>{
    commit('HIDE_LINK')
  },
  SHOW_FOOT:({commit,state})=>{
    commit('SHOW_FOOT')
  },
  HIDE_FOOT:({commit,state})=>{
    commit('HIDE_FOOT')
  },

};