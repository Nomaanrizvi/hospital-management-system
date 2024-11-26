import express from 'express';
import {createMarketing , loginClient ,createClient, createClientSubscription ,updateSubscriptionStatus ,createPlan ,createPaymentMethod} from "../controller/marketing/index.js"
import { createClientSub } from '../controller/marketing/Clientsubscription/Create.clientsub.js';
import { getPlans } from '../controller/marketing/Plansubscription/get.subplan.js';
import { verifyPayment } from '../controller/marketing/PaymentSub/create.pay.js';



const marketing = express()
marketing.route('/create').post(createMarketing);
marketing.route('/client').post(createClient)
marketing.route('/clientlogin').post(loginClient)

// marketing.route('/clientsub').post(createClientSubscription)

marketing.route('/clientsub').post(createClientSub)
marketing.route('/updateclientsub').put(updateSubscriptionStatus)
marketing.route('/subplan').post(createPlan)
marketing.route('/createpay').post(createPaymentMethod)
marketing.route('/verifyPayment').post(verifyPayment)
marketing.route('/getallsubplans').get(getPlans)


export default marketing;