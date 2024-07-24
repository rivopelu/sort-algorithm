import BubleSort from "../pages/BubleSort";
import HomePage from "../pages/HomePage";
import InsertionSort from "../pages/InsertionSort";
import { ROUTES } from "./routes";
export interface IRoutesList {
  element: () => JSX.Element;
  path: string;
}
export const routesList: IRoutesList[] = [
  {
    element: HomePage,
    path: ROUTES.HOME(),
  },
  {
    element: BubleSort,
    path: ROUTES.BUBLE_SORT(),
  },
  {
    element: InsertionSort,
    path: ROUTES.INSERTION_SORT(),
  },
];
