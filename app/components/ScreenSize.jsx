
const ScreenSize = () => {
  return (
    <div className="fixed bottom-1 left-1 z-50 font-bold [text-shadow:_0_0_10px_white]">
      <p className="block sm:hidden text-slate-400">Very small</p>
      <p className="sm:block md:hidden hidden text-green-500">Small</p>
      <p className="md:block lg:hidden hidden text-yellow-500">Medium</p>
      <p className="lg:block xl:hidden hidden text-red-500">Large</p>
      <p className="xl:block hidden text-purple-500">Extra Large</p>
    </div>
  );
}

export default ScreenSize