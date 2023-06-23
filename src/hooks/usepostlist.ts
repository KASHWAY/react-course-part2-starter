import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

const usePostList = () => {

    const fetchPostList = () =>
        axios 
        .get<Post[]>('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.data);

    return useQuery<Post[], Error>({
        queryKey: ['postlist'],
        queryFn: fetchPostList
    })

}

export default usePostList;