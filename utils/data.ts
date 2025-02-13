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
  project11,
  project12,
  project13,
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
    title: "Prosper Egypt",
    desc: "Facility Management",
    image: project11,
    link: "https://prosper.rasid.com.eg",
    year: "2023",
  },
  {
    title: "Doctor Voice",
    desc: "Voice Messaging Mobile App",
    image: project12,
    link: "https://doctorvoice.net",
    year: "2023",
  },
  {
    title: "Doctor Voice Dashboard",
    desc: "Voice Messaging Mobile App Dashboard",
    image: project13,
    link: "https://doctorvoice.net",
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
    link: "https://karimaltohamy.github.io/5CodeCoursesProject-ar",
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
