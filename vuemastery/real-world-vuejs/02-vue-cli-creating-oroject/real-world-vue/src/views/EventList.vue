<template>
  <div>
    <h1>Events Listings</h1>
    <EventCard />

    <router-link :to="{ name: 'event-show', params: { id: 12 } }"
      >Show Event #1</router-link
    >
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  components: {
    EventCard
  }
}
</script>

<style lang="scss">
$color: #ff0000;

h1 {
  background-color: $color;
}
</style>
