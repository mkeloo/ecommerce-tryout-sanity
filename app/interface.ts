export interface simplifiedProduct {
    _id: number;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
}

export interface fullProduct {
    _id: number;
    images: any;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
}

