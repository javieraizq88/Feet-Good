import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import About from './views/About.jsx'
import AdminClients from './views/AdminClients.jsx'
import AccountConfirm from './views/AccountConfirm.jsx'
import AdminLogin from './views/adminlogin.jsx'
import AdminProfesionals from './views/AdminProfesionals.jsx'
import AdminProfesionalDetail from './views/AdminProfesionalDetail.jsx'
import AdminProfile from './views/adminprofile.jsx'
import AvisoEnvioFormClient from './components/check/SentPlan.jsx'
import ChatTrainer from './components/ChatTrainer.jsx'
import ChatNutritionist from './components/ChatNutritionist.jsx'
import Clients from './components/Clients.jsx'
import ClientDetail from './views/AdminClientDetail.jsx'
import ClientPlans from './components/ClientPlans.jsx'
import Confirmation from './components/Confirmation.jsx'
import Contact from './components/Contact.jsx'
import CreatePlan from './components/check/CreatePlan.jsx'
import FitnessEducation from './components/fitnesseducation.jsx'
import FormIngresoCliente from './components/formingresocliente.jsx'
import FormRegNutri from './components/FormingRegNutri.jsx'
import FormRegTrainer from './components/FormingRegTrainer.jsx'
import HealthPlans from './components/healthplans.jsx'
import HealthTeam from './components/HealthTeam.jsx'
import Home from './views/Home.jsx'
import InstruccionesClient from './components/instructivoClient.jsx'
import InstruccionesProf from './components/instruccionesProf.jsx'
import Login from './views/login.jsx'
import Nutritionists from './components/Nutritionists.jsx'
import injectContext from './store/appContext.js'
import NavBar from './components/navBar.jsx'
import NutritionalEducation from './components/NutritionalEducation.jsx'
import OurTeam from './views/OurTeam.jsx'
import PasswordRequest from './components/PasswordRequest.jsx'
import PersonalTrainers from './components/PersonalTrainers.jsx'
import ProfessionalProfile from './views/professionalprofile.jsx'
import ProfesionalClienteDieta from './components/ProfesionalClienteDieta.jsx'
import ProfesionalClienteEjercicio from './components/ProfesionalClienteEjercicio.jsx'
import ProfesionalClienteFicha from './views/profesionalClienteFicha.jsx'
import ProfessionalClientPlans from './components/ProfessionalClientPlans.jsx'
import ProfessionalDetails from './components/ProfessionalDetails.jsx'
import Profile from './views/profile.jsx'
import Register from './views/register.jsx'

const App = props => {

  return (
    <>
      <Router>
      <NavBar />
        <Switch>
          <Route exact path='/' component={Home} /*RESPONSIVE*/ /> 
          <Route exact path='/team' component={OurTeam} /* RESPONSIVE*/ />
          <Route exact path='/personal-trainers/:role_id/:id' component={ProfessionalDetails} /* RESPONSIVE*/ />
          <Route exact path='/nutritionists/:role_id/:id' component={ProfessionalDetails} /* RESPONSIVE*/ />
          <Route exact path='/nutritionists' component={Nutritionists} /* RESPONSIVE*/  />
          <Route exact path='/personal-trainers' component={PersonalTrainers} /* RESPONSIVE*/  />
          <Route exact path='/nutritional-education' component={NutritionalEducation} /* RESPONSIVE*/ />
          <Route exact path='/fitness-education' component={FitnessEducation} /* RESPONSIVE*/ />
          <Route exact path='/about' component={About} /* RESPONSIVE*/ />
          <Route exact path='/login' component={Login} /* RESPONSIVE*/  />
          <Route exact path='/register' component={Register} /* RESPONSIVE*/  />
          <Route exact path='/register/profesional/2' component={FormRegNutri} /* RESPONSIVE*/  />
          <Route exact path='/register/profesional/3' component={FormRegTrainer} /* RESPONSIVE*/  />
          <Route exact path='/profile/client/health-team' component={HealthTeam} /* RESPONSIVE */ />
          <Route exact path='/profile/client/nuevo-plan' component={FormIngresoCliente} /*Crear plan, opcion por Javiera*//>
          <Route exact path='/profile/client/crear-plan' component={CreatePlan} /* RESPONSIVE */ /*Crear plan, opcion por Tomas*/ />
          <Route exact path='/profile/client/plans' component={ClientPlans} /* RESPONSIVE */ /> 
          <Route exact path='/profile/client/health-plans' component={HealthPlans} /* RESPONSIVE */ />
          <Route exact path='/profile/ayuda' component={InstruccionesClient}  /* RESPONSIVE */ />
          <Route exact path='/profile/professional/clients/:id' component={ProfessionalClientPlans} /* RESPONSIVE */ />
          <Route exact path='/profile/professional/clients/:id/ficha/:plan_id' component={ProfesionalClienteFicha} /* RESPONSIVE */ />
          <Route exact path='/profile/professional/clients/:id/plans/:plan_id/diet' component={ProfesionalClienteDieta} /* RESPONSIVE */ />
          <Route exact path='/profile/professional/clients/:id/plans/:plan_id/training' component={ProfesionalClienteEjercicio} /* RESPONSIVE */ />
          <Route exact path='/profile/professional/clients' component={Clients} /* RESPONSIVE */ />
          <Route exact path='/profile/professional/ayuda' component={InstruccionesProf} /* RESPONSIVE */  />
          <Route exact path='/profile/professional' component={ProfessionalProfile} /* RESPONSIVE */ />
          <Route exact path='/profile' component={Profile} /* RESPONSIVE*/ />
          <Route exact path='/admin/login' component={AdminLogin} /* RESPONSIVE*/ />
          <Route exact path='/admin/profile' component={AdminProfile} /* RESPONSIVE*/ />
          <Route exact path='/admin/client' component={AdminClients} /* RESPONSIVE*/ />
          <Route exact path='/admin/client/:id' component={ClientDetail} /* RESPONSIVE*/ />
          <Route exact path='/admin/profesional' component={AdminProfesionals} /* RESPONSIVE  */ />
          <Route exact path='/admin/profesional/:role_id/:id' component={AdminProfesionalDetail} /* RESPONSIVE */ />
          <Route exact path='/client/plan/confirmation' component={AvisoEnvioFormClient} /* RESPONSIVE*/  />
          <Route exact path='/profile/professional/clients/contact/nutritionist/:id/:plan_id' component={ChatNutritionist} /* RESPONSIVE*/  />
          <Route exact path='/profile/professional/clients/contact/trainer/:id/:plan_id' component={ChatTrainer} /* RESPONSIVE*/  />
          <Route exact path="/confirmation/:role_id/:token" component={Confirmation} /* RESPONSIVE */ />
          <Route exact path="/request_password/" component={PasswordRequest} /* RESPONSIVE */ />
          <Route exact path="/contact-us" component={Contact} /* RESPONSIVE */ />
          <Route exact path="/confirm-account" component={AccountConfirm} /* RESPONSIVE */ />
        </Switch>
      </Router>
    </>
  )
}

export default injectContext(App);