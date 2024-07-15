

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Axios/UseAxiosPublic";
const UseDraft = () => {
    const AxiosPublic=UseAxiosPublic()
    const { refetch, data: draft=[]}=useQuery({
        queryKey:['draft'],
        queryFn: async () => {
            const res=await AxiosPublic.get(`/draft`)
            return res.data
        }
    })
        console.log(draft)
        return [draft,refetch]
}
export default UseDraft;