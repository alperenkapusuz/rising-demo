import { http } from '../config/axios';
import { END_POINTS } from '../constants/end-points';
import { useQuery } from '@tanstack/react-query';
import { IResponseInfo, IResponseTable, ITableData } from '../interface/panel/panel.response.interface';

//table get request function
export const getTableFn = async () => {
  const res = await http.GET<ITableData<Array<IResponseTable>>>(END_POINTS.PANEL.GET_TABLE);
  return res.data;
};

//is the function that fetches table data
export const useGetTable = () => {
  return useQuery({
    queryKey: [END_POINTS.PANEL.GET_TABLE],
    queryFn: getTableFn,
    staleTime: 1000 * 60 * 5,
  });
};

// table get request function
export const getInfoFn = async () => {
  const res = await http.GET<IResponseInfo>(END_POINTS.PANEL.GET_INFO);
  return res.data;
};

//It is the function that fetches info data
export const useGetInfo = () => {
  return useQuery({
    queryKey: [END_POINTS.PANEL.GET_INFO],
    queryFn: getInfoFn,
    staleTime: 1000 * 60 * 5,
  });
};
