<template>
  <div>
    <div class="sample">
      <h1>SAMPLE</h1>

      <div class="examples">
        <div class="mywork"
          v-for="(sample,e) in sampleArray"
          v-bind:key="e"
          v-bind:class="sample.class">
          <img v-bind:src="sample.image" alt="イメージ" />
              <h2 class="titlename">
                {{sample.title}}
              </h2>
            <button
              type="button"
              name="button"
              v-on:click="openModal(sample.id)"
            >詳細をみる</button>
        </div>
      </div>


      <Modal v-show="modalstatus" v-on:close-modal="closeModal">
        <template v-slot:image>
          <div>
              <img v-bind:src="contents.image" alt="イメージ" />
          </div>
        </template>
        <template v-slot:title>
          <h2>{{contents.title}}</h2>
        </template>
        <template v-slot:comment>
          <div>{{contents.comment}}</div>
        </template>
        <template v-slot:skill>
          <div>{{contents.skill}}</div>
        </template>
        <template v-slot:url>
          <div>{{contents.url}}</div>
        </template>
      </Modal>

    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

// 写真インポート
import hairsalonsite from "../assets/hairsalonsite.png";
import mydiary from "../assets/mydiary.png";
import cafe from "../assets/cafe.png";


export default{
  name:"Sample",
  components:{
    Modal
  },
  data(){
    return{
      sampleArray:[
        { id:0,
          image:hairsalonsite,
          title:"Hair Salon サイト",
          comment:"よくある基本的な構成のサイトです。テーマはナチュラル、よくあるLPの構成にしました。GoogleMapのAPI取得をし、WEBページに組み込みました。",
          skill:"HTML, CSS, JavaScript, jQuery,レスポンシブ対応,ajax",

          url:"http://xxx",
          class:"work-zero"
        },
        {
          id:1,
          image:mydiary,
          title:"日記アプリ",
          comment:"自分の体調や仕事を点数化して平均を取ることで、日常の評価を可視化し、簡単に把握することができます。",
          skill:"Vue.js",
          url:"http://yyy",
          class:"work-one"
        },
        {
          id:2,
          image: cafe,
          title:"Cafe サイト",
          comment:"植物と自然の中で楽しむカフェをテーマのサイト。レスポンシブ対応。スムーススクロール、ドロップダウンメニュー、ボタンによるナビメニュー表示。",          
          skill:"HTML,CSS,JavaScript,レスポンシブ対応",
          url:"http://ppp",
          class:"work-two"

        }
      ],
      modalstatus :false,
      contents : {}
    }
  },
  methods:{
    openModal(n){
      const content = this.sampleArray[n];
      this.contents = content;
      this.modalstatus = true;
    },
    closeModal(){
      this.modalstatus = false;
    }
  }
}

</script>

<style scoped>
.sample{
  background-color: white;
  width:100%;
}

.sample h1{
  text-align: center;
}

.examples{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.mywork{
  width:48%;
  height:350px;
  margin-bottom:20px;
}

.mywork img{
  width:100%;
  height:70%;
  overflow: hidden;
}
.mywork h2{
  text-align: center;
  margin: 10px 0px;
}

.mywork button{
  width:150px;
  height:50px;
  display: block;
  margin:0 auto;
}


/* ＊＊＊＊＊＊＊＊＊＊ */
/* レスポンシブ */
/* ＊＊＊＊＊＊＊＊＊＊ */

@media(max-width:500px){
  .examples{
    display: block;
  }
  .mywork{
    width:100%;
    margin-bottom:50px;
  }
  .mywork h2{
    margin-top:0px;
  }

  .examples{


  }
}
  @media(min-width:1000px){
    .mywork{
      /* margin: 25px; */
    }
}

</style>
