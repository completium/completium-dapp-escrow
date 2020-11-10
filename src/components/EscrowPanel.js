import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { Typography } from '@material-ui/core';
import { useEscrowStateContext } from './EscrowState';

const EscrowStatus = (props) => {
  const handleClick = () => {};
  const { escrowState } = useEscrowStateContext();
  if (escrowState.address === undefined) {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="center" style={{ padding: 12, paddingLeft: 24, height: 55 }}>
        <Grid item>
          <Typography color='textSecondary' style={{ fontSize: 'smaller' }}>Escrow not created (see below).</Typography>
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="center" style={{ padding: 12, paddingLeft: 24 }}>
        <Grid item xs={2}>
          <Typography>Escrow address:</Typography>
        </Grid>
        <Grid item xs={5}>
          <a style={{ textDecoration: 'none' }} href={"https://better-call.dev/carthagenet/"+ escrowState.address +"/operations"} target="_blank">
          <Chip
            label={escrowState.address}
            color="secondary"
            clickable
            variant="outlined"
          />
          </a>
        </Grid>
        <Grid item xs={1}>
          <Typography>Balance:</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{escrowState.balance}ꜩ</Typography>
        </Grid>
      </Grid>
    )
  }
}

export default EscrowStatus;