import './globals.css';

export const metadata = {
  title: '나의 책장',
  description: 'React 입문 미니 프로젝트',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
