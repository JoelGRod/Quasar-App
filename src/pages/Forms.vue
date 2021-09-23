<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Forms</span>
    <q-separator spaced />

    <div class="row justify-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-sm col-12 col-sm-6 q-pt-lg"
      >
        <q-input
          filled
          type="email"
          v-model="userForm.email"
          label="Email"
          hint="my-email@email.com"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'This field is required',
            (val) => isValidEmail(val),
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password"
          label="Password"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'This field is required',
            (val) => (val.length >= 6) || 'The password must be 6 characters long',
          ]"
        />

        <!-- Alternative sintax for validations, function that only receives val argument like above (email) -->
        <q-input
          filled
          type="password"
          v-model="userForm.password2"
          label="Repeat Password"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'This field is required',
            isSamePassword
          ]" 
        />

        <q-checkbox
          v-model="userForm.conditions"
          label="Terms and Conditions"
          :style="userForm.errorInConditions && !userForm.conditions 
          ? 'color: red' 
          : 'color: black'"
        />

        <div class="row justify-end">
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "Forms",

  setup() {
    const $q = useQuasar();
    $q.iconSet.field.error = "las la-exclamation-triangle";

    const userForm = ref({
      email: "",
      password: "",
      password2: "",
      conditions: false,
      errorInConditions: false,
    });

    return {
      // Public properties
      userForm,
      // Public methods
      onSubmit: () => {
        if( !userForm.value.conditions ) {
          userForm.value.errorInConditions = true;
          return;
        }
        console.log(userForm.value);
      },
      onReset: () => {
        userForm.value = {
          email: "",
          password: "",
          password2: "",
          conditions: false,
          errorInConditions: false,
        };
      },
      isValidEmail: (val) => {
        const emailPattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || "Not a valid Email";
      },
      isSamePassword: (val) => {
        return ( val === userForm.value.password || 'Passwords do not match' )
      }
    };
  },
});
</script>
