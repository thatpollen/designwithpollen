import Modal from "@/components/ui/modal";
import { LinkArrow } from "@/components/icons/Icons";
import NextImage from "next/image";
import NextLink from "next/link";
import { client } from "../../../../../sanity/lib/client";
import { unstable_noStore as noStore } from "next/cache";
import type { ProjectProps } from "@/lib/types";

export default async function ProjectModalPage({ params }: ProjectProps) {
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
}[0]
`;

  const post = await client.fetch(query, {
    params: {
      // cache: "no-store",
      next: { revalidate: 3 },
    },
    postSlug,
  });

  return (
    <Modal>
      <div>
        <div className="flex flex-col gap-4 p-8 text-[#222831]">
          <h2 className="text-h5 leading-[1.4] text-dark font-bold">
            {post?.title}
          </h2>
          <div className="flex justify-between items-center gap-4 py-8">
            <span>PROJECT YEAR</span>
            <div className="w-1/2 h-px max-w-full bg-[rgba(0,0,0,0.16)]"></div>
            <span>{post?.projectYear}</span>
          </div>
        </div>
        <NextImage
          src={post?.introImage?.asset?.url}
          alt={post?.introImage?.alt}
          width={1920}
          height={1024}
          className="w-full h-auto max-w-full"
          priority
        />
        <div className="flex flex-col gap-4 p-8 text-[#222831] bg-[#f0f1f5]">
          <h6 className="text-sm font-bold">/Overview</h6>
          <p className="text-charcoal">{post?.projectIntro}</p>
        </div>
        <NextImage
          src={post?.firstImage?.asset?.url}
          alt={post?.firstImage?.alt}
          width={1920}
          height={1024}
          className="w-fullauto max-w-full py-4"
          priority
        />
        <div className="flex flex-col gap-4 p-8 text-[#222831] bg-[#f0f1f5]">
          <h6 className="text-sm font-bold">/Goal</h6>
          <p className="text-charcoal">{post?.projectGoal}</p>
        </div>
        <NextImage
          src={post?.secondImage?.asset?.url}
          alt={post?.secondImage?.alt}
          width={2201}
          height={2341}
          className="w-full h-auto max-w-full py-4"
          priority
        />
        <div className="flex flex-col gap-4 p-8 text-[#222831] bg-[#f0f1f5]">
          <h6 className="text-sm font-bold">/Solution</h6>
          <p className="text-charcoal">{post?.projectSolution}</p>
        </div>
        <NextImage
          src={post?.thirdImage?.asset?.url}
          alt={post?.thirdImage?.alt}
          width={1920}
          height={1024}
          className="w-full h-auto max-w-full py-4"
        />
        <NextImage
          src={post?.fourthImage?.asset?.url}
          alt={post?.fourthImage?.alt}
          width={1920}
          height={1024}
          className="w-full h-auto max-w-full py-4"
        />
        <NextImage
          src={post?.fifthImage?.asset?.url}
          alt={post?.fifthImage?.alt}
          width={1920}
          height={1024}
          className="w-full h-auto max-w-full py-4"
        />
        {post?.sixthImage?.asset?.url && (
          <NextImage
            src={post?.sixthImage?.asset?.url}
            alt={post?.sixthImage?.alt}
            width={1920}
            height={1024}
            className="w-full h-auto max-w-full py-4"
          />
        )}
        {post?.seventhImage?.asset?.url && (
          <NextImage
            src={post?.seventhImage?.asset?.url}
            alt={post?.seventhImage?.alt}
            width={1920}
            height={1024}
            className="w-full h-auto max-w-full py-4"
          />
        )}
        {post?.eighthImage?.asset?.url && (
          <NextImage
            src={post?.eighthImage?.asset?.url}
            alt={post?.eighthImage?.alt}
            width={1920}
            height={1024}
            className="w-full h-auto max-w-full py-4"
          />
        )}
        {/* <div className="flex flex-col gap-4 p-8 text-[#222831]">
          <NextLink href={`${post?.figmaProjectLink}`} legacyBehavior>
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
    </Modal>
  );
}
