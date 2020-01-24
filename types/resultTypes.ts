export interface IResults {
  title?: string;
  results?: IResult[];
}

export interface IResult {
  id: string;
  name: string;
  image_url: string;
  rating: number;
  review_count: number;
}

export interface IParsedResults {
  title: string;
  price: string;
  results?: IResult[];
}
