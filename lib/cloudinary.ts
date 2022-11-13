import { v2 as cloudinary } from 'cloudinary';
import { CustomImage } from './types'

console.log(`process.env.CLOUDINARY_API_KEY: ${process.env.CLOUDINARY_API_KEY}`)
cloudinary.config({
	cloud_name: 'omher',
  api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true
});

export const getResources = async () => {
  let images: CustomImage[] = [];
  await cloudinary.search
    .expression('folder:blender')
    .execute()
    .then(result => {
      result.resources.map((res) => {
        const { secure_url, } = res;
        images.push(
          {
            src: secure_url,
            original: secure_url,
            width: 320,
            height: 100,
            tags: [
              // { value: "Naturesss", title: "Naturesss" },
              // { value: "Floraddd", title: "Floradd" }
            ],
            // caption: "After Rain (Jeshu John - designerspics.com)"
          }
        );
      });
    });
  return images;

};