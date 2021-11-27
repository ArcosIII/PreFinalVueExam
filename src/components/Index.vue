<template>
  <fragment>
    <b-row>
      <b-col>
        <b-card-group deck>
          <fragment v-for="[i, row] in rows"
                    :key="i">
            <ItemCard v-for="item in row"
                      class="mb-4"
                      :key="item.id"
                      v-bind="item"/>
            <div class="w-100" />
          </fragment>
        </b-card-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-link to="/cart"> Show cart </b-link>
      </b-col>
    </b-row>
  </fragment>
</template>

<script>
 import ItemCard from './ItemCard.vue';

 export default {
   name: 'Index',
   data() {
     return {
       cart: {}
     }
   },
   computed: {
     nonZeroItems() {
       return this.items.filter(x => x.quantity > 0);
     },
     rows() {
       let items = this.nonZeroItems;
       var rows = [];
       var i;
       for (i = 0; i < items.length; i += 3) {
         rows.push([i, items.slice(i, i + 3)])
       }

       return rows;
     }
   },
   components: {
     ItemCard
   },
   props: {
     items: Array
   }
 }
</script>
