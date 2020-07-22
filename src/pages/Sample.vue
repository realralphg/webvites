<template>
    <div>
        <div>
          <div class="bg-grey-3">
            <div class="text-center">
                <img src="images/divider.png" alt="" width="80%" >
            </div>
            <div class="text-center">
                <span class="ruban text-h4 text-weight-thin text-primary">Rymboxx & Tutu</span> <br>
                <span class="ruban text-h6 text-weight-light text-primary">#Rymtutu2020</span> <br>
                <span class="text-grey-7">We're getting married.</span>
            </div>
            <div class="text-center">
                <img src="images/divider.png" alt="" width="80%" >
            </div>   
          </div>
          <q-carousel
            v-model="slid"
            swipeable
            animated
            autoplay
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
                    <div class="custom-caption absolute-bottom text-white text-h4 text-weight-light">
                    {{ carousel.title }}
                    </div>
                </div>
            </q-carousel-slide>
          </q-carousel>
        </div>

    <!-- Invitation C A R D -->
    <div class="row justify-center q-ma-md">
      <div class="text-center">
          <img src="images/divider.png" alt="" width="70%" >
      </div> 

      <q-card class="q-px-xl q-pt-xl text-white bg-grey-10 text-center" style="max-width: 350px">
        <span class="text-h4 text-weight-light text-secondary align-center">Save The Date <br> </span>
        <span class="text-h6 text-weight-thin" style="float: center">20th August, 2020 <br> </span>
        <span class="text-h7 text-weight-light">TRADITIONAL <br> </span>
        <span class="text-h7 text-weight-thin">19th August, 2020 <br> </span>
        <span class="text-h7 text-weight-light">WEDDING CEREMONY <br> </span>
        <span class="text-h7 text-weight-thin">20th August, 2020 <br> <br> </span>        
        <span class="text-h7 text-weight-thin">S P A C E - 2000, Kaduna <br> <br> </span>        
        <span class="text-h8">We are excited to celebrate with you! <br> </span> 
        <q-card-actions align="right">
          <a href="https://forms.gle/B8eFDxV16u2Z2wmt5" target="_blank"><q-btn no-caps outline color="white" text-color="white" label="RSVP Now" /></a>          
        </q-card-actions>          
      </q-card>

      <div class="text-center">
          <img src="images/divider.png" alt="" width="70%" >
      </div>        
    </div>

    <!-- Two Cards - Female-->
    <div class="row items-start justify-center  q-pa-md bg-grey-4 ">
      <q-card class="bg-primary" style="max-width: 300px">
          <img src="images/prewed4.jpg" alt="">
      </q-card>

      <q-card class="q-pa-md text-grey-7 bg-grey-3" style="max-width: 300px; width: 100%"> 
          <span class="text-weight-light text-h5 text-black">Tutu, baby</span>
          <p>Because of you I laugh, I smile and I dare to dream more than I ever have.
              Thank you for the miracle of you. You are and always will be the love of my life,
              my soulmate, my person, you have been a partner long before now and forever it'll 
              be before this movie ends.</p>                
      </q-card>
    </div>

    <!-- Two Cards - Male-->
    <div class="row items-start justify-center  q-pa-md bg-grey-4 ">
      <q-card class="q-pa-md text-grey-7 bg-grey-3" style="max-width: 300px; width: 100%"> 
          <span class="text-weight-light text-h5 text-black">Rym, love</span>
          <p>I say these words not as promises but as privileges. I get to laugh with you and cry
              with you, care for you and share with you. I get to walk with you and run with you,
              build with you and live with you. because you have loved me truly, I will love and honor 
              you always and in all ways.</p>                
      </q-card>

      <q-card class="bg-primary" style="max-width: 300px">
          <img src="images/prewed3.jpg" alt="">
      </q-card>      
    </div> 

    <div class="bg-grey-8">
        <div class="text-center">
          <img src="images/divider.png" alt="" width="80%" >
        </div>          
        <div class="text-weight-light text-h4 text-white text-center">
          Our Love Story
        </div>
        <div class="text-center">
          <img src="images/divider.png" alt="" width="80%" >
        </div>
