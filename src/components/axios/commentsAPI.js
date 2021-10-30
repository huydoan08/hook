import axiosClient from "./setup";
const commentsAPI = {
  getAll: (params) => {
    const url = "/comments";
    return axiosClient.get(url, {
      params,
    });
  },
  get: (id) => {
    const url = `comments/${id}}`;
    return axiosClient.get(url);
  },
  delete: (id) => {
	const url = `comments/${id}`;
	return axiosClient.delete(url)
  }
};
export default commentsAPI;
