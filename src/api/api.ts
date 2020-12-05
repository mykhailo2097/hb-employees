import axios from "axios";

export class BaseApi {
  private static apiHostName =
    "https://yalantis-react-school-api.yalantis.com/api";

  static get(route: string, queryParams?: any) {
    return axios.get(`${this.apiHostName}${route}`, {
      params: queryParams,
    });
  }
}
