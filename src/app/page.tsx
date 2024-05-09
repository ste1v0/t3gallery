import { db } from "~/server/db";

const mockUrls = [
  'https://utfs.io/f/101f2d7d-7719-4d14-83b6-7f595ea7ae60-10s1.png',
  'https://utfs.io/f/cdf8b05e-4863-479d-b15d-c2a64a42a466-10s2.png',
  'https://utfs.io/f/50c532a4-2060-442d-a738-5802d5ba258f-10s3.png',
  'https://utfs.io/f/c85b93ed-1a6d-405b-9197-e267bd3b1892-10s4.png'
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany()

  console.log(posts)

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map(post => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map(image => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
