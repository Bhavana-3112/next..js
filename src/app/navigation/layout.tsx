import Header from '../../../components/Header';

export const metadata = {
  title: 'Navigation Page',
  description: 'navigation between pages',
};

export default function SundayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      
      <main>{children}</main>
    </div>
  );
}
