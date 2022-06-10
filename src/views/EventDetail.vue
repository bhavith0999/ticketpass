<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
    <div>
        <component :is="Header" />
        <div class="container my-8 mx-auto" >
            <h4 class="text-left mb-8">Event Details:</h4>
            <div class="flex flex-col mb-5">
                <label for="name" class="mb-1 text-left text-xs tracking-wide">Event Name:</label>
                <h6 class="text-black text-left mt-2">
                    {{ event?.name }}
                </h6>
            </div>
            <div class="flex flex-col mb-5">
                <label for="val => val && val.length > 0 ||"
                    class="mb-1 text-left text-xs tracking-wide">Description:</label>
                <h6 class="text-black text-left mt-2">
                    {{ event?.description }}
                </h6>
            </div>

            <div class="flex flex-col mb-5">
                <label for="name" class="mb-1 text-left text-xs tracking-wide">Start Date:</label>
                <h6 class="text-black text-left mt-2">

                    {{ moment(event?.start_date).format('DD MMM YYYY') }}
                </h6>

            </div>

            <div class="flex flex-col mb-5">
                <label for="name" class="mb-1 text-left text-xs tracking-wide">End Date:</label>
                <h6 class="text-black text-left mt-2">

                    {{ moment(event?.end_date).format('DD MMM YYYY') }}
                </h6>

            </div>
        </div>
    </div>
</template>
<script>

import { events } from '@/data/events.js';
import moment from 'moment'
export default {
    name: 'EventDetail',
    data() {
        const id = this.$route.params.id;
        const event = events[id];
        console.log(event)
        return {event};
    },
    methods: {
        moment: function () {
            return moment();
        },
    },

}
</script>
<style lang="">
    
</style>