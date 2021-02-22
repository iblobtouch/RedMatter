<template>
  <v-card class="mx-auto">
    <v-card-title v-model="name">
      {{ name }}
    </v-card-title>
    <v-card-text>
      <div v-for="matter in matters" :key="matter.id">
        <v-icon :color="matter.colour">mdi-checkbox-blank-circle</v-icon>
        <a>{{ matter.amount }}</a>
      </div>
      <v-divider></v-divider>
      <v-slider
        v-model="growthRate"
        hint="Matter growth rate"
        max="100"
        min="0"
      ></v-slider>
      <a>{{ growthRate }}</a>
    </v-card-text>

    <v-card-actions> </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Reactor from "./scripts"
export default Reactor
</script>

<style scoped lang="scss" src="./styles.scss"></style>
