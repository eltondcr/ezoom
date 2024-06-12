<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>ID: {{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>  
      <ion-content>
        <div v-if="post">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, } from '@ionic/vue';
  import apiService from './../ApiService';
import { Posts } from '@/models/Posts';
  
  
  export default defineComponent({
    name: 'PostDetails',
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonBackButton,  
    },
    setup() {
      console.log('details')
      const route = useRoute();
      const post = ref<Posts | null>(null);
  
      const fetchPost = async (id: number) => {
        try {
          const _ = await apiService.fetchPost(id);
          console.log(_)
          post.value = _ || null;
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };
  
      onMounted(() => {
        const postId = Number(route.params.id);

        if (!isNaN(postId)) {
          fetchPost(postId);
        }
      });
  
      return {
        post,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Adicione estilos aqui, se necessário */
  </style>
  