import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>oops.....</h1>
        <h2>Something Went wrong</h2>
        <h3>{err.status} : {err.statusText}</h3>
        <h3>Error Data: {err.data}</h3>
        <h4>Message: {err.message || err.error?.message}</h4>
    </div>
  )
}

export default Error