import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Specialisatie
            </Typography>
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
        <Card className="col-span-4 lg:col-span-1 !rounded-lg !order-4">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Specialisatie
            </Typography>
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
        <Card className="col-span-4 lg:col-span-2 !rounded-lg !row-span-2 !order-1">
          <CardContent>
            <Typography variant="h5" component="div">
              Fotos
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
        <Card className="col-span-4 lg:col-span-2 !rounded-lg !order-2">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Stage
            </Typography>
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
