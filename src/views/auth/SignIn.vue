<template>
  <div class="font-sans antialiased bg-grey-lightest">
    <div class="w-full bg-grey-lightest" style="padding-top: 4rem">
      <div class="container mx-auto py-8">
        <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
          <div class="py-4 px-8 text-md-primary border-b border-grey-lighter">
            Login
          </div>

          <template v-if="getErrors">
            <validation-errors :validation-err="getErrors" />
          </template>

          <form @submit.prevent="loginHandler" class="py-4 px-8">
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
            </div>

            <div class="flex items-center justify-between mt-8">
              <button
                class="bg-primary relative hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-md"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <p class="text-center my-4">
          <router-link
            :to="{ name: 'register' }"
            class="text-sm-primary okay no-underline hover:text-green-darker"
            :class="{ 'cursor-wait': isSubmitting }"
            :disabled="isSubmitting"
            >Need an account?</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ValidationErrors from '@/components/ValidationErrors'
export default {
  name: 'login',
  components: {
    ValidationErrors
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['LOGIN_HANDLER']),
    loginHandler() {
      const user = {
        email: this.form.email,
        password: this.form.password
      }

      this.LOGIN_HANDLER(user).then(() => {
        this.$router.push({ name: 'home' })
      })
    }
  },
  computed: {
    ...mapGetters(['getErrors', 'isSubmitting'])
  }
}
</script>
