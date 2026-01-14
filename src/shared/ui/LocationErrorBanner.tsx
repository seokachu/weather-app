interface LocationErrorBannerProps {
  message: string;
}

export const LocationErrorBanner = ({ message }: LocationErrorBannerProps) => {
  return (
    <div className="mb-4 p-4 bg-orange-50 border border-orange-100 rounded-2xl flex items-center gap-3">
      <span className="text-lg">⚠️</span>
      <p className="text-sm text-orange-700">{message}</p>
    </div>
  );
};
