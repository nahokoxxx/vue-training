<template>
  <div>
    <h1>Lesson1</h1>

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
    <div class="info">
      <img class="info__image" :src="imageUrl2" />
      <div class="info__text">
        <p>
          Name:
          <b>{{ name2 }}</b>
        </p>
        <p>
          Birthday:
          <b>{{ birthday2 }}</b>
        </p>
      </div>
    </div>
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
      birthday: "1992/03/07",
      name2: "Arupaka",
      imageUrl2:
        "https://4.bp.blogspot.com/-7DLdBODmEqc/VCIitQRzAWI/AAAAAAAAmeY/g1fjm8NqyaI/s800/animal_arupaka.png",
      birthday2: "2000/01/01"
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
  background-color: #fff;
}
.info__text {
  padding: 0 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
