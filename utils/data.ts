import {
  project1,
  project10,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
} from "@/assets";

interface Project {
  title: string;
  desc: string;
  image: any;
  link: string;
  year: string;
}

export const portfolioData: Project[] = [
  {
    title: "Fiiverr App",
    desc: "Freelance Services Website",
    image: project3,
    link: "https://fiiverr-app-frontend.vercel.app",
    year: "2023",
  },
  {
    title: "Medicare",
    desc: "Appointment Booking Doctor",
    image: project2,
    link: "https://appointment-booking-doctor.vercel.app",
    year: "2024",
  },
  {
    title: "Multi Vendor Ecommerce",
    desc: "Ecommerce Website",
    image: project1,
    link: "https://multi-vendor-ecommerce-theta.vercel.app/",
    year: "2023",
  },

  {
    title: "Admin Dashboard",
    desc: "Dashboard",
    image: project4,
    link: "https://admin-dashboard-app-teal.vercel.app",
    year: "2023",
  },
  {
    title: "Digital marketing Company",
    desc: "Digital marketing",
    image: project5,
    link: "https://karimaltohamy.github.io/digital-marketing-project",
    year: "2023",
  },
  {
    title: "SDEX Company",
    desc: "Programing website",
    image: project6,
    link: "https://karimaltohamy.github.io/SDEX-programing-project-ar",
    year: "2023",
  },
  {
    title: "Yalla Cash",
    desc: "Payment Gateway",
    image: project7,
    link: "https://karimaltohamy.github.io/payment-gateway-project",
    year: "2023",
  },
  {
    title: "Courses Website",
    desc: "Education",
    image: project8,
    link: "https://karimaltohamy.github.io/5CodeCoursesProject",
    year: "2023",
  },
  {
    title: "Aleria Technologies",
    desc: "IOT and AI solitions",
    image: project9,
    link: "https://karimaltohamy.github.io/aleria-technologies",
    year: "2023",
  },
  {
    title: "First Choice",
    desc: "Landscaping",
    image: project10,
    link: "https://karimaltohamy.github.io/landscaping-project",
    year: "2023",
  },
];
