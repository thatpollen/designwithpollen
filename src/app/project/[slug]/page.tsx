import { LinkArrow } from "@/components/icons/Icons";
import NextImage from "next/image";
import NextLink from "next/link";
import { client } from "../../../../sanity/lib/client";
import { unstable_noStore as noStore } from "next/cache";
import type { ProjectProps } from "@/lib/types";
import Container from "@/components/ui/layout/Container";

export default async function ProjectSlugPage({ params }: ProjectProps) {
  noStore();

  const postSlug = params.slug;

  const query = `
*[_type == "post" && slug.current == $postSlug] {
  _id,
  title,
  slug,
  introImage {
    asset->{url, metadata},
    alt
  },
  projectIntro,
  firstImage{
    asset->{url, metadata},
    alt
  },
  projectGoal,
  secondImage{
    asset->{url, metadata},
    alt
   },
  projectSolution,
  thirdImage{
    asset->{url, metadata},
    alt
  },
  fourthImage{
    asset->{url, metadata},
    alt
  },
  fifthImage{
    asset->{url, metadata},
    alt
  },
  sixthImage{
    asset->{url, metadata},
    alt
  },
  seventhImage{
    asset->{url, metadata},
    alt
  },
  eighthImage{
    asset->{url, metadata},
    alt
  },
  figmaProjectLink,
  projectYear,
  liveLink,
}
`;

  const post = await client.fetch(query, {
    params: {
      // cache: "no-store",
      next: { revalidate: 3 },
    },
    postSlug,
  });

  return (
    <>
      {/* <div>This should be project modal</div> */}
      <div className="w-full h-full">
        <Container>
          <div className="flex justify-center w-full h-full">
            <div className="modal flex flex-col w-full h-full max-w-[1024px] relative z-[11] bg-white">
              {/* <div className="close_btn flex justify-end items-stretch py-6 px-8 sticky top-0 z-[12] bg-white border-b border-[rgba(0,0,0,0.08)]">
                <div className="flex justify-start items-center gap-2 cursor-pointer">
                  <span className="text-black">Close</span>
                  <span>
                    <Close />
                  </span>
                </div>
              </div> */}
              <div className="flex flex-col gap-4 p-8 text-[#222831]">
                <h2 className="text-h5 leading-[1.4] text-dark font-bold">
                  {post[0]?.title}
                </h2>
                <div className="flex justify-between items-center gap-4 py-8">
                  <span>PROJECT YEAR</span>
                  <div className="w-1/2 h-px max-w-full bg-[rgba(0,0,0,0.16)]"></div>
                  <span>{post[0]?.projectYear}</span>
                </div>
              </div>
              <NextImage
                src={post[0]?.introImage?.asset?.url}
                alt={post[0]?.introImage?.alt}
                width={1920}
                height={1024}
                className="w-full h-auto max-w-full"
                priority
              />
              <div className="flex flex-col gap-4 p-8 text-[#222831] bg-[#f0f1f5]">
                <h6 className="text-sm font-bold">/Overview</h6>
                <p className="text-charcoal">{post[0]?.projectIntro}</p>
              </div>
              <NextImage
                src={post[0]?.firstImage?.asset?.url}
                alt={post[0]?.firstImage?.alt}
                width={1920}
                height={1024}
                className="w-full h-auto max-w-full py-4"
                priority
              />
              <div className="flex flex-col gap-4 p-8 text-[#222831] bg-[#f0f1f5]">
                <h6 className="text-sm font-bold">/Goal</h6>
                <p className="text-charcoal">{post[0]?.projectGoal}</p>
              </div>
              <NextImage
                src={post[0]?.secondImage?.asset?.url}
                alt={post[0]?.secondImage?.alt}
                width={2201}
                height={2341}
                className="w-full h-auto max-w-full py-4"
                priority
              />
              <div className="flex flex-col gap-4 p-8 text-[#222831] bg-[#f0f1f5]">
                <h6 className="text-sm font-bold">/Solution</h6>
                <p className="text-charcoal">{post[0]?.projectSolution}</p>
              </div>
              <NextImage
                src={post[0]?.thirdImage?.asset?.url}
                alt={post[0]?.thirdImage?.alt}
                width={1920}
                height={1024}
                className="w-full h-auto max-w-full py-4"
              />
              <NextImage
                src={post[0]?.fourthImage?.asset?.url}
                alt={post[0]?.fourthImage?.alt}
                width={1920}
                height={1024}
                className="w-full h-auto max-w-full py-4"
              />
              <NextImage
                src={post[0]?.fifthImage?.asset?.url}
                alt={post[0]?.fifthImage?.alt}
                width={1920}
                height={1024}
                className="w-full h-auto max-w-full py-4"
              />
              <NextImage
                src={post[0]?.sixthImage?.asset?.url}
                alt={post[0]?.sixthImage?.alt}
                width={1920}
                height={1024}
                className={`${
                  post[0]?.sixthImage?.asset?.url
                    ? "w-full h-auto max-w-full py-4"
                    : "hidden"
                }`}
              />
              <NextImage
                src={post[0]?.seventhImage?.asset?.url}
                alt={post[0]?.seventhImage?.alt}
                width={1920}
                height={1024}
                className={`${
                  post[0]?.seventhImage?.asset?.url
                    ? "w-full h-auto max-w-full py-4"
                    : "hidden"
                }`}
              />
              <NextImage
                src={post[0]?.eighthImage?.asset?.url}
                alt={post[0]?.eighthImage?.alt}
                width={1920}
                height={1024}
                className={`${
                  post[0]?.eighthImage?.asset?.url
                    ? "w-full h-auto max-w-full py-4"
                    : "hidden"
                }`}
              />
              {/* <div className="flex flex-col gap-4 p-8 text-[#222831]">
                <NextLink href={`${post[0]?.figmaProjectLink}`} legacyBehavior>
                  <a
                    className="flex justify-between items-center p-6 bg-dark rounded-xl"
                    target="_blank"
                  >
                    <div className="shrink flex justify-start items-center gap-2">
                      <NextImage
                        src="/figma.svg"
                        alt="figma"
                        width={32}
                        height={32}
                        className="w-full h-auto max-w-full object-cover"
                      />
                      <span className="text-xl font-bold text-white">
                        Figma Design
                      </span>
                    </div>
                    <span className="w-6 h-6">
                      <LinkArrow />
                    </span>
                  </a>
                </NextLink>
              </div> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
