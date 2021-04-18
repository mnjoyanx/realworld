<template>
  <div class="font-sans antialiased bg-grey-lightest">
    <!-- Top Nav -->
    <div class="w-full shadow z-1">
      <div class="container mx-auto">
        <div class="w-full flex justify-between items-center py-4 px-8">
          <!-- Brand -->
          <div class="text-center text-white font-bold">Your Company</div>
          <!-- Navigation -->
          <div class="items-center hidden sm:flex">
            <a
              href="#"
              class="text-white hover:text-green-lightest no-underline mx-2 px-2 py-2"
              >Link 1</a
            >
            <a
              href="#"
              class="text-white hover:text-green-lightest no-underline mx-2 px-2 py-2"
              >Link 2</a
            >
            <a
              href="#"
              class="bg-green-dark hover:bg-green-darker rounded-full text-white no-underline mx-2 px-4 py-2"
              >Link 3</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Content -->
    <div class="w-full bg-grey-lightest" style="padding-top: 4rem">
      <div class="container mx-auto py-8">
        <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
          <div class="py-4 px-8 text-md-primary border-b border-grey-lighter">
            Register for a free account
          </div>

          <template v-if="getErrors">
            <validation-errors :validation-err="getErrors" />
          </template>
          
          <form @submit.prevent="registerHandler" class="py-4 px-8">
            <div class="mb-4">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="name"
                >Name</label
              >
              <input
                v-model="form.name"
                class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="email"
                >Email</label
              >
              <input
                v-model="form.email"
                class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="email"
                type="email"
                placeholder="Your email address"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="password"
                >Password</label
              >
              <input
                v-model="form.password"
                class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="password"
                type="password"
                placeholder="Your secure password"
              />
              <p class="text-grey text-xs mt-1">At least 6 characters</p>
            </div>

            <div class="flex items-center justify-between mt-8">
              <button
                class="bg-primary relative hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-md"
                :class="{ 'cursor-wait': isSubmitting }"
                :disabled="isSubmitting"
                type="submit"
              >
                Sign Up 
              </button>
            </div>
          </form>
        </div>
        <p class="text-center my-4">
          <router-link
            :to="{ name: 'login' }"
            class="text-sm-primary okay no-underline hover:text-green-darker"
            >have an account?</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ValidationErrors from '../../components/ValidationErrors.vue'
export default {
  name: 'register',
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      },
    }
  },

  components: {
    ValidationErrors
  },
  computed: {
    ...mapGetters(['isSubmitting', 'getErrors']),
  },

  methods: {
    ...mapActions(['REGISTER_HANDLER']),
    registerHandler() {
      const user = {
        username: this.form.name,
        email: this.form.email,
        password: this.form.password,
      }
      this.REGISTER_HANDLER(user)
        .then(() => this.$router.push({name: 'home'}))
    },
  },
}
</script>



<style>
@import '/public/apply';

.text-sm-primary {
  @apply text-green-700 text-base;
}

.text-md-primary {
  @apply text-green-700 text-xl;
}

.bg-primary {
  @apply bg-green-500;
}
</style>