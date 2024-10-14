import { Card, List, Typography, Chip } from "@material-tailwind/react";

import {Computer,Movie,LinkXmark,PlusSquare,VideoCamera,Flask,BrainResearch } from "iconoir-react";

const Links = [
  {
    icon: Computer,

    title: "#Tech",

    href: "#",

    badge: 14,
  },

  {
    icon: PlusSquare,

    title: "#new",

    href: "#",

    badge: 3,
  },

  {
    icon: Movie ,

    title: "#movies",

    href: "#",
  },

  {
    icon: LinkXmark,

    title: "#connect",

    href: "#",
  },

  {
    icon: VideoCamera,

    title: "#bollywood",

    href: "#",
  },

  {
    icon: Flask,

    title: "#science",

    href: "#",
  },

  {
    icon: BrainResearch,

    title: "#facts",

    href: "#",
  },
];

  function Daily_Topics() {
  return (
    <Card className="py-2 px-6 sticky top-20 w-fit ml-auto">
      <Card.Header className=" h-full">
        <Typography className="font-bold text-xl ">My Tags</Typography>
      </Card.Header>
    <hr />
      <Card.Body className="p-3">
        <List className="hover:cursor-pointer"  >
          {Links.map(({ icon: Icon, title, href, badge }) => (
            <List.Item key={title} href={href} className="hover:text-blue-600 hover:font-semibold " >
              <List.ItemStart>
                <Icon className="h-[18px] w-[18px]" />
              </List.ItemStart>

              {title}

              {badge && (
                <List.ItemEnd>
                  <Chip size="sm" variant="ghost" color="primary" >
                    <Chip.Label>{badge}</Chip.Label>
                  </Chip>
                </List.ItemEnd>
              )}
            </List.Item>
          ))}
        </List>
      </Card.Body>
    </Card>
  );
}
export default Daily_Topics
