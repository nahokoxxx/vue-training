<template>
  <div>
    <h1>Lesson4</h1>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "lesson4",
  data() {
    return {
      message: ""
    };
  },
  created() {
    this.message = "Rendering...";
  },
  mounted() {
    this.message = "Welcome!";
  },
  beforeDestroy() {
    alert("Bye!");
  }
};
</script>
