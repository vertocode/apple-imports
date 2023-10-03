<template>
  <main class="cart-container mt-3">
    <div class="cart-header d-flex justify-content-between align-items-center">
      <h1>Your Cart</h1>
      <BaseButton action="Add New Items" @click="$router.push('/product-list')" />
    </div>

    <table class="cart-table" v-if="cartStore.cart.length">
      <thead>
      <tr>
        <th>Product Name</th>
        <th>Value</th>
        <th>Specifications</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr :key="index" v-for="(product, index) in cartStore.cart">
        <td>
          <div class="product-info">
            <span class="product-name">{{ product.name }}</span>
            <img class="product-image" :src="product.srcImg" :alt="product.name" />
          </div>
        </td>
        <td>{{ formatCurrency(product.value) }}</td>
        <td>
          <Tooltip>
            <template #hover>
              <button class="btn dropdown-toggle"></button>
            </template>
            <template #content>
              <ul>
                <li v-for="(specification, indexSpecification) in product.specifications" :key="indexSpecification">
                  {{ specification.title }}
                  <ul>
                    <li v-for="(item, indexItems) in specification.items" :key="indexItems">
                      {{ item.name }}
                    </li>
                  </ul>
                </li>
              </ul>
            </template>
          </Tooltip>
        </td>
        <td class="delete-button-content">
          <BaseButton action="Delete" variant="danger" @click="deleteItemCart(index)" />
        </td>
      </tr>
      </tbody>
    </table>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </main>
</template>

<script setup>
import BaseButton from "../components/Buttons/BaseButton.vue";
import Tooltip from "../components/Tooltip/Tooltip.vue";
import { useCartStore } from "../store/useCartStore";

const cartStore = useCartStore();

const deleteItemCart = async (index) => {
  cartStore.cart.splice(index, 1);
};

const formatCurrency = (value) => {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};
</script>

<style lang="scss" scoped>
.cart-container {
  padding: 20px;

  .cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .cart-table {
    width: 100%;
    border-collapse: collapse;

    th {
      background-color: #343a40;
      color: #fff;
      text-align: center;
      padding: 10px;
    }

    td {
      border: 1px solid #ccc;
      padding: 10px;

      .product-info {
        display: flex;
        justify-content: center;
        align-items: center;

        .product-name {
          margin-right: 10px;
        }

        .product-image {
          width: 40px;
          margin-left: 5px;
        }
      }
    }
  }

  .delete-button-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tooltip-content {
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    position: absolute;
    z-index: 1000;

    .tooltip-arrow {
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      z-index: 1001;

      &.top {
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #fff transparent;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
      }

      &.bottom {
        border-width: 10px 10px 0 10px;
        border-color: #fff transparent transparent transparent;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
