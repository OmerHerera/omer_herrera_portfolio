import { Suspense } from 'react';
import Image from 'next/image';
import Container from '../components/Container';
import { useTypedText } from '../utils/typingtext'


export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              {useTypedText("Omer Herrera", 50)}
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                {useTypedText("Principal FrontEnd Engineer at ", 50, 200)}
                <span className="font-semibold">
                  {useTypedText("Dynamic Yield", 50, 300)}
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Hands-on engineer focusing on web technologies, with a diverse background that spans both industry and research.
                I love learning new technologies/languages, dealing with all web technologies, and creating things that are useful for others.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto" style={{ width:"500px"}}>
              <Image
                alt="Omer Herrera"
                height={176}
                width={176}
                src="/profilePicture.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>
          
        </div>
      </Container>
    </Suspense>
  );
}
