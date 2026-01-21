import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  tagline: string;
  href?: string;
  status?: "active" | "completed" | "archived";
  featured?: boolean;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

const statusConfig = {
  active: {
    label: "Active",
    className:
      "bg-orange-500/10 text-orange-600 dark:bg-purple-500/10 dark:text-purple-400",
  },
  completed: {
    label: "Completed",
    className: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  archived: {
    label: "Archived",
    className: "bg-muted text-muted-foreground",
  },
} as const;

export function ProjectCard({
  title,
  tagline,
  href,
  status,
  featured = false,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden transition-all duration-300 ease-out h-full",
        "hover:shadow-lg hover:scale-[1.02]",
        "border-transparent bg-muted/50 hover:bg-muted/80",
        className
      )}
    >
      <Link href={href || "#"} className="block cursor-pointer">
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className={cn(
              "pointer-events-none mx-auto w-full object-cover object-top",
              featured ? "h-48 sm:h-56" : "h-36"
            )}
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className={cn(
              "w-full overflow-hidden object-cover object-top transition-transform duration-300 group-hover:scale-105",
              featured ? "h-48 sm:h-56" : "h-36"
            )}
          />
        )}
        {!video && !image && (
          <div
            className={cn(
              "w-full bg-gradient-to-br from-orange-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-orange-500/10 flex items-center justify-center",
              featured ? "h-40 sm:h-48" : "h-28"
            )}
          >
            <span className="text-3xl opacity-20">{"</>"}</span>
          </div>
        )}
      </Link>
      <CardHeader className="px-3 pt-3 pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-0.5">
            <CardTitle
              className={cn("leading-tight", featured ? "text-lg" : "text-base")}
            >
              {title}
            </CardTitle>
            <p className="text-xs text-muted-foreground">{tagline}</p>
          </div>
          {status && (
            <Badge
              variant="secondary"
              className={cn(
                "text-[10px] shrink-0 font-medium border-0",
                statusConfig[status].className
              )}
            >
              {statusConfig[status].label}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardFooter className="px-3 pb-3 mt-auto flex flex-row-reverse">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-end gap-1">
            {links?.map((link, idx) => (
              <Link
                href={link?.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  variant="secondary"
                  className={cn(
                    "flex gap-1.5 px-2 py-1 text-[10px] transition-colors border-0",
                    "hover:bg-orange-500/20 hover:text-orange-600",
                    "dark:hover:bg-purple-500/20 dark:hover:text-purple-400"
                  )}
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
