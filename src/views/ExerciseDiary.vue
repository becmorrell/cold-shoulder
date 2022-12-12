<template>

  <h3>Current Phase: 1 (0 - 6 weeks)</h3>

  <div class="time-container" v-for="time in timeOptions" :key="time">
    <span class="time">{{time}}:</span>

     <div v-for="(exerciseLog, exerciseIndex) in exerciseLogs" :key="exerciseLog">
      <ExerciseComponent 
          :label="exerciseLog.label"
          :checked="exerciseLog[time]"
          :id="time+exerciseIndex"
          @checkedChange="(isChecked) => handleCheckboxChange(time, exerciseIndex, isChecked)"
      />
    </div>
  </div>
 

</template>

<script>
import { ref } from '@vue/reactivity'
import ExerciseComponent from '../components/ExerciseComponent.vue'
import db from '../firebase/init.js'
import { doc, onSnapshot, updateDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { onMounted } from '@vue/runtime-core';


export default {
  name: 'ExerciseDiary',
  components: {ExerciseComponent},
  setup(){

    // Local reference for exercise log data
  const exerciseLogs = ref([])

  // Create Firestore Reference for Today
  const now = new Date();
  const docID = now.toLocaleDateString().replaceAll("/", "-")
  const docRef = doc(db, "dailyExerciseReport", docID)

   onMounted(() => {
    // Load today's document
    const unsub = onSnapshot(docRef, async(docSnapshot) => {
      const docData = docSnapshot.data()
      console.log(unsub)

      if(!docData || !docData.exercises){
        // No document for today yet. Create one.
        console.log('No Document for Today yet');

        // Create Firestore document
        await setDoc(docRef, {
          date: serverTimestamp(),
          exercises: createFreshExerciseArray()
        })
      
      } else {
        // Update "exercises" ref with Firestore data.
        console.log('Document Loaded')
        exerciseLogs.value = docData.exercises
      }
    })
  })

    const handleCheckboxChange = async function(timeOption, exerciseIndex, isChecked) {
    // Create a copy of the array's current state, then update the changed value
    const newExerciseLogsData = [...exerciseLogs.value]
    newExerciseLogsData[exerciseIndex][timeOption] = isChecked

      // Send to Firestore (which will trigger a document snapshot, which will update our local data ref and therefore our UI)
        await updateDoc(docRef, {
        exercises: newExerciseLogsData
    })
  }

  // OPTIONS FOR TIMES AND EXERCISES
  const timeOptions = ["AM", "LUNCH", "MID-AFTERNOON", "PM"];
  const exerciseOptions = [
    {
      label: "Shoulder Rolls and squeeze shoulder blades for 10 secs",
      key: "shoulder-rolls"
    },
    {
      label: "Bend and straighten elbow, hold stretch at the end",
      key: "elbow-bends"
    },
    {
      label: "Support arm and lift up to front (shoulder height) x 10",
      key: "head-tilts"
    },
    {
      label: "Craddle the baby out to side",
      key: "abduction"
    },
    {
      label: "External rotate with cane on floor",
      key: "external-rotation"
    },

  ]

  const createFreshExerciseArray = function(){
    // Create array of exercise objects, with initial 'false' value for each time option.
    const exerciseObjects = exerciseOptions.map((exercise) => {

      // Duplicate object from exerciseOptions
      const exerciseObject = { ...exercise }
  
      // Add a false value for each time option
      timeOptions.forEach((time) => {
        exerciseObject[time] = false
      });

      return exerciseObject
    })
    return exerciseObjects
  }

  return { timeOptions, exerciseLogs, handleCheckboxChange }
  }
}
  
</script>

<style>

.time-container{
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

.time {
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: underline;
  margin-bottom: 8px;
}

.h3 {
  margin-bottom: 40px;
}

</style>