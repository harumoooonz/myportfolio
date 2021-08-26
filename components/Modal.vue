<template >
<div>

 <div class="overlay" v-on:click="$emit('close-modal')">
    <div class="content" v-on:click.stop="">
        <slot class="image" name="image"></slot>
        <slot class="title" name="title"></slot>
        <slot class="comment" name="comment"></slot>
        <slot class="skill" name="skill"></slot>
        <slot class="url" name="url"></slot>

        <button type="button" name="button"
        v-on:click="$emit('close-modal')">閉じる</button>


    </div>
  </div>
</div>
</template>

<script>
export default{
  name:"Modal",
}
</script>


<style scoped>
.overlay{
  width:100%;
  height:100%;
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.5);
}

.content{
  z-index:10;
  width:200px;
  height:400px;
  background-color: white;
  position: absolute;
  top:0;
  left:0;
  right: 0;
  bottom:0;
  margin: auto;
}

/* モーダルの中身 */
.content > *:nth-child(1){
  width:100%;
  height:50%;
}
.content img{
  width:100%;
  height:100%;
  overflow:auto;
}

.content > *:nth-child(2){
  margin:10px 0px;
  text-align: center;
  color:#3CB371;
}
.content > *:nth-child(3){
  text-align: center;
  font-size: 15px;
  color:#666666;
}
.content > *:nth-child(4){
  margin-top:20px;
  text-align: center;
  color:#008BBB;
  font-size: 16px;
  font-weight: bold;
}
.content > *:nth-child(5){
  text-align: center;
  color:red;
}

button{
  width:100px;
  height:40px;
  display:block;
  margin: 10px auto;
  color:white;
  background-color: #777777;
}

/* ＊＊＊＊＊＊＊＊＊＊ */
/* レスポンシブ */
/* ＊＊＊＊＊＊＊＊＊＊ */
@media(max-width:699px){
  .content{
    width:300px;
    height:500px;
  }
  .content > *:nth-child(2){
  margin:2px 0px;
  font-size: 18px;
  }
  .content > *:nth-child(3){
    font-size: 13px;
  }
  .content > *:nth-child(4){
    margin-top:5px;
    font-size: 14px;
  }
}

@media(min-width:700px){
  .content{
    width:550px;
    height:500px;
  }
}


</style>
