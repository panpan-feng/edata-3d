<template>
  <div class="hello-world">
    HelloWorld
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {};
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const {data} = await this.$http({
        url: "/sys/data",
        method: "get",
      });
      console.log(data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
