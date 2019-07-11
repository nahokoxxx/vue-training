<template>
  <div>
    <h1>Lesson3</h1>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "lesson1",
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
  }
  // ここに実装を追加
};
</script>

<style scoped>
.users {
  display: flex;
  justify-content: center;
  padding: 0;
}
.info {
  margin: 0 10px;
  display: inline-flex;
  justify-content: center;
  background-color: #efefef;
  padding: 20px;
  border-radius: 10px;
}
.info__image {
  background-color: #fff;
  width: 140px;
  border-radius: 100%;
}
.info__text {
  padding: 0 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.line {
  margin: 60px auto 40px;
}
</style>
