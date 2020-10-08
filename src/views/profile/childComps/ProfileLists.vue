<template>
  <div class="profile-list">
    <profile-list>
      <profile-list-item v-for="(item,index) in profileList"
                         :key="index" :text="item.text" @click.native="itemClick(item)"></profile-list-item>
    </profile-list>
  </div>
</template>

<script>
  import ProfileList from "../../../components/content/profilelist/ProfileList";
  import ProfileListItem from "../../../components/content/profilelist/ProfileListItem";

  export default {
    name: "ProfileLists",
    props: {
      profileList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      ProfileListItem,
      ProfileList
    },
    methods: {
      itemClick(item) {
        this.$router.push(item.url)
      }
    }
  }
</script>

<style scoped>
  .profile-list-item {
    margin-bottom: 3px;
  }
</style>
