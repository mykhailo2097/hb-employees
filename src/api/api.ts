import axios from "axios";

export class BaseApi {
  private static apiHostName = `https://yalantis-react-school-api.yalantis.com/api`;

  static get(route: string) {
    return axios.get(`${this.apiHostName}${route}`);
  }
}

export class UsersApi extends BaseApi {
  static getUsers() {
    return this.get("/task0/users").then((response) => response.data);
  }
}
