import http from "./FlaskAxios";

class FlaskREST {
  findByMovieId(id) {
    return http.get(`/getSimilarMovies?id=${id}`);
  }
}

export default new FlaskREST();
