import { Amina, Badis, CollectiveSport, GreenEnvironment, Health, IndividualsSport, MentalSport, Meriem, Person } from "../utils";

export const Navlinks = ["Departments", "Members", "Contact"];

export const Departments = [
    {
        title: 'Collective sports',
        description: 'Engage in team activities that foster collaboration, camaraderie, and a sense of unity. Collective sports are designed to build strong interpersonal skills, trust among teammates, and effective communication while striving toward shared goals.',
        icon: CollectiveSport
    },
    {
        title: 'Individual sports',
        description: 'Focus on personal achievement, discipline, and self-improvement in solo activities. Individual sports push athletes to reach their highest potential by honing skills, setting personal records, and developing a deep sense of self-reliance and mental toughness.',
        icon: IndividualsSport
    },
    {
        title: 'Mental sports',
        description: 'Enhance mental acuity, strategic thinking, and problem-solving through cognitive challenges. Mental sports require focus, patience, and analytical skills, providing an excellent way to stimulate brain function and improve decision-making in competitive environments.',
        icon: MentalSport
    },
    {
        title: 'Green environment',
        description: 'Promote sustainability and eco-friendly practices in all our activities, encouraging members to engage with nature and take actions that contribute to environmental conservation. Our green initiatives aim to foster environmental responsibility and create a healthier planet for future generations.',
        icon: GreenEnvironment
    },
    {
        title: 'Health',
        description: 'Prioritize wellness, healthy living, and physical fitness through various engaging activities. Our health programs are designed to support overall well-being, combining exercise, mindfulness, and proper nutrition to enhance quality of life and prevent illness.',
        icon: Health
    },
    {
        title: 'Artistic culture',
        description: 'Celebrate creativity, self-expression, and artistic talent through a variety of engaging activities. Artistic sports provide a platform for members to showcase their skills, explore new forms of expression, and collaborate with others in a supportive and inclusive environment.',
        icon: CollectiveSport
    }
];


export const Members = [
    {
        id: 1,
        name: "Djamel",
        department: "President",
        github: "",
        linkedIn: "",
        gmail: "",
        photo: Person,
    },
    {
        id: 2,
        name: "Badis Belkessam",
        department: "SG",
        github: "https://github.com/BadisBelkessam",
        linkedIn: "Badis",
        gmail: "badis.belkessam@ensia.edu.dz",
        photo: Badis,
    },
    {
        id: 3,
        name: "Ali",
        department: "HR",
        github: "www.google.com",
        linkedIn: "",
        gmail: "@ensia.edu.dz",
        photo: Person,
    },
    {
        id: 4,
        name: "Amina Gadiri",
        department: "",
        github: "https://github.com/amina463",
        linkedIn: "https://www.linkedin.com/in/amina-gad-151391326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        gmail: "amina.gadri@ensia.edu.dz",
        photo: Amina,
    },
    {
        id: 5,
        name: "Meriem O uadfel",
        department: "Green environmemt",
        github: "",
        linkedIn: "https://www.linkedin.com/in/meriem-ouadfel-b03624290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        gmail: "Meriem.ouadfel@ensia.edu.dz",
        photo: Meriem,
    },
    {
        id: 6,
        name: "",
        department: "",
        github: "",
        linkedIn: "",
        gmail: "",
        photo: Person,
    },
    {
        id: 7,
        name: "",
        department: "",
        github: "",
        linkedIn: "",
        gmail: "",
        photo: Person,
    }
]