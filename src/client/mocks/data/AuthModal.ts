import { PhoneAuthVerifyResult, TokenInfo } from "../../types/AuthModal";
import { ApiResponse } from "../../../admin/types/api";

export const phoneAuthCheckResult: PhoneAuthVerifyResult = {
  isSuccess: true,
  code: 403,
  message: "요청에 성공했습니다.sss",
  result: {
    accessToken:
      "Bearer eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..frJurEdBwM6lEyvW.6QlGxPdIq93cxDIdecloNL8HIfCqAQHPrlBuBGXHrLYSyKDGnHdscy16M_kx_Pq_izk3GEwG4x1W3Zz5qVqUOF7yyC8LF-FRtgyt-zjsmi-MeZ_MPOxVvTj7PdvraWJWaW5Ir9uHKakvrBkg1xzyYyocTMNcQnM4ptwW1oDXLj17s0JakFKKSgHgTNpORUcNNt7NrQ7OKu3H3BohAseM5Qdo8xsGL0BQD7ApR-pAFoPaK2MqAc5xjigGX8M.9X4XzQCeJUEuCEDJ1ZGRSw",
    expireTime: 3600000,
  },
};

export const phoneAuthCheckFailResult: ApiResponse<TokenInfo | null> = {
  isSuccess: false,
  code: 400,
  message: "인증 정보가 잘못되었거나 인증 시간이 초과되었습니다.",
  result: null,
};

export const reissueResult: ApiResponse<TokenInfo> = {
  isSuccess: true,
  code: 200,
  message: "요청에 성공했습니다.",
  result: {
    accessToken:
      "Bearer eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..frJurEdBwM6lEyvW.6QlGxPdIq93cxDIdecloNL8HIfCqAQHPrlBuBGXHrLYSyKDGnHdscy16M_kx_Pq_izk3GEwG4x1W3Zz5qVqUOF7yyC8LF-FRtgyt-zjsmi-MeZ_MPOxVvTj7PdvraWJWaW5Ir9uHKakvrBkg1xzyYyocTMNcQnM4ptwW1oDXLj17s0JakFKKSgHgTNpORUcNNt7NrQ7OKu3H3BohAseM5Qdo8xsGL0BQD7ApR-pAFoPaK2MqAc5xjigGX8M.9X4XzQCeJUEuCEDJ1ZGRSw",
    expireTime: 3600000,
  },
};
