<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>  
      <ion-content> 
        <div id="container">
        <strong class="capitalize">Tab page ID: {{ $route.params.id }} </strong>        
      </div>
        
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
    import { 
      IonContent, 
      IonHeader, 
      IonPage, 
      IonTitle, 
      IonToolbar, 
      IonBackButton,  
      IonItem, IonLabel, IonList
    } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { useRoute } from 'vue-router';
    import { arrowBack } from 'ionicons/icons';
  
    export default defineComponent({
      name: 'Tab Page',
      components: {
        IonContent,
        IonHeader,
        IonBackButton,
        IonPage,
        IonTitle,
        IonToolbar,
        IonItem, 
        IonLabel, 
        IonList
      },
      setup() {
        const route = useRoute();
        const { id } = route.params;
        return { id };
      },
    });
  </script>


<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
