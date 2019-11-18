<template>
    <div>
        <form>
            <div>
                <input v-model="user.name" />
            </div>

            <div>
                <input v-model="user.email" />
            </div>

            <div>
                <input v-model="user.age" type="number" />
            </div>


            <button type="button" @click="postData">Submit</button>

            <div v-if="response">
                <p>Response from server :</p>
                {{ response }}
            </div>
        </form>
    </div>
</template>

<script>


    export default {
        data(){
            return {
                user : {
                    name : "",
                    email : "test@test.com",
                    age : null
                },
                response : null
            }
        },
        methods : {
            async postData(){
                try {
                    const res = await this.$axios.post(`/api/test`, this.user)
                    console.log(res)
                    this.response = res.data
                } catch(e) {
                    console.log("unable to reach the api route")
                }

            }
        }
    }
</script>

<style>

</style>
