<template>
  <div>
      <div>
          <q-carousel
              v-model="slid"
              autoplay
              swipeable
              animated
              infinite
              control-color="secondary"
              :navigation="navigation"
              :navigation-position="navPos"
              height="350px"
              class="bg-grey-8 text-white"
              >

              <q-carousel-slide :name="carousel.name" class="q-pa-none" v-for="carousel in topCarousel" :key="carousel.id">
                  <div>
                      <q-img :src="carousel.imageUrl" height="350px"/>
                      <div class="custom-caption absolute-bottom text-white text-h5 text-weight-light">
                      <!-- {{ meetup.title }} -->
                      </div>
                  </div>
              </q-carousel-slide>
          </q-carousel>

      </div>

      <div class="bg-grey-8">
        <div class="text-center">
          <img src="images/divider.png" alt="" width="80%" >
        </div>        
        <div class="text-weight-light text-h5 text-grey-3 text-center">
          Virtual or in-person, Wedvites make your wedding rock! <br> Here's how...
        </div>
        <div class="text-center">
          <img src="images/divider.png" alt="" width="80%" >
        </div>
        <div class="row wrap q-pa-lg justify-center text-white">
          <div class="shade col-sm-3 text-center q-pr-md q-pl-md">
            <q-icon name="dashboard" color="white" size="50px"/>
            <p>We create a web app for your wedding, sharing your favorite moments in pictures and texts. </p> 
          </div>
          <div class="shade col-sm-3 text-center q-pr-md q-pl-md">
            <q-icon name="event" color="white" size="50px"/>
            <p>You'll get your own personalized, highly secured and prestigious link e.g Ruth & Barnabas 
              (Ruban2020.com) which becomes your trusted digital IV for RSVPs. </p> 
          </div>
          <div class="shade col-sm-3 text-center q-pr-md q-pl-md">
            <q-icon name="payment" color="white" size="50px"/>
            <p>We embed a payment solution so your loved ones can send cash of gift equivalent 
              straight to your bank account of choice. </p> 
          </div>
          <div class="shade col-sm-3 text-center q-pr-md q-pl-md">
            <q-icon name="card_giftcard" color="white" size="50px"/>
            <p>We also have a Gift Registry to give your loved ones an idea of the type of gifts 
              you'd like them to get for you or send cash equivalent. </p> 
          </div>   
          <div class="shade col-sm-3 text-center q-pr-md q-pl-md">
            <q-icon name="panorama" color="white" size="50px"/>
            <p>The best part - we upload post-wedding pictures so everyone can enjoy your gallery
              after the wedding. </p> 
          </div> 
          <div class="shade col-sm-3 text-center q-pr-md q-pl-md">
            <q-icon name="thumb_up" color="white" size="50px"/>
            <p>All this, for a surprisingly inexpensive price. <br> <router-link to="/how" class="text-secondary"> Here's How it works</router-link> </p> 
          </div>                                  
        </div>
        <div class="text-center">
          <img src="images/divider.png" alt="" width="80%" >
        </div>          
      </div>

<!-- Carousel II -->
  <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="secondary"
      navigation
      height="300px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="images/newimages/new7.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="images/wed4.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="images/newimages/new19.jpg"  />
          <q-img class="rounded-borders col-6 full-height" src="images/newimages/new6.jpg" />
        </div>
      </q-carousel-slide>      
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="images/newimages/new5.jpg"  />
          <q-img class="rounded-borders col-6 full-height" src="images/newimages/new3.jpg"  />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="images/newimages/new10.jpg"  />
          <q-img class="rounded-borders col-6 full-height" src="images/newimages/new18.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="5" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="images/newimages/new4.jpg"  />
          <q-img class="rounded-borders col-6 full-height" src="images/newimages/new20.jpg" />
        </div>
      </q-carousel-slide>      
    </q-carousel>

    <!-- Two Cards -->
    <div class="row items-start justify-center  q-pa-md q-gutter-sm bg-grey-4 ">
      <q-card class="q-pa-md text-white bg-primary" style="max-width: 250px">
          <p> <b>Over...</b><br> 
          <span class="text-h3 text-weight-thin">1,000+ Clients <br> </span>
          <span style="float: right"><b>...in NIGERIA</b></span></p>
      </q-card>

      <q-card class="q-pa-md text-black" style="max-width: 250px"> 
          <p>We provide premium services for our ever-increasing 
              clientele base across different states in Nigeria and we are eager 
              to extend the same hand of excellence to you and your loved ones.</p>                
      </q-card>
    </div>

    <!-- <div class="row justify-center q-gutter-sm q-pa-lg">
      <img src="images/logos/logo1240.png" alt="" width="10%" >
      <img src="images/logos/greysoft.png" alt="" width="10%" >
      <img src="images/logos/halox.png" alt="" width="10%" >
    </div>        -->

    <!-- Floating Button -->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        v-model="fabRight"
        autoplay
        vertical-actions-align="right"
        color="primary"
        glossy
        icon="keyboard_arrow_up"
        direction="up"
      >
        <q-fab-action label-position="left" color="secondary" to="/sample" icon="favorite_border" label="View Sample" />
        <q-fab-action label-position="left" color="secondary" to="/placeorder" icon="loyalty" label="Place Order" />
        <q-fab-action label-position="left" color="secondary" to="/contactus" icon="phone" label="Contact Us" />
        <q-fab-action label-position="left" color="secondary" @click="refer=true" icon="payment" label="Refer & Get Paid" />
      </q-fab>  
    </q-page-sticky>

    <!-- Dialogs -->
    <q-dialog v-model="refer">
      <Refer/>
    </q-dialog>         
  </div>
</template>

<script>
import Refer from '../components/Dialogs/Refer'

export default {
  components:{
    Refer
  },
  data () {
    return {
    //Dialog
    refer: false,
    // for Carousel
      slid: 'moonlove',
      navigation: true,
      navPos: 'bottom',
      slide: 1,

      topCarousel: [
        {
          id: '1',
          name: 'moonlove',
          imageUrl: '/images/prewed7.jpg',
          title: 'Let us help you share your experience with your world',
        },
        {
          id: '2',
          name: 'lovecircle',
          imageUrl: '/images/newimages/new23.jpg',
          title: 'Capturing every moment',
        },
        {
          id: '3',
          name: 'lovelove',
          imageUrl: '/images/newimages/new1.jpg',
          title: 'Ambiance',
        },
        {
          id: '4',
          name: 'superlove',
          imageUrl: '/images/newimages/new24.jpg',
          title: 'Joy',
        },
        {
          id: '5',
          name: 'lovetest',
          imageUrl: '/images/newimages/new12.jpg',
          title: 'Memories',
        },  
        {
          id: '6',
          name: 'loveblast',
          imageUrl: '/images/newimages/new25.jpg',
          title: 'Resonance',
        },
        {
          id: '7',
          name: 'loveround',
          imageUrl: '/images/newimages/new9.jpg',
          title: 'Poetry',
        },  
        {
          id: '8',
          name: 'lovespin',
          imageUrl: '/images/newimages/new22.jpg',
          title: 'Forever',
        }, 
        {
          id: '9',
          name: 'loveatlast',
          imageUrl: '/images/newimages/new11.jpg',
          title: 'Bliss',
        },                                                    
      ],      
      fabRight: false
    }
  }

}
</script>

<style scoped>

.shade{  
    text-align: center;
    padding: 10px;
    background-color: rgba(0, 0, 0, .3);
    border-radius: 15px 0 15px;
    margin-bottom: 5px;
    margin-right: 5px;
}

a{
    text-decoration: none;        
}

</style>
