<template>
  <div>
    <div class="contact">
      <h1>Contact</h1>

      <div class="contact-memo">
        please feel free to contact me!
      </div>

      <div class="contact-box">
        <div class="box gmail">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </div>
        <div class="box git">
          <font-awesome-icon :icon="['fab', 'github']" />
        </div>
        <div class="box wantedly">
          <font-awesome-icon :icon="['fab', 'weebly']" />
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default{
  name:"Contact",
  components:{
    FontAwesomeIcon
  }
}



</script>

<style scoped>
.contact{
  background-color: white;
  height:400px;
}

.contact h1{
  text-align: center;
}

.contact-memo{
  text-align: center;
  padding:20px 0px;
}

.contact-box{
  background-color: white;
  overflow: hidden;
  width:40%;
  margin: 0 auto;
  padding: 80px 40px;
}

.box{
  float:left;
  width:33.3333%;
  text-align: center;
}

.box svg{
  font-size: 50px;

}


/* ＊＊＊＊＊＊ */
/* レスポンシブ */
/* ＊＊＊＊＊＊＊ */
@media(max-width:500px){
  .contact-box{
    width:100%;
    padding:30px 0px;
  }
}

</style>
