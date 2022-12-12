<template>

    <div class="card">

        <input 
            class="large-checkbox"
            type="checkbox" 
            :id="id"
            :checked="checked" 
            @change="$emit('checkedChange', $event.target.checked)"
        >
        <label class="label" :for="id">{{label}}</label>
    </div>

  
  
</template>

<script>

export default {
    props: ['label', 'checked', 'id']

}
   
</script>

<style>

.card {
    display: flex;
    align-items: center
}

.label {
    padding-left: 20px;
    text-align: left;
    font-size: 1.2em;
    width: calc(100% - 20px - 40px);
}

.large-checkbox {
    width: 40px;
    height: 40px;
}


</style>