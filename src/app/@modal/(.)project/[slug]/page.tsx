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
      <div className="p-4 sm:p-12 flex flex-col gap-6 bg-zinc-50">
        <div className="flex flex-col gap-4 text-zinc-950">
          <h2 className="text-3xl leading-[1.4] text-dark font-bold">
            {post?.title}
          </h2>
        </div>
        <NextImage
          src={post?.introImage?.asset?.url}
          alt={post?.introImage?.alt}
          width={1920}
          height={1024}
          className="w-full h-auto max-w-full rounded-xl shadow-sm"
          priority
        />
        <div className="flex flex-col gap-2 font-normal">
          <h4 className="text-xl font-semibold text-zinc-950">Overview</h4>
          <p className="text-zinc-500">{post?.projectIntro}</p>
        </div>
        <NextImage
          src={post?.firstImage?.asset?.url}
          alt={post?.firstImage?.alt}
          width={1920}
          height={1024}
          className="w-fullauto max-w-full rounded-xl shadow-sm"
          priority
        />
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-semibold text-zinc-950">Goal</h4>
          <p className="text-zinc-500">{post?.projectGoal}</p>
        </div>
        <NextImage
          src={post?.secondImage?.asset?.url}
          alt={post?.secondImage?.alt}
          width={2201}
          height={2341}
          className="w-full h-auto max-w-full rounded-xl shadow-sm"
          priority
        />
        <div className="flex flex-col gap-2">
          <h6 className="text-xl font-semibold text-zinc-950">Solution</h6>
          <p className="text-zinc-500">{post?.projectSolution}</p>
        </div>
        <NextImage
          src={post?.thirdImage?.asset?.url}
          alt={post?.thirdImage?.alt}
          width={1920}
          height={1024}
          className="w-full h-auto max-w-full rounded-2xl shadow-sm"
        />
        <NextImage
          src={post?.fourthImage?.asset?.url}
          alt={post?.fourthImage?.alt}
          width={1920}
          height={1024}
          className="w-full h-auto max-w-full rounded-2xl shadow-sm"
        />
        <NextImage
          src={post?.fifthImage?.asset?.url}
          alt={post?.fifthImage?.alt}
          width={1920}
          height={1024}
          className="w-full h-auto max-w-full rounded-2xl shadow-sm"
        />
        {post?.sixthImage?.asset?.url && (
          <NextImage
            src={post?.sixthImage?.asset?.url}
            alt={post?.sixthImage?.alt}
            width={1920}
            height={1024}
            className="w-full h-auto max-w-full rounded-2xl shadow-sm"
          />
        )}
        {post?.seventhImage?.asset?.url && (
          <NextImage
            src={post?.seventhImage?.asset?.url}
            alt={post?.seventhImage?.alt}
            width={1920}
            height={1024}
            className="w-full h-auto max-w-full rounded-2xl shadow-sm"
          />
        )}
        {post?.eighthImage?.asset?.url && (
          <NextImage
            src={post?.eighthImage?.asset?.url}
            alt={post?.eighthImage?.alt}
            width={1920}
            height={1024}
            className="w-full h-auto max-w-full rounded-2xl shadow-sm"
          />
        )}
      </div>
    </Modal>
  );
}
