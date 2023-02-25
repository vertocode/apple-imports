import { createStore } from 'vuex'

export default createStore({
    state: {
        isAdmin: false,
        userData: {},
        products: [
            {
                value: 7500,
                name: 'MacBook Air',
                srcImg: 'https://i.imgur.com/MPKg16X.jpg',
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
                srcImg: 'https://i.imgur.com/xs1Tyv4.jpg',
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
                srcImg: 'https://i.imgur.com/9t6gtXV.png',
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
            state.products.push(payload)
        },
        recoverState(state, payload) {
            state = payload
        },
        setUserLogged(state, payload) {
            state.userData = payload
        }
    },
    actions: {

    },
    getters: {

    }
})