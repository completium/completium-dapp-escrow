import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { seller, taxCollector, price } from '../settings';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import EscrowPanel from './EscrowPanel';
import { useEscrowStateContext } from './EscrowState';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: 50
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

function getSteps() {
  return ['Create payment escrow', 'Fund escrow', 'Transfer'];
}

const CreateEscrow = (props) => {
  const labelwidth = 3;
  const datawidth  = 9;
  const { setAddress } = useEscrowStateContext();
  const handleNext = () => {
    setAddress("KT1CSYNJ6dFcnsV4QJ6HnBFtdif8LJGPQiDM");
    props.handleNext();
  }
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <Typography>Check escrow data below and click 'Create Escrow' button below:</Typography>
      </Grid>
      <Grid item xs={labelwidth}>
        <Typography style={{ fontWeight: 'bold' }}>Deadline</Typography>
      </Grid>
      <Grid item xs={datawidth}>
        <Typography>{(new Date()).toLocaleDateString()}</Typography>
      </Grid>
      <Grid item xs={labelwidth}>
        <Typography style={{ fontWeight: 'bold' }}>Seller</Typography>
      </Grid>
      <Grid item xs={datawidth}>
        <Typography style={{ fontFamily: 'Courier Prime, monospace' }}>{seller}</Typography>
      </Grid>
      <Grid item xs={labelwidth}>
        <Typography style={{ fontWeight: 'bold' }}>Tax collector</Typography>
      </Grid>
      <Grid item xs={datawidth}>
        <Typography style={{ fontFamily: 'Courier Prime, monospace' }}>{taxCollector}</Typography>
      </Grid>
      <Grid item xs={labelwidth}>
        <Typography style={{ fontWeight: 'bold' }}>Tax</Typography>
      </Grid>
      <Grid item xs={datawidth}>
        <Typography>20% ({(0.2 * price).toString()}ꜩ)</Typography>
      </Grid>
      <Grid item xs={labelwidth}>
        <Typography style={{ fontWeight: 'bold' }}>Security deposit</Typography>
      </Grid>
      <Grid item xs={datawidth}>
        <Typography>110% ({(1.1 * price).toFixed(2).toString()}ꜩ)</Typography>
      </Grid>
      <Grid item>
        <Button
          color='secondary'
          variant='contained'
          disableElevation
          onClick={handleNext}
        >
          create escrow
        </Button>
      </Grid>
    </Grid>
  )
}

const FillAddress = (props) => {
  const labelwidth = 3;
  const datawidth  = 9;
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <Typography>Fill your address below and click 'Set Address' button.</Typography>
      </Grid>
      <Grid item xs={7}>
        <TextField id="address-street" label="Street" variant="outlined" color="secondary" size="small" fullWidth/>
      </Grid>
      <Grid item xs={5}/>
      <Grid item xs={3}>
        <TextField id="address-city" label="City" variant="outlined" color="secondary" size="small"/>
      </Grid>
      <Grid item xs={2}>
        <TextField id="address-state" label="State" variant="outlined" color="secondary" size="small"/>
      </Grid>
      <Grid item xs={2}>
        <TextField id="address-zip" label="Zip" variant="outlined" color="secondary" size="small"/>
      </Grid>
      <Grid item xs={5}/>
      <Grid item xs={3}>
        <TextField id="address-county" label="County" variant="outlined" color="secondary" size="small"/>
      </Grid>
      <Grid item xs={4}>
        <TextField id="address-country" label="Country" variant="outlined" color="secondary" size="small" fullWidth/>
      </Grid>
      <Grid item xs={12}>
        <Button
          color='secondary'
          variant='contained'
          disableElevation
          onClick={props.handleNext}
        >
          set address
        </Button>
      </Grid>
    </Grid>
  )
}

