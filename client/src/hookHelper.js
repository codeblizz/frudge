import axios from "axios";
import { useMediaQuery } from 'react-responsive';

const httpClient = (method, url, request) => {
  return axios[method](url, request)
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error))
}

export default {
  get (url, request) {
    return httpClient('get', url, request)
  }
}

export const deviceHeight = window.innerHeight;
export const deviceWidth = window.innerWidth;

export const useMediaQueryHook = (query) => {
  const isBigScreen = useMediaQuery({ query })
  const isDesktopOrLaptop = useMediaQuery({ query })
  const isTabletOrMobile = useMediaQuery({ query })
  const isPortrait = useMediaQuery({ query })
  const isRetina = useMediaQuery({ query })

  if(query === '(min-width: 1824px)') {
    return isBigScreen;
  } else if(query === '(min-width: 1224px)'){
    return isDesktopOrLaptop;
  } else if(query === '(max-width: 1224px)'){
    return isTabletOrMobile;
  } else if(query === '(orientation: portrait)'){
    return isPortrait;
  } else if(query === '(min-resolution: 2dppx)'){
    return isRetina;
  }
  return;
}