<script>
const initialForm = {
  firstName: "",
  lastName: "",
  country: "",
  street: "",
  city: "",
  zipCode: "",
  email: "",
  picked: "createAccount",
};

export default {
  data() {
    return {
      formInfo: { ...initialForm },
      errors: [],
      message: "",
    };
  },
  methods: {
    checkForm: function (e) {
      const { firstName, lastName, email } = this.formInfo
      if (firstName && lastName && email) {
        window.alert("Form is submitted");
        return true;
      };
      this.errors = [];
      if (!firstName) this.errors.push("First name required.");
      if (!lastName) this.errors.push("Last name required.");
      if (!email) this.errors.push("Email required.");
      window.alert(this.errors);
      e.preventDefault();
    }
  }
};
</script>

<template>
  <h1>Client Information</h1>

  <form action="#" class="billing-form" @submit="checkForm">
    <div class="col-md-6">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input v-model="formInfo.firstName" type="text" class="form-control" placeholder="" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input v-model="formInfo.lastName" type="text" class="form-control" placeholder="" />
      </div>
    </div>
    <div class="w-100"></div>
    <div class="col-md-12">
      <div class="form-group">
        <label for="country">State / Country</label>
        <div class="select-wrap">
          <div class="icon"><span class="ion-ios-arrow-down"></span></div>
          <select v-model="formInfo.country" name="" id="" class="form-control">
            <option value="VN">Viet Nam</option>
            <option value="FR">France</option>
            <option value="IT">Italy</option>
          </select>
          <span> Selected: {{ selected }}</span>
        </div>
      </div>
    </div>
    <div class="w-100"></div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="emailadress">Email Address</label>
        <input v-model="formInfo.email" type="text" class="form-control" placeholder="" />
      </div>
    </div>
    <div class="w-100"></div>
    <div class="col-md-12">
      <div class="form-group mt-4">
        <div class="radio">
          <label class="mr-3">
            <input type="radio" value="createAccount" name="optradio" v-model="formInfo.picked" />
            Create an account?</label>
        </div>
      </div>
    </div>
    <p><input @click="checkForm" value="Submit" class="btn btn-primary py-3 px-4" /></p>
  </form>
</template>
