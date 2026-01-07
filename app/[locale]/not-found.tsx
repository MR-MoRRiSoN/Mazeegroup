import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-[#032685] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">{t('title')}</h2>
        <p className="text-xl text-gray-600 mb-8">{t('message')}</p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-[#032685] text-white rounded-lg hover:bg-[#021d5a] transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          {t('backHome')}
        </Link>
      </div>
    </div>
  );
}
