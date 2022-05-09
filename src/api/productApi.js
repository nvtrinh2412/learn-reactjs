import axiosClient from './axiosClient';
const productApi = {
  getAll(param) {
    const url = '/products';
    return axiosClient.get(url, { params: param });

  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url, { params: id });
  },
  add(data) {
    const url = '/products';
    return axiosClient.post(url, { params: data });

  },
  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url, { params: data });
   },
  remove(id) { 
    const url = `/products/${id}`;
    return axiosClient.delete(url, { params: id });
  },

}

export default productApi