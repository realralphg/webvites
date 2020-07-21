<template>
  <q-layout view="lHh Lpr lFf">
<!--Header/Toolbar-->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="lt-md"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <a href="/"><img src="images/logos/logo1240.png" style="height: 40px; max-width: 40px; padding-top: 5px;"></a>

        <q-toolbar-title class="text-weight-light text-h6">
          <router-link to="/" tag="span" style="cursor: pointer"> Wedvytes </router-link>
        </q-toolbar-title>

        <q-space/>

          <q-btn no-caps flat class="gt-sm row" v-for="link in essentialLinks" :key="link.id" :to="link.to" exact clickable>
            <div class="column justify-center">
              <q-icon :name="link.icon" class="q-mr-xs" size="18px"/>
            </div>

            <div class="column q-mr-md">
              <q-item-label>{{link.label}}</q-item-label>
            </div>
          </q-btn>        
      </q-toolbar>
    </q-header>

<!-- Footer -->
    <q-footer>
      <div class="text-center bg-grey-10">
        <div class="text-grey-5">Copyright 2020</div>
        <div class="text-grey-5">www.wedvytes.com</div>
        <div class="text-grey-6">By Greysoft Technologies</div>
        <q-btn no-caps color="secondary" flat @click="disclaimer=true"> Disclaimer </q-btn>
      </div>
    </q-footer>

<!-- Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"      
      :width="250"
      content-class="bg-primary"
    >
      <q-list>
        <q-item-label
          header
          class="text-white text-h5 text-weight-light"
        >
          Wedvytes
        </q-item-label>

        <q-item class="text-grey-5" v-for="link in essentialLinks" :key="link.id" :to="link.to" exact clickable>
          <q-item-section avatar>
            <q-icon :name="link.icon"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{link.label}}</q-item-label>
          </q-item-section>
        </q-item>

<!-- Contact Professionals -->
        <q-item-section side>
          <div class="row text-grey q-ml-md">
            <div class="column justify-center">
              <q-icon name="contacts" size="25px"></q-icon>
            </div>
            
            <div class="column q-pl-md">
              <q-btn no-caps flat @click="contactProfessionals=true"> Professional Contacts </q-btn>
            </div>
          </div>
        </q-item-section>                          

<!-- Refer -->
        <q-item-section side>
          <div class="row text-secondary q-ml-md">
            <div class="column justify-center">
              <q-icon name="payment" size="25px"></q-icon>
            </div>
            
            <div class="column q-pl-md">
              <q-btn no-caps flat @click="refer=true"> Refer & Get Paid </q-btn>
            </div>
          </div>
        </q-item-section>
        
<!-- Credits -->
        <q-item-section side>
          <div class="row text-grey q-ml-md">
            <div class="column justify-center">
              <q-icon name="camera" size="25px"></q-icon>
            </div>
            
            <div class="column q-pl-md">
              <q-btn no-caps flat @click="credits=true"> Credits </q-btn>
            </div>
          </div>
        </q-item-section>                          
      </q-list>
    </q-drawer>

    <!-- Dialogs -->
    <q-dialog v-model="contactProfessionals">
      <ContactProfessionals/>
    </q-dialog> 

    <q-dialog v-model="refer">
      <Refer/>
    </q-dialog>     

    <q-dialog v-model="credits">
      <Credits/>
    </q-dialog> 

    <q-dialog v-model="disclaimer">
      <Disclaimer/>
    </q-dialog> 

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>        

<script>
import Refer from '../components/Dialogs/Refer'
import Credits from '../components/Dialogs/Credits'
import ContactProfessionals from '../components/Dialogs/ContactProfessionals'
import Disclaimer from '../components/Dialogs/Disclaimer'
export default {
  name: 'MainLayout',
  components:{
    Refer,
    Credits,
    ContactProfessionals,
    Disclaimer
  },
  data () {
    return {
      refer: false,
      credits: false,
      contactProfessionals: false, 
      disclaimer: false,     
      leftDrawerOpen: false,
      essentialLinks: [
        {
          label: 'Home',
          icon: 'house',
          to: '/'
        },
        {
          label: 'Sample',
          icon: 'favorite_border',
          to: '/sample'
        },
        {
          label: 'How it Works',
          icon: 'format_list_bulleted',
          to: '/how'
        },
        {
          label: 'Place Order',
          icon: 'loyalty',
          to: '/placeorder'
        },        
        {
          label: 'Contact Us',
          icon: 'call',
          to: '/contactus'
        }
      ]
    }
  }
}
</script>

<style scoped>
.q-router-link--exact-active{
  color: white !important;
}

.fixed-bottom{
  position:absolute;
}
</style>