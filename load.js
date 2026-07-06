import http from "k6/http";

// 50 usuarios virtuales golpeando el servicio durante 5 minutos.
export const options = {
  vus: 100,
  duration: "5m",
};

export default function () {
  // La URL del LoadBalancer se pasa por variable de entorno -e LB=...
  http.get(`http://${__ENV.LB}/health`);
}