<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    let dataGet = ref()
    const usern = ref('')
    const pass = ref('')
    const mail = ref('')
    const search = ref('')
    const show = ref(false)
    const fetchData = async() =>{
        const res = await axios.get('http://localhost:3000/users')
        dataGet.value = res.data
        console.log(dataGet.value)
        
    }
    fetchData()

    const handleSubmit = async() =>{
        if(!usern.value || !pass.value || !mail.value){
            show.value = true
        }else{
            const d = {
                id:dataGet.value.id + 1,
                empn:usern.value,
                empmail:mail.value,
                emppn:pass.value
            }
            axios.post('http://localhost:3000/users',d)
            dataGet.value.push(d)
            console.log('success')
            usern.value = ''
            mail.value=''
            pass.value = ''
        }
    }

</script>
<template>
    <ul v-for="data in dataGet" :key="dataGet.id" class="bg-gray-200 mb-2 rounded">
        <p class="text-2xl mt-2 ml-2">Employee Name : {{ data.empn }}</p>
        <p class="text-2xl mt-2 ml-2">Email : {{ data.empmail }}</p>
        <p class="text-2xl mt-2 ml-2">Phone no{{ data.emppn }}</p>
    </ul>
    <form class="mt-2" @submit.prevent="handleSubmit">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round mt-2"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
        <input type="text" class="border-b-2 border-black outline-none block w-80" v-model="usern">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail mt-2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        <input type="text" class="border-b-2 border-black outline-none block w-80" v-model="mail">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone mt-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <input type="text" class="border-b-2 border-black outline-none mb-2 w-80 block" v-model="pass">
        <button class="bg-black px-3 py-2 text-white rounded">Add Users</button>
        <div v-if="show" class="bg-red-500 text-white mt-3 rounded p-3">Enter all the fields</div>
    </form>
    
</template>