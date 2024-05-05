"use client";
import { useSearchParams } from "next/navigation";

const DisplayError = () => {
  const search = useSearchParams();
  const error = search.get("error");

  if (error)
    return (
      <div className="text-sm text-error ring-2 ring-error/80 bg-error/10 shadow rounded-2xl space-y-2 py-3 px-5">
        <h4 className="text-error font-semibold text-lg">Error</h4>
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
      <code className="text-xs text-copy bg-error/20 p-1 rounded-md">
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
