// import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // const error = useRouteError();
  // id="error-page"
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
};

export default ErrorPage;
