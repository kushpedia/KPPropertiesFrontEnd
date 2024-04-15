import axios from "axios"


function getDjangoApi(){
	return axios.create('http://localhost:8000')
}
export default getDjangoApi