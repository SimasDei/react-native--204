export interface IResults {
  title?: string;
  results?: IResult[];
  navigate?: (
    routeName: string,
    params: {
      id: IResult['id'];
    },
  ) => void;
}

export interface IResult {
  id: string;
  name: string;
  image_url: string;
  rating: number;
  review_count: number;
  photos?: string[];
}

export interface IParsedResults {
  title: string;
  price: string;
  results?: IResult[];
}
