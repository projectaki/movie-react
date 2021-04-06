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

  getReccomendation(id) {
    return http.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations${this.apiKey}&language=en-US&page=1`
    );
  }

  getSimilar(id) {
    return http.get(
      `https://api.themoviedb.org/3/movie/${id}/similar${this.apiKey}&language=en-US&page=1`
    );
  }

  getPopular(page, cancelToken) {
    return http.get(
      `https://api.themoviedb.org/3/movie/popular${this.apiKey}&language=en-US&page=${page}`,
      { cancelToken: cancelToken }
    );
  }

  getNowPlaying() {
    return http.get(
      `https://api.themoviedb.org/3/movie/now_playing${this.apiKey}&language=en-US&page=1`
    );
  }

  getUpcoming() {
    return http.get(
      `https://api.themoviedb.org/3/movie/upcoming${this.apiKey}&language=en-US&page=1`
    );
  }

  getReviews(id) {
    return http.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews${this.apiKey}&language=en-US&page=1`
    );
  }

  getReleaseDate(id) {
    return http.get(
      `https://api.themoviedb.org/3/movie/${id}/release_dates${this.apiKey}`
    );
  }

  getCredits(id) {
    return http.get(
      `https://api.themoviedb.org/3/movie/${id}/credits${this.apiKey}&language=en-US`
    );
  }
}

export default new MovieREST();
