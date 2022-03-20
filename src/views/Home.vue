<template>
  <ion-page>
    <ion-row> </ion-row>
    <ion-row class="row1">
      <ion-col>
        <h1>학사공지</h1>
        <!--listview-->
        <!--for 문으로 리스트 데이터를 가지고 온다.-->
        <ion-card class="table">
          <ion-card-header>
            <ion-card-title>Card Title</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonRow, IonCol } from "@ionic/vue";

export default defineComponent({
  name: "Tab1Page",
  components: { IonPage, IonRow, IonCol },
});
</script>

<style>
.topimage {
  height: 30vh;
  width: 100%;
  object-fit: cover;
}
.row1 {
  height: 80vh;
  background-color: aliceblue;
}

.table {
  height: 85%;
}
</style>