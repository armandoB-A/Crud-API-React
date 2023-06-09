import http from "../http-common";

class TutorialDataService {
    getAll() {
        return http.get("/users/");
    }

    get(id) {
        return http.get(`/users/${id}`);
    }

    create(data) {
        return http.post("/users/", data);
    }

    update(id, data) {
        return http.patch(`/users/${id}`, data);
    }

    delete(id) {
        return http.delete(`/users/${id}`);
    }

    deleteAll() {
        return http.delete(`/tutorials`);
    }

    findByTitle(title) {
        return http.get(`/tutorials?title=${title}`);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TutorialDataService();