<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" :scrollX="true" :scrollY="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list scrollY="true">
        <ion-item v-for="post in posts" :key="post.id" @click="postClick(post)">
          <ion-label>
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
      <br>
      <ion-button @click="buttonClick">Clique</ion-button>
    </ion-content>

    <!-- <ion-tabs>
      <ion-router-outlet style="height:1px';"></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-label>Blog</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab1" href="/tabs/teste">
          <ion-label>Teste</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/elton">
          <ion-label>Elton</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/ezoom">
          <ion-label>Ezoom</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs> -->

  </ion-page>
</template>

<script lang="ts">
  import {
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonIcon,
    IonTitle, 
    IonToolbar,
    IonTabBar, 
    IonTabButton, 
    IonTabs,
    IonItem, 
    IonLabel, 
    IonList,
    alertController,
    onIonViewDidEnter,
  } from '@ionic/vue'
  import { defineComponent, ref, onMounted } from 'vue'
  import {Posts } from './../models/Posts'
  import { useRouter } from 'vue-router';
  import apiService from './../ApiService';

  export default defineComponent({
    name: 'HomePage',
    components: {
      IonButtons, 
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonIcon,
      IonTitle, 
      IonToolbar,
      IonTabBar, 
      IonTabButton, 
      IonTabs,
      IonItem, 
      IonLabel, 
      IonList,
      alertController,
    },
    setup() {
      const posts = ref<Posts[]>([]);
      const route = useRouter();

      async function load(){
        posts.value = await apiService.fetchPosts();

        console.log(posts)
      }

      const buttonClick = () => {
       console.log('134')
      }
      const postClick = (post: Posts) => {
        route.push(`/detail/${post.id}`);
      }

      onMounted(() => {
        load()
      })

      return { buttonClick, postClick, posts }
    },
  })
</script>

