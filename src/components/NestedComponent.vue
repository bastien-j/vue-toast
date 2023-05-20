<template>
  <div class="nested">
    Nested component
    <button @click="$toaster.success('Seems to work from the nested component!')">success!</button>
  </div>
</template>