<!-- C H A T Love Story -->
        <div class="q-pr-md q-pl-md q-pb-md row justify-center">
            <div class="text-white" style="width: 100%; max-width: 500px">
              <q-chat-message
                label="Sunday, 19th"
              />

              <q-chat-message
                name="Tutu"
                avatar="images/tutuu.jpg"
                :text="['Rym baby, you go first.']"
                sent
                stamp="15 minutes ago"
              />
              <q-chat-message
                name="Rymboxx"
                avatar="images/rymm.jpg"
                :text="['Okay guys, So we met in schl, May 2016']"
                stamp="14 minutes ago"
              />
              <q-chat-message
                name="Tutu"
                avatar="images/tutuu.jpg"
                :text="['Yeah, first date was in February 2017']"
                sent
                stamp="12 minutes ago"
              />
              <q-chat-message
                name="Rymboxx"
                avatar="images/rymm.jpg"
                :text="['Same day, first kiss... lol']"
                stamp="11 minutes ago"
              /> 
              <q-chat-message
                name="Tutu"
                avatar="images/tutuu.jpg"
                :text="['He proposed in November 2019 ']"
                sent
                stamp="7 minutes ago"
              />
              <q-chat-message
                name="Rymboxx"
                avatar="images/rymm.jpg"
                :text="['...and that\'s why we have a wedding in August 2020']"
                stamp="5 minutes ago"
              />  
              <q-chat-message
                name="Rymboxx"
                avatar="images/rymm.jpg"
                :text="['See you around guys... make our day.']"
                stamp="4 minutes ago"
              />                                        
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
      control-color="primary"
      navigation
      height="300px"
      class="bg-grey-4 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="images/prewed9.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="images/tutu.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="images/prewedtutu.jpg"  />
          <q-img class="rounded-borders col-6 full-height" src="images/prewed11.jpg"  />
        </div>
      </q-carousel-slide>
    </q-carousel>

<!-- Pre-Wedding Photos -->
    <div class="bg-grey-8">
        <div class="text-center">
          <img src="images/divider.png" alt="" width="80%" >
        </div>          
        <div class="text-weight-light text-h4 text-white text-center">
          Pre-wedding pix
        </div>
        <div class="text-center">
          <img src="images/divider.png" alt="" width="80%" >
        </div>

        <q-page-container class="text-body1 q-ml-lg">
            <div class="q-pa-sm">
                <div class="q-col-gutter-md row items-start">                            
                    <div class="col-6">
                        <q-img  src="images/prewed1.jpg" :ratio="4/3" />
                    </div>

                    <div class="col-6">
                        <q-img  src="images/prewed2.jpg" :ratio="4/3" />
                    </div>

                </div>
            </div>

            <div class="q-pa-md">
                <div class="q-col-gutter-md row items-start">                            
                    <div class="col-6">
                        <q-img  src="images/prewed3.jpg" :ratio="4/3" />
                    </div>

                    <div class="col-6">
                        <q-img  src="images/prewed4.jpg" :ratio="4/3" />
                    </div>

                </div>
            </div>

            <div class="q-pa-md">
                <div class="q-col-gutter-md row items-start">                            
                    <div class="col-6">
                        <q-img  src="images/prewed12.jpg" :ratio="4/3" />
                    </div>

                    <div class="col-6">
                        <q-img  src="images/prewed6.jpg" :ratio="4/3" />
                    </div>

                </div>
            </div> 

            <div class="q-pa-md">
                <div class="q-col-gutter-md row items-start">                            
                    <div class="col-6">
                        <q-img  src="images/prewed7.jpg" :ratio="4/3" />
                    </div>

                    <div class="col-6">
                        <q-img  src="images/prewed8.jpg" :ratio="4/3" />
                    </div>

                </div>
            </div> 

            <div class="q-pa-md">
                <div class="q-col-gutter-md row items-start">                            
                    <div class="col-6">
                        <q-img  src="images/prewed9.jpg" :ratio="4/3" />
                    </div>

                    <div class="col-6">
                        <q-img  src="images/prewed10.jpg" :ratio="4/3" />
                    </div>

                </div>
            </div>                                                
        </q-page-container>


        <div class="text-center">
          <img src="images/divider.png" alt="" width="80%" >
        </div>          
    </div>

<!-- Gift Registry -->
    <div class="bg-grey-4">
        <div class="text-center">
          <img src="images/divider.png" alt="" width="80%" >
        </div>          
        <div class="text-weight-light text-h4 text-grey-8 text-center">
          Gift Registry
        </div>
        <div class="text-center">
          <img src="images/divider.png" alt="" width="80%" >
        </div>

        <div class="text-grey-9 text-center q-mb-sm q-px-md">
          We are grateful in advance for all the pleasant gifts you have planned 
          to gift us with. You may wish to gift any of the items below or gift cash. 
          Again, thank you very plenty.
        </div>         
