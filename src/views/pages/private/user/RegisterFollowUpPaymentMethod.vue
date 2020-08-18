<template>
  <div class="h-screen flex justify-center">
    <div class="container mt-20 bg-white">
      <form class="form-horizontal" role="form">
        <fieldset>
          <div class="text-2xl mb-5">Payment</div>
          <div class="form-group">
            <label class="col-sm-3 control-label text-sm" for="card-holder-name">Name</label>
            <div class="col-sm-9">
              <input
                v-model="name"
                type="text"
                class="form-control"
                name="card-holder-name"
                id="card-holder-name"
                placeholder="Card Holder's Name"
              />
            </div>
          </div>
          <div class="form-group my-5">
            <label class="col-sm-3 control-label text-sm" for="card-number">Number</label>
            <div class="col-sm-9">
              <input
                v-model="number"
                type="text"
                class="form-control"
                name="card-number"
                id="card-number"
                placeholder="Debit/Credit Card Number"
              />
            </div>
          </div>
          <div class="form-group mt-5">
            <label class="col-sm-3 control-label text-sm" for="expiry-month">Expiration</label>
            <div class="col-sm-9">
              <div class="flex">
                <div class="mr-5 my-5">
                  <select
                    class="form-control col-sm-2 px-3 py-1 rounded bg-gray-100"
                    name="expiry-month"
                    id="expiry-month"
                    v-model="month"
                  >
                    <option>Month</option>
                    <option value="01">Jan (01)</option>
                    <option value="02">Feb (02)</option>
                    <option value="03">Mar (03)</option>
                    <option value="04">Apr (04)</option>
                    <option value="05">May (05)</option>
                    <option value="06">June (06)</option>
                    <option value="07">July (07)</option>
                    <option value="08">Aug (08)</option>
                    <option value="09">Sep (09)</option>
                    <option value="10">Oct (10)</option>
                    <option value="11">Nov (11)</option>
                    <option value="12">Dec (12)</option>
                  </select>
                </div>
                <div class="my-5">
                  <select
                    class="form-control col-sm-2 px-3 py-1 rounded bg-gray-100"
                    name="expiry-year"
                    v-model="year"
                  >
                    <option value="17">2017</option>
                    <option value="18">2018</option>
                    <option value="19">2019</option>
                    <option value="20">2020</option>
                    <option value="21">2021</option>
                    <option value="22">2022</option>
                    <option value="23">2023</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label text-sm" for="cvv">Card CVV</label>
            <div class="col-sm-6">
              <input
                v-model="ccv"
                type="text"
                class="form-control"
                name="cvv"
                id="cvv"
                placeholder="Security Code"
              />
            </div>
          </div>
          <br />
          <div class="form-group">
            <div class="col-sm-12">
              <button type="button" @click="payNow" class="btn btn-success bg-blue-700" id="pay-now">Pay Now</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    month: "",
    year: "",
    ccv: "",
    name: "",
    number: ""
  }),
  methods: {
    payNow() {
      console.log(this.month);
    },
  },
  mounted() {},
};
</script>
<style scoped>
.container {
  padding: 20px;
  width: 500px;
  height: fit-content;
  border-radius: 5px;
  border: 1px solid #ffffff00;
  color: #515751;
  -webkit-box-shadow: 4px 4px 6px 0px rgba(149, 165, 166, 0.75);
  -moz-box-shadow: 4px 4px 6px 0px rgba(149, 165, 166, 0.75);
  box-shadow: 4px 4px 6px 0px rgba(149, 165, 166, 0.75);
}

h1 {
  color: #515751;
  margin: 0;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: normal;
}

.form-top {
  padding-top: 20px;
  text-align: left;
}

.input-hide {
  float: right;
  cursor: pointer;
}

select.form-control:hover {
  background: #f8f9f9;
}

option select.form-control :hover {
  background: #f8f9f9;
}

input {
  font-size: 18px;
  color: #4b6cb7;
  background-color: #f7f7f7;
  width: 100%;
  padding: 13px 13px 13px 20px;
  box-sizing: border-box;
  border: 3px solid rgba(0, 0, 0, 0);
}

.form-control:focus {
  border: 3px solid #2ecc71;
}

#pay-now {
  font-size: 20px;
  color: #f7f7f7;
  background-color: #0046AA;
  width: 100%;
  padding: 13px 13px 13px 20px;
  box-sizing: border-box;
  border: 3px solid rgba(0, 0, 0, 0);
}

#pay-now a {
  text-decoration: none;
  color: #4b6cb7;
}

#pay-now:hover {
  color: #f7f7f7;
  background: #27ae60;
  outline: none;
  transition: all 0.3s linear;
}
</style>