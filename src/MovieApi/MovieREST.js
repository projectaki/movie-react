import http from "./MovieAxios";

class MovieREST {
  constructor() {
    this.apiKey = "?api_key=4198345852c55a862ccb220b37954952";
  }

  findByMovieId(id) {
    return http.get(`/movie/${id}${this.apiKey}`);
  }

  searchWithQuery(query) {
    const queryURI = escape(query);
    return http.get(
      `/search/movie${this.apiKey}&language=en-US&query=${queryURI}&page=1&include_adult=false`
    );
  }
}

export default new MovieREST();
