<template>
  <div>
    <header>
      My Trello
    </header>

    <main>
      <p class="info-line">All: {{ totalCardCount }} tasks</p>


      <draggable :list="lists" class="list-index" @end="movingList">

        <list v-for="(item, index) in lists" :key="item.id" :title="item.title" :cards="item.cards" :listIndex="index" @change="movingCard"/>

        <ListAdd/>

      </draggable>

    </main>
  </div>

</template>

<script>

import ListAdd from "./ListAdd";
import List from "./List";
import draggable from "vuedraggable";
import { mapState } from 'vuex'

export default {
  name: "Board",
  components:{
    ListAdd,
    List,
    draggable
  },
  computed:{
    ...mapState(['lists']),
    totalCardCount(){
      return this.$store.getters.totalCardCount
    }
  },
  methods:{
    movingCard: function (){
      this.$store.dispatch('updateList',{ lists: this.lists })
    },
    movingList: function (){
      this.$store.dispatch("updateList", { lists: this.lists })
    }
  }
}
</script>

<style scoped>

</style>