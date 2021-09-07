export const Api = {
	baseUrl: "https://back-end-rickmorty.herokuapp.com/characters",

	createUrl: () => Api.baseUrl + "/create",

	readAllUrl: () => Api.baseUrl + "/read-all",
	readSingleUrl: (id) => Api.baseUrl + "/read-by-id/" + id,

	updateUrl: (id) => Api.baseUrl + "/update/" + id,

	deleteUrl: (id) => Api.baseUrl + "/delete/" + id,
	deleteAllUrl: () => Api.baseUrl + "/",

	// Create
	buildApiPostRequest: (url, body) => {
		return fetch(url, {
			method: "POST",
			headers: new Headers({
				"Content-type": "application/json",
			}),
			body: JSON.stringify(body),
		});
	},

	// ReadAll
	buildApiGetRequest: (url) => {
		return fetch(url, {
			method: "GET",
		});
	},

	// UpdateById
	buildApiPutRequest: (url, body) => {
		return fetch(url, {
			method: "PUT",
			headers: new Headers({
				"Content-type": "application/json",
			}),
			body: JSON.stringify(body),
		});
	},

	// DeleteAll
	buildApiDeleteRequest: (url) => {
		return fetch(url, {
			method: "DELETE",
		});
	},
};
