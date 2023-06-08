import { Alert, AlertTitle } from "@mui/material";

export const errorAlert = (message) => {
  console.log(" error alert message", message);
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  );
};

export const successAlert = (message) => {
  return (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      {message}
    </Alert>
  );
};
