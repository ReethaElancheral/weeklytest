import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import BuggyComponent from "./components/BuggyComponent";
import CustomFallback from "./components/CustomFallback";
import TryCatchComponent from "./components/TryCatchComponent";
import GlobalErrorComponent from "./components/GlobalErrorComponent";
import AsyncComponent from "./components/AsyncComponent";
import { WithErrorBoundary } from "./components/WitherrorBoundary";
import Counter from "./components/Counter";
import UserList from "./components/UserList";
import FormComponent from "./components/FormComponent";
import JokeComponent from "./components/JokeComponent";

function App() {
  return (
    <>
      <h2>
        1. Introduction to Error Boundaries: Write a brief explanation of what
        error boundaries are and why they are used in React.
      </h2>
      <p>
        <strong>What are Error Boundaries in React? </strong>
        <br />
        Error Boundaries in React are special components that catch JavaScript
        errors in their child component tree during rendering, lifecycle
        methods, or constructor phase and display a fallback UI instead of
        breaking the entire application. <br />
        <br />
        <strong>Why Use Error Boundaries?</strong> <br />
        Without Error Boundaries, if any component throws an error, the whole
        React app will crash. Error Boundaries prevent this by displaying a
        custom fallback UI while the rest of the app continues to work.
      </p>
      <hr />
      <h2>
        2. Basic Error Boundary Setup: Create a functional component using
        ErrorBoundary with React hooks.
      </h2>
      <hr />

      <h2>
        3. Error Simulation: Create a component that throws an error when a
        button is clicked.{" "}
      </h2>
      <h2>
        4. Error Fallback UI: Display a fallback UI when an error occurs.{" "}
      </h2>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BuggyComponent />
      </ErrorBoundary>
      <hr />
      <h2>
        5. Custom Error Message: Pass custom error messages to the fallback
        component.{" "}
      </h2>
      <ErrorBoundary FallbackComponent={CustomFallback}>
        <BuggyComponent />
      </ErrorBoundary>
      <hr />

      <h2>
        6. Try-Catch in Functional Components: Use try-catch inside event
        handlers to catch synchronous errors.
      </h2>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <TryCatchComponent />
      </ErrorBoundary>
      <hr />

      <h2>7. Global Error State: Manage error state using useState hook. </h2>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GlobalErrorComponent />
      </ErrorBoundary>
      <hr />

      <h2>
        8. Error Boundary with Children: Wrap multiple child components with the
        error boundary component.{" "}
      </h2>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BuggyComponent />
        <br />
        <TryCatchComponent />
        <br />
        <GlobalErrorComponent />
      </ErrorBoundary>
      <hr />

      <h2>
        9. Reset Error State: Add a button that resets the error state and
        re-renders the component.{" "}
      </h2>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          console.log("Reset triggered");
        }}
      >
        <BuggyComponent />
      </ErrorBoundary>
      <hr />
      <h2>10. Log Errors to Console: Log caught errors to the console. </h2>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, info) => {
          console.error("Logged error:", error, info);
        }}
      >
    <BuggyComponent/>
      </ErrorBoundary>
      <hr />
      <h2>
        11. Async Error Handling: Catch errors from asynchronous operations
        inside useEffect.
      </h2>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AsyncComponent />
      </ErrorBoundary>
      <hr />

      <h2>
        12. Reusable Error Boundary: Create a reusable ErrorBoundary component
        that can wrap any component.{" "}
      </h2>

      <WithErrorBoundary>
        <BuggyComponent />
      </WithErrorBoundary>
      <hr />

      <h2>
        13. Multiple Error Boundaries: Wrap different components with separate
        error boundaries.{" "}
      </h2>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BuggyComponent />
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={CustomFallback}>
        <AsyncComponent />
      </ErrorBoundary>
      <hr />

      <h2>Mini Project 1: Error Boundary with Counter </h2>
       <div style={{ padding: '20px' }}>
      <h1>Counter with Error Boundary</h1>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, info) => {
          console.error("Logged error:", error.message);
          console.log("Component stack:", info.componentStack);
        }}
        onReset={() => {
          console.log("Resetting error boundary");
        }}
      >
        <Counter/>
      </ErrorBoundary>
    </div>
    <hr/>
    <h2>Mini Project 2: API Fetch Error Boundary </h2>
     <div style={{ padding: '20px' }}>
      <h1>API Fetch with Error Boundary</h1>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, info) => {
          console.error("API Error Caught:", error);
          console.log("Component Stack:", info.componentStack);
        }}
      >
        <UserList />
      </ErrorBoundary>
    </div>
    <hr/>
<h2>Mini Project 3: Form Submission Error</h2>
<div style={{ padding: 20 }}>
      <h1>Form with Error Boundary</h1>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, info) => {
          console.error("Form Error:", error.message);
          console.log("Component Stack:", info.componentStack);
        }}
      >
        <FormComponent />
      </ErrorBoundary>
    </div><hr/>
    <h2>Mini Project 4: Random Joke Generator with Error Handling</h2>
<div style={{ padding: 20 }}>
      <h1>Random Joke Generator</h1>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, info) => {
          console.error("Joke fetch error:", error.message);
        }}
      >
        <JokeComponent/>
      </ErrorBoundary>
    </div>


    </>
  );
}

export default App;
