<script>
export default {
  name: 'PageHeading',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <h1 class="heading">{{ name }}</h1>
</template>
