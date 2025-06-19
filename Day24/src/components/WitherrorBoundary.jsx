import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

export function WithErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => console.error(error)}
    >
      {children}
    </ErrorBoundary>
  );
}
