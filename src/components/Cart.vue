<template>
  <fragment>
    <b-row>
      <b-col>
        <b-list-group>
          <b-list-group-item v-for="item in Object.values(cart)"
                             :key="item.id"
                             class="d-flex justify-content-between">
            <span> {{item.name}} </span>
            <span> {{item.counter}} </span>
          </b-list-group-item>
          <b-list-group-item v-for="item in Object.values(cart)"
                             :key="item.id"
                             class="d-flex justify-content-between">
            <span> Total </span>
            <span> {{total_price}} </span>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-input-group prepend="Coupon">
          <b-input/>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-input-group prepend="Available cash">
          <b-input v-model="available"/>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button @click="tryCheckout" class="w-100" variant="primary"> Checkout </b-button>
      </b-col>
    </b-row>
    <b-row v-if="message">
      <b-col>
        {{message}}
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-link to="/"> Main menu </b-link>
      </b-col>
    </b-row>
  </fragment>
</template>

<script>
 export default {
   name: 'Cart',
   data() {
     return {
       message: "",
       available: 0
     }
   },
   methods: {
     tryCheckout () {
       if (this.available >= this.total_price) {
         this.message = "Checkout successful"
       } else {
         this.message = "Not enough"
       }
     }
   },
   computed: {
     total_price() {
       var sum = 0;
       for (const x of Object.values(this.cart)) {
         sum += x.price * x.counter;
       }

       return sum;
     }
   },
   props: {
     items: Array,
     cart: Object
   }
 }
</script>
