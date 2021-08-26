<template>
  <div>

    <button v-on:click="show = !show">クリック</button>
    <transition name="fade" appear>
    <p v-if= "show">SHOW TIME !</p>
  </transition>

  </div>

</template>

<script>

export default{
  name:"TestA",
  data(){
    return{
      show:true
    }
  }

}
</script>

<style scoped>

.fade-enter{
  opacity:0;
}
.fade-enter-active{
  transition: opacity 0.5s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity 0.5s;
}
.fade-leave-to{
  opacity: 0;
}
</style>
