import { v2 as cloudinary } from 'cloudinary';
import { CustomImage } from './types'

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
        const { secure_url, width, height} = res;
        images.push(
          {
            src: secure_url,
            original: secure_url,
            width: width/10,
            height: height/10,
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