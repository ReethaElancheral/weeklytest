import React from "react";
function BuggyComponent() {
  const [shouldThrow, setShouldThrow] = React.useState(false);

  if (shouldThrow) {
    throw new Error("Oops! Something went wrong.");
  }

  return (
    <button onClick={() => setShouldThrow(true)}>Trigger Error</button>
  );
}

export default BuggyComponent;

