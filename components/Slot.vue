<template>

  <div class="content">
  <header>
    <slot name="head"></slot>
  </header>

  <p>これは共通で表示される</p>

  <slot></slot>
  <hr>
  <slot name="body"></slot>
</div>

</template>

<script>
export default{
  name:"SlotTest"
}


</script>

<style>

</style>
