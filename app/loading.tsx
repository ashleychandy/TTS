export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg">
      <div className="text-center font-sans">
        <div className="w-12 h-12 border-4 border-[#f3f3f3] border-t-primary-red-brand rounded-full animate-spin mx-auto mb-6" />
        <p className="text-sm text-[#666] uppercase tracking-widest">Loading...</p>
      </div>
    </div>
  );
}
