import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

export default function ProprietorsSelectCard() {
  return (
    <Card>
      <CardImage
        src="images/800px-San_marcos_restaurant_row.jpg"
        alt="Photograph of Restaurant Row parking lot in San Marcos, California"
      />

      <CardBody>
        <H6 color="gray">Card Title</H6>
        <Paragraph color="gray">
          Don't be scared of the truth because we need to restart the human
          foundation in truth And I love you like Kanye loves Kanye I love
          Rick Owens’ bed design but the back is...
        </Paragraph>
      </CardBody>

      <CardFooter>
        <Button color="lightBlue" size="lg" ripple="light">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}