<template>
  <ion-page>
    <!--body-->
    <ion-content fullscreen>
      <!--header-->
      <ion-toolbar>
        <ion-title>D.O.D announcement</ion-title>
      </ion-toolbar>
      <ion-row class="row1">
        <ion-grid>
          <ion-col>
            <h1 class="note_title">식단공지</h1>
            <ion-slides>
              <ion-slide>
                <ion-col>
                  <h1 class="food_title">정보관</h1>
                  <ion-card class="food_table">
                    <ion-card-header class="food_title">
                      <ion-card-title>정보공학관 코너1</ion-card-title>
                      <ion-card-title>{{
                        this.inforamtion["cor1"]
                      }}</ion-card-title>
                    </ion-card-header>
                    <ion-card-header class="food_title">
                      <ion-card-title>정보공학관 코너2</ion-card-title>
                      <ion-card-title>{{
                        this.inforamtion["cor3"]
                      }}</ion-card-title>
                    </ion-card-header>
                  </ion-card>
                </ion-col>
              </ion-slide>
              <ion-slide>
                <ion-col>
                  <h1 class="food_title">수덕전</h1>
                  <ion-card class="food_table">
                    <ion-card-header class="food_title">
                      <ion-card-title>수덕전 코너1</ion-card-title>
                      <ion-card-subtitle>TEST</ion-card-subtitle>
                    </ion-card-header>
                    <ion-card-header class="food_title">
                      <ion-card-title>수덕전 코너2</ion-card-title>
                      <ion-card-subtitle>TEST</ion-card-subtitle>
                    </ion-card-header>
                    <ion-card-header class="food_title">
                      <ion-card-title>수덕전 코너3</ion-card-title>
                      <ion-card-subtitle>TEST</ion-card-subtitle>
                    </ion-card-header>
                  </ion-card>
                </ion-col>
              </ion-slide>
            </ion-slides>
          </ion-col>
          <!--학사공지-->
          <ion-col>
            <h1 class="note_title">학사공지</h1>
            <!--for 문으로 리스트 데이터를 가지고 온다.-->
            <ion-card class="table_main" :style="{ overflow: 'scroll' }">
              <ion-card-header v-for="item in Bachelor" :key="item">
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

<script>
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
  IonFab,
  IonFabList,
  toastController,
  alertController,
} from "@ionic/vue";
import {
  cog,
  settings,
  contrast,
  refresh,
  checkbox,
  information,
} from "ionicons/icons";
import axios from "axios";
import dayjs from "dayjs";

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
    IonFab,
    IonFabList,
  },
  setup() {
    return {
      //아이콘
      cog,
      settings,
      contrast,
      refresh,
      checkbox,
      information,
    };
  },
  data() {
    return {
      scholarship: [],
      Bachelor: [],
      dormitory: [],
      inforamtion: [],
      suduck: [],
    };
  },
  methods: {
    async info_button() {
      const alert = await alertController.create({
        header: "App info",
        message: "Made: INMD1 버전: 0.0.2",
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
        if (response.data[0].title.indexOf("DAP") != -1) {
          const json = JSON.parse(response.data[0].body);
          this.Bachelor = json["학사공지"].notice;
        } else {
          console.log(response.data[1].body);
          const json = JSON.parse(response.data[1].body);
          this.Bachelor = json["학사공지"].notice;
        }
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
    //처음부터 파싱을 함;
    let response = "";
    response = await axios.get(
      "https://api.github.com/repos/asw-dod/dap-macro/issues"
    );
    if (response.data[0].title.indexOf("DAP") != -1) {
      const json = JSON.parse(response.data[0].body);
      this.Bachelor = json["학사공지"].notice;
    } else {
      console.log(response.data[1].body);
      const json = JSON.parse(response.data[1].body);
      this.Bachelor = json["학사공지"].notice;
    }

    response = await axios.get(
      "https://raw.githubusercontent.com/asw-dod/Deu_food_api/master/output/api.json"
    );
    async function getfood(typei, data) {
      const time = dayjs().format("YYYY-MM-DD");
      //행복기숙사용
      if (typei == "happy") {
        try {
          for (let index = 0; index < 7; index++) {
            if (data["happy"][index].Date == time) {
              return data["happy"][index];
            }
          }
        } catch (error) {
          return {
            breakfast: "없거나 Api서버 오류 발생",
            lunch: "없거나 Api서버 오류 발생",
            lunch_s: "없거나 Api서버 오류 발생",
            dinner: "없거나 Api서버 오류 발생",
            dinner_s: "없거나 Api서버 오류 발생",
          };
        }
        //효민기숙사용
      } else if (typei == "hyomin") {
        try {
          for (let index = 0; index < 7; index++) {
            if (data["hyomin"][index].Date == time) {
              return data["hyomin"][index];
            }
          }
        } catch (error) {
          return {
            breakfast: "없거나 Api서버 오류 발생",
            lunch: "없거나 Api서버 오류 발생",
            lunch_s: "없거나 Api서버 오류 발생",
            dinner: "없거나 Api서버 오류 발생",
            dinner_s: "없거나 Api서버 오류 발생",
          };
        }
      } else if (typei == "inforamtion") {
        try {
          return {
            cor1: data["inforamtion"]["정보공학관 코너1"][0]["menuName"],
            cor3: data["inforamtion"]["정보공학관 코너3"][0]["menuName"],
          };
        } catch (error) {
          return {
            cor1: "없습",
            cor3: "없습",
          };
        }
      } else if (typei == "suduck") {
        try {
          return {
            cor2: data["suduck"]["수덕전 코너2"][0]["menuName"],
            cor3: data["suduck"]["수덕전 코너3"][0]["menuName"],
          };
        } catch (error) {
          return {
            cor2: "없습",
            cor3: "없습",
          };
        }
      }
    }

    this.inforamtion = await getfood("inforamtion", response.data);
    this.suduck = await getfood("suduck", response.data);
  },
});
</script>
