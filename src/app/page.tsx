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
import { ArrowUpRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function Home() {
  noStore();

  const query = `*[_type == "post"] | order(_createdAt asc) {
  _id,
  title,
  subtitle,
  slug,
  thumbnail{
    asset->{url, metadata},
    alt
  },
  projectYear,
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

        <Works>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {posts?.map((post: any) => {
              return (
                <div key={post?._id}>
                  <div className="wrapper bg-zinc-900 overflow-hidden relative rounded-xl w-full h-full">
                    <div>
                      <NextLink
                        href={`/project/${post?.slug?.current}`}
                        scroll={false}
                      >
                        <figure className="project_img flex flex-col justify-center items-center aspect-[4/3] relative overflow-hidden">
                          <NextImage
                            src={`${post?.thumbnail?.asset?.url}`}
                            alt={post?.thumbnail?.alt}
                            width={570}
                            height={428}
                            className="object-cover w-full h-full max-w-full"
                            priority
                          />
                        </figure>
                      </NextLink>
                    </div>

                    <div className="project_name flex flex-col gap-6 p-6 overflow-hidden relative">
                      <div className="flex flex-col gap-2">
                        <span className="font-playwrite text-brand text-xs">
                          {" "}
                          year {post?.projectYear}
                        </span>
                        <h6 className="text-xl font-medium text-white">
                          {post?.title}
                        </h6>
                        <p className="text-sm text-neutral-400">
                          {post?.subtitle}
                        </p>
                      </div>

                      <NextLink
                        href={`/project/${post?.slug?.current}`}
                        scroll={false}
                      >
                        <button className="flex items-center gap-1 px-3 py-2 border border-[rgba(255,255,255,0.12)] rounded-xl text-xs font-medium text-white cursor-pointer hover:bg-zinc-800 ">
                          Preview
                          <ArrowUpRight size={16} />
                        </button>
                      </NextLink>
                    </div>
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
