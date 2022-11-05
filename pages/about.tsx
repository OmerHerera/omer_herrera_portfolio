import Link from 'next/link';
import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Omer Herrera">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              GitHub: <a href="https://github.com/OmerHerera">@OmerHerera</a>
            </li>
            <li>
              Website: <Link href="https://www.omher.dev/">https://www.omher.dev/</Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/omer-herrera-15846a6/">
              https://www.linkedin.com/in/omer-herrera
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Omer Herrera, Principal FrontEnd Engineer at Dynamic Yield</p>
          <p>
            I have a few passions in my life, one of them is to create🛠️.
          </p>
          <p>
            I love to create software, especially web applications using JavaScript, 3d Graphic design, and making 3d animations gives me a lot of fun as well.
          </p>
          <p>
            Lately got into the photography 📷 world.
          </p>
          <p>
            Whenever I have some spare time, I try to dedicate it to learning new technologies 🤓, spending my time with friends and family 🤗.
            To relax I usually watch 📺 movies/tv series.
          </p>
          <p>
            I also pay high attention to my self-development, to be up to date with current trends on the market 📈.
          </p>
          
        </div>
      </div>
    </Container>
  );
}
