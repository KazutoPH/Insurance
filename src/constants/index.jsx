export const navLinks = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Services",
    route: "/services",
  },
  {
    name: "Resources",
    route: "/resources",
  },
  {
    name: "Faq",
    route: "/faq",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];

export const hero_person = ["/person1.webp", "/person2.jpg", "/person3.jpg"];

export const insurance_plans = [
  {
    title: (
      <span>
        Extensive <span className="text-secondary">heath</span> and dental
        coverage
      </span>
    ),
    content:
      "Secure comprehensive health and dental coverage that aligns perfectly with your lifestyle and habits.",
    image: "/dental.png",
    route: "/",
  },
  {
    title: (
      <span>
        Secure your <span className="text-secondary">{`child's`}</span> future
      </span>
    ),
    content: `Safeguard your child's future with insurance plans designed to offer protection and support.`,
    route: "/",
    image: "/child_mother.png",
  },

  {
    title: (
      <span>
        <span className="text-secondary">Protect</span> your loved ones
      </span>
    ),
    content: `Ensure your loved ones' future security with our personalized life insurance polices.`,
    route: "/",
    image: "/lola_child.png",
  },

  {
    title: (
      <span>
        <span className="text-secondary">Safeguard</span> your business with
        tailored insurance solutions
      </span>
    ),
    content: `Our comprehensive approach identifies potential risks, ensuring proactive protection amidst ever-evolving challenges.`,
    route: "/",
    image: "/girl_checklist.png",
  },
];

export const insurance_solution_list = [
  {
    name: "Expert guidance",
    description: `Benefit from seasoned advice,
    ensuring informed decisions for
    optimal insurance solutions.`,
    icon: "",
  },
  {
    name: "Personalized service",
    description: `Tailored services matching your
    unique needs for a seamless
    insurance experience.`,
    icon: "",
  },
  {
    name: "Dedicated support",
    description: `Receive unwavering assistance
    throughout, guaranteeing your peace
    of mind and satisfaction.`,
    icon: "",
  },
];
