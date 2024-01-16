import axios from "axios"
const Backend_URL = "http://localhost:8000/allblogs"
export async function fetchData() {
    const res = await axios.get(`${Backend_URL}/allblogs`)
    if (res.status !== 200) {
        throw new Error("cannot fetch")
    }
    return res.data
}