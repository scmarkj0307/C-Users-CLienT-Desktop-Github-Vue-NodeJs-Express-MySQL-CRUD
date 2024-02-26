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
        <button class="button is-success" @click="saveTaskChanges">Save Changes</button>
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
    created: function() {
        this.getTaskById();
    },
    methods: {
        async getTaskById() {
            try{
                const response = await axios.get(
                    `http://localhost:5000/tasks/${this.$route.params.id}`
                );
                this.taskName = response.data.task_name;
                this.taskStatus = response.data.task_status;
            } catch (err) {
                console.log(err);
            }
        },


        async saveTaskChanges() {
            try{
                await axios.put(
                    `http://localhost:5000/tasks/${this.$route.params.id}`,
                    {
                        task_name: this.taskName,
                        task_status: this.taskStatus,
                    }
                );
                (this.productName = ""), (this.productPrice = "");
                this.$router.push("/")
            } catch (err) {
                console.log(err);
            }
        },

     
    }

}
</script>

<style>

</style>