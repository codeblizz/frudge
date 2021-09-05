import axios from "axios";

const httpClient = (method, url, request) => {
  return axios[method](url, request)
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error))
}

export default {
  get (url, request) {
    return httpClient('get', url, request)
  },

  delete (url, request) {
    return httpClient('delete', url, request)
  },

  post (url, request) {
    return httpClient('post', url, request)
  },

  put (url, request) {
    return httpClient('put', url, request)
  },

  patch (url, request) {
    return httpClient('patch', url, request)
  }
}

export const lineData = {
  labels: [...sortedMonths],
  datasets: Object.keys(organisation).map(org => {
    return {
      label: org,
      borderColor: random_rgba(),
      backgroundColor: "rgba(0,0,0,0)",
      data: sortedMonths.map(m => organisation[org][m])
    };
  })
};

export const barData = {
  labels: [...sortedMonths],
  datasets: [
    {
      label: "Total Bookings",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: sortedMonths.map(m => monthWiseBooking[m])
    }
  ]
};

export const statusColor = {
  confirm: "green",
  hold: "grayc",
  cancel: "red"
};

export const pieData = {
  labels: [...Object.keys(status)],
  datasets: [
    {
      backgroundColor: Object.keys(status).map(s => statusColor[s]),
      data: [...Object.values(status)]
    }
  ]
};

export const datasetKeyProvider = () => {
  return btoa(Math.random()).substring(0, 12);
};