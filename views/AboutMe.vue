<template>
  <div>
    <div class="aboutme">
      <h1>About Me</h1>

      <div class="about-top">
        <h3>Name</h3>
        <p>小川 遥香 (おがわ はるか)</p>
        <h3>Birth Place</h3>
        <p>東京・池袋</p>
        <h3>BirthDay</h3>
        <p>1990/03/05</p>
        <h3>Licence</h3>
        <p>正看護師</p>
      </div>

        <div class="about-middle">
          <div class="about-box experience">
            <h3>EXPERIENCE</h3>
            <p>新卒から聖路加国際病院、皮膚科・美容皮膚科クリニック、凸版印刷工場内診療所にて計約4年、看護師としての経験を積みました。退職後、自宅で書籍や動画教材を使用しフロントエンドの学習を約半年ほどしています。</p>
          </div>

          <div class="about-box reason">
            <h3>Why ENGINEER ?</h3>
            <p>ITエンジニアとして働く夫の姿を見て自身もプログラミングに挑戦してみたところ「楽しい」と感じ、もっとやってみたいと思った。また、看護師として働く中で産業保健分野において患者のデータ管理や社内情報共有が非常にアナログである現状を知り、ITの力で変えてみたいと思った。</p>
          </div>

          <div class="about-box future">
            <h3>I Will Be...</h3>
            <p>まずはきちんと構想されたデザインを正しく形にできるエンジニアになりたいです。誰にでもわかりやすい綺麗なコードを書けることを目指します。将来的には、医療現場で自分が感じた課題などを解決していけるような、IT技術で医療を支えるようなサービス作りをしていきたいです。</p>
          </div>
        </div>

        <div class="about-bottom">

            <h3>Others</h3>
            <h4>Food</h4>
            <p>野菜・肉・メロンソーダ</p>
            <h4>Hobby</h4>
            <p>ランニング・散歩・家事・洋楽・海外ドラマ・動物・カフェ・美容・医療と健康など</p>
            <h4>Words</h4>
            <p>人種のサラダボウル</p>
            <h4>Weak point</h4>
            <p>寒さに弱い</p>

        </div>
    </div>
  </div>
</template>

<script>
export default{
  name:"AboutMe",
}

</script>

<style scoped>
/* ********** */
/* about 概要 */
/* ********* */
.aboutme{
  background-color: white;
}
.aboutme h1{
  text-align: center;
}

.about-top{
  background-color: white;
  text-align: center;
  border-bottom: dotted 1px black;
}

.about-top h3{
  margin-bottom: 5px;
  color:#;
}
.about-top p{
  margin-top:5px;
}

/* ********** */
/* エンジニアの理由など・・ */
/* ********** */
.about-middle{
  overflow:hidden;
  border-bottom: dotted 1px black;
}

h3{
  color:#87CEFA;
}

.about-box{
  float:left;
  padding: 10px;
  box-sizing: border-box;
}

.experience{
  background-color: white;
  width:50%;
  height:230px;
}

.reason{
  background-color: white;
  width:50%;
  height:230px;
}

.future{
  background-color: white;
}

/* others */
.about-bottom{
  text-align: center;
}


/* ＊＊＊＊＊＊＊＊＊＊ */
/* レスポンシブ */
/* ＊＊＊＊＊＊＊＊＊＊ */
@media(max-width:500px){
.about-box{
    clear:both;
  }

.experience, .reason{
  width:100%;
}
}
</style>
