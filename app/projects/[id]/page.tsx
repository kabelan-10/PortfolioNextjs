import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import ProjectDetails from "@/components/ProjectDetails";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetails initialProject={project} />;
}
