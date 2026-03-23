
interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}
interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}
const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};