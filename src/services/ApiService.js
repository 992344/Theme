import BaseService from "./BaseService";
const ApiService = {
  async fetchData(param) {
    return new Promise(async (resolve, reject) => {
      BaseService(param)
        .then((response) => {
          resolve(response);
        
        })
        .catch((errors) => {
          reject(errors);
        });
    });
  },
};
export default ApiService;