<!-- Gift Cards -->
        <div class="row justify-center q-gutter-md">
          <q-card class="bg-grey-3" style="width: 100%; max-width: 300px;">
            <img src="images/curvetv.jpg">
            <q-card-section>
              <div class="text-grey-8">
                #280,000 - LG 49'Curve TV (Jumia)
              </div>              
            </q-card-section>
            <q-card-actions align="right">
              <q-btn no-caps glossy rounded color="primary" icon="favorite" label="Gift This" />
            </q-card-actions>
          </q-card>

          <q-card class="bg-grey-3" style="width: 100%; max-width: 300px;">
            <img src="images/microwave.jpg">
            <q-card-section>
              <div class="text-grey-8">
                #60,000 - Hisense Microwave (Jumia)
              </div>              
            </q-card-section>
            <q-card-actions align="right">
              <q-btn no-caps glossy rounded color="primary" icon="favorite" label="Gift This" />
            </q-card-actions>
          </q-card>  

          <q-card class="bg-grey-3" style="width: 100%; max-width: 300px;">
            <img src="images/gascooker.png">
            <q-card-section>
              <div class="text-grey-8">
                #250,000 - Scanfrost 5 Burner Gascooker (Jumia)
              </div>              
            </q-card-section>
            <q-card-actions align="right">
              <q-btn no-caps glossy rounded color="primary" icon="favorite" label="Gift This" />
            </q-card-actions>
          </q-card>  

          <q-card class="bg-grey-3" style="width: 100%; max-width: 300px;">
            <img src="images/washing.jpg">
            <q-card-section>
              <div class="text-grey-8">
                #186,000 - LG 6KG Frontload Washing Machine (Jumia)
              </div>              
            </q-card-section>
            <q-card-actions align="right">
              <q-btn no-caps glossy rounded color="primary" icon="favorite" label="Gift This" />
            </q-card-actions>
          </q-card>                      
        </div>
<!-- Gift Button -->
        <div class="text-center q-mt-md">
          <q-btn no-caps glossy color="secondary" icon="favorite" label="Gift Cash" />
        </div>

        <div class="text-center q-pa-md">
          Thank you for your love <br>
          We are excited to celebrate with you! <br>
          After wedding, we will upload to your gallery your
          <q-btn flat no-caps color="secondary" @click="wedding=true" label="Wedding Photos" />
        </div>

        <div class="text-center">
          <img src="images/divider.png" alt="" width="80%" >
        </div>          
<!-- Dialog -->
        <q-dialog v-model="wedding">
          <Wedding/>
        </q-dialog>   

        <q-dialog v-model="refer">
          <Refer/>
        </q-dialog> 

<!-- Floating Button -->
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab
          v-model="fabRight"
          autoplay
          animated
          transition-prev="slide-right"
          transition-next="slide-left"    
          swipeable
          vertical-actions-align="right"
          color="primary"
          glossy
          icon="add"
          direction="up"
        >
          <q-fab-action label-position="left" color="secondary" to="/sample" icon="favorite_border" label="View Sample" />
          <q-fab-action label-position="left" color="secondary" to="/placeorder" icon="loyalty" label="Place Order" />
          <q-fab-action label-position="left" color="secondary" to="/contactus" icon="phone" label="Contact Us" />
          <q-fab-action label-position="left" color="secondary" @click="refer=true" icon="payment" label="Refer & Get Paid" />
        </q-fab>  
      </q-page-sticky>               
    </div>  
  </div>
</template>

<script>
import Wedding from '../components/Dialogs/Wedding'
import Refer from '../components/Dialogs/Refer'

export default {
  components:{
    Wedding,
    Refer
  },

  data () {
    return {
      wedding: false,
      fabRight: false,
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
          imageUrl: '/images/prewed1.jpg',
          title: '20th August, 2020',
        },
        {
          id: '2',
          name: 'lovecircle',
          imageUrl: '/images/prewed8.jpg',
          title: '#RymTutu2020',
        },
        {
          id: '3',
          name: 'lovelove',
          imageUrl: '/images/prewed2.jpg',
          title: '#TheMovie',
        },
        {
          id: '4',
          name: 'loveRing',
          imageUrl: '/images/prewed10.jpg',
          title: '#Forever',
        },                         
      ],      
    }
  }

}
</script>

<style scoped>

.custom-caption{
    bottom: 50px;
    text-align: center;
    padding: 12px;
    background-color: rgba(0, 0, 0, .3);
}

/* .ruban{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
} */
</style>
