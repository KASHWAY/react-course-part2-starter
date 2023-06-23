import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

const usePosts = () => useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: () => axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.data),
        staleTime: 1 * 60 * 1000, // 1 minute
})

export default usePosts;