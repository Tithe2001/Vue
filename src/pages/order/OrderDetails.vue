<template>
   <div class="content-wrapper">
    <section class="content">

		  <div class="row">
			<div class="col-12">
				<div class="box">
				  <div class="box-header">
					<h4 class="box-title">Order Summary</h4>
				  </div>
				  <div class="box-body">
					<div class="table-responsive">
						<table class="table table-bordered">
							<thead>
								<tr>
									<th>Photo</th>
									<th>Product</th>
									<th>Quantity</th>
									<th class="w-200">Price</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><img src="" alt="" width="40"></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								
								<tr>
									<th colspan="3" class="text-end">Total</th>
									<th></th>
								</tr>
								<tr>
									<td>Delivery Charges</td>
									<td class="text-end fw-700">$50</td>
								</tr>
								
								<tr>
									<th colspan="3" class="text-end fs-24 fw-700">Payable Amount</th>
									<th class="fs-24 fw-700"></th>
								</tr>
							</tbody>
						</table>
					</div>

					<hr>
					<h4 class="box-title mb-15">Save Address</h4>
						<div class="row">
                            <input type="text" name="delivery_address" placeholder="Delivery Address">
                        </div>
					<hr>
					<h4 class="box-title mb-15">Choose payment Option</h4>
					<!-- Nav tabs -->
					<ul class="nav nav-tabs" role="tablist">
						<li class="nav-item"> <a class="nav-link active" data-bs-toggle="tab" href="#debit-card" role="tab"><span class="hidden-sm-up"><i class="fa fa-cc"></i></span> <span class="hidden-xs-down">Debit Card</span></a> </li>
						<li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#paypal" role="tab"><span class="hidden-sm-up"><i class="fa fa-paypal"></i></span> <span class="hidden-xs-down">Cash</span></a> </li>
					</ul>

					<!-- Tab panes -->
					<div class="tab-content tabcontent-border">
						<div class="tab-pane active" id="debit-card" role="tabpanel">
							<div class="p-30">
								<div class="row">
									<div class="col-lg-7 col-md-6 col-12">
										<form>
											<div class="form-group">
												<label for="exampleInputEmail1" class="form-label">CARD NUMBER</label>
												<div class="input-group">
													<div class="input-group-addon"><i class="fa fa-credit-card"></i></div>
													<input type="text" class="form-control" id="exampleInputuname" placeholder="Card Number"> 
												</div>
											</div>
											<div class="row">
												<div class="col-7">
													<div class="form-group">
														<label class="form-label">EXPIRATION DATE</label>
														<input type="text" class="form-control" name="Expiry" placeholder="MM / YY" required=""> 
													</div>
												</div>
												<div class="col-5 pull-right">
													<div class="form-group">
														<label class="form-label">CV CODE</label>
														<input type="text" class="form-control" name="CVC" placeholder="CVC" required=""> 
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-12">
													<div class="form-group">
														<label class="form-label">NAME OF CARD</label>
														<input type="text" class="form-control" name="nameCard" placeholder="NAME AND SURNAME"> 
													</div>
												</div>
											</div>
											<button class="btn btn-success">Make Payment</button>
										</form>
									</div>
									
								</div>
							</div>
						</div>
						<div class="tab-pane" id="paypal" role="tabpanel">						
							<div class="p-30">
								You can pay your money in cash, for more info <a href="#">click here</a><br><br>
								<button @click="makeOrder" class="btn btn-info btn-outline"><i class="fa fa-cc-paypal"></i>Confirm Order</button>
							</div>
						</div>
					</div>
				  </div>
				</div>
			</div>
		</div>

		</section>
    
  </div>
</template>

<script setup>
import axios from "axios";
import { useCartStore } from "../../stores/Cart";
import { computed, ref } from "vue";

const cartStore = useCartStore();
const imgURL = import.meta.env.VITE_IMG_URL;

const address = ref("");
const payment = ref("cash");
const baseUrl = import.meta.env.VITE_BASE_URL;

const totalAmount = computed(() =>
  cartStore.cart.reduce((sum, item) => sum + item.selling_price * item.quantity, 0)
);

async function makeOrder() {
  if (!address.value) {
    alert("Enter delivery address");
    return;
  }

  try {
    await axios.post(`${baseUrl}/orders`, {
      delivery_address: address.value,
      payment_method: payment.value,
      products: cartStore.cart
    });

    alert("Order placed successfully");
    cartStore.clearCart();

  } catch (error) {
    console.log(error);
  }
}
</script>


<style>

</style>