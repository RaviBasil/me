import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>
        <section class="colorlib-education" data-section="education">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">Education</span>
							<h2 class="colorlib-heading animate-box">Education</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<div class="fancy-collapse-panel">
								<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
									<div class="panel panel-default">
									    <div class="panel-heading" role="tab" id="headingOne">
									        <h4 class="panel-title">
									            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Bachelor of Technology
									            </a>
									        </h4>
									    </div>
									    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
									         <div class="panel-body">
									            <div class="row">
										      		<div class="col-md-6">
													  <strong>Moradabad Institute of Technology</strong>
														  <p>Computer Science and Engineering</p>
															<ul>
																<li>Data Structures</li>
																<li>Algorithm Analysis & Design</li>
																<li>Computer Architecture</li>
																<li>Software Engineering</li>
															</ul>
										      		</div>
										      		<div class="col-md-6">
													  
														  <p>2013-2017</p>

										      		</div>
										      	</div>
									         </div>
									    </div>
									</div>
									
									<div class="panel panel-default">
									    <div class="panel-heading" role="tab" id="headingFour">
									        <h4 class="panel-title">
									            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseFour">Industrial Training - Android Application Development
									            </a>
									        </h4>
									    </div>
									    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
									        <div class="panel-body">
												<div class="col-md-6">
										      		<p>Learned and developed android application development</p>
										      		</div>
													  <div class="col-md-6">
										      			<p>June 2016- July 2016</p>
										      		</div>
									        </div>
									    </div>
									</div>
									<div class="panel panel-default">
									    <div class="panel-heading" role="tab" id="headingFive">
									        <h4 class="panel-title">
									            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFive">Intermediate Education
									            </a>
									        </h4>
									    </div>
									    <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
									        <div class="panel-body">
									        <div class="col-md-6">
										    <p><strong>De Paul School</strong></p>
											</div>
											<div class="col-md-6">
										    <p>2013</p>
										    </div>
											</div>
									    </div>
									</div>
									<div class="panel panel-default">
									    <div class="panel-heading" role="tab" id="headingFive">
									        <h4 class="panel-title">
									            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">High School Secondary Education
									            </a>
									        </h4>
									    </div>
									    <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
									        <div class="panel-body">
									        <div class="col-md-6">
										    <p><strong>De Paul School</strong></p>
											</div>
											<div class="col-md-6">
										    <p>2011</p>
										    </div>
											</div>
									    </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
      </div>
    )
  }
}
