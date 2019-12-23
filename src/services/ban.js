import { BAN_API_URL } from "./config";

export default function BANService(postcode) {
    return fetch(BAN_API_URL.concat(postcode), {
        // method: "GET",
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        // },
    })
}