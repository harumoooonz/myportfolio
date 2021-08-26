<template>
  <div>
    <div class="skills">
      <h1>Skills</h1>

      <div class="main-skills">
        <div class="skill-icon">
          <div class="html">
            <font-awesome-icon :icon="['fab', 'html5']" />
          </div>
          <div class="icon-bar">
            HTML
          </div>
        </div>

        <div class="skill-icon">
          <div class="css">
            <font-awesome-icon :icon="['fab', 'css3-alt']" />
          </div>
          <div class="icon-bar">
            CSS
          </div>
        </div>

        <div class="skill-icon">
          <div class="js">
            <font-awesome-icon :icon="['fab', 'js-square']" />
          </div>
          <div class="icon-bar">
            JavaScript
          </div>
        </div>

          <div class="skill-icon">
            <div class="vue">
              <font-awesome-icon :icon="['fab', 'vuejs']" />
            </div>
            <div class="icon-bar">
              Vue.js
            </div>
          </div>
      </div>

        <div class="otherskills">
          <ul>
            <li v-for= "skill in skills" v-bind:key= "skill.id">
              {{skill.list}}
            </li>
          </ul>
        </div>

    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default{
  name:"Skills",
  components:{
    FontAwesomeIcon
  },
  data(){
    return{
      skills:[
        { list: "レスポンシブ対応" },
        { list: "外部パッケージの使用" },
        { list: "Vue RouterによるSPA" },
        { list: "アニメーションの使用" },
        { list: "FontAwesome" },
        { list: "Googleフォント" }

      ]
    }
  }
}

</script>

<style scoped>
.skills{
  background-color: white;
  width: 100%;
  height:400px;
}

.skills h1{
  text-align: center;
}

.main-skills{
  background-color: white;
  width:400px;
  padding: 15px;
  overflow: hidden;
  margin: 0px auto;
}

.skill-icon{
  float:left;
  width:25%;
  text-align: center;
}

.skill-icon svg{
  font-size: 80px;
}

.html{
  color:#FF6633;
}

.css{
  color:#1E90FF;
}

.js{
  color:#FFD700;
}

.vue{
   /* filter: invert(0); */
  /* mix-blend-mode: difference; */
  color:#2E8B57;

   stroke:gold;
}
.vue path{
    /* mix-blend-mode: difference; */
  stroke:gold;
  background-color: black;
}


.otherskills ul{
  width:300px;
  margin: 0 auto;
  padding: 20px 0px;
}


/* ＊＊＊＊＊＊＊＊＊＊ */
/* レスポンシブ */
/* ＊＊＊＊＊＊＊＊＊＊ */
@media(max-width:460px){
  .main-skills{
    width:100%;
      padding: 0px;
  }
  .skill-icon svg{
    font-size: 40px;
  }

}

</style>
