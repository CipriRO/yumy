"use client";

import ErrorHandle from "./components/ui/ErrorHandle";

export default function GlobalError({ reset }) {
  return (
    <html>
      <body>
        <ErrorHandle reset={reset} />
      </body>
    </html>
  );
}
