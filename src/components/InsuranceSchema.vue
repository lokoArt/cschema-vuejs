<template>
  <div class="hello">
    <h1>Fill out the form</h1>
    <label>Schema
      <select v-model="selectedSchema" id="insuranceSchemas">
        <option v-for="schema in schemas" v-bind:value="schema.id">
          {{ schema.name }}
        </option>
      </select>
    </label>

    <div v-if="selectedSchema">
      <template v-for="field in (schemas.find(x => x.id === selectedSchema)).schema">
        <label>
          {{ field.name }}
          <input type="number" v-if="field.type == 'number'"/>
          <input type="text" v-if="field.type == 'text'"/>
          <input type="date" v-if="field.type == 'date'"/>
          <select v-if="field.type == 'enum'">
            <option v-for="option in field.options">
              {{ option }}
            </option>
          </select>
        </label>
        <br/>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        schemas: [],
        selectedSchema: null
      }
    },
    created: function () {
      this.$http.get('schemas/').then(response => {
        this.schemas = response.body
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  input, option, select {
    width: 250px;
    margin-bottom: 10px;
    display: block;
  }
</style>
