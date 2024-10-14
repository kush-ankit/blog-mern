import { Card, List, Typography, Chip } from "@material-tailwind/react";
import { GrTechnology } from "react-icons/gr";
import {Archive,EmptyPage,Mail,Pin,SendDiagonal,Bin,} from "iconoir-react";
import {MdOutlineLocalMovies } from "react-icons/md";

const Links = [
  {
    icon: "<GrTechnology />",

    title: "#Tech",

    href: "#",

    badge: 14,
  },

  {
    icon: SendDiagonal,

    title: "#new",

    href: "#",

    badge: 3,
  },

  {
    icon: EmptyPage ,

    title: "#movies",

    href: "#",
  },

  {
    icon: Pin,

    title: "#connect",

    href: "#",
  },

  {
    icon: Archive,

    title: "#bollywood",

    href: "#",
  },

  {
    icon: Bin,

    title: "#science",

    href: "#",
  },
];

console.log(GrTechnology)
  function Daily_Topics() {
  return (
    <Card className="max-w-[280px]">
      <Card.Header className="mx-4 mb-0 mt-3 h-max">
        <Typography className="font-bold text-xl ">My Tags</Typography>
      </Card.Header>

      <Card.Body className="p-3">
        <List className="hover:cursor-pointer"  >
          {Links.map(({ icon: Icon, title, href, badge }) => (
            <List.Item key={title} href={href} className="hover:text-blue-600 hover:font-semibold " >
              <List.ItemStart >
                
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
