<template>
  <div>
    <div class="top">
      <div class="top-box right">

        <h1 class="name">
          <WavingText
            text="Hi,I'm HarukaOgawa!"
            duration="1.0"
            side="30"
            fontsize="50"
            textClass="titlename"
            fromcolor="#FF0000"
            tocolor="#FF6633"
            />
            <WavingText
              text="Welcome to my portfolio."
              duration="1.0"
              side="30"
              fontsize="20"
              textClass="minititle"
              fromcolor="#FF0000"
              tocolor="#FF6633"
            />

        </h1>

        <p class="overview">
          看護師からフロントエンドエンジニアへ<br/>の転職を目指しています。
        </p>
      </div>
        <div class="top-box left">
          <div class="inside-circle">
            <img src="../assets/myavator.jpg" alt="top">
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import WavingText from 'vue-waving-text';

export default {
  name: 'Top',
  components:{
    WavingText: WavingText
  }

}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');


/* 配置 ＊＊＊＊＊＊＊＊＊＊*/
.top{
  background-color: white;
  overflow: hidden;
  height:500px;
}

.top-box{
  float:right;
}

.left{
  width:45%;
  height:500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right{
  background-color: white;
  width:55%;
  height:500px;
}

/* 中身 */
.name{
  background-color: white;
  font-size: 80px;
  height:50%;
  text-align: center;
  color:#FF6633;
  font-family: 'Arvo', serif;
  margin:50px 0px;
}

.wavetext{
  margin-top: 40px 0px;
}

.overview{
  background-color: white;
  text-align:center;
  font-size: 20px;
  color:#777777;
}

/* トップ画 */

.inside-circle{
  background-color: #FFCC00;
  width:350px;
  height:350px;
  border-radius: 50%;
  margin: auto;
  z-index:0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 30px #FF9966;

}
.left img{
  width:90%;
  height:90%;
  z-index: 1;
  border-radius: 50%;
}


/* ＊＊＊＊＊＊＊＊＊＊ */
/* レスポンシブ */
/* ＊＊＊＊＊＊＊＊＊＊ */
@media(max-width:500px){
.top{
  height:1000px;
}

.top-box{
    clear:both;
  }

.left, .right{
  width:100%;
}

.name{
  font-size: 30px;
}
}

</style>
