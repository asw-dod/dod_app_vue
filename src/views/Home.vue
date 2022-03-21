<template>
  <ion-page>
    <!--header-->
    <ion-toolbar>
      <ion-title>D.O.D Dap notice</ion-title>
    </ion-toolbar>
    <!--body-->
    <ion-content fullscreen>
      <ion-row class="row1">
        <ion-grid>
          <!--학사공지-->
          <ion-col>
            <h1 class="note_title">학사공지</h1>
            <!--for 문으로 리스트 데이터를 가지고 온다.-->
            <ion-card class="table">
              <ion-card-header>
                <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <!--장학공지-->
            <h1 class="note_title">장학공지</h1>
            <!--listview-->
            <!--for 문으로 리스트 데이터를 가지고 온다.-->
            <ion-card class="table">
              <ion-card-header>
                <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <!--장학공지-->
            <h1 class="note_title">기숙사공지</h1>
            <!--listview-->
            <!--for 문으로 리스트 데이터를 가지고 온다.-->
            <ion-card class="table">
              <ion-card-header>
                <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-grid>
      </ion-row>
      <!--버튼-->
      <ion-fab horizontal="end" vertical="bottom" slot="fixed">
        <ion-fab-button color="dark">
          <ion-icon :icon="settings"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="top">
          <ion-fab-button color="light">
            <ion-icon :icon="contrast"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonRow,
  IonCol,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonFab,
  IonFabButton,
  IonFabList,
} from "@ionic/vue";
import { cog, settings, contrast } from "ionicons/icons";
export default defineComponent({
  name: "Tab1Page",
  components: {
    IonPage,
    IonRow,
    IonCol,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
    IonFab,
    IonFabButton,
    IonFabList,
  },
  setup() {
    return { cog, settings, contrast };
  },
  methods: {},
});
</script>
