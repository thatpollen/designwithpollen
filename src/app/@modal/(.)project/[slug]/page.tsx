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
}
`;

  const project = await client.fetch(query, {
    params: { cache: "no-store" },
    postSlug,
  });

  return (
    <Modal>
      <div>
        <div className="flex flex-col gap-4 p-8 text-darkBlue">
          <h2 className="text-h5 leading-[1.4] text-dark font-bold">
            {project[0]?.title}
          </h2>
          <div className="flex justify-between items-center gap-4 py-8">
            <span>PROJECT YEAR</span>
            <div className="w-1/2 h-px max-w-full bg-[rgba(0,0,0,0.16)]"></div>
            <span>{project[0]?.projectYear}</span>
          </div>
        </div>
        <NextImage
          src={project[0]?.introImage?.asset?.url}
          alt={project[0]?.introImage?.alt}
          width={1920}
          height={1024}
          className="w-auto h-auto max-w-full"
          priority
        />
        <div className="flex flex-col gap-4 p-8 text-darkBlue bg-[#f0f1f5]">
          <h6 className="text-sm font-bold">/Overview</h6>
          <p className="text-charcoal">{project[0]?.projectIntro}</p>
        </div>
        <NextImage
          src={project[0]?.firstImage?.asset?.url}
          alt={project[0]?.firstImage?.alt}
          width={1920}
          height={1024}
          className="w-auto h-auto max-w-full py-4"
          priority
        />
        <div className="flex flex-col gap-4 p-8 text-darkBlue bg-[#f0f1f5]">
          <h6 className="text-sm font-bold">/Goal</h6>
          <p className="text-charcoal">{project[0]?.projectGoal}</p>
        </div>
        <NextImage
          src={project[0]?.secondImage?.asset?.url}
          alt={project[0]?.secondImage?.alt}
          width={2201}
          height={2341}
          className="w-auto h-auto max-w-full py-4"
          priority
        />
        <div className="flex flex-col gap-4 p-8 text-darkBlue bg-[#f0f1f5]">
          <h6 className="text-sm font-bold">/Solution</h6>
          <p className="text-charcoal">{project[0]?.projectSolution}</p>
        </div>
        <NextImage
          src={project[0]?.thirdImage?.asset?.url}
          alt={project[0]?.thirdImage?.alt}
          width={1920}
          height={1024}
          className="w-auto h-auto max-w-full py-4"
        />
        <NextImage
          src={project[0]?.fourthImage?.asset?.url}
          alt={project[0]?.fourthImage?.alt}
          width={1920}
          height={1024}
          className="w-auto h-auto max-w-full py-4"
        />
        <NextImage
          src={project[0]?.fifthImage?.asset?.url}
          alt={project[0]?.fifthImage?.alt}
          width={1920}
          height={1024}
          className="w-auto h-auto max-w-full py-4"
        />
        <NextImage
          src={project[0]?.sixthImage?.asset?.url}
          alt={project[0]?.sixthImage?.alt}
          width={1920}
          height={1024}
          className="w-auto h-auto max-w-full py-4"
        />
        <NextImage
          src={project[0]?.seventhImage?.asset?.url}
          alt={project[0]?.seventhImage?.alt}
          width={1920}
          height={1024}
          className="w-auto h-auto max-w-full py-4"
        />
        <NextImage
          src={project[0]?.eighthImage?.asset?.url}
          alt={project[0]?.eighthImage?.alt}
          width={1920}
          height={1024}
          className="w-auto h-auto max-w-full py-4"
        />
        <div className="flex flex-col gap-4 p-8 text-darkBlue">
          <NextLink href={`${project[0]?.figmaProjectLink}`} legacyBehavior>
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
                  className="w-auto h-auto max-w-full object-cover"
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
        </div>
      </div>
    </Modal>
  );
}
