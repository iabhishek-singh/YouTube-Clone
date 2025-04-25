import { useRouteError, Link } from "react-router-dom";
// This component handles errors for invalid routes or unexpected issues
export function Error() {

    // React Router's hook to get the error object from the routing system
    const err = useRouteError();
    // console.log(err);

    // Render the error message and a link to navigate back to the Home page
    return (

        <div className="text-center" style={{ margin: '25px', padding: '5px' }}>
            {/* Main error heading */}
            <h1 className="text-red-600 text-2xl font-bold" style={{ padding: '5px' }}>Oops!!</h1>

            {/* Display error status and message (e.g., 404 Not Found) */}
            <h3 className="italic font-bold " style={{ padding: '5px' }}>{err.status} {err.statusText}</h3>

            {/* Show any additional error details provided by the router */}
            <h3 className="errorHading font-serif">{err.data}</h3>

            {/* this Link use for go to home page */}
            <h1 className="text-2xl text-center text-blue-700 hover:underline"><Link to="/">Go to Home</Link></h1>
        </div>
    );
}