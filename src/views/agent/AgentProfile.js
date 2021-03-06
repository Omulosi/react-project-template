import React from 'react';
/* eslint-disable */
import { Button, Container, Grid, Box, makeStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Edit } from 'react-feather';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import Page from 'src/components/Page';
import { useAgent } from 'src/hooks/agents';

import LineProgress from 'src/components/LineProgress';
import TabPanel from '../../components/TabPanel';
// import AgentDetails from './AgentDetails';
import AgentInfo from './AgentInfo';
import AssignProject from './AssignProject';
// import AssignRating from './AssignRating';
import AgentProjects from './AgentProjects';
import ReturnList from './ReturnList';
import DataGridToolbar from 'src/components/DataGridToolbar';
import AgentPerformance from './AgentPerformance';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(5)
  },
  tab: {
    color: 'rgb(33, 150, 243)'
  },
  padTop: {
    paddingTop: '2em'
  },
  content: {
    paddingTop: theme.spacing(2)
  },
  toolbar: {}
}));

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

const AgentProfile = () => {
  const classes = useStyles();

  // const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  // const { data, loading, error } = useAgent(id);
  const { data, isLoading: loading, error } = useAgent(id);

  if (error) {
    console.log(`Error => ${error}`);
    enqueueSnackbar('Unable to fetch agent profile data', {
      variant: 'info'
    });
  }

  let agentDetails = {};
  if (data) {
    agentDetails = { ...data.attributes, agentId: data.id };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page title="Agent Profile" className={classes.root}>
      <div className={classes.progress}>{loading && <LineProgress />}</div>
      <Container maxWidth={false}>
        <DataGridToolbar
          pageTitle={
            agentDetails &&
            `Agent: ${agentDetails.first_name} ${agentDetails.last_name}`
          }
          navLink={`/app/agents/edit/${id}`}
          btnIcon={<Edit />}
          btnTitle="Edit Agent"
        />

        <Grid container className={classes.content}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            variant="fullWidth"
            textColor="primary"
          >
            <Tab label="Details" {...a11yProps(0)} />
            <Tab label="Projects" {...a11yProps(1)} />
            <Tab label="Returns" {...a11yProps(2)} />
            <Tab label="Performance" {...a11yProps(3)} />
          </Tabs>
        </Grid>

        <TabPanel value={value} index={0}>
          <Grid container spacing={3} className={classes.padTop}>
            <Grid item xl={6} lg={6} md={6} xs={12}>
              <AgentInfo agentDetails={agentDetails} />
            </Grid>
            <Grid item xl={6} lg={6} md={6} xs={12}>
              <AssignProject agentDetails={agentDetails} />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Grid container spacing={3} className={classes.padTop}>
            <Grid item lg={12} md={12} xs={12}>
              <AgentProjects agentDetails={agentDetails} />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Grid container spacing={3} className={classes.padTop}>
            <Grid item lg={12} md={12} xs={12}>
              <ReturnList returns={agentDetails ? agentDetails.returns : []} />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Grid container spacing={3} className={classes.padTop}>
            <Grid item lg={12} md={12} xs={12}>
              <AgentPerformance />
            </Grid>
          </Grid>
        </TabPanel>
      </Container>
    </Page>
  );
};

export default AgentProfile;
