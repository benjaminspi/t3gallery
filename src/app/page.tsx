import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [
            ...mockImages, 
            ...mockImages, 
            ...mockImages, 
            ...mockImages
          ].map((image) => (
            <div key={image.id} className="w-48"> 
              <img src={image.url} />
            </div>
          ))
        }

      </div>
    </main>
  );
}

