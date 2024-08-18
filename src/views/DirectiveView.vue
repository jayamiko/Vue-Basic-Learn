<script>
import Introduction from '@/components/Introduction.vue'

const title = 'Directives (V-On, V-If, V-Model)'
const description = `
    Directives are special attributes provided by Vue.js 3,
    which we can use in templates. Apart from that,
    directives also add reactive behavior to the DOM
    (a JavaScript way of representing elements on a web page).
`

function PersonalData(form) {
  this.name = form.name
  this.age = form.age
  this.position = form.position
  this.education = form.education
  this.field = form.field
  this.hobbies = form.hobbies
}

export default {
  name: 'DirectivePage',
  components: {
    Introduction
  },
  data() {
    return {
      title: title,
      description: description,
      form: {
        name: '',
        age: 0,
        position: 'Programmer',
        education: 'SMK',
        field: '',
        hobbies: []
      },
      data: null
    }
  },
  methods: {
    submit() {
      this.data = new PersonalData(this.form)
    }
  }
}
</script>

<setup>

</setup>

<template>
  <div class="container">
    <Introduction :title="title" :description="description" />

    <br />
    <br />

    <section id="case">
      <form id="form" @submit.prevent="submit">
        <!-- TEXT INPUT -->
        <label for="name">Name :</label>
        <input type="text" name="name" class="name-input" v-model="form.name" required />

        <br />
        <!-- Number INPUT -->
        <label for="age">Age :</label>
        <input type="number" name="age" class="age-input" v-model="form.age" required />

        <br />
        <!-- Select Options INPUT -->
        <label for="position">Position :</label>
        <select name="position" class="select-input" v-model="form.position" value="Programmer">
          <option value="Programmer">Programmer</option>
          <option value="Data Science">Data Science</option>
          <option value="Data Analyst">Data Analyst</option>
          <option value="Dev Ops">Dev Ops</option>
        </select>

        <br />
        <!-- Radio Options INPUT -->
        <label for="education">Last Education :</label>
        <input type="radio" id="smk" name="education" value="SMK" v-model="form.education" />
        <label for="smk">SMK</label>
        <input type="radio" id="s1" name="education" value="S1" v-model="form.education" />
        <label for="s1">S1</label>

        <br />
        <!-- INPUT BY CONDITIONAL -->
        <div v-if="form.education === 'S1'">
          <label for="education">Take a field :</label>
          <input type="text" name="field" v-model="form.field" />
        </div>

        <!-- Radio Options INPUT -->
        <label for="education">Your Hobbies :</label>
        <input
          type="checkbox"
          id="football"
          name="football"
          value="football"
          v-model="form.hobbies"
        />
        <label for="football">Football</label>
        <input type="checkbox" id="coding" name="coding" value="coding" v-model="form.hobbies" />
        <label for="coding">Coding</label>
        <input type="checkbox" id="reading" name="reading" value="reading" v-model="form.hobbies" />
        <label for="reading">Reading Book</label>

        <br />
        <button type="submit">SUBMIT</button>
      </form>

      <!-- PREVIEW -->
      <div id="preview" v-if="data">
        <p>Name: {{ data.name }}</p>
        <p>Age: {{ data.age }} years old</p>
        <p>Position: {{ data.position }}</p>
        <p>Last Education: {{ data.education }}</p>
        <p v-if="data.education === 'S1'">Your Field: {{ data.field }}</p>
        <p v-if="data.hobbies.length > 0">Your Hobbies: {{ data.hobbies }}</p>
        <br />
      </div>
    </section>
  </div>
</template>

<style>
#case {
  width: 100%;
  border: solid red 2px;
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

#form,
#preview {
  border: solid blue 2px;
  width: 50%;
  height: 500px;
}

.name-input {
  width: 200px;
  padding: 2px 5px;
  margin: 4px;
}

button {
  background-color: brown;
  color: aliceblue;
  font-weight: bold;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
