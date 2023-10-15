import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Error</h1>
      <h3> {error.status} </h3>
      <h4>{<i>{error.statusText || error.message}</i>}</h4>
    </>
  );
};

export default ErrorPage;
