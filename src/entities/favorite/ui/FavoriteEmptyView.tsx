const FavoriteEmptyView = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-slate-400 text-center">
      <span className="text-4xl mb-4">📍</span>
      <p>아직 즐겨찾기한 지역이 없어요.</p>
    </div>
  );
};

export default FavoriteEmptyView;
