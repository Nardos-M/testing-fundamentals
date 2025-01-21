export default function fetchData(callback) {
    setTimeout(() => {
      callback("data received");
    }, 1000);
  }