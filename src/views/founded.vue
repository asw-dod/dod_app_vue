<template>
  <ion-page>
    <ion-toolbar>
      <ion-title>D.O.D Dap announcement</ion-title>
    </ion-toolbar>
    <ion-content :fullscreen="true">
      <ion-row class="row1">
        <ion-grid>
          <!--학사공지-->
          <ion-col>
            <h1 class="note_title">취업 공지</h1>
            <!--for 문으로 리스트 데이터를 가지고 온다.-->
            <ion-card class="table1" :style="{ overflow: 'scroll' }">
              <ion-card-header v-for="item in job_announcement" :key="item">
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
          <ion-fab-button @click="info_button" color="light">
            <ion-icon :icon="information"></ion-icon>
          </ion-fab-button>
          <ion-fab-button @click="refresh_button" color="light">
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
  IonToolbar,
  IonTitle,
  IonContent,
  toastController,
  alertController,
} from "@ionic/vue";
import { settings, refresh, information, checkbox } from "ionicons/icons";
import axios from "axios";
export default defineComponent({
  name: "Tab3Page",
  components: { IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    return {
      settings,
      refresh,
      information,
      checkbox,
    };
  },
  data() {
    return {
      job_announcement: [],
      internship: [],
    };
  },
  methods: {
    async info_button() {
      const alert = await alertController.create({
        header: "App info",
        message: "Made: INMD1 버전: 0.0.1",
        buttons: ["OK"],
      });
      await alert.present();
    },
    //만약에 파싱이 안될경우 사용자가 직접 파싱 할수 있게 버튼을 추가함
    async refresh_button() {
      let message_title = "";
      let today = new Date();
      try {
        const response = await axios.get(
          "https://api.github.com/repos/asw-dod/dap-macro/issues"
        );
        const json = JSON.parse(response.data[0].body);
        this.job_announcement = json["취업공지"].notice;
        message_title = " 정상적으로 새로고침 되었습니다";
      } catch (error) {
        message_title = "오류가 발생 했습니다 관리자한데 문의해주십시오";
      }
      //메세지를 보내는 코드
      const toast = await toastController.create({
        position: "bottom",
        icon: checkbox,
        header: message_title,
        message: today.toLocaleString(),
        duration: 1500,
      });
      return toast.present();
    },
  },
  async mounted() {
    //처음부터 파싱을 함
    const response = await axios.get(
      "https://api.github.com/repos/asw-dod/dap-macro/issues"
    );
    const json = JSON.parse(response.data[0].body);
    this.job_announcement = json["취업공지"].notice;
    this.internship = json["인턴십"].notice;
  },
});
</script>
