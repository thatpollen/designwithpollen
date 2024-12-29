import Navbar from "@/components/ui/layout/Navbar";
import Hero from "@/components/ui/body/Hero";
import About from "@/components/ui/body/About";
import Works from "@/components/ui/body/Works";
// import Services from "@/components/ui/body/Services";
import Footer from "@/components/ui/layout/Footer";
import VerticalLines from "@/components/ui/assets/VerticalLines";
import CustomCursor from "@/components/ui/assets/CustomCursor";
import Loader from "@/components/ui/assets/Loader";

import NextImage from "next/image";
import NextLink from "next/link";
import { client } from "../../sanity/lib/client";
import { unstable_noStore as noStore } from "next/cache";

export const dynamic = "force-dynamic";

export default async function Home() {
  noStore();

  const query = `*[_type == "post"] | order(_createdAt asc) {
  _id,
  title,
  slug,
  thumbnail{
    asset->{url, metadata},
    alt
  },
}`;

  const posts = await client.fetch(query, {
    params: {
      // cache: "no-store",
      next: { revalidate: 3 },
    },
  });

  return (
    <>
      <Loader />
      <main>
        <CustomCursor />
        {/* <VerticalLines /> */}
        {/* <FloatingEl/> */}
        <Navbar />
        <Hero />
        <About />

        <Works>
          <div className="grid grid-cols-4 gap-6 md:grid-cols-2 md:grid-rows-2 xs:grid-cols-1 xs:grid-rows-4">
            {posts?.map((post: any) => {
              return (
                <div key={post?._id}>
                  <div className="wrapper overflow-hidden relative rounded-xl">
                    <NextLink
                      href={`/project/${post?.slug?.current}`}
                      scroll={false}
                    >
                      <figure className="project_img aspect-[2/3] relative cursor-pointer transition-transform duration-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)]">
                        <NextImage
                          src={`${post?.thumbnail?.asset?.url}`}
                          alt={post?.thumbnail?.alt}
                          width={1024}
                          height={1536}
                          className="w-auto h-auto object-cover"
                          priority
                        />
                      </figure>
                      <div className="project_name flex flex-col justify-end items-start p-4 overflow-hidden absolute left-0 top-auto bottom-0 right-0 bg-[rgba(47,53,66,0.72)] opacity-0 transition-opacity duration-200 ease-linear">
                        <h6 className="text-h6 font-light leading-[1.3] text-white">
                          {post?.title}
                        </h6>
                      </div>
                    </NextLink>
                  </div>
                </div>
              );
            })}
          </div>
        </Works>

{/*         <Services /> */}
        <Footer />
      </main>
    </>
  );
}
