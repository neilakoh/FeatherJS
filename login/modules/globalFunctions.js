module.exports = {
  getRequestData: function(className) {
    return class className {
      create(data, params) {
        return Promise.resolve({
          data,
          params
        });
      }
    }
  }
}
