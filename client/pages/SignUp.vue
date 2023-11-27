<template>
  <HomeLayout>
    <div class="sign-in-page">
      <h3>sign Up to <span>VUE messenger</span></h3>
      <form class="sign-in-page__form" @submit.stop.prevent="sendForm">
        <label class="sign-in-page__label" :class="{'sign-in-page__error': nameError.state}">
          <input type="text" placeholder="First name" v-model="nameValue">
          <span>{{nameError.text}}</span>
        </label>
        <label class="sign-in-page__label" :class="{'sign-in-page__error': loginError.state}">
          <input type="text" placeholder="Login" v-model="loginValue" >
          <span>{{loginError.text}}</span>
        </label>
        <label class="sign-in-page__label" :class="{'sign-in-page__error': emailError.state}">
          <input type="text" placeholder="Email" v-model="emailValue">
          <span>{{emailError.text}}</span>
        </label>
        <label class="sign-in-page__label" :class="{'sign-in-page__error': passwordError.state}">
          <input type="password" placeholder="Password" v-model="passwordValue">
          <span>{{passwordError.text}}</span>
        </label>
        <button>Sign Un</button>
      </form>
    </div>
  </HomeLayout>
</template>

<script setup lang="ts">
  import HomeLayout from "~/layout/HomeLayout.vue";

  import validator from 'validator';

  interface IError {
    state: boolean,
    text: string
  }

  const nameValue = ref<string>('');
  const nameError = ref<IError>({
    state: false,
    text: "Name is not current"
  });

  const loginValue = ref<string>('');
  const loginError = ref<IError>({
    state: false,
    text: "login is not current"
  });

  const emailValue = ref<string>('');
  const emailError = ref<IError>({
    state: false,
    text: "Email is not current"
  });

  const passwordValue = ref<string>('');
  const passwordError = ref<IError>({
    state: false,
    text: "Password is not current"
  });

  const validationStartState = ():void => {
    nameError.value.state = false;
    loginError.value.state = false;
    emailError.value.state = false;
    passwordError.value.state = false;
  }

  const validation = ():boolean => {
    validationStartState();
    let valited:boolean = true;

    if(!nameValue.value.match(/[a-z]/i)) {
      console.log('Name error');
      nameError.value.state = true;
      valited = false;
    }

    if(!loginValue.value.match(/[a-z0-9]/i)) {
      loginError.value.state = true;
      valited = false;
    }

    if(!passwordValue.value.match(/[a-z0-9]/i)) {
      passwordError.value.state = true;
      valited = false;
    }

    if(!validator.isEmail(emailValue.value)) {
      valited = false;
      emailError.value.state = true;
    }

    return valited;
  }

   const sendForm = () => {
     console.log('send Form', nameValue.value, loginValue.value, emailValue.value, passwordValue.value)
     const isValid:boolean = validation();
   }

</script>

<style scoped lang="sass">
@import "~/assets/sass/variables"

.sign-in-page
  max-width: 400px

  h3
    color: #000
    font-family: "Montserrat"
    font-size: 32px
    font-style: normal
    font-weight: 600
    line-height: 35px
    letter-spacing: 0.64px
    text-align: center
    margin-bottom: 25px

    span
      display: block
      font-weight: 900

.sign-in-page__form
  display: flex
  flex-direction: column

  button
    border-radius: 100px
    background: #000
    border: none
    outline: none
    box-shadow: none
    padding: 10px 30px
    color: #FFF
    text-align: center
    font-family: "Montserrat"
    font-size: 16px
    font-style: normal
    font-weight: 700
    line-height: 22px
    display: block
    cursor: pointer
    margin-top: 30px

.sign-in-page__label
  input
    padding: 10px 16px 10px 16px
    outline: none
    border-radius: 4px
    color: #000000
    border: 2px solid #7B7B7B
    font-family: "Montserrat"
    font-size: 16px
    font-style: normal
    font-weight: 400
    line-height: 24px
    letter-spacing: 0.5px
    margin-bottom: 10px
    display: block
    width: 100%

  span
    margin-bottom: 10px
    font-family: "Montserrat"
    font-size: 14px
    line-height: 16px
    color: $color_error
    font-weight: 500
    display: none

  &.sign-in-page__error
    input
      border: 2px solid $color_error
      color: $color_error

    span
      display: block


</style>
