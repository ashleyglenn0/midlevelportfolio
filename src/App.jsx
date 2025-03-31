import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Container, Box, Card, CardContent, CardMedia, createTheme, ThemeProvider, Stack } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E3A8A"
    },
    background: {
      default: "#f0f4f8"
    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif'
  }
});

export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.background.default }}>
        {/* Scroll Progress Bar */}
        <Box sx={{ height: '4px', width: `${scrollProgress}%`, backgroundColor: '#1E3A8A', position: 'fixed', top: 0, left: 0, zIndex: 2000 }} />
        {/* Navigation */}
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Ashley Glenn
            </Typography>
            <Button color="inherit" component={Link} to="about" smooth>About</Button>
            <Button color="inherit" component={Link} to="projects" smooth>Projects</Button>
            <Button color="inherit" component={Link} to="leadership" smooth>Leadership</Button>
            <Button color="inherit" component={Link} to="skills" smooth>Skills</Button>
            <Button color="inherit" component={Link} to="resume" smooth>Resume</Button>
            <Button color="inherit" component={Link} to="contact" smooth>Contact</Button>
          </Toolbar>
        </AppBar>

         {/* Hero Section */}
        <Box id="hero" className="hero-section" sx={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
          color: "white",
          textAlign: "center",
          px: 2,
          mt: 8
        }}>
          <Typography variant="h2" className="fade-in-text" gutterBottom>Hi, I'm Ashley.</Typography>
          <Typography variant="h5" className="fade-in-text delay-1" gutterBottom>
            <Typewriter
              words={["Software Engineer", "Tech Leader", "Community Builder"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </Typography>
          <Button variant="contained" className="pulse-button" color="secondary" component={Link} to="projects" smooth>View Projects</Button>
        </Box>

        {/* About Section */}
        <Container id="about" className="fade-in-section" sx={{ py: 8 }}>
          <Typography variant="h4" gutterBottom>About Me</Typography>
          <Typography variant="body1">
            I'm a passionate software engineer with a strong foundation in full-stack development and a deep love for building community. I’ve grown from an apprentice to Software Engineer III, led teams, mentored peers, and helped organize large tech conferences.
          </Typography>
        </Container>

        {/* Projects Section */}
        <Box id="projects" className="fade-in-section" sx={{ py: 8, backgroundColor: "#e2e8f0" }}>
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>Projects</Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 3,
              }}
            >
              {[{
                title: "DashPass App",
                desc: "Reservation system with dynamic role-based access and simulated payment workflows.",
                image: "./assets/dashpass-preview.png",
                link: "#",
                note: "(Coming Soon)"
              }, {
                title: "Volunteer Check-In",
                desc: "Real-time volunteer tracking system used at Render and GovTechCon with QR codes and shift logging.",
                image: "./assets/checkin-preview.png",
                link: "#"
              }, {
                title: "ToDo CI/CD App",
                desc: "Simple full-stack task tracker with GitHub Actions CI/CD deployed to AWS S3.",
                image: "./assets/todo-preview.png",
                link: "#"
              },
              {
                title: "Budget App",
                desc: "Budget App that allows for tracking budgets and credit repair letters. Allows the user to join challenges for saving.",
                image: "./assets/budget-preview.png",
                link: "#" 
              }
            ].map((proj, i) => (
                <Box
                  key={i}
                  sx={{
                    flex: { xs: "100%", sm: "48%", md: "32%" },
                    display: "flex",
                    flexDirection: "column",
                    mb: 3,
                  }}
                >
                  <Card
                    className="hover-card"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={proj.image}
                      alt={proj.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6">{proj.title}</Typography>
                      <Typography variant="body2">{proj.desc}</Typography>
                    </CardContent>
                    <Box sx={{ p: 2 }}>
                      <Button
                        href={proj.link}
                        target="_blank"
                        fullWidth
                        variant="contained"
                      >
                        View App {proj.note || ""}
                      </Button>
                    </Box>
                  </Card>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Leadership, Skills, Resume, Contact Sections Side-by-Side */}
        <Container sx={{ py: 4 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ flex: { xs: '100%', md: '48%' } }} id="leadership" className="fade-in-section">
              <Typography variant="h4" gutterBottom>Leadership & Community</Typography>
              <Typography>
                Volunteer Manager for GovTechCon (600+ attendees) and Co-Manager for Render volunteers. Mentor with LaunchCode. Render Ambassador helping grow tech communities.
              </Typography>
            </Box>
            <Box sx={{ flex: { xs: '100%', md: '48%' } }} id="skills" className="fade-in-section">
              <Typography variant="h4" gutterBottom>Technical Skills</Typography>
              <Typography>
                React, JavaScript, Java, Spring Boot, MySQL, Firebase, AWS (S3, IAM), GitHub Actions, Material UI, Thymeleaf, CI/CD, Agile, REST APIs
              </Typography>
            </Box>
            <Box sx={{ flex: { xs: '100%', md: '48%' } }} id="resume" className="fade-in-section">
              <Typography variant="h4" gutterBottom>Resumes</Typography>
              <ul>
                <li><a href="/resumes/software-engineer.pdf" target="_blank">Software Engineering Resume</a></li>
                <li><a href="/resumes/cloud-engineer.pdf" target="_blank">Cloud-Focused Resume</a></li>
              </ul>
            </Box>
            <Box sx={{ flex: { xs: '100%', md: '48%' } }} id="contact" className="fade-in-section">
              <Typography variant="h4" gutterBottom>Contact</Typography>
              <Stack spacing={2}>
                <MuiLink href="mailto:arglenn023@gmail.com" underline="none" color="inherit" display="flex" alignItems="center">
                  <EmailIcon sx={{ mr: 1 }} /> arglenn023@gmail.com
                </MuiLink>
                <MuiLink href="https://github.com/ashleyglenn0" target="_blank" underline="none" color="inherit" display="flex" alignItems="center">
                  <GitHubIcon sx={{ mr: 1 }} /> github.com/ashleyglenn0
                </MuiLink>
                <MuiLink href="https://www.linkedin.com/in/ashley-glenn-b0a4941b0" target="_blank" underline="none" color="inherit" display="flex" alignItems="center">
                  <LinkedInIcon sx={{ mr: 1 }} /> linkedin.com/in/ashley-glenn-b0a4941b0
                </MuiLink>
              </Stack>
            </Box>
          </Box>
        </Container>

        {/* Footer */}
        <Box sx={{ bgcolor: "#1E3A8A", color: "white", textAlign: "center", py: 3 }}>
          <Typography variant="body2">
            Built with React + Material UI — Powered by curiosity and caffeine. From St. Louis with 💙
          </Typography>
        </Box>
      </div>
    </ThemeProvider>
  );
}