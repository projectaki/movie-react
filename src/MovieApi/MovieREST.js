import http from "./MovieAxios";

class MovieREST {
  constructor() {
    this.apiKey = "?api_key=4198345852c55a862ccb220b37954952";
  }

  findByMovieId(id) {
    return http.get(`/movie/${id}${this.apiKey}`);
  }
}

export default new MovieREST();
