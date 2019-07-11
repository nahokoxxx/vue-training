<template>
  <div>
    <h1>Lesson1</h1>

    <hr class="line" />

    <h2>サンプル</h2>
    <div class="info">
      <img class="info__image" :src="imageUrl" />
      <div class="info__text">
        <p>
          Name:
          <b>{{ name }}</b>
        </p>
        <p>
          Birthday:
          <b>{{ birthday }}</b>
        </p>
      </div>
    </div>

    <hr class="line" />

    <h2>レッスン</h2>
    <div class="info"></div>
  </div>
</template>

<script>
export default {
  name: "lesson1",
  data() {
    return {
      name: "Nahoko Matsui",
      imageUrl:
        "https://avatars2.githubusercontent.com/u/12132975?s=400&u=66066c704271453dc7b52c3c99251c72cc9f71f3&v=4",
      birthday: "1992/03/07"
    };
  }
};
</script>

<style scoped>
.info {
  display: inline-flex;
  justify-content: center;
  background-color: #efefef;
  padding: 20px;
  border-radius: 10px;
}
.info__image {
  width: 140px;
  border-radius: 100%;
}
.info__text {
  padding-left: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.line {
  margin: 60px auto 40px;
}
</style>
