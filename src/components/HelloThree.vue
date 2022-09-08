<template>
  <div></div>
</template>

<script>
import * as THREE from 'three';
export default {
  name: 'HelloThree',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {
    const scene = new THREE.Scene();
    console.log('-------场景');
    console.log(scene);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    console.log('-------相机');
    console.log(camera);

    const renderer = new THREE.WebGLRenderer();
    console.log('-------渲染器');
    console.log(renderer);

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
