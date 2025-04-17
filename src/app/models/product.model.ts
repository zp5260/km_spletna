export interface ProductMedia {
  type: 'image' | 'video';
  src: string;
}

export interface Product {
  title: string;
  shortDesc: string;
  price: string;
  imgUrl: string;
  longDesc: string;
  gallery: ProductMedia[];
}

