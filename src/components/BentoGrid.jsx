import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Badge } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BentoGrid() {
  return (
    <div className="container-screen py-10">
      <div className="grid grid-cols-4 gap-4">
        <Card className="col-span-4 lg:col-span-1 !rounded-lg !order-3">
          <CardContent>
            <Badge className="bg-blue-100 text-blue-500 rounded-full px-4 flex items-center gap-2 text-sm mb-2">
              <div className="bg-blue-500 w-2 h-2 rounded-full animate-pulse"/>Specialisatie
            </Badge>
            <Typography variant="h5" component="div">
              Applicatie{bull}Ontwikkelaar
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              De hoofdtaak van de applicatieontwikkelaar is het ontwikkelen en
              realiseren van (delen van) software en/of IT- mediaproducten. Te
              denken valt aan besturingsprogramma’s, toepassingsprogramma’s,
              netwerkprogramma’s, webbased-applicaties, interactieve
              informatiedragers zoals cd-rom’s en websites.
            </Typography>
          </CardContent>
        </Card>
        {/*  */}
        <Card className="col-span-4 lg:col-span-1 !rounded-lg !order-4">
          <CardContent>
            <Badge className="bg-blue-100 text-blue-500 rounded-full px-4 flex items-center gap-2 text-sm mb-2">
              <div className="bg-blue-500 w-2 h-2 rounded-full animate-pulse"/>Specialisatie
            </Badge>
            <Typography variant="h5" component="div">
              ICT{bull}Beheerder
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              Een ICT-beheerder is primair bezig met het beheer, de beveiliging
              en het onderhoud van het informatiesysteem. Hij is
              verantwoordelijk voor het optimaal functioneren van netwerken,
              computers, printers, faxen en telefoons.
            </Typography>
          </CardContent>
        </Card>
        {/*  */}
        <Card className="col-span-4 lg:col-span-2 !rounded-lg !row-span-2 !order-1">
          {/* <CardContent> */}
          <Splide aria-label="Images" className="w-full h-full">
            <SplideSlide className="h-[100%]">
              <img src="/coding.jpg" alt="Image 1" className="object-cover h-full"/>
            </SplideSlide>
            <SplideSlide className="h-[100%]">
              <img src="/working.jpg" alt="Image 2" className="object-cover h-full"/>
            </SplideSlide>
          </Splide>
          {/* </CardContent> */}
        </Card>
        {/*  */}
        <Card className="col-span-4 lg:col-span-2 !rounded-lg !order-2">
          <CardContent>
          <Badge className="bg-orange-100 text-orange-500 rounded-full px-4 flex items-center gap-2 text-sm">
              <div className="bg-orange-500 w-2 h-2 rounded-full animate-pulse"/>Stage
            </Badge>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
