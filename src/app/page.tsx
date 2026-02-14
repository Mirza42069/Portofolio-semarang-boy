import { DATA } from '@/data';
import Image from 'next/image';

export default function Page() {
  return (
    <section>
      <h1 className="mb-3 text-2xl font-medium tracking-tighter text-primary">
        hey, I&apos;m {DATA.name} 👋
      </h1>
      
      <p className="prose prose-neutral w-full dark:prose-invert">
        {DATA.descriptionPart1}
        <span className="font-bold text-orange-500 dark:text-purple-400">{DATA.location}</span>
        {". "}
        <span className="font-bold text-orange-500 dark:text-purple-400">{DATA.openToWork}</span>
      </p>
      
      <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt={DATA.images[0].title}
            src={DATA.images[0].href}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt={DATA.images[1].title}
            src={DATA.images[1].href}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt={DATA.images[2].title}
            src={DATA.images[2].href}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt={DATA.images[3].title}
            src={DATA.images[3].href}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt={DATA.images[4].title}
            src={DATA.images[4].href}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt={DATA.images[5].title}
            src={DATA.images[5].href}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <p className="prose prose-neutral w-full dark:prose-invert">
        {DATA.summary}
      </p>
    </section>
  );
}
