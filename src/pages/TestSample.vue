<template>
  <h1 class="font:40 font:heavy italic m:50 text:center"> 
    {{ animateName }}
  </h1>
  <div class="d:flex flex-wrap:wrap gap:8 gap-y:8 w:628px h:auto">
    <div class="square-box normal-box d:flex ai:center jc:center">
      <div class="solid-circle move-animate"></div>
    </div>
    <div class="square-box normal-box"></div>
    <div class="square-box rel d:flex ai:center jc:center">
      <div class="shine-animate"></div>
      <div class="solid-circle move-animate"></div>
    </div>
    <div class="square-box normal-box"></div>
    <div class="square-box rel">
      <div class="shine-animate"></div>
    </div>
    <div class="square-box normal-box"></div>
    <div class="square-box normal-box d:flex ai:center jc:center">
      <div class="solid-circle move-animate"></div>
    </div>
    <div class="square-box normal-box"></div>
    <div class="square-box rel d:flex ai:center jc:center">
      <div class="shine-animate"></div>
      <div class="solid-circle move-animate"></div>
    </div>
  </div>
</template>

<script setup>
import "@master/css"
import { ref, onMounted } from 'vue'
const animateName = ref("move-animate");
const switchClass = () => {
  let elements = document.getElementsByClassName("solid-circle");
  let changeName;
  if (animateName.value === "move-animate") {
    changeName = "move-animate-two";
  } else {
    changeName = "move-animate";
  }

  for(var i = 0; i < elements.length; i++) {
    elements[i].classList.add(changeName);
    elements[i].classList.remove(animateName.value);
  }
  animateName.value = changeName;
}
onMounted(() => {
  setInterval(() => {
     switchClass();
  }, 3000);
});
</script>

<style lang="sass" scoped>
@mixin animate($animation,$duration,$method,$times)
  animation: $animation $duration $method $times
  @content

@mixin keyframes($name)
    @keyframes #{$name}
      @content

body
  background: white !important

.square-box
  width: 200px
  height: 100px
  border: black solid 2px

.normal-box
  background: radial-gradient(circle, rgba(113,81,95,1) 81%, rgba(0,0,0,1) 100%)

.shine-animate
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: -1
  background: radial-gradient(circle, rgba(113,81,95,1) 81%, rgba(0,0,0,1) 100%)
  @include keyframes(fade)
    0%
      opacity: 1
    50%
      opacity: 0.6
    100%
      opacity: 1 
  @include animate(fade, 1s, normal, infinite)

.move-animate
  position: relative
  @include keyframes(movement)
    from
      left: 0px
    to
      left: 500px
  animation: movement 3s linear infinite

.move-animate-two
  position: relative
  @include keyframes(movement_two)
    from
      transform: translateX(0px)
    to
      transform: translateX(500px)
  animation: movement 3s linear infinite

.solid-circle
  border: black solid 2px
  border-radius: 50%
  width: 30px
  height: 30px
  background-color: #a5f12b
  z-index: 2

</style>
