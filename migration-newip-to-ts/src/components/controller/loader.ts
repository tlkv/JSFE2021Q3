export type Options = {
  apiKey: string;
  sources: string;
};

export type Callbacks<T> = (_data: T) => void;

export type SourceType = Pick<DataSource, 'sources'>;
export type ArticleType = Pick<DataNews, 'articles'>;
export type DataType = Articles | DataNews | DataSource;

export interface respObject {
  endpoint: string;
  options?: Partial<Options>;
}
export interface Source {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface DataSource {
  status: string;
  sources: Source[];
}
export interface Articles {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

export interface DataNews {
  status: string;
  totalResults: number;
  articles: Articles[];
}

class Loader {
  public baseLink: string;
  public options: Partial<Options>;

  constructor(baseLink: string, options: Partial<Options>) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: respObject,
    callback: Callbacks<DataType> = () => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Partial<Options>, endpoint: string): string {
    const urlOptions: { [index: string]: string } = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key: string) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: Callbacks<DataType>, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
