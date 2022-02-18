<template>
  <form :class="classList" @submit.prevent="addCardToList">
    <input type="text" v-model="body" class="text-input" @focusin="startEditing" @focusout="finishEditing" placeholder="Add new card">
    <button v-if="isEditing || bodyExists" type="submit" class="add-button">Add</button>
  </form>
</template>

<script>


export default {
  name: "CardAdd",
  props:{
    listIndex:{
      type:Number,
      required: true,
    }
  },
  data: function (){
    return{
      body: "",
      isEditing: false
    }
  },
  computed:{
    classList() {
      const classList = ['addcard']
      if (this.isEditing){
        classList.push('active')
      }

      if (this.bodyExists){
        classList.push('addable')
      }

      return classList
    },

    bodyExists(){
      return this.body.length > 0
    }
  },
  methods: {
    addCardToList: function (){
      this.$store.dispatch('addCardToList',
          {
            body: this.body,
            listIndex: this.listIndex
          }
      )
      this.body = ""
    },
    startEditing: function (){
      this.isEditing = true
    },
    finishEditing: function (){
      this.isEditing = false
    }
  }
}
</script>

<style scoped>

</style>