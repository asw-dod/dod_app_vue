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
            <ion-card class="table" :style="{ overflow: 'scroll' }">
              <ion-card-header v-for="item in Bachelor" :key="item">
                <ion-card-title>{{ item.title }}</ion-card-title>
                <ion-card-subtitle>{{ item.date }}</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <!--장학공지-->
            <h1 class="note_title">장학공지</h1>
            <!--listview-->
            <!--for 문으로 리스트 데이터를 가지고 온다.-->
            <ion-card class="table" :style="{ overflow: 'scroll' }">
              <ion-card-header v-for="item in scholarship" :key="item">
                <ion-card-title>{{ item.title }}</ion-card-title>
                <ion-card-subtitle>{{ item.date }}</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <!--장학공지-->
            <h1 class="note_title">기숙사공지</h1>
            <!--listview-->
            <!--for 문으로 리스트 데이터를 가지고 온다.-->
            <ion-card class="table" :style="{ overflow: 'scroll' }">
              <ion-card-header v-for="item in dormitory" :key="item">
                <ion-card-title>{{ item.title }}</ion-card-title>
                <ion-card-subtitle>{{ item.date }}</ion-card-subtitle>
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
          <ion-fab-button color="light">
            <ion-icon :icon="refresh"></ion-icon>
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
import { cog, settings, contrast, refresh } from "ionicons/icons";
import axios from "axios";
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
    return {
      //아이콘
      cog,
      settings,
      contrast,
      refresh,
    };
  },
  data() {
    return {
      scholarship: [],
      Bachelor: [],
      dormitory: [],
    };
  },
  async mounted() {
    const response = await axios.get(
      "https://api.github.com/repos/asw-dod/dap-macro/issues"
    );
    const json = JSON.parse(response.data[0].body);
    this.Bachelor = json["학사공지"].notice;
    this.scholarship = json["장학공지"].notice;
    this.dormitory = json["기숙사공지"].notice;
    console.log("test");
  },
});
</script>
