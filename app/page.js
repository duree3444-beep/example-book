import books from '@/data/books';
import GenreSection from '@/components/GenreSection';

const genres = [
  { key: 'novel', label: '📖 소설' },
  { key: 'essay', label: '✍️ 에세이' },
  { key: 'it', label: '💻 IT' },
  { key: 'poem', label: '🌸 시' },
];

export default function Home() {
  const readBooks = books.filter((book) => book.isRead);
  const percent = Math.round((readBooks.length / books.length) * 100);

  const topBooks = books.filter((book) => book.rating === 5);

  return (
    <main>
      <h1>📚 나의 책장</h1>

      <div className="stats">
        <div className="stat">전체 <b>{books.length}</b>권</div>
        <div className="stat">다 읽은 책 <b>{readBooks.length}</b>권</div>
        <div className="stat">독서 진행률 <b>{percent}</b>%</div>
      </div>
      <div className="bar">
        <div style={{ width: `${percent}%` }} />
      </div>

      {topBooks.length > 0 && (
        <p className="notice">
          ⭐ 별점 5점 추천: {topBooks.map((book) => book.title).join(', ')}
        </p>
      )}

      {}
      {genres.map((genre) => (
        <GenreSection
          key={genre.key}
          label={genre.label}
          books={books.filter((book) => book.genre === genre.key)}
        />
      ))}
    </main>
  );
}
