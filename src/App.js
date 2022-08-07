
import './App.css';
import FeebackGraduates from './components/feebackGraduates/FeebackGraduates';
import HistorySuccess from './components/historySuccess/historySuccess';
import MainPage from './components/mainPage/MainPage';
import MvpConnect from './components/mvpConnect/MvpConnect';
import OurPartners from './components/ourPartners/OurPartners';
import Practice from './components/Practice/Practice';
import StudentChoice from './components/studentChoice/StudentChoice';
import SuccessTrajectory from './components/successTrajectory/SuccessTrajectory';
import TestIT from './components/testIT/TestIT';
import TheoryCourse from './components/theoryCourse/TheoryCourse';

function App() {
  return (
    <div className="App">

      <MainPage/>
      <StudentChoice/>
      <TheoryCourse/>
       <TestIT/>
      <Practice/>
      <FeebackGraduates/>
      <HistorySuccess/>
      <SuccessTrajectory/>
      <OurPartners/>
      <MvpConnect/>
     

    </div>
  );
}

export default App;
