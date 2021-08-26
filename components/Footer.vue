<template >
  <div>
    <div class=" footer">

      <div class="wave-container">
        <vue-wavify mask="url(#mask2)" fill="#1277b0" >
             <defs>
               <linearGradient id="grad" gradientTransform="rotate(90)">
                 <stop offset="0" style="stop-color:white;" />
                 <stop offset="0.5" style="stop-color:black;" />
               </linearGradient>
               <mask id="mask2">
                 <rect x="0" y="0" width="100%" height="200" fill="url(#grad)"/>
               </mask>
             </defs>
        </vue-wavify>

        <div class="copyright">
          &copy; 2021 Haruka Ogawa
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import VueWavify from 'vue-wavify';

export default{
  name:"Footer",
  components:{
    VueWavify
  }
}
</script>

<style scoped>
.wave-container{
  z-index: 0;
}
.copyright{
  background-color: #996600;
  opacity:0.9;
  text-align: center;
  color:white;
  padding-top:30px;
  padding-bottom: 30px;
  z-index: 1;
}
</style>
