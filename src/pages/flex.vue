<template>
  <q-page>
    
    <div class="row q-mb-md">
      <div class="col bg-primary">col bg-primary</div>
      <div class="col bg-secondary">col bg-secondary</div>
      <div class="col bg-accent">col bg-accent</div>
    </div>

    <div class="row q-mb-md"> <!-- 12 slots -->
      <div class="col bg-primary">col bg-primary</div>
      <div class="col-6 bg-secondary">col-6 bg-secondary</div>
      <div class="col-4 bg-accent">col-4 bg-accent</div>
    </div>

    <div class="row q-mb-md justify-center">
      <div class="col-4 bg-primary">justify-center col-4 bg-primary</div>
      <div class="col-4 bg-secondary">justify-center col-4 bg-secondary</div>
    </div>

    <div class="row q-mb-md justify-end">
      <div class="col-4 bg-primary">justify-end col-4 bg-primary</div>
      <div class="col-4 bg-secondary">justify-end col-4 bg-secondary</div>
    </div>

    <div class="row q-mb-md justify-between">
      <div class="col-4 bg-primary">justify-between col-4 bg-primary</div>
      <div class="col-4 bg-secondary">justify-between col-4 bg-secondary</div>
    </div>

    <q-separator spaced />

    <div class="row q-mb-md justify-around">
      <div class="col-12 col-sm-5 col-md-4 bg-primary">col-6 bg-primary</div>
      <div class="col-12 col-sm-5 col-md-4 bg-secondary">col-6 bg-secondary</div>
    </div>

    <q-separator spaced />

    <div class="row q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="row justify-between q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="row justify-end q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="row justify-around q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column items-center q-mb-md bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column items-end q-mb-md bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column custom-height items-center justify-center q-mb-md bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column custom-height items-center justify-between q-mb-md bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column custom-height items-center justify-between q-mb-md bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box self-end bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>


    
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>

<style scoped>
  .col, .col-4, .col-6, .col-12 {
    height: 50px;
  }

  .square-box {
    height: 50px;
    width: 50px;
  }

  .custom-height {
    height: 300px;
  }
</style>
