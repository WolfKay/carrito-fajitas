class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  callToAPI(url, method, callback, data, error) {
    url = `${this.BASE_URL}${url}`;
    $.ajax({
      method: method,
      url: url,
      data: data,
      success: callback,
      error: error,
      datatype: "json"
    });
  }

  getCoord(callback) {
    var url = "/api/v1/getUserCoord";
    this.callToAPI(url, "GET", callback);
  }

  // Used to get the info from a form and send it with ajax
  getInfoFromForm(form) {
    var returnObject = {};
    form.serializeArray().forEach(function (input) {
      returnObject[input.name] = input.value;
    });
    return returnObject;
  }

  searchEvent(callback) {
    var url = "/api/v1/events/search";
    var data = this.getInfoFromForm($(".search-form"));
    this.callToAPI(url, "POST", callback, data);
  }
}