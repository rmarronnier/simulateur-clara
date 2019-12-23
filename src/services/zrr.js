import { ZRR_API_URL } from "./config";


export default function ZRRService(postcode) {
    return fetch(ZRR_API_URL.concat(postcode), {
        credentials: 'include',
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
}