const Transfer = (props) => {
  const { setBalance } = useEscrowStateContext();
  const handleNext = () => {
    setBalance (0);
    props.handleNext();
  }
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <Typography>You may now transfer the price amount to the seller and get back your security deposit.</Typography>
      </Grid>
      <Grid item xs={12}>
        <Alert severity="warning">We strongly advise you wait for the delivery to be completed.</Alert>
      </Grid>
      <Grid item xs={1} style={{ textAlign: 'right' }}>
        <ArrowRightAltIcon fontSize="small"/>
      </Grid>
      <Grid item xs={11}>
        <Typography>transfer price value ({price}ꜩ) to seller</Typography>
      </Grid>
      <Grid item xs={1} style={{ textAlign: 'right' }}>
        <ArrowRightAltIcon fontSize="small"/>
      </Grid>
      <Grid item xs={11}>
        <Typography>transfer back security deposit ({(1.1 * price).toFixed(2).toString()}ꜩ) to yourself</Typography>
      </Grid>
      <Grid item xs={1} style={{ textAlign: 'right' }}>
        <ArrowRightAltIcon fontSize="small"/>
      </Grid>
      <Grid item xs={11}>
        <Typography>transfer tax ({(0.2 * price).toString()}ꜩ) to tax collector</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          color='secondary'
          variant='contained'
          disableElevation
          style={{ marginTop: 20 }}
          onClick={handleNext}
        >
          Transfer amounts
        </Button>
      </Grid>
    </Grid>
  )
}

const FundEscrow = (props) => {
  const labelwidth = 3;
  const datawidth  = 9;
  const securityDeposit = (1.1 * price);
  const tax = (0.2 * price);
  const total = 1 * price + 1 * securityDeposit + 1 * tax;
  console.log(`total : ${total}`);
  const { setBalance } = useEscrowStateContext();
  const handleNext = () => {
    setBalance (total.toString());
    props.handleNext();
  }
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
      <Grid item xs={12}>
      <Typography>Check funding amounts below and click 'Fund Escrow' button below:</Typography>
      </Grid>
      <Grid item xs={labelwidth}>
        <Typography style={{ fontWeight: 'bold' }}>Price</Typography>
      </Grid>
      <Grid item xs={datawidth}>
        <Typography>{price}ꜩ</Typography>
      </Grid>
      <Grid item xs={labelwidth}>
        <Typography style={{ fontWeight: 'bold' }}>Security deposit</Typography>
      </Grid>
      <Grid item xs={datawidth}>
        <Typography>{securityDeposit.toFixed(2).toString()}ꜩ (110%*{price}ꜩ)</Typography>
      </Grid>
      <Grid item xs={labelwidth}>
        <Typography style={{ fontWeight: 'bold' }}>Tax</Typography>
      </Grid>
      <Grid item xs={datawidth}>
        <Typography>{tax.toString()}ꜩ (20%*{price}ꜩ)</Typography>
      </Grid>
      <Grid item xs={6}>
        <Divider ></Divider>
      </Grid>
      <Grid item xs={6}>
      </Grid>
      <Grid item xs={labelwidth}>
        <Typography style={{ fontWeight: 'bold' }}>Total</Typography>
      </Grid>
      <Grid item xs={datawidth}>
        <Typography variant='h5'>{total.toString()}ꜩ</Typography>
      </Grid>
      <Grid item>
        <Button
          color='secondary'
          variant='contained'
          disableElevation
          onClick={handleNext}
        >
          Fund escrow
        </Button>
      </Grid>
    </Grid>
  )
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Check escrow data below and click on 'Create Escrow'`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
}

function StepComponent(props) {
  switch (props.index) {
    case 0:
      return <CreateEscrow handleNext={props.handleNext} />
    case 1:
      return <FundEscrow handleNext={props.handleNext} />
    case 2:
      return <Transfer handleNext={props.handleNext} />
    default:
      return (
        <div></div>
      );
  }
}

export default function Escrow() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const { setAddress } = useEscrowStateContext();
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setAddress(undefined);
    setActiveStep(0);
  };

  return (
    <Card className={classes.root}>
      <EscrowPanel></EscrowPanel>
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
                classes={classes}>
              </StepComponent>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </Card>
  );
}