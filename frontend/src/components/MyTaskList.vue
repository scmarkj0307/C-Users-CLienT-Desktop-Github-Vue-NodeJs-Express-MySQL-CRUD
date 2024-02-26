<template>
  <div class="taskContainer">
     <table class="task-table">
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.task_id">
          <td>{{ item.task_name }}</td>
          <td>{{ item.task_status }}</td>
          <td>
            <router-link style="color: green" :to="{ name: 'EditTask', params: { id: item.task_id }}">UPDATE</router-link>
            <a @click="deleteTask(item.task_id)">DELETE</a>
          </td>
        </tr>
      </tbody>
    </table>
    <img src="@/assets/icon.png" alt="icon" class="table-image" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
    async getTasks() {
      try {
        const response = await axios.get("http://localhost:5000/tasks");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async deleteTask(id) {
      try {
        await axios.delete(`http://localhost:5000/tasks/${id}`);
        this.getTasks();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.taskContainer {
  display: flex;
  flex-direction: row;
}

.task-table {
  width: 40%;
  border-collapse: collapse;
  margin: 20px auto;
  background-color: white; /* Set background color to white */
}

.task-table th, .task-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.task-table th {
  background-color: #f2f2f2;
}

.task-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.table-image {
  max-width: 100%;
  margin-bottom: 20px;
}

.task-table a {
  color: #ff0000;
  cursor: pointer;
  margin-left: 10px;
}
</style>