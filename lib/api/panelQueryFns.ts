import { http } from "../config/axios"
import { END_POINTS } from "../constants/end-points"
import { useQuery } from '@tanstack/react-query';


export const getTableFn = async () => {
    const res = await http.GET(END_POINTS.PANEL.GET_TABLE)
    return res.data
}

export const useGetTable = () => {
    return useQuery({
        queryKey: [END_POINTS.PANEL.GET_TABLE],
        queryFn: getTableFn,
    })
}

export const getInfoFn = async () => {
    const res = await http.GET(END_POINTS.PANEL.GET_INFO)
    return res.data
}

export const useGetInfo = () => {
    return useQuery({
        queryKey: [END_POINTS.PANEL.GET_INFO],
        queryFn: getInfoFn,
    })
}