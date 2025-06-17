

import './globals.css'
import Header from '../../components/Header';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-black">
        <Header />
        {children}
      </body>
    </html>
  )
}
export const metadata = {
  title: 'Navigation Page',
  description: 'navigation between pages',
};
