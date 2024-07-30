"use client";
import { useSearchParams } from "next/navigation";

const DisplayError = () => {
  const search = useSearchParams();
  const error = search.get("error");

  if (error)
    return (
      <div className="space-y-2 rounded-2xl bg-error/10 px-5 py-3 text-sm text-error shadow ring-2 ring-error/80">
        <h4 className="text-lg font-semibold text-error">Error</h4>
        <Error error={error} />
      </div>
    );
};
export default DisplayError;

const ErrorMessages = {
  AccessDenied: { message: "Access Denied!", showCode: false },
  Verification: {
    message:
      "The token has expired or has already been used. Please contact us if this error persists!",
    showCode: true,
  },
  OAuthAccountNotLinked: {
    message:
      "Please authenticate with the same provider you did the first time!",
    showCode: false,
  },
};

const ErrorCode = ({ error }) => {
  return (
    <p className="text-error">
      Unique error code:{" "}
      <code className="rounded-md bg-error/20 p-1 text-xs text-copy">
        {error}
      </code>
    </p>
  );
};

const Error = ({ error }) => {
  const ErrorMessage = ErrorMessages[error];

  if (ErrorMessage)
    return (
      <>
        <p className="text-error">{ErrorMessage.message}</p>
        {ErrorMessage.showCode && <ErrorCode error={error} />}
      </>
    );
  else
    return (
      <>
        <p className="text-error">
          There was a problem when trying to authenticate. Please contact us if
          this error persists!
        </p>
        <ErrorCode error={error} />
      </>
    );
};
