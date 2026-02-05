<template>
<div class="content-wrapper overflow-visible">
	  <div class="container-full">
		<!-- Main content -->
		<section class="content">
			<div class="row">
				<div class="col-xxl-8">
					<div class="row">
						<div class="col-xxl-4 col-lg-4 col-md-6 col-12">
							<div class="box rounded-4" style="background: linear-gradient(-60deg, #1b84ff, #7fafff 35%, #1b84ff 37%);">
								<div class="box-body">
									<div class="d-flex justify-content-between align-items-center">
										<div class="me-15 bg-primary-light w-50 h-50 rounded-circle text-center p-0 align-content-center">
											<i class="feather-dollar-sign fs-22"></i>
										</div>
										<div class="d-flex align-items-center">
											<div>
												<span class="badge badge-primary-light badge-pill"><b><span class="feather-arrow-up"></span> +10%</b></span>
											</div>
											<div class="dropdown">
												<button class="btn btn-secondary bg-none btn-sm p-0 fs-20" data-bs-toggle="dropdown" href="#" aria-expanded="false"><span class="feather-more-vertical text-white"></span></button>
												<div class="dropdown-menu dropdown-menu-end" style="">
												  	<a class="dropdown-item" href="#">Daily</a>
											  		<a class="dropdown-item" href="#">Weekly</a>
											  		<a class="dropdown-item" href="#">Yearly</a>
												</div>
											</div>
										</div>
									</div>
									<div class="d-flex align-items-center mt-15">
										<div class="d-flex flex-column flex-grow-1 fw-500 me-20">
											<p class="m-0 text-white">Total invites</p>
											<h1 class="my-1 fw-500 text-white">$1,200</h1>
											<p class="m-0 text-white">Since Last Week</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xxl-4 col-lg-4 col-md-6 col-12">
							<div class="box rounded-4 b-1">
								<div class="box-body">
									<div class="d-flex justify-content-between align-items-center">
										<div class="me-15 bg-primary-light w-50 h-50 rounded-circle text-center p-0 align-content-center">
											<i class="mdi mdi-account-multiple fs-26"></i>
										</div>
										<div class="d-flex align-items-center">
											<div>
												<span class="badge badge-danger-light badge-pill"><b><span class="feather-arrow-down"></span> -8%</b></span>
											</div>
											<div class="dropdown">
												<button class="btn btn-secondary bg-none btn-sm p-0 fs-20" data-bs-toggle="dropdown" href="#" aria-expanded="false"><span class="feather-more-vertical"></span></button>
												<div class="dropdown-menu dropdown-menu-end" style="">
												  	<a class="dropdown-item" href="#">Daily</a>
											  		<a class="dropdown-item" href="#">Weekly</a>
											  		<a class="dropdown-item" href="#">Yearly</a>
												</div>
											</div>
										</div>
									</div>
									<div class="d-flex align-items-center mt-15">
										<div class="d-flex flex-column flex-grow-1 fw-500 me-20">
											<p class="m-0">Total Customers</p>
											<h1 class="my-1 fw-500">2,102</h1>
											<p class="m-0">Since Last Week</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xxl-4 col-lg-4 col-md-12 col-12">
							<div class="box rounded-4 b-1">
								<div class="box-body">
									<div class="d-flex justify-content-between align-items-center">
										<div class="me-15 bg-primary-light w-50 h-50 rounded-circle text-center p-0 align-content-center">
											<i class="mdi mdi-cart fs-26"></i>
										</div>
										<div class="d-flex align-items-center">
											<div>
												<span class="badge badge-primary-light badge-pill"><b><span class="feather-arrow-up"></span> +10%</b></span>
											</div>
											<div class="dropdown">
												<button class="btn btn-secondary bg-none btn-sm p-0 fs-20" data-bs-toggle="dropdown" href="#" aria-expanded="false"><span class="feather-more-vertical"></span></button>
												<div class="dropdown-menu dropdown-menu-end" style="">
												  	<a class="dropdown-item" href="#">Daily</a>
											  		<a class="dropdown-item" href="#">Weekly</a>
											  		<a class="dropdown-item" href="#">Yearly</a>
												</div>
											</div>
										</div>
									</div>
									<div class="d-flex align-items-center mt-15">
										<div class="d-flex flex-column flex-grow-1 fw-500 me-20">
											<p class="m-0">Total Orders</p>
											<h1 class="my-1 fw-500">2,458</h1>
											<p class="m-0">Since Last Week</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xxl-12 col-lg-12">
							<div class="box rounded-4 b-1">
								<div class="box-header b-0 pb-0 d-flex justify-content-between align-items-center">
									<h3 class="fw-600 m-0">Sales Analytics</h3>
									<div class="dropdown">
										<button class="btn btn-secondary btn-outline btn-sm rounded-pill dropdown-toggle" data-bs-toggle="dropdown" href="#" aria-expanded="false"> This Month</button>
										<div class="dropdown-menu dropdown-menu-end" style="">
										  	<a class="dropdown-item" href="#">Daily</a>
									  		<a class="dropdown-item" href="#">This Weekly</a>
									  		<a class="dropdown-item" href="#">This Yearly</a>
										</div>
									</div>
								</div>
								<div class="box-body">
									<div id="chart-container"></div>
								</div>
							</div>
						</div>
						<div class="col-xxl-12 col-lg-12 col-12">
						    <div class="box rounded-4 b-1">
						        <div class="box-header no-border pb-0">
						            <h3 class="fw-600 m-0">Latest Orders</h3>
						            <div class="box-controls pull-right">
						                <p class="m-0">View All</p>
						            </div>
						        </div>
						        <div class="box-body px-10">
						            <div class="table-responsive">
						                <table class="table table-hover m-0 text-nowrap">
						                    <tbody>
						                        <thead class="text-fade bg-light">
						                            <th class="b-0">Order Id</th>
						                            <th class="b-0">Madicine Name</th>
						                            <th class="b-0">Price</th>
						                            <th class="b-0">Status</th>
						                            <th class="b-0">Action</th>
						                        </thead>
						                        <tr>
						                            <td>#ORD121</td>
						                            <td>Metformin</td>
						                            <td>$10.50</td>
						                            <td><span class="badge badge-pill badge-success-light">Delivered</span></td>
						                            <td>
						                            	<a href="#" class="text-dark"><i class="fa fa-eye fs-20 me-5" aria-hidden="true"></i></a>
						                            	<a href="#" class="text-dark"><i class="fa fa-trash-o fs-20 me-5" aria-hidden="true"></i></a>
						                            	<a href="#" class="text-dark"><i class="fa fa-share fs-20" aria-hidden="true"></i></a>
						                            </td>
						                        </tr>
						                        <tr>
						                            <td>#ORD122</td>
						                            <td>Omeprazole</td>
						                            <td>$15.05</td>
						                            <td><span class="badge badge-pill badge-success-light">Delivered</span></td>
						                            <td>
						                            	<a href="#" class="text-dark"><i class="fa fa-eye fs-20 me-5" aria-hidden="true"></i></a>
						                            	<a href="#" class="text-dark"><i class="fa fa-trash-o fs-20 me-5" aria-hidden="true"></i></a>
						                            	<a href="#" class="text-dark"><i class="fa fa-share fs-20" aria-hidden="true"></i></a>
						                            </td>
						                        </tr>
						                        <tr>
						                            <td>#ORD123</td>
						                            <td>Atorvastatin</td>
						                            <td>$13.01</td>
						                            <td><span class="badge badge-pill badge-warning-light">Pending</span></td>
						                            <td>
						                            	<a href="#" class="text-dark"><i class="fa fa-eye fs-20 me-5" aria-hidden="true"></i></a>
						                            	<a href="#" class="text-dark"><i class="fa fa-trash-o fs-20 me-5" aria-hidden="true"></i></a>
						                            	<a href="#" class="text-dark"><i class="fa fa-share fs-20" aria-hidden="true"></i></a>
						                            </td>
						                        </tr>
						                    </tbody>
						                </table>
						            </div>
						        </div>
						    </div>
						</div>
					</div>
				</div>
				<div class="col-xxl-4 col-lg-12">
					<div class="row">
						<div class="col-xxl-12 col-lg-6">
							<div class="box rounded-4 b-1 bg-transparent shadow-none custom-package">
								<div class="box-body align-content-end">
									<div>
										<p class="fw-600 fs-18 text-white">Discover How to Maximize Your Pharmacy's Efficiency.</p>
										<button class="btn btn-primary rounded-3 b-1 btn-md">Learn More <span class="feather-external-link"></span></button>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xxl-12 col-lg-6">
							<div class="box rounded-4 b-1">
								<div class="box-header b-0 pb-0 d-flex justify-content-between align-items-center">
									<h3 class="fw-600 m-0">Top Selling</h3>
									<div class="dropdown">
										<button class="btn btn-secondary btn-outline btn-sm rounded-pill dropdown-toggle" data-bs-toggle="dropdown" href="#" aria-expanded="false"> This Month</button>
										<div class="dropdown-menu dropdown-menu-end" style="">
										  	<a class="dropdown-item" href="#">Daily</a>
									  		<a class="dropdown-item" href="#">This Weekly</a>
									  		<a class="dropdown-item" href="#">This Yearly</a>
										</div>
									</div>
								</div>
								<div class="box-body">
									<div id="chart-selling"></div>
								</div>
							</div>
						</div>
					</div>
				</div>	
				<div class="col-xxl-4 col-lg-4 col-md-6 col-12">
					<div class="box rounded-4">
						<div class="box-body">
							<div class="d-flex justify-content-between align-items-center">
								<div class="d-flex align-items-center">
									<div class="me-10 bg-success-light w-50 h-50 rounded-circle text-center p-0 align-content-center"><i class="mdi mdi-check-circle fs-22"></i></div>
									<p class="m-0 fw-600">Completed Payment</p>
								</div>
								<div class="dropdown">
									<button class="btn btn-secondary bg-none btn-sm p-0 fs-20" data-bs-toggle="dropdown" href="#" aria-expanded="false"><span class="feather-more-vertical"></span></button>
									<div class="dropdown-menu dropdown-menu-end" style="">
									  	<a class="dropdown-item" href="#">Daily</a>
								  		<a class="dropdown-item" href="#">Weekly</a>
								  		<a class="dropdown-item" href="#">Yearly</a>
									</div>
								</div>
							</div>
							<div class="d-flex align-items-center mt-15">
								<div class="d-flex flex-column flex-grow-1 fw-500 me-20">
									<p class="m-0">Revenue: $25,000</p>
									<h1 class="my-1 fw-500">200</h1>
									<p class="m-0">Since Last Week</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xxl-4 col-lg-4 col-md-6 col-12">
					<div class="box rounded-4">
						<div class="box-body">
							<div class="d-flex justify-content-between align-items-center">
								<div class="d-flex align-items-center">
									<div class="me-10 bg-warning-light w-50 h-50 rounded-circle text-center p-0 align-content-center"><i class="mdi mdi-alert fs-22"></i></div>
									<p class="m-0 fw-600">Pending Payments</p>
								</div>
								<div class="dropdown">
									<button class="btn btn-secondary bg-none btn-sm p-0 fs-20" data-bs-toggle="dropdown" href="#" aria-expanded="false"><span class="feather-more-vertical"></span></button>
									<div class="dropdown-menu dropdown-menu-end" style="">
									  	<a class="dropdown-item" href="#">Daily</a>
								  		<a class="dropdown-item" href="#">Weekly</a>
								  		<a class="dropdown-item" href="#">Yearly</a>
									</div>
								</div>
							</div>
							<div class="d-flex align-items-center mt-15">
								<div class="d-flex flex-column flex-grow-1 fw-500 me-20">
									<p class="m-0">Revenue: $10,000</p>
									<h1 class="my-1 fw-500">40</h1>
									<p class="m-0">Since Last Week</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xxl-4 col-lg-4 col-md-12 col-12">
					<div class="box rounded-4">
						<div class="box-body">
							<div class="d-flex justify-content-between align-items-center">
								<div class="d-flex align-items-center">
									<div class="me-10 bg-danger-light w-50 h-50 rounded-circle text-center p-0 align-content-center"><i class="mdi mdi-close-circle fs-22"></i></div>
									<p class="m-0 fw-600">Failed Payments</p>
								</div>
								<div class="dropdown">
									<button class="btn btn-secondary bg-none btn-sm p-0 fs-20" data-bs-toggle="dropdown" href="#" aria-expanded="false"><span class="feather-more-vertical"></span></button>
									<div class="dropdown-menu dropdown-menu-end" style="">
									  	<a class="dropdown-item" href="#">Daily</a>
								  		<a class="dropdown-item" href="#">Weekly</a>
								  		<a class="dropdown-item" href="#">Yearly</a>
									</div>
								</div>
							</div>
							<div class="d-flex align-items-center mt-15">
								<div class="d-flex flex-column flex-grow-1 fw-500 me-20">
									<p class="m-0">Revenue: $5,000</p>
									<h1 class="my-1 fw-500">5</h1>
									<p class="m-0">Since Last Week</p>
								</div>
							</div>
						</div>
					</div>
				</div>		
			</div>
		</section>
		<!-- /.content -->
	  </div>
  </div>

</template>

<script  setup>

</script>

<style>

</style>