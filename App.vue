<template>
  <div id="app">
    <div id="header">
      <div class="nav-menu">

        <router-link to= '/'>HOME</router-link>
        <router-link to= '/aboutme'>ABOUT ME</router-link>
        <router-link to= '/skills'>SKILLS</router-link>
        <router-link to= '/sample'>SAMPLE</router-link>
        <router-link to= '/contact'>CONTACT</router-link>
      </div>
    </div>

      <transition name="fade">
        <router-view></router-view>
      </transition>

    <Footer class="footer"/>
    <!-- <MoJs/> -->


  </div>
</template>


<script>
import Footer from "./components/Footer.vue";
// import MoJs from "./components/MoJs.vue";


export default {
  name: 'App',
  components: {
    Footer,
    // MoJs,
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');

body{
margin: 0;
}

h1{
  color:#FF9900;
}

#app{
  position:relative;
}

#header{
  width:100%;
  opacity: 0.8;
  background-color: #4169E1;
  position: sticky;
  top:0;
  left:0;
}

.nav-menu a{
  display: block;
  color:white;
  text-decoration: none;
  font-family: 'Rampart One', cursive;
  }

.nav-menu a:hover{
  color:yellow;
}

.nav-menu{
  width:70%;
  margin: 0 auto;
  padding:30px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.footer{
  font-family: 'Rampart One', cursive;
}
 /* トランジション */

 .fade-enter{
   opacity:0;
 }
 .fade-enter-active{
   transition: opacity 1s;
 }
 .fade-enter-to{
   opacity: 1;
 }


/* ＊＊＊＊＊＊＊＊＊＊ */
/* レスポンシブ */
/* ＊＊＊＊＊＊＊＊＊＊ */
  @media(max-width:500px){
  .nav-menu {
    flex-wrap: wrap;
    padding:10px 0px;
    }

  .nav-menu a{
    width: 50%;
    text-align: center;
    padding:10px;
    box-sizing: border-box;
    font-size: 14px;
  }

  @media(min-width:1040px){
    transition{
      background-color: pink;
      width:1000px;
      margin-left:auto;
      margin-right:auto;
    }
  }
}


</style>
