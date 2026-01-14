import React from "react";
import { getProjectsByLocale } from "@/lib/data/projects";
import { ProjectDetailClient } from "./ProjectDetailClient";
import { getLocale } from "next-intl/server";
import { Metadata } from "next";

interface ProjectDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { id } = await params;
  const locale = await getLocale();
  const projects = getProjectsByLocale(locale);
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return {
      title: 'Project Not Found | Maze Group',
      description: 'The project you are looking for could not be found.',
    };
  }

  const clientName = project.client || 'Hotel';
  const location = project.location || 'Georgia';

  return {
    title: `${project.name} | ${clientName} ${location} | Hotel Projects | Maze Group`,
    description: project.description?.slice(0, 160) || `Completed hotel project: ${project.name} for ${clientName} in ${location}. Professional hotel equipment installation by Maze Group.`,
    openGraph: {
      title: `${project.name} | ${clientName} | Maze Group`,
      description: project.description?.slice(0, 160) || `${project.name} - Completed hotel project in ${location}`,
      images: project.images?.slice(0, 1),
    },
    alternates: {
      canonical: `https://maze-group.com/${locale}/project-detail/${id}`,
      languages: {
        en: `https://maze-group.com/en/project-detail/${id}`,
        ru: `https://maze-group.com/ru/project-detail/${id}`,
        ka: `https://maze-group.com/ka/project-detail/${id}`,
      },
    },
  };
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  // Unwrap the params Promise
  const { id } = await params;
  const locale = await getLocale();
  const projects = getProjectsByLocale(locale);

  // Find the project by ID
  const project = projects.find((p) => p.id === parseInt(id));

  // Pass the project data to the client component
  return <ProjectDetailClient project={project} projectId={id} />;
}
