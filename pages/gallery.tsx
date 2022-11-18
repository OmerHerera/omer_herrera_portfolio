import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import { CustomImage } from 'lib/types'
import Container from 'components/Container';
import Grid from 'components/Grid'
import Loading from 'components/Loading'
export default function GalleryWorks() {
  const {  data , error } = useSWR<[CustomImage]>('/api/gallery', fetcher);
  if (error) return <div>Failed to load</div>

  return (
    <Container
    title="Gallery – Omer Herrera"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              About Me
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Here are some examples of my 3d graphic works, using blender program
            </p>
            {data ?  (<Grid data={ data } />) : (<Loading />)}
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto" style={{ width: "500px" }}>
          </div>
        </div>
      </div>
    </Container>
  )
}