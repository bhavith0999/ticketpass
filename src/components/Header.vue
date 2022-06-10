<template lang="">
<div class="bg-gray-200">

  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="flex-1 flex  justify-between sm:items-stretch sm:justify-between">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="../assets/logo.svg" alt="Workflow" />
            <img class="hidden lg:block h-8 w-auto" src="../assets/logo.svg" alt="Workflow" />
          </div>
          <div class="sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a class="px-3 py-2 rounded-md text-sm font-medium cursor-pointer"><router-link to="/events"> Events</router-link></a>
              <a class="px-3 py-2 rounded-md text-sm font-medium cursor-pointer"><router-link to="/create-event"> Create Event</router-link></a>
               <a class="px-3 py-2 rounded-md text-sm font-medium cursor-pointer" @click="logout()">Logout</a>
            </div>
          </div>
        </div>
        </div>
   </div>
              </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>
<style lang="">
    
</style>