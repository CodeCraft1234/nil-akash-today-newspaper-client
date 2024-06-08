import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Axios/UseAxiosSecure";
const UseNews = () => {
    const AxiosSecure=UseAxiosSecure()
    const { refetch, data: news=[]}=useQuery({
        queryKey:['news'],
        queryFn: async () => {
            const res=await AxiosSecure.get(`/news`)
            return res.data
        }
    })
        console.log(news)
        return [news,refetch]
}
export default UseNews;