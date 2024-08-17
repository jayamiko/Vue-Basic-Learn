<script>
import Introduction from '@/components/Introduction.vue'

const title = 'Declarative Rendering'
const description = `
  Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML
  output based on JavaScript state. Vue automatically tracks JavaScript state changes
  and efficiently updates the DOM when changes happen.
`

export default {
  name: 'DeclarativeRendering',
  components: {
    Introduction
  },
  data() {
    return {
      title: title,
      description: description,
      profile: {
        firstName: 'Jaya Miko',
        lastName: 'Yoga Pratama',
        position: 'Programmer',
        city: 'Jakarta',
        age: 24
      }
    }
  },
  methods: {
    getFullName: (firstName, lastName) => {
      return `${firstName} ${lastName}`
    }
  },
  mounted() {
    this.age = this.age + 1
  }
}
</script>

<template>
  <div class="container">
    <Introduction :title="title" :description="description" />

    <br />
    <br />

    <section id="case">
      <form class="formulir">
        <p class="label">Full Name: {{ getFullName(profile.firstName, profile.lastName) }}</p>
        <p class="label">Position: {{ profile.position }}</p>
        <p class="label">City: {{ profile.city }}</p>
        <p class="label">Age: {{ profile.age }}</p>
      </form>
    </section>
  </div>
</template>

<style>
#case {
  width: 100%;
}

.formulir {
  margin-top: 50px;
  display: block;
  justify-content: center;
}

.label {
  margin: 5px 0px;
}
</style>
