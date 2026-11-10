export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[#e9edde] text-[#2b303a]">
      <div className="flex flex-col items-center space-y-4">
        {/* Animated Loading Spinner */}
        <div className="w-12 h-12 border-4 border-[#9c0d38]/20 border-t-[#9c0d38] rounded-full animate-spin" />
        <p className="text-sm font-semibold tracking-wider text-[#2b303a]/75 uppercase">
          Loading PSA Educational...
        </p>
      </div>
    </div>
  );
}
