export interface Product {
    value: number,
    name: string,
    srcImg?: string,
    description?: string,
    specifications?: [
        {
            title: string,
            items: [
                {
                    name: string,
                    value?: number
                }
            ]
        }
    ]
}

export interface ProductListType {
    route: string
    srcImg: string
    name: string
    description: string
}