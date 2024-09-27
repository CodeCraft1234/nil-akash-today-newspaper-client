

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Axios/UseAxiosPublic";
const UseNews = () => {
    const AxiosPublic=UseAxiosPublic()
    const { refetch, data: news=[]}=useQuery({
        queryKey:['newsDetails'],
        queryFn: async () => {
            const res=await AxiosPublic.get(`/news`)
            return res.data
        }
    })
        return [news,refetch]
}
export default UseNews;