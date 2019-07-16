<template>
  <div>
    <h1>Lesson7</h1>

    <h2>レッスン</h2>
    <div class="info">
      <div v-if="!imageUrl" class="info__image info__image--loading">
        Loading...
      </div>
      <img v-else class="info__image" :src="imageUrl" />
      <div class="info__text">
        <p>
          Name:
          <b>{{ name || "Loading..." }}</b>
        </p>
        <p>
          Followers Count:
          <b>{{ followersCount || "Loading..." }}</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "lesson7",
  data() {
    return {
      name: "",
      imageUrl: "",
      followersCount: ""
    };
  },
  async created() {
    const userName = "nahokomatsui";
    const response = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    this.name = response.data.name;
    this.imageUrl = response.data.avatar_url;
    this.followersCount = response.data.followers;
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
  height: 140px;
  border-radius: 100%;
}
.info__image--loading {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.info__text {
  padding: 0 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
