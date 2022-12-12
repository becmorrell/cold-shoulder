<template>

    <h3>You've got this 💪🏼</h3>

     <div class="margin"
         v-for="(quote, i) in data" :key="i">
        <div v-if="i === number">
             {{quote.text}}
         </div>
    </div>
      <!-- {{data[`${number}`].text}} -->
 
 <button @click="shuffleQuote">Give me more Inspo</button>
 

</template>

<script>
import { reactive, ref, toRefs } from '@vue/reactivity'
import useFetch from '../composables/useFetch.js'


export default {
    name: 'motivationQuote',
    setup(){
      
        const val = ref('')
        const number = ref(3)
        const quotes = reactive([])

            const { data, error, fetching, state, fetchData  } = useFetch('https://type.fit/api/quotes', {})
             
             fetchData()
             
            quotes.value = data.value
        

        

        console.log('response', data.text)
        console.log('error', error)
        console.log('fetching', fetching)
        console.log('state', state)

      

   
        const shuffleQuote = () => {
            number.value = (Math.floor(Math.random() * 1642))
            console.log('shuffle', number)
        }

        console.log('number', number)
        shuffleQuote()

        // const shuffleQuote = () => {
        //    const number = ([Math.floor(Math.random() * 1642)])
        //   return number

        // }

        return { val, ...toRefs(quotes), data, error, fetching, state, number, shuffleQuote}
        }

        
    }
    

</script>

<style>

.margin {
    margin-bottom: 10px;
}
</style>