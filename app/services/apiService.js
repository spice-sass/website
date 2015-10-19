import HTTP from "../../node_modules/superagent/lib/client";

class apiService {

	request(url){
		return HTTP.get(url);
	}
}

export default apiService;