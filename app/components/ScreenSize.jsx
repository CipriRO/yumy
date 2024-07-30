const ScreenSize = () => {
  return (
    <div className="fixed bottom-1 left-1 z-50 font-bold [text-shadow:_0_0_10px_white]">
      <p className="block text-slate-400 sm:hidden">Very small</p>
      <p className="hidden text-green-500 sm:block md:hidden">Small</p>
      <p className="hidden text-yellow-500 md:block lg:hidden">Medium</p>
      <p className="hidden text-red-500 lg:block xl:hidden">Large</p>
      <p className="hidden text-purple-500 xl:block">Extra Large</p>
    </div>
  );
};

export default ScreenSize;
