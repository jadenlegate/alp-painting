import Link from "next/link";

// Portfolio tile. Used on home "Featured work" and /work gallery. Once
// Sanity is wired, shape matches `project` document: title, slug, cover,
// location, service tags.
export type Project = {
  slug: string;
  title: string;
  location?: string;
  serviceTags?: string[];
  coverUrl?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
    >
      <div className="aspect-[3/2] overflow-hidden rounded-sm bg-stone-light/40">
        {project.coverUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={project.coverUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone font-serif text-sm">
            {project.title}
          </div>
        )}
      </div>
      <div className="mt-3">
        <h3 className="font-serif text-lg text-navy group-hover:underline underline-offset-4 decoration-[0.5px]">
          {project.title}
        </h3>
        {(project.location || project.serviceTags?.length) && (
          <div className="mt-1 text-xs text-muted">
            {project.location}
            {project.location && project.serviceTags?.length ? " · " : ""}
            {project.serviceTags?.join(" · ")}
          </div>
        )}
      </div>
    </Link>
  );
}
