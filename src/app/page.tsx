import { SignedOut, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = 'force-dynamic'

async function Images() {
  const images = await getMyImages()
  
  return (
    <div className="flex flex-wrap justify-center gap-4">
        {images.map(image => (
          <div key={image.id} className="w-48 flex flex-col">
            <Image 
              src={image.url}
              width={250}
              height={250}
              alt={image.name}
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
  )
}

export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
