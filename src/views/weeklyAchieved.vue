<template>

    <div class="">
            <form class="container">
                <label class="labelInput" for="achieved">Add your achievements this week:</label>
                <input class="achieveInput" type="text" v-model="newAchievement" placeholder="Add achievement from this week">
                <button @click.prevent="addAchieve">Add</button>
            </form>

        <div class="list">
           <span class="margin"> 3 Things I'm happy that I've achieved this week are:</span>  
            <div v-for="item in achievementList" :key="item">
               <p class="item">{{item}}</p>

           </div>
         </div>

    </div>
  
    

</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    name: 'weekAchievement',
    setup(){
        const achievementList = ref([])
        const newAchievement = ref('')
        

        const addAchieve = () =>{
            achievementList.value.push(newAchievement.value)
            newAchievement.value = ''
        }

        return {achievementList, newAchievement, addAchieve}
    }



    }
    


</script>

<style>

.container {
    display: flex;
    flex-direction: column;
    padding: 40px;
}

.achieveInput {
    margin-top: 20px;
    height: 24px;
    margin-bottom: 30px;
}

.labelInput {
    text-align: left;
}

.list {
    display: flex;
    flex-direction: column;
    font-size: 1.25rem;
}

.item {
    margin-top: 4px;
    margin-bottom: 4px;
}

.margin {
    margin-bottom: 10px;
}

button {
    height: 40px;
    flex-shrink: 1;
    background-color: rgb(38, 126, 193);
    color: white;
    border: 1px white;
    border-radius: 4px;
    padding: 16px;
}

</style>