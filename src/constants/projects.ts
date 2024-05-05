interface Project {
  id: string;
  title: string;
  subtitle: string;
  imgSrc: string;
  link?: string;
  body?: string;
}

export const PROJECT_DATA: Project[] = [
  {
    title: "Project 1",
    subtitle: "The first project I ever did in my life",
    id: "project1",
    imgSrc: "/face.png",
  },
  {
    title: "Project 2",
    subtitle: "I did another project because I'm so busy",
    id: "project2",
    imgSrc: "/face.png",
  },
  {
    title: "Project 3",
    subtitle: "Such a productive young man!",
    id: "project3",
    imgSrc: "/face.png",
  },
];
