import React, {useState, useEffect} from "react"
import Doclist from './Component/DocList';
import {header as hder, documents as docs, students as stds} from './Data/Bachelor'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './Component/Material-UI-Styles';
import PdfTooltip from './Component/PdfTooltip';
import {Link, Element} from 'react-scroll';


function Model(){
    const [studentType, setStudentType] = useState(0);
    const [docList, setDocList] = useState(docs.docArray[studentType]);
    const classes = useStyles();

    useEffect(() => {
      setDocList(docs.docArray[studentType])
    })
    return(
        <div>
            <main>
              {/* Hero unit */}
              <div className={classes.heroContent}>
                <Container maxWidth="md">
                  <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
                    {hder.studentTypes.title}
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    {hder.studentTypes.body}
                  </Typography>
                </Container>
              </div>
              <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                  {Array.from(stds).map((student,index) => (
                    <Grid item key={student.key} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          image={student.image_path}
                          title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {student.type}
                          </Typography>
                          <Typography>
                            {student.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Link to="test1" spy={true} smooth={true} duration={500}>
                            <Button size="small" color="primary" onClick={()=> setStudentType(index)}>
                              Enter
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </main>
            {/* <StudentTypes header={hder.studentTypes} students={stds}/> */}
            <Element name="test1">
              <Doclist header={hder.documentList} documents={docList} studentTypeDisplay={stds[studentType].type}/>
            </Element>
        </div>
    )
  }
  
export default Model;