<template>
  <div class="add-new-product">
    <div>
      <h2>Add a new product: </h2>
      <div class="mb-3 d-flex m-5">
        <div class="m-3 col-3">
          <label for="product_name">Name:</label>
          <input type="text" class="form-control" placeholder="PRODUCT NAME" id="name-input">
        </div>
        <div class="col-9">
          <div>
            <label for="image_uploads">Choose images to upload (PNG, JPG)</label>
            <input @change="handleFiles" type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple>
          </div>
          <div class="preview" id="image-append">
            <p>No files currently selected for upload</p>
          </div>
        </div>
      </div>
      <div class="mb-3 d-flex">
        <div class="input-group m-3">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Product Value" title="just dollars" id="value-input">
          <div class="input-group-append">
            <span class="input-group-text">.00</span>
          </div>
        </div>
        <label for="exampleFormControlTextarea1" class="form-label" disabled="disabled">Description(In development): </label>
        <input id="description-input" disabled>
      </div>
      <button @click="addProduct" type="button" :disabled="addNewProductIsDisabled" :class="addNewProductIsDisabled ? 'add-new-product__disabled' : 'add-new-product__enabled btn btn-primary'">Add this new product</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const addNewProductIsDisabled = ref(false)
const addProductPayload = reactive({
  value: 0,
  name: '',
  srcImg: '',
  specifications: []
})
function handleFiles(event) {
  const appendImg = document.getElementById('image-append')
  const reader = new FileReader()
  reader.onload = function () {
    appendImg.innerHTML = `<img src="${reader.result}" alt="img">`
    // Add image that was done an uploaded in payload to add product.
  }
  reader.readAsDataURL(event.target.files[0])
  const clientId = '082f3d63c4c2091'
  // const clientSecret = 'cd63c09150ce871d3fb57e6eaf5fcbbf447db1a3'
  // Base authorization = Authorization: Client-ID YOUR_CLIENT_ID

  const formData = new FormData()
  formData.append('image', event.target.files[0])
  fetch('https://api.imgur.com/3/upload', {
    method: 'post',
    headers: {
      Authorization: `Client-ID ${clientId}`
    },
    body: formData
  }).then(res => res.json()).then(res => {
    addProductPayload.srcImg = res.data.link
    if(res.data.error) {
      alert(`Error with upload image. [Error:${res.data.error}][Status: ${res.status}][Success:${res.success}]`)
      addProductPayload.srcImg = reader.result
    }
  })
}

const addProduct = () => {
  let inputConfigs = [{key: 'name', id:'name'}, {id:'description'}, {key:'value',id:'value'}]
  for (const config of inputConfigs) {
    const { key, id } = config
    const currentValueInput = document.querySelector(`#${id}-input`).value
    if (key) {
      addProductPayload[key] = currentValueInput
      if (!currentValueInput.length > 0) {
        alert('There are incomplete mandatory fields. Please fill this out.')
        return
      }
    }
  }
  store.commit('addProducts', addProductPayload)
  // window.location.href = '/product-list'
}
</script>

<style lang="scss">
.add-new-product {
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  img {
    width: 20rem;
  }
}
</style>