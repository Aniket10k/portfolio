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
        <hr/>
        <Typography>I am Aniket Kulkarni,</Typography>
        <Typography>
          A passionate and results-driven Software Development Engineer with
          extensive experience in designing and implementing robust, scalable,
          and efficient software solutions. Currently based in Bengaluru, India,
          I thrive on solving complex challenges and delivering impactful
          technology to enhance user experiences and operational excellence.
        </Typography>
        <Typography>
          At Amazon, I have played a pivotal role in developing end-to-end
          platforms, scalable alarm systems, and advanced algorithms using
          OpenCV, significantly optimizing processes and driving data-driven
          insights. My contributions include reducing onboarding efforts by 70%
          and achieving up to 90% improvement in operational tasks. I also excel
          at creating POCs that empower customers to explore new use cases,
          enhancing product latency and quality.
        </Typography>
        <Typography>
          Previously, at Tata Consultancy Services, I contributed to modernizing
          high-load transactional systems by building RESTful APIs and
          React-based UIs, improving security, configurability, and performance
          for critical services.
        </Typography>
        <Typography>
          With a strong foundation in Data Structures, System Design, and
          Full-Stack Development, I am proficient in technologies such as Java,
          Python, React, Springboot, AWS, and OpenCV. My work consistently
          reflects my dedication to crafting seamless, scalable solutions that
          align with business goals.
        </Typography>
        <Typography>
          When not coding, I enjoy exploring cutting-edge technology trends,
          engaging in problem-solving challenges, and continuously learning to
          stay ahead in the dynamic field of software engineering.
        </Typography>
      </div>
      <div>
        <Typography variant={"h4"}>Skills</Typography>
        <hr/>
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
        <hr/>
        <Typography>
          <div className="horizontal">
            <Typography variant={"h5"}>Amazon</Typography>
            <Typography>( From Aug 2021 )</Typography>
          </div>
          <Typography variant={"h6"}>
            Software Development Engineer II
          </Typography>
          <Typography>
            - Designed and developed a comprehensive end-to-end platform to
            streamline request ingestion enabling efficient benchmarking of
            large volumes of requests. Reduced onboarding effort for a new use
            case by 70%.
          </Typography>
          <Typography>
            - Engineered scalable Alarms and Notification system, enhancing
            platform robustness and ensuring seamless System Operations.
          </Typography>
          <Typography>
            - Worked on OpenCV-based algorithms to extract meaningful insights
            from large volumes of video and image artifacts, driving data-driven
            decision-making.
          </Typography>
          <Typography>
            - Developed multiple POCs, including hardware setups and algorithms,
            to enable customer onboarding for new use cases and provide
            actionable insights for optimizing product latency and quality.
          </Typography>
          <Typography>
            - Involved in research, migration, deep dive, maintenance & support
            for various activities to improve customer experience.
          </Typography>
          <Typography variant={"h6"}>
            Software Development Engineer I
          </Typography>
          <Typography>
            <Typography>
              - Developed the user interface for a validation tool that served
              150+ internal and external consumers.
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
              of susceptible data.
            </Typography>
          </Typography>
          <br />
          <div className="horizontal">
            <Typography variant={"h5"}>Tata Consultancy Services</Typography>
            <Typography>( July 2019 - Aug 2021 )</Typography>
          </div>
          <Typography variant={"h6"}>Systems Engineer</Typography>
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
        <hr/>
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
        <hr/>
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
        <hr/>
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
