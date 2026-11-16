export default function BookCard({
  title,
  author,
  rating = 0,        
  isRead = false,
  isBest = false,
}) {
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <div className="book-card">
      <h3>
        {title}
        {isBest && <span className="best">BEST</span>}
      </h3>
      <p className="author">{author}</p>
      <p className="stars">{stars}</p>
      <p className="status">{isRead ? '✅ 다 읽음' : '📖 읽는 중'}</p>
    </div>
  );
}
