import Navbar from "@/components/ui/layout/Navbar";
import Hero from "@/components/ui/body/Hero";
import About from "@/components/ui/body/About";
import Framer from "@/components/ui/body/Framer";
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
import React from "react";

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
      <main className="bg-zinc-950">
        <CustomCursor />
        {/* <VerticalLines /> */}
        {/* <FloatingEl/> */}
        <Navbar />
        <Hero />
        <About />
        <Framer />

        <Works>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-2 md:grid-rows-2 xs:grid-cols-1 xs:grid-rows-4">
            {posts?.map((post: any) => {
              return (
                <div key={post?._id}>
                  <div className="wrapper bg-zinc-900 border border-lime-500 overflow-hidden relative rounded-xl w-full h-full">
                    <NextLink
                      href={`/project/${post?.slug?.current}`}
                      scroll={false}
                    >
                      <div>
                        <figure className="flex flex-col justify-center item-center border border-red-500 bg-lime-500 project_img aspect-[4/3] max-w-[570px] relative cursor-pointer transition-transform duration-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] overflow-hidden">
                          <NextImage
                            src={`${post?.thumbnail?.asset?.url}`}
                            alt={post?.thumbnail?.alt}
                            width={570}
                            height={855}
                            className="object-cover"
                            priority
                          />
                        </figure>
                      </div>

                      <div className="project_name flex flex-col justify-end items-start p-4 overflow-hidden relative">
                        <h6 className="text-h6 font-light leading-[1.3] text-zinc-50">
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
