<template>
  <div class="home">

    <TaskList />
  </div>
</template>

<script>
// @ is an alias to /src
import TaskList from "../components/MyTaskList.vue"

export default {
  name: 'HomeView',
  components: {
    TaskList
  }
}
</script>
