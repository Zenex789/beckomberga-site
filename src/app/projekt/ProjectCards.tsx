"use client";
import { useRouter } from "next/navigation";
import { InteractiveTravelCard } from "@/components/ui/3d-card";

const WX = (id: string, w: number, h: number) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,usm_0.66_1.00_0.01/photo.jpg`;

const projects = [
  {
    id: 1,
    title: "Badrumsrenovering",
    subtitle: "Microcement · Bromma",
    // Smooth seamless microcement shower — clean finished result
    image: WX("b3fd8b_14bb52713d8f4dcb859bb717a9538a71~mv2.jpg", 800, 1100),
  },
  {
    id: 2,
    title: "Fasadmålning",
    subtitle: "Måleri · Villaägarare",
    // Two painters in Beckomberga uniforms on house exterior — great action shot
    image: WX("b3fd8b_6f6de8ed7a6f4ccfa0d023ef344e2f69~mv2.jpg", 800, 1100),
  },
  {
    id: 3,
    title: "Hall & entré",
    subtitle: "Microcement · Renovering",
    // Finished styled entrance hall with dark floor
    image: WX("b3fd8b_bf089c83147e495493c6dd68ba875b74~mv2.jpg", 800, 1100),
  },
  {
    id: 4,
    title: "Golvslipning",
    subtitle: "Parkett · Villalägenhet",
    // White drawers on beautiful warm parquet floor
    image: WX("b3fd8b_5f2d272af86a4103a46bc049c84dd2ce~mv2.jpg", 800, 1100),
  },
  {
    id: 5,
    title: "Trapphus BRF",
    subtitle: "Måleri · Hässelby",
    // Scaffolding banner — Beckomberga brand shot, B&W drama
    image: WX("b3fd8b_b17dbd4766ee4e52b6740ab60aaeb08c~mv2.jpg", 800, 1100),
  },
  {
    id: 6,
    title: "Garderob & inredning",
    subtitle: "Snickeri · Inbyggd",
    // Glass sliding wardrobe installation
    image: WX("b3fd8b_741f8b5ae82a4a6799ac5b259363fbdc~mv2.jpg", 800, 1100),
  },
];

export default function ProjectCards() {
  const router = useRouter();

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {projects.map((project) => (
        <div key={project.id} style={{ perspective: "1200px" }}>
          <InteractiveTravelCard
            title={project.title}
            subtitle={project.subtitle}
            imageUrl={project.image}
            actionText="Begär offert"
            href="/kontakt"
            onActionClick={() => router.push("/kontakt")}
          />
        </div>
      ))}
    </div>
  );
}
