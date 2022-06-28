import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [
            {
                value: 7500,
                name: 'MacBook Air',
                srcImg: 'https://vertocode.github.io/verto-imports/src/assets/products/macbook-air-m1.jpg',
                specifications: [
                    {
                        title: 'Processor',
                        items: [
                            {
                                name: 'M1 chip'
                            },
                            {
                                name: 'M2 chip',
                                value: 4000
                            }
                        ]
                    },
                    {
                        title: 'RAM',
                        items: [
                            {
                                name: '8 GB'
                            },
                            {
                                name: '16 GB',
                                value: 2000
                            }
                        ]
                    },
                    {
                        title: 'Storage',
                        items: [
                            {
                                name:'256 GB'
                            },
                            {
                                name:'512 GB',
                                value: 1000
                            },
                            {
                                name:'1 TB',
                                value: 1500
                            },
                            {
                                name: '2 TB',
                                value: 2000
                            }
                        ]
                    }
                ]
            },
            {
                value: 4000,
                name: 'Iphone 13',
                srcImg: 'https://vertocode.github.io/verto-imports/src/assets/products/iphone-13.jpeg',
                specifications: [
                    {
                        title: 'Processor',
                        items: [
                            {
                                name: '2x 3.22 GHz Avalanche + 4x 1.82 GHz Blizzard',
                                value: 500
                            }
                        ]
                    },
                    {
                        title: 'Camera',
                        items: [
                            {
                                name: '12 Mp'
                            },
                            {
                                name: '14 Mp',
                                value: 200
                            },
                            {
                                name: '16 Mp',
                                value: 400
                            }
                        ]
                    },
                    {
                        title: 'RAM',
                        items: [
                            {
                                name: '4 GB'
                            }
                        ]
                    },
                    {
                        title: 'Storage',
                        items: [
                            {
                                name: '256 GB'
                            },
                            {
                                name: '512 GB',
                                value: 1000
                            }
                        ]
                    }
                ]
            },
            {
                value: 6000,
                name: 'Mac Mini',
                srcImg: 'https://vertocode.github.io/verto-imports/src/assets/products/mac-mini.png',
                specifications: [
                    {
                        title: 'Processor',
                        items: [
                            {
                                name: 'M1 chip'
                            },
                            {
                                name: 'M2 chip',
                                value: 3500
                            }
                        ]
                    },
                    {
                        title: 'RAM',
                        items: [
                            {
                                name: '8 GB'
                            },
                            {
                                name: '16 GB',
                                value: 1500
                            }
                        ]
                    },
                    {
                        title: 'Storage',
                        items: [
                            {
                                name:'256 GB'
                            },
                            {
                                name:'512 GB',
                                value: 200
                            },
                            {
                                name:'1 TB',
                                value: 800
                            },
                            {
                                name: '2 TB',
                                value: 1500
                            }
                        ]
                    }
                ]
            },
        ]
    },
    mutations: {
        addProducts(state, payload) {
            console.log(payload)
            state.products.push(payload)
        }
    },
    actions: {

    },
    getters: {

    }
})