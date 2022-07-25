import productService from '../services/product.service'
import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id: 'products',
  state: () => ({
    productList: [],
    wishlist: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
    allProducts: (state) => state.productList,
    cart: (state) => state.wishlist
  },
  actions: {
    // increment() {
    //   this.counter++
    // },
    async loadProductList() {
      try {
      const { data } = await productService.getAll()
      // this.productList = await productService.getAll().data
      // this.productList = data;
      this.$patch({ productList: data })
      } catch (error) {

      }
    },
    addProductToCart(product) {
      // const found = this.wishlist.find(p => p.id === product.id)
      // const wishProduct = { ...product, quantity: found ? found.quantity + 1 : 1 }
      // const excluded = this.wishlist.filter(p => p.id !== product.id)
      // const newWishlist = [ ...excluded, wishProduct]
      this.wishlist = newWishlist
    },
    
  }
})
