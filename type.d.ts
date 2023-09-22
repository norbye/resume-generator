import { Image, Slug } from "sanity";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface ResumeType extends base {
  title: string;
  slug: Slug;
  background: [
    {
      title: string;
      from: string;
      to: string;
      intitution: string;
    }
  ];
  engagement: [
    {
      title: string;
      from: string;
      to: string;
      organisation: string;
    }
  ];
  expertise: [
    {
      title: string;
      projects: string[];
    }
  ];
  experience: [
    {
      employer: string;
      title: string;
      to: string;
      from: string;
      description: string;
    }
  ];
  publishedAt;
  employee: {
    name: string;
    phone: string;
    email: string;
    bio: string;
    position: string;
    image: Image;
  };
}
