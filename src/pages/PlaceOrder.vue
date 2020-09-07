<template>
    <div class="bg-grey-4">
        <div>
            <q-img src="images/rose.jpg" :ratio="27/9">
            <div class="absolute-full text-subtitle2 flex flex-center">
                <span class="text-h3 text-weight-thin"> Place Order  </span> 
            </div>
            </q-img>
        </div> 

        <div class="q-pa-md row justify-center q-gutter-md">
            <q-card flat bordered class="my-card">
                <q-card-section class="text-center">
                    <div class="text-h6 text-weight-light ">Correct choice, let's get to work!</div>
                   <span><small>One Week MAX!</small> </span>
                </q-card-section>

                <q-separator inset />

                <q-card-section>
                    Thank you for stopping by. <br> <br>
                    First, make payment of N50,000 (Free Domain).
                    Remember to take a screenshot of payment detail.
                </q-card-section>

                <div class="text-center">
                    <a href="https://paystack.com/pay/wedvytes" target="_blank"><q-btn no-caps color="primary" label="Make Payment Here" /></a>
                </div>

                <q-card-section>
                    After Making payment, please fill the Order Form below and you're all set.                    
                </q-card-section>

                <div class="text-center q-mb-md">
                    <a href="https://forms.gle/pwhJS6pkibsHnKmaA" target="_blank"><q-btn no-caps color="primary" label="Order Form" /></a>
                </div>
            </q-card>

            <q-card-section>
                If you have any challenge making payments... <br> <br>
                - Transfer or make direct bank payments to: <br>
                - Greysoft Technologies - 0048766501 <br>
                - Sterling Bank Plc <br>                
                - Ensure to upload Teller or Screenshot in Order Form.
            </q-card-section>            
        </div>

        <div>
            <q-img src="images/cerwed55.jpg" :ratio="27/9">
            <div class="absolute-full text-subtitle2 flex flex-center">
                <span class="text-h3 text-weight-thin"> Thank you...</span> 
            </div>
            </q-img>
        </div>         
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.my-card{
    width: 100%;
    max-width: 350px;
}

</style>