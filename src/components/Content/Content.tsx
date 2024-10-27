import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import BookIcon from "@mui/icons-material/Book";
import Link from "@mui/material/Link";
import { useMediaQuery } from "react-responsive";
import "./Content.css";
function Content() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 480px)",
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <div className="Content">
      <div>
        <Typography variant={"h4"}>About me</Typography>
        <Typography>
          Greetings! 👋 I am a Software Development Engineer 2 currently
          thriving in the dynamic ecosystem of Amazon. With a robust foundation
          as a Systems Engineer at TCS, I bring a wealth of experience in
          driving impactful projects, specializing in Data Structures,
          Algorithms, and Systems Design. During my tenure at TCS, I played a
          pivotal role in steering a successful migration project, showcasing my
          adept skills in orchestrating seamless transitions and optimizing
          system functionalities. Since then, my journey at Amazon has been
          marked by the creation of multiple cutting-edge platforms, further
          solidifying my reputation as a tech enthusiast with a knack for
          delivering scalable and efficient solutions. Let's connect to explore
          opportunities for collaboration, knowledge exchange, and the pursuit
          of excellence in the realm of technology. Together, let's shape the
          future of innovation! 💡 #TechEnthusiast #SoftwareDevelopment
          #Innovation #DataStructures #Algorithms #SystemsDesign
        </Typography>
      </div>
      <div>
        <Typography variant={"h4"}>Skills</Typography>
        {isDesktopOrLaptop ? (
          <Grid container spacing={2}>
            <Grid size={4}>
              <Item>Data Structures</Item>
            </Grid>
            <Grid size={4}>
              <Item>Algorithms</Item>
            </Grid>
            <Grid size={4}>
              <Item>System Design</Item>
            </Grid>
            <Grid size={2}>
              <Item>Java</Item>
            </Grid>
            <Grid size={2}>
              <Item>Python</Item>
            </Grid>
            <Grid size={2}>
              <Item>Javascript</Item>
            </Grid>
            <Grid size={2}>
              <Item>Typescript</Item>
            </Grid>
            <Grid size={2}>
              <Item>React</Item>
            </Grid>
            <Grid size={2}>
              <Item>Sprint</Item>
            </Grid>
            <Grid size={2}>
              <Item>postgreSQL</Item>
            </Grid>
            <Grid size={2}>
              <Item>DynamoDB</Item>
            </Grid>
            <Grid size={2}>
              <Item>HTML - CSS</Item>
            </Grid>
            <Grid size={2}>
              <Item>SQL</Item>
            </Grid>
            <Grid size={4}>
              <Item>AWS</Item>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={2}>
            <Grid size={6}>
              <Item>Data Structures</Item>
            </Grid>
            <Grid size={6}>
              <Item>Algorithms</Item>
            </Grid>
            <Grid size={6}>
              <Item>System Design</Item>
            </Grid>
            <Grid size={6}>
              <Item>Java</Item>
            </Grid>
            <Grid size={6}>
              <Item>Python</Item>
            </Grid>
            <Grid size={6}>
              <Item>Javascript</Item>
            </Grid>
            <Grid size={6}>
              <Item>Typescript</Item>
            </Grid>
            <Grid size={3}>
              <Item>React</Item>
            </Grid>
            <Grid size={3}>
              <Item>Sprint</Item>
            </Grid>
            <Grid size={6}>
              <Item>postgreSQL</Item>
            </Grid>
            <Grid size={6}>
              <Item>DynamoDB</Item>
            </Grid>
            <Grid size={6}>
              <Item>HTML - CSS</Item>
            </Grid>
            <Grid size={3}>
              <Item>SQL</Item>
            </Grid>
            <Grid size={3}>
              <Item>AWS</Item>
            </Grid>
          </Grid>
        )}
      </div>
      <div>
        <Typography variant={"h4"}>Experience</Typography>
        <Typography>
          <Typography variant={"h6"}>
            Software Development Engineer II @Amazon
          </Typography>
          <Typography>
            <Typography>
              - Designed and Developed a gateway system for request ingestion
              across the organization.
            </Typography>
            <Typography>
              - Developed the front end of an internal tool with an intuitive
              user interface used by 150+ internal and external consumers.
            </Typography>
            <Typography>
              - Implemented a notification feature which completely removed
              manual intervention required by the product team across 10+ org
              teams.
            </Typography>
            <Typography>
              - Created automated dashboards that reduced monitoring setup
              efforts by 90% improving Operational Excellence.
            </Typography>
            <Typography>
              - Designed a Highly scalable backend to control device state which
              reduced 50% to 90% time cost in eminent failures.
            </Typography>
            <Typography>
              - Designed and Implemented a credential store for secure storage
              of highly sensitive data.
            </Typography>
            <Typography>
              - Involved in research, migration, deep dive, maintenance &
              support for various activities to improve customer experience.
            </Typography>
          </Typography>
          <br />
          <Typography variant={"h6"}>Systems Engineer @TCS</Typography>
          <Typography>
            <Typography>
              - Worked as a part of System Modernization Team, design and built
              RESTful service APIs for a high load transactional system based on
              Microservices Architecture.
            </Typography>
            <Typography>
              - Developed a crucial Transactional Status Management system and a
              Receipt Generation Application for a hardware device using the
              Springboot framework.
            </Typography>
            <Typography>
              - Improved existing services in the fields of Security,
              configurability, availability, logging and maintenance.
            </Typography>
            <Typography>
              - Worked on a heavily loaded, time-constrained, Multithreaded
              middleware application which resulted in high-performance
              services.
            </Typography>
            <Typography>
              - Developed several supporting services which are accepted at the
              project level and used by other services.
            </Typography>
            <Typography>
              - Part of various teams which are working as per Agile
              methodologies.
            </Typography>
          </Typography>
        </Typography>
      </div>
      <div>
        <Typography variant={"h4"}>Education</Typography>
        <Typography>
          <Typography variant={"h6"}>
            Government Colllege of Engineering, Aurangabad
          </Typography>
          <Typography>
            <Typography>Grade: A+Grade: A+</Typography>
            <Typography>
              Activities and societies: Codechef Campus Chapter, Team Arambh,
              Code-Junkie 4.0, Astronomy ClubActivities and societies: Codechef
              Campus Chapter, Team Arambh, Code-Junkie 4.0, Astronomy Club
            </Typography>

            <Typography>
              - Started Codechef Campus Chapter to attract juniors in the coding
              culture.
            </Typography>
            <Typography>
              - Started Team Arambh which aimed to launch First Satellite of
              college.
            </Typography>
            <Typography>
              - Coordinator and Problem setter for the annual technical/coding
              fest of college.
            </Typography>
            <Typography>- Head of Astronomy Club</Typography>
          </Typography>
        </Typography>
      </div>
      <div>
        <Typography variant={"h4"}>Achievements</Typography>
        <Typography>
          - Recognized with Special Recognition Award from Tata Consultancy
          Services.
        </Typography>
        <Typography>
          - Secured World Rank 482 and India Rank 79 in Google HashCode 2021
          amongst 10000 teams.
        </Typography>
        <Typography>
          - Secured World Rank 49 in Hackerearth Circuits Dec 2020.
        </Typography>
        <Typography>
          - Qualified for the ACM-ICPC Asia Amritapuri onsite Regionals 2017.
        </Typography>
        <Typography>
          - Was among top 0.6% of about 1 lack students that appeared in GATE
          2019, with All India Rank 851.
        </Typography>
      </div>
      <div>
        <Typography variant={"h4"}>Others</Typography>
        <div className={"horizontal"}>
          <BookIcon />
          <Link href="https://medium.com/@kulkarni10aniket/my-journey-from-service-based-to-product-based-company-amazon-b94739fc171c">
            My journey from Service-Based to Product-Based company(Amazon)
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Content;
