<template>
  <div>
    <h1>Lesson5</h1>

    <h2>レッスン</h2>
    <p v-if="!userExists">No users.</p>
    <ul v-else class="users">
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

    <div class="buttons">
      <button class="button">Add</button>
      <!-- ↑この実装を編集 -->
      <button v-if="userExists" class="button button--secondary" @click="clear">
        Clear
      </button>
      <button v-else class="button" @click="reset">Restore</button>
    </div>
  </div>
</template>

<script>
const initialUsers = [
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
];
export default {
  name: "lesson5",
  data() {
    return {
      users: initialUsers
    };
  },
  computed: {
    userExists() {
      return !!this.users.length;
    }
  },
  methods: {
    // ここに実装を追加
    clear() {
      this.users = [];
    },
    reset() {
      this.users = initialUsers;
    }
  }
};
</script>

<style scoped>
.users {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}
.info {
  flex: 1;
  max-width: 380px;
  box-sizing: border-box;
  margin: 10px;
  display: inline-flex;
  background-color: #efefef;
  padding: 20px;
  border-radius: 10px;
}
.info__image {
  background-color: #fff;
  width: 140px;
  height: 140px;
  border-radius: 100%;
}
.info__text {
  padding: 0 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.buttons {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
.button {
  font-size: 1.25rem;
  background-color: #fff;
  padding: 10px 20px;
  color: #42b983;
  font-weight: 600;
  border: 2px solid;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}
.button--secondary {
  color: #999;
}
.button:hover {
  background-color: #42b983;
  color: #fff;
  border-color: #42b983;
}
.button--secondary:hover {
  background-color: #999;
  border-color: #999;
}
.button:active {
  background-color: #36495d;
  border-color: #36495d;
}
.button:focus {
  outline: 0;
}
.button + .button {
  margin-left: 10px;
}
</style>
