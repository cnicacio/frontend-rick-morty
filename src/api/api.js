export const Api = {
	baseUrl: "https://back-end-rickmorty.herokuapp.com/",

	createUrl: () => Api.baseUrl + "/characters/create",

	readAllUrl: () => Api.baseUrl + "/characters/read-all",
	readSingleUrl: (id) => Api.baseUrl + "/characters/read-by-id" + id,

	updateUrl: (id) => Api.baseUrl + "/characters/update" + id,

	deleteUrl: (id) => Api.baseUrl + "/characters/delete" + id,
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
