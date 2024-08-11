// https://vitepress.dev/guide/custom-theme
import Layout from './content/Layout.vue'
import './style.css'
import { MotionPlugin } from  '@vueuse/motion';
import VPSolution from './content/components/VPSolution.vue';

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(MotionPlugin);
    app.component('solution-component', VPSolution);
  }
}

