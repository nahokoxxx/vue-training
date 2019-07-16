<template>
  <div>
    <h1>Lesson3</h1>

    <h2>サンプル</h2>
    <ul class="users">
      <li v-for="user in users" :key="user.name" class="info">
        <img class="info__image" :src="user.imageUrl" />
        <div class="info__text">
          <p>
            Name:
            <b>{{ user.name }}</b>
          </p>
          <p v-if="user.birthday !== 'unknown'">
            Birthday:
            <b>{{ user.birthday }}</b>
          </p>
        </div>
      </li>
    </ul>

    <hr class="line" />

    <h2>レッスン</h2>
    <div class="users">
      <card
        v-for="user in users"
        :key="user.name"
        :name="user.name"
        :image-url="user.imageUrl"
        :birthday="user.birthday"
      ></card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "lesson3",
  components: {
    Card
  },
  data() {
    return {
      users: [
        {
          name: "Arupaka",
          imageUrl:
            "https://4.bp.blogspot.com/-7DLdBODmEqc/VCIitQRzAWI/AAAAAAAAmeY/g1fjm8NqyaI/s800/animal_arupaka.png",
          birthday: "2000/01/01"
        },
        {
          name: "Kuma",
          imageUrl:
            "https://2.bp.blogspot.com/-dvDN3SxnRWE/VCIivNhugVI/AAAAAAAAmew/sEC6XC1sGwk/s800/animal_kuma.png",
          birthday: "unknown"
        },
        {
          name: "Penguin",
          imageUrl:
            "https://4.bp.blogspot.com/-CtY5GzX0imo/VCIixcXx6PI/AAAAAAAAmfY/AzH9OmbuHZQ/s800/animal_penguin.png",
          birthday: "2000/03/03"
        }
      ]
    };
  }
};
</script>

<style scoped>
.users {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
}
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
