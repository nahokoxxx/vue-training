<template>
  <div class="info">
    <img class="info__image" :src="imageUrl" />
    <div class="info__text">
      <p>
        Name:
        <b>{{ name }}</b>
      </p>
      <p v-if="birthday !== 'unknown'">
        Birthday:
        <b>{{ birthday }}</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["name", "imageUrl", "birthday"]
};
</script>

<style scoped>
.info {
  margin: 10px;
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
</style>
