import { http } from "../config/axios"
import { END_POINTS } from "../constants/end-points"
import { IBodyAuth } from "../interface/auth/auth.body.interface"
import { IResponseAuth } from "../interface/auth/auth.response.interface"

export const postLoginFn = async (body: IBodyAuth) => {
    const res = await http.POST<IResponseAuth>(END_POINTS.AUTH.LOGIN, body)
    return res.data
}

