import * as Axios from 'axios';

const instance = Axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "f79bab12-e397-486a-a77a-dc511ec11215"
  }
});

export const UserAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  }
};

export const FollowedAPI = {
  followed(id) {
    return instance
      .post(`follow/${id}`)
      .then(response => response.data);
  },
  unFollowed(id) {
    return instance
      .delete(`follow/${id}`)
      .then(response => response.data);
  }
};

export const ProfileAPI = {
  getProfile(userId) {
    return instance
      .get(`profile/${userId}`)
      .then(response => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status/`, { status: status });
  }
};

export const AuthAPI = {
  authMe() {
    return instance
      .get(`auth/me`)
      .then(response => response.data);
  },
  getMyPhoto(id) {
    return instance
      .get(`profile/${id}`)
      .then(response => response.data);
  },
  authLogin(email, password, rememberMe, captcha) {
    return instance
      .post('auth/login', {email: email, password: password, rememberMe: rememberMe, captcha: captcha});
  },
  authLogout() {
    return instance
      .delete('auth/login');
  }
};
