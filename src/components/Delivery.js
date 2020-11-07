import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import { useEscrowStateContext } from './EscrowState';

function getSteps() {
  return ['Fill shipping address', 'Parcel is ready', 'Parcel is in transit', 'Parcel delivered!'];
}

const FillAddress = (props) => {
  const handleNext = () => {
    props.setAddressFilled(true);
  }
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <Typography>Fill your address below and click 'Set Address' button.</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField id="address-street" label="Street" variant="outlined" color="secondary" size="small" fullWidth/>
      </Grid>
      <Grid item xs={6}>
        <TextField id="address-city" label="City" variant="outlined" color="secondary" size="small"/>
      </Grid>
      <Grid item xs={3}>
        <TextField id="address-state" label="State" variant="outlined" color="secondary" size="small"/>
      </Grid>
      <Grid item xs={3}>
        <TextField id="address-zip" label="Zip" variant="outlined" color="secondary" size="small"/>
      </Grid>
      <Grid item xs={6}>
        <TextField id="address-county" label="County" variant="outlined" color="secondary" size="small"/>
      </Grid>
      <Grid item xs={6}>
        <TextField id="address-country" label="Country" variant="outlined" color="secondary" size="small" fullWidth/>
      </Grid>
      <Grid item xs={12}>
        <Button
          color='secondary'
          variant='contained'
          disableElevation
          onClick={handleNext}
        >
          set address
        </Button>
      </Grid>
    </Grid>
  )
}

function StepComponent(props) {
  switch (props.index) {
    case 0:
      return <FillAddress handleNext={props.handleNext} setAddressFilled={props.setAddressFilled}/>
    default:
      return (<div></div>);
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

const Delivery = (props) => {
  const { escrowState, closeDelivery } = useEscrowStateContext();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [addressFilled, setAddressFilled] = React.useState(false);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setAddressFilled(false);
    closeDelivery();
  };
  useEffect(() => {
    if (addressFilled) {
      switch (activeStep) {
        case 0:
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          break;
        case 1: setTimeout(() => {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }, 5000);
          break;
        case 2: setTimeout(() => {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }, 8000);
          break;
        case 3:
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          break;
        default: {};
      }
    }
  },[addressFilled, activeStep]);
  return (
    <Slide direction="up" in={escrowState.delivery} mountOnEnter unmountOnExit>
    <Paper elevation={3} style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      width: '490px',
      backgroundImage: "url(" + process.env.PUBLIC_URL + '/envelop.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 5% top -30px'
      }} >
      <Typography variant='h6' style={{ marginTop: 12, marginLeft: 24 }}>
        Express Delivery Service
      </Typography>
      <Typography style={{ fontSize: 'smaller', marginLeft: 24, marginBottom: 12 }} color='textSecondary'>
        Tracking number: { activeStep > 0 ? " #CC0499546230" : " -" }
      </Typography>
      <Divider></Divider>
      <Stepper activeStep={activeStep} orientation="vertical" color='secondary'>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <StepComponent
                index={index}
                activeStep={activeStep}
                steps={steps}
                handleBack={handleBack}
                handleNext={handleNext}
                setAddressFilled={setAddressFilled}
                classes={classes}>
              </StepComponent>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer} style={{ paddingTop: 0 }}>
          <Typography>
            Thank you for your confidence in EDS.
          </Typography>
          <Button onClick={handleReset} className={classes.button}>
            Close
          </Button>
        </Paper>
      )}
    </Paper>
    </Slide>)
}

export default Delivery;