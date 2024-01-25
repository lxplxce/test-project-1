import Question from "../components/Question";
import Result from "../components/Results";

export const appRoutes = [
  { path: "/question/:id", element: Question },
  { path: "/results", element: Result },
];
