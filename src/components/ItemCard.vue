<template>
  <b-card
    :img-src="img"
    no-body>
    <b-card-body class="h-100 d-flex flex-column">
      <b-card-title> {{ name }} </b-card-title>
      <div class="mt-auto">{{quantity}} available</div>
      <div>{{price}} each</div>
      <b-button variant="primary" :to="`/items/${id}`"> See details </b-button>
    </b-card-body>
  </b-card>
</template>

<script>
 export default {
   name: 'ItemCard',
   props: {
     id: Number,
     name: String,
     price: Number,
     quantity: Number,
     img: String
   }
 }
</script>
