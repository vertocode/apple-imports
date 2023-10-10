<template>
  <div class="back-button-content">
    <router-link to="/">
      <button class="back-button">&#9664; Back</button>
    </router-link>
  </div>
  <div class="request-product">
    <h1>Request Product</h1>
    <p>Please fill out the form below to request a product:</p>

    <form @submit="submitForm">
      <div class="form-group">
        <label for="productName">Product Name:</label>
        <input
            type="text"
            id="productName"
            v-model="productName"
            required
        />
      </div>

      <div class="form-group">
        <label for="productDescription">Product Description:</label>
        <textarea
            id="productDescription"
            v-model="productDescription"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="requesterEmail">Requester's Email:</label>
        <input
            type="email"
            id="requesterEmail"
            v-model="requesterEmail"
            required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const productName = ref('')
const productDescription = ref('')
const requesterEmail = ref('')

const submitForm = (event: Event) => {
	event.preventDefault()

	// Here you can send the data to the server or perform other necessary actions
	const formData = {
		productName: productName.value,
		productDescription: productDescription.value,
		requesterEmail: requesterEmail.value,
	}

	console.log('Form Data:', formData)

	// Clear the fields after submission
	productName.value = ''
	productDescription.value = ''
	requesterEmail.value = ''
}
</script>

<style scoped lang="scss">
.request-product {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }
}

button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  .back-button-content {
    background-color: black;
    width: 100%;
    display: flex;
    justify-content: left;
    margin: 2em;
    .back-button {
      background-color: #333;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      margin-bottom: 20px;
      cursor: pointer;
      transition: background-color 0.3s;
      display: flex;
      align-items: center;

      &:hover {
        background-color: #555;
      }

      svg {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        fill: #fff;
      }
    }
  }
}
</style>
