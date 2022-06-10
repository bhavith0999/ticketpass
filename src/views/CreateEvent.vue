<script setup>
import Header from '@/components/Header.vue'
import { ref } from 'vue';
import { addEvent } from '@/data/events.js'
import { useQuasar } from 'quasar';
</script>

<template>
    <div>
        <component :is="Header" />
        <div class="container my-8 mx-auto">
            <h4 class="text-left mb-8">Create Event:</h4>
            <q-form ref="myForm" @submit="saveData" class="q-gutter-md">
                <div class="flex flex-col mb-5">
                    <label for="name" class="mb-1 text-left text-xs tracking-wide">Event Name:</label>
                    <q-input ref="name" filled v-model="name" label="Event name *" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']" />
                </div>
                <div class="flex flex-col mb-5">
                    <label for="val => val && val.length > 0 ||"
                        class="mb-1 text-left text-xs tracking-wide">Description:</label>
                    <q-input filled ref="description" v-model="description" label="Description *" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type Description']" />
                </div>

                <div class="flex flex-col mb-5">
                    <label for="name" class="mb-1 text-left text-xs tracking-wide">Start Date:</label>

                    <q-input ref="start_date" filled v-model="start_date" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']" >
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                    <q-date v-model="start_date">
                                        <div class="row items-center justify-end">
                                            <q-btn v-close-popup label="Close" color="primary" flat />
                                        </div>
                                    </q-date>
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>

                </div>

                <div class="flex flex-col mb-5">
                    <label for="name" class="mb-1 text-left text-xs tracking-wide">End Date:</label>

                    <q-input ref="end_date" filled v-model="end_date" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']" >
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                    <q-date v-model="end_date">
                                        <div class="row items-center justify-end">
                                            <q-btn v-close-popup label="Close" color="primary" flat />
                                        </div>
                                    </q-date>
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>

                </div>




                <div>
                    <q-btn label="Submit" type="submit" color="primary" />
                </div>
            </q-form>
        </div>
    </div>
</template>
<script>

export default {
    name: 'CreateEventPage',
    data() {
        const myForm = ref(null)
        const name = ref(null)
        const description = ref(null)
        const start_date = ref(null)
        const end_date = ref(null);
        return {
            name,
            description,
            start_date,
            end_date,
            myForm,
            $q: useQuasar()
        }
    },
    methods: {
        saveData() {
            console.log(this.myForm, this.name)
            addEvent({
                name: this.name,
                description: this.description,
                start_date: this.start_date,
                end_date: this.end_date,

            });
            this.$q.notify({
                type: 'success',
                message: 'Created Successfully'
            })
            this.$router.push('/events');
        },
    }

}
</script>
<style lang="">
    
</style>