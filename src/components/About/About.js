import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import History from "../History/History";
import Contact from "../Contact/Contact";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link to="/about" className="subnav_links">
            <h3>About</h3>
          </Link>
          <Link to="/about/history" className="subnav_links">
            <h3>History</h3>
          </Link>
          <Link to="/about/contact" className="subnav_links">
            <h3>Contact</h3>
          </Link>
        </div>

        <div className="box">
          <Switch>
            <Route path="/about/history" component={History} />
            <Route path="/about/contact" component={Contact} />
            <Route
              path="/about"
              render={() => (
                <div>
                  <h1>About the University</h1>
                  <p>
                  Utah State University (USU or Utah State) is a public land-grant research university in Logan, Utah. It is accredited by the Northwest Commission on Colleges and Universities. With nearly 20,000 students living on or near campus, USU is Utah's largest public residential campus. As of Fall 2019, there were 27,810 students enrolled, including 24,669 undergraduate students and 3,141 graduate students. The university has the highest percentage of out-of-state students of any public university in Utah, totaling 23% of the student body.
                  <br></br>
                  <br></br>

Founded in 1888 as Utah's agricultural college, USU focused on science, engineering, agriculture, domestic arts, military science, and mechanic arts. The university offers programs in liberal arts, engineering, business, economics, natural resource sciences, as well as nationally ranked elementary and secondary education programs. It offers master's and doctoral programs in humanities, social sciences, and STEM areas (Science, technology, engineering, and mathematics). It received its current name in 1957.
<br></br>
<br></br>

The university is classified among "R2: Doctoral Universities – High research activity". Utah State University has produced 7 Rhodes Scholars, 1 Nobel Prize winner, 1 MacArthur Fellows program inductee, 4 recipients of the Harry S. Truman Scholarship, and 34 recipients of the Barry M. Goldwater Scholarship. USU has nine colleges and offers 159 undergraduate degrees, 83 master's degrees, and 41 doctoral degrees. USU's main campus is in Logan with regional campuses in Brigham City, Tooele, and the Uintah Basin and 28 other locations throughout Utah. In 2010, the College of Eastern Utah, in Price, Utah, joined the USU system becoming Utah State University College of Eastern Utah (USU Eastern). Throughout Utah, USU operates more than 20 distance education centers. Regional campuses, USU Eastern, and distance education centers account for 61.6% of the students enrolled. USU has 149,000 alumni in all 50 states and 110 countries.

<br></br>
<br></br>

USU's athletic teams compete in Division I of the NCAA and are collectively known as the Utah State Aggies. They are a member of the Mountain West Conference.
                  </p>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}