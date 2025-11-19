import { useSuspenseQuery } from "@tanstack/react-query";

import { END_POINT } from "../config/end-point";
import { instance } from "../instance";
import { queryKey } from "../query-key";
import type { UserResponse } from "../types/my";

/**
 *
 * 유저 정보 조회
 */
const getUser = async (): Promise<UserResponse> => {
  const response = await instance.get<UserResponse>(END_POINT.MY);
  return response.data;
};
export const useGetUser = () => {
  return useSuspenseQuery({
    queryKey: [queryKey.GET_USER],
    queryFn: getUser,
  });
};
