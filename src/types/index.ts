export interface ICategoryType {
  slug: string;
  name: string;
  url: string;
}

export interface IProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: 4;
  dimensions: IProductDimensionType;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IProductReviewType[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: IProductMetaDataType;
  images: string[];
  thumbnail: string;
}

export interface IProductDimensionType {
  width: number;
  height: number;
  depth: number;
}

export interface IProductReviewType {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface IProductMetaDataType {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
