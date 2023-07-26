export function getCurrentPosition() {
  let latitude: number = 37.566826;
  let longitude: number = 126.9786567;

  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(position => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }

  return {
    latitude,
    longitude,
  };
}
