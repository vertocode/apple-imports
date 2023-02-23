import { createStore } from 'vuex'

export default createStore({
    state: {
        isAdmin: false,
        userData: {
            iss: "https://accounts.google.com",
            nbf: 1677192197,
            aud: "180900081631-7j3aopdirsgrquj6phi9fs9fl4ml9e8i.apps.googleusercontent.com",
            sub: "104019791754000514478",
            email: "evertonvanoni1@gmail.com",
            email_verified: true,
            azp: "180900081631-7j3aopdirsgrquj6phi9fs9fl4ml9e8i.apps.googleusercontent.com",
            name: "Everton Vanoni",
            picture: "https://lh3.googleusercontent.com/a/AGNmyxbdndq-Ghko4bJg32yooARklMJHs1Y5o30Gavvf6A=s96-c",
            given_name: "Everton",
            family_name: "Vanoni",
            iat: 1677192497,
            exp: 1677196097,
            jti: "5ddb6b6dd90b1b74efe59ccb7ab77a0720abef24"
        },
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
        addUserData(state, payload) {
            state.userData = payload
        }
    },
    actions: {

    },
    getters: {

    }
})