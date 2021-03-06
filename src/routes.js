import React from 'react';
import { Navigate } from 'react-router-dom';

// Layout
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';

// Authentication
import LoginView from 'src/views/auth/LoginView';
import RegisterView from 'src/views/auth/RegisterView';

// User profile
import AccountView from 'src/views/account/AccountView';
import SettingsView from 'src/views/settings/SettingsView';

// Projects
import ProjectsView from 'src/views/project';
import ProjectDetailView from 'src/views/project/ProjectDetail';

// Home page
import HomeView from 'src/views/home';

// Welcome Page
import WelcomeView from 'src/views/welcome';

// Map
import MapView from 'src/views/map/Map';
import MapIframeView from 'src/views/map';

// Agents
import AgentsView from 'src/views/agent';
import AgentProfile from 'src/views/agent/AgentProfile';
import AddAgentView from 'src/views/agent/AddAgent';
import EditAgentView from 'src/views/agent/EditAgent';
// Incidents
import IncidentsView from 'src/views/incident';
import AddIncidentsView from 'src/views/incident/AddIncident';
import IncidentDetail from 'src/views/incident/IncidentDetail';

// Dashboard
import DashboardView from 'src/views/reports/DashboardView';

// General
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';

// Field Officers
import FieldOfficerListView from 'src/views/field_officer';
import FieldOfficerProfile from 'src/views/field_officer/FieldOfficerProfile';
import AddFieldOfficerView from 'src/views/field_officer/AddFieldOfficer';
import EditFieldOfficerView from 'src/views/field_officer/EditFieldOfficer';
import FieldOfficerAgentView from 'src/views/field_officer/ManageAgents';

// Returns
import AllAgentReturns from 'src/views/agent/AllAgentReturns';
import AddReturnView from 'src/views/agent/AddReturn';
import EditReturnView from 'src/views/agent/EditReturn';
import ReturnDetailView from 'src/views/agent/ReturnDetails';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      // Welcome view
      { path: '/welcome', element: <WelcomeView /> },

      // Account + settings
      { path: 'account', element: <AccountView /> },

      // Dashboard
      { path: 'dashboard', element: <DashboardView /> },

      // Todo: use this product view to create a new projects display
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },

      // Agents views
      { path: 'agents', element: <AgentsView /> },
      { path: 'agents/:id', element: <AgentProfile /> },
      { path: 'agents/add', element: <AddAgentView /> },
      { path: 'agents/edit/:id', element: <EditAgentView /> },

      // Agent Returns
      { path: 'returns', element: <AllAgentReturns /> },
      { path: 'returns/add', element: <AddReturnView /> },
      { path: 'returns/edit/:id', element: <EditReturnView /> },
      { path: 'returns/:id', element: <ReturnDetailView /> },

      // projects views
      { path: 'projects', element: <ProjectsView /> },
      { path: 'projects/:id', element: <ProjectDetailView /> },

      // incidents views
      { path: 'incidents', element: <IncidentsView /> },
      { path: 'incidents/add', element: <AddIncidentsView /> },
      { path: 'incidents/:id', element: <IncidentDetail /> },

      // map view
      { path: 'map', element: <MapView /> },
      { path: 'map/iframe', element: <MapIframeView /> },

      // field officers views
      { path: 'field_officers', element: <FieldOfficerListView /> },
      { path: 'field_officers/:id', element: <FieldOfficerProfile /> },
      { path: 'field_officers/add', element: <AddFieldOfficerView /> },
      { path: 'field_officers/edit/:id', element: <EditFieldOfficerView /> },
      { path: 'field_officers/agents/:id', element: <FieldOfficerAgentView /> },

      // Not Found Page
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <HomeView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
