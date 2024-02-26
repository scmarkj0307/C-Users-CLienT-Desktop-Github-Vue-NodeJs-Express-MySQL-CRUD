<template>
<div>
    <div class="field">
         <label class="label">Task Name</label>
         <div class="control">
             <input type="text" class="input" placeholder="Enter task name" v-model="taskName" />
        </div>
    </div>

    <div class="field">
         <label class="label">Status</label>
         <div class="control">
             <input type="text" class="input" placeholder="Enter task status" v-model="taskStatus" />
        </div>
    </div>

    <div class="control">
        <button class="button is-success" @click="saveTask">Create</button>
    </div>

</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return{
            taskName: "",
            taskStatus: "",
        };
    },
    methods: {
    async saveTask() {
        try {
        await axios.post("http://localhost:5000/tasks", {
            task_name: this.taskName,
            task_status: this.taskStatus,
        });

        this.taskName = "";
        this.taskStatus = "";
        this.$router.push("/");
        } catch (err) {
        console.log(err);
        }
    },
    },

};
</script>

<style>

.field{
    width: 40%;
    border-collapse: collapse;
    margin: 20px auto;
}

.control{
 display: flex;
 justify-content: center;
 align-items: center;
}

.control button{
    margin-top: 2rem;
    width: 400px;
}

</style>