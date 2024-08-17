<script>
export default {
  name: 'SummaryProps',
  props: {
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <p class="summary">{{ description }}</p>
</template>
