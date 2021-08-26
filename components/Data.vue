<template>
<div>
  <SlotTest>
<template v-slot:head>
  <h1>{{headcontent}}</h1>
</template>
<template v-slot:body>
  <div>BODY</div>
</template>

</SlotTest>
</div>

</template>


<script>
import SlotTest from "../components/Slot.vue";

export default{
  name:"Data",
  components:{
    SlotTest
  },
  data(){
    return{
      headcontent:"こんにちは！！！"
    }
  }
}
</script>
