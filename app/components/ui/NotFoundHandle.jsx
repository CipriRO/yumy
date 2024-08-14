const NotFoundHandle = async () => {
  return (
    <div className="mx-auto flex h-svh max-w-[600px] flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold text-primary mb-2">Yumy</h2>
      <div className="space-y-2">
        <h2 className="text-4xl font-bold">Page not found</h2>
        <p>We couldn&apos;t find the page you were looking for.</p>
      </div>
    </div>
  );
};
export default NotFoundHandle;
