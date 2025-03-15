"use client"
import { useQuery } from "@tanstack/react-query"
import { instance } from "../hooks/instance"

const getRequest = (api:string, key:string) => {
    const {data = [], isLoading, isError} = useQuery({
        queryKey: [key],
        queryFn: () => instance().get(api).then(res => res.data)
    })
    return {data, isLoading, isError}
}

export default getRequest