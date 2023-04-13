import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

function onRequest(config: AxiosRequestConfig): InternalAxiosRequestConfig {
  return config as InternalAxiosRequestConfig
}

function onRequestError(err: AxiosError): Promise<AxiosError> {
  return Promise.reject(err)
}

function onResponse(res: AxiosResponse): AxiosResponse {
  return res
}

function onResponseError(err: AxiosError): Promise<AxiosError> {
  return Promise.reject(err?.response?.data || err)
}

export function setupInterceptors(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}
