import { reactive, toRefs } from "vue";


export default function(url, options){
    const state = reactive({
        data: null,
        error: null,
        fetching: true
    })

    const fetchData = async() => {
        state.fetching = true;

        try {
            const response = await fetch(url, options);

            if(!response.ok) {
                throw new Error(response.statusText)
            }
            
            state.data = await response.json()
        }
        catch(errors) {
            state.error = errors
            }
        finally {
            state.fetching = false
        }
        
    }

    return { ...toRefs(state), fetchData }
}




// export const useFetch = (url, config = {}) => {
//     const data = ref(null)
//     const response = ref(null)
//     const error = ref(null)
//     const loading = ref(false)
    
//     const fetch = async() => {
//         loading.value = true
//         try {
//         const result = await axios.request({
//             url,
//             ...config
//         })
//         response.value = result
//         data.value = result.data
//         }
//         catch(e) {
//             error.value = e

//         }
//         finally {
//             loading.value = false
//         }
//     }
//     fetch()

//     return { response, error, fetch, data, loading }
// }