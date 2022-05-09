import axiosClient from './axiosClient';
const categoryApi = {
  getAll(param) {
    const url = '/categories';
    return axiosClient.get(url, { params: param });

  },
  get(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url, { params: id });
  },
  add(data) {
    const url = '/categories';
    return axiosClient.post(url, { params: data });

  },
  update(data) {
    const url = `/categories/${data.id}`;
    return axiosClient.patch(url, { params: data });
   },
  remove(id) { 
    const url = `/categories/${id}`;
    return axiosClient.delete(url, { params: id });
  },

}

export default categoryApi