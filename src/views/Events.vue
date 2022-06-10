<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
    <div>
        <component :is="Header" />
        <div class="container my-8 mx-auto">
            <h4 class="text-left mb-8">Event List:</h4>
            <div class="grid grid-cols-3">
                <div class="max-w-sm rounded overflow-hidden shadow-lg mb-6" v-for="(event, index) in events"
                    :key="index">
                    <img class="w-full" src="../assets/event.jpeg" alt="Sunset in the mountains">
                    <div class="px-6 pt-4 ">
                        <div class="font-bold text-xl mb-2">{{ event?.name }}</div>
                        <p class="text-gray-700 text-base">
                            {{ event?.description.length > 200 ? `${event.description.substring(0, 200)} ....` :
                                    event.description
                            }}
                        </p>
                    </div>
                    <div class="px-6 pt-2 pb-2">
                        <span
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{
                                    moment(event?.start_date).format('DD MMM YYYY')
                            }}</span>
                        <span
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{
                                    moment(event?.end_date).format('DD MMM YYYY')
                            }}</span>

                    </div>
                    <div class="flex justify-center mb-5 mt-2">
                        <button class="rounded-full bg-green-600 px-6 py-2 text-white text-bold"><router-link 
                        :to="{ path: `/event/${index}` }">View</router-link></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {events} from '@/data/events.js'
import moment from 'moment'

export default {
    name: 'EventsPage',
    data() {
        return {
            events
        }
    },
    methods: {
        moment: function () {
            return moment();
        }
    },
}
</script>
<style lang="">
    
</style>