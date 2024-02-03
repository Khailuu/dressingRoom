class CallData {
    constructor() {
        this.baseUrl = "./../data/Data.json"

        this.getData = () => {
            return axios({
                url: this.baseUrl,
                method: "GET"
            })
        }
    }
}