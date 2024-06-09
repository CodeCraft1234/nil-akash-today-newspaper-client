

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Axios/UseAxiosPublic";
const UseNews = () => {
    const AxiosPublic=UseAxiosPublic()
    const { refetch, data: news=[]}=useQuery({
        queryKey:['news'],
        queryFn: async () => {
            const res=await AxiosPublic.get(`/news`)
            return res.data
        }
    })
        console.log(news)
        return [news,refetch]
}
export default UseNews;