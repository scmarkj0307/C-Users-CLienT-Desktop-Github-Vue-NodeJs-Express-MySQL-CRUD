<template>
  <div class="home">

    <EditTaskList />
  </div>
</template>

<script>
// @ is an alias to /src
import EditTaskList from "../components/EditMyTask.vue"

export default {
  name: 'HomeView',
  components: {
    EditTaskList
  }
}
</script>