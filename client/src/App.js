import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src="/images/logo.png" alt="" />
        <div className="the">The</div>
        <div className="fastest">Fastest, Most Accurate</div>
        <div className="way">Way to Close Your Books!</div>
      </div>

      <div className="row bg-light mx-auto rounded-2 bottom-form align-items-center justify-content-center">
        <div className="first col-lg-4 rounded-start rounded-2 py-5">
          <div className="text-center align-items-center justify-content-center">
            <div className="schedule">SCHEDULE A DEMO</div>
            <div className="learn">Learn More About FloQast.</div>
          </div>
        </div>
        <div className=" col-lg-8 text-center py-4">
          <div className="end"><span className="part1">Learn How FloQast Can</span> <span className="part2">Improve Your Month-End</span></div>
          <div className="row g-0">
            <input type="text" className="form-control col-lg me-2" id="firstname" placeholder="First Name" name="firstname" required />
            <input type="text" className="form-control col-lg me-2" id="email" placeholder="Email*" name="email" required />
            <button type="button" class="btn btn-warning border-success background-green border-5 text-light col-lg fw-bold fs-5">SCHEDULE NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
