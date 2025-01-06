import SmallContainer from "@/components/ui/layout/SmallContainer";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <section>
      <SmallContainer>
        <div className="flex flex-col justify-center items-center py-32 gap-8 sm:gap-12">
          <div className="flex gap-4">
            <Link href="https://x.com/thatpollen" legacyBehavior>
              <a target="_blank">
                <Twitter size={16} />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/thatpollen/" legacyBehavior>
              <a target="_blank">
                <Linkedin size={16} />
              </a>
            </Link>
          </div>
          <p className="text-xs leading-[1.5] font-light">
            All works by Pollen @{currentYear}
          </p>
        </div>
      </SmallContainer>
    </section>
  );
}
