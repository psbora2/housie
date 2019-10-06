import React from 'react';

export class Rule extends React.Component {
	render(){
		return(
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">How to Play?</h3>
        </div>
        <div className="panel-body how_play">
          <h4>Gameplay</h4>

              <ol>
                <li>Every 10 second we will announce one number in green "Number Called" box above.</li>
                <li>Every user has to cross check their ticket and cross their number accordingly.</li>
                <li>Total 90 numbers are there.
                  </li>
                  <li>If you finished any of the prize then submit it by selecting winning category from right side.</li>
                  <li>First person to submit valid entries will win.</li> 
                </ol>
               
            <h4>Limitations</h4>
              <p>One user can win (Fast 5, 1st line, 2nd line, 3rd line, 4 corners numbers) only once. But they can still claim 1st & 2nd Full House.</p>
              <p className="alert alert-danger">If user claim is false/invalid then that user will be disqualified from playing further contest.</p>
            <h4>Examples</h4>
              <table className = "table table-bordered">
                <tbody>
                  <tr>
                    <td className = "alert alert-success">
                      <p> 4 Corners (1st & 5th numbers of top & bottom rows)
                      </p>
                    </td><td className="alert alert-warning col-lg-6">
                      <p>1st Line (Top Row all Numbers)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src = {require("../../img/Four-Corner_Rule.png")} alt = "" width="560" height="117">
                      </img>
                    </td>
                    <td>
                      <img src = {require("../../img/first_line.png")} alt = "" width="560" height="117">
                    </img>
                    </td>
                  </tr>
                  <tr>
                    <td className = "alert alert-warning">
                      <p> 2nd Line (Middle Row all Numbers)
                      </p>
                    </td><td className="alert  alert-success col-lg-6">
                      <p>3rd Line (Bottom Row all Numbes)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src = {require("../../img/second_line.png")}  alt = "" width="560" height="117">
                      </img>
                    </td>
                    <td>
                      <img src = {require("../../img/third_line.png")} width="560" alt = "" height="117">
                    </img>
                    </td>
                  </tr>
                  <tr>
                    <td className = "alert alert-success">
                      <p> Full house 1 & 2 (All 14 numbers)
                      </p>
                    </td><td>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src = {require("../../img/full_house.png")} alt = "" width="560" height="117">
                      </img>
                    </td>
                  </tr>
                </tbody>
              </table>
        </div>
      </div>
		)
	}
}

export default Rule;