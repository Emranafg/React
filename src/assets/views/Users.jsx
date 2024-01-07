import axiosClient from "../handler/AxiosClient.js";

export default function dashboard() {

    axiosClient.get('/users').then((response) => {
        console.log(response)
     });
    return(
        <div>
            This is the users page
        </div>
    )
}
