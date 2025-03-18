"use client"
import { useQuery } from "@tanstack/react-query"
import { instance } from "../hooks/instance"

const getRequest = (api: string, key: string, categoryId?:any) => {
    const { data = [], isLoading, isError } = useQuery({
        queryKey: [key, categoryId], 
        queryFn: () => instance().get(api, {
            params:{
                categoryId
            }
        }).then(res => res.data),
    });

    return { data, isLoading, isError };
};

export default getRequest;