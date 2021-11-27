<template>
  <div>
    <h1> {{ current_item.name }} </h1>
    <b-form @submit="submit">
      <b-input-group prepend="Quantity" class="mt-3">
        <b-form-input @change="valueSet" v-model="counter"></b-form-input>
        <b-input-group-append>
          <b-button @click="increment" variant="primary"> + </b-button>
          <b-button @click="decrement"> - </b-button>
        </b-input-group-append>
      </b-input-group>
      <b-button variant="primary" type="submit"> Submit </b-button>
      <b-button variant="danger" to="/"> Cancel </b-button>
    </b-form>
  </div>
</template>

<script>
 export default {
   name: 'Detail',
   data () {
     return {
       counter: this.cart[this.$route.params.id] || 0
     }
   },
   computed: {
     current_item() {
       return this.items.find(x => x.id == this.$route.params.id)
     }
   },
   methods: {
     increment() {
       if (this.counter == this.current_item.quantity) return;
       this.counter += 1;
     },
     decrement() {
       if (this.counter == 0) return;
       this.counter -= 1;
     },
     valueSet(newValue) {
       this.counter = Number(newValue);
       if (this.counter > this.current_item.quantity) { this.counter = this.current_item.quantity; }
       if (this.counter < 0) { this.counter = 0; }
     },
     submit() {
       this.$emit("addToCart", this.$route.params.id, {
         ...this.current_item, counter: this.counter
       })
       this.$router.push("/")
     },
   },
   props: {
     items: Array,
     cart: Object
   }
 }
</script>
