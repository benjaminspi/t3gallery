import Link from "next/link";
import { db } from "~/server/db";

const images = [
  "https://utfs.io/f/if4up8ujGLwQXNs8ZozAve0bqTjN5MEza6tmsox8QyV1nOPf",
  "https://utfs.io/f/if4up8ujGLwQXNs8ZozAve0bqTjN5MEza6tmsox8QyV1nOPf",
  "https://utfs.io/f/if4up8ujGLwQXNs8ZozAve0bqTjN5MEza6tmsox8QyV1nOPf",
  "https://utfs.io/f/if4up8ujGLwQXNs8ZozAve0bqTjN5MEza6tmsox8QyV1nOPf",
  "https://utfs.io/f/if4up8ujGLwQHl5Em3ToKQMlJ48cT35vpLCPByfgE9IzFqjA"
];

const mockImages = images.map((url, index) => ({
  id: index +1,
  url,
}));

export default async function  HomePage() {

  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          posts.map((post) => (
            <div key={post.id}>{post.name}</div>
          ))
        }
        {
          mockImages.map((image, index) => (
            <div key={image.id} className="w-48"> 
              <img src={image.url} />
            </div>
          ))
        }

      </div>
    </main>
  );
}

