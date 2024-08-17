<script>
import Heading from './Heading.vue'
import Description from './Summary.vue'

const StringRequired = {
  type: String,
  require: true
}

export default {
  name: 'IntroductionComponent',
  components: {
    Heading,
    Description
  },
  props: {
    title: StringRequired,
    description: StringRequired
  }
}
</script>

<template>
  <div class="head">
    <Heading :name="title" />
    <Description :description="description" />
  </div>
</template>
