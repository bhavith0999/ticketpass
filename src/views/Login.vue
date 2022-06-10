<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div class="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        ">
            <div class="font-medium self-center text-xl sm:text-3xl">
                Welcome Back
            </div>
            <div class="mt-4 self-center text-xl sm:text-sm">
                Enter your credentials to access your account
            </div>


            <div class="mt-10">
                <form @submit.prevent="handleSubmit">
                    <div class="flex flex-col mb-5">
                        <label for="email" class="mb-1 text-left text-xs tracking-wide">E-Mail Address:</label>
                        <div class="relative">
                            <div class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  ">
                                <i class="fas fa-at text-blue-500"></i>
                            </div>

                            <input type="email" v-model="email" id="email" name="email"
                                :class="{ 'border-red-400': v$.email.$errors.length > 0 }" class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  " placeholder="Enter your email" />
                            <div v-if="v$.email.$errors.length > 0" class=" text-left">
                                <span v-if="v$.email.$errors[0].$validator == 'required'"
                                    class="text-red-400 text-sm">Email is required</span>
                                <span v-if="v$.email.$errors[0].$validator == 'email'"
                                    class="text-red-400 text-sm">Email is invalid</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col mb-6">
                        <label for="password" class="mb-1 text-xs text-left sm:text-sm tracking-wide">Password:</label>
                        <div class="relative">
                            <div class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  ">
                                <span>
                                    <i class="fas fa-lock text-blue-500"></i>
                                </span>
                            </div>

                            <input type="password" v-model="password" id="password" name="password"
                                :class="{ 'border-red-400': v$.password.$errors.length > 0 }" class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  " placeholder="Enter your password" />
                            <div v-if="v$.password.$errors.length > 0" class="text-left">
                                <span v-if="v$.password.$errors[0].$validator == 'required'"
                                    class="text-red-400 text-sm">Password is required</span>
                                <span v-if="v$.password.$errors[0].$validator == 'minLength'"
                                    class="text-red-400 text-sm">Password must be at least 6 characters</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex w-full">
                        <button type="submit" class="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                ">
                            <span class="mr-2 uppercase">Sign In</span>
                            <span>
                                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import users from '@/data/users.json'
import { useQuasar } from 'quasar'


export default {
    name: 'LoginPage',
    setup() {
        return { v$: useVuelidate(), $q: useQuasar() }
    },
    data() {
        return {
            email: "",
            password: "",
        };
    },
    validations() {
        return {
            email: { required, email, $autoDirty: true },
            password: { required, minLength: minLength(6), $autoDirty: true },
        }
    },
    methods: {
        async handleSubmit() {
            const result = await this.v$.$validate();
            if (!result) {
                return
            }
            const user = users[0];
            if (this.email === user.email && this.password === user.password) {
                localStorage.setItem('isLoggedIn', 'yes');
                this.$router.push('events');
            } else {
                this.$q.notify({
          type: 'negative',
          message: 'Invalid Credentials'
        })
            }
        }
    }
}
</script>
<style lang="">
    
</style>