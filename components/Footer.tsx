import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Gallery
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://www.linkedin.com/in/omer-herrera-15846a6/">
          Linkedin
          </ExternalLink>
          <ExternalLink href="https://github.com/OmerHerera">GitHub</ExternalLink>
        </div>
      </div>
    </footer>
  );
}
