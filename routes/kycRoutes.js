const express = require('express');
const router = express.Router();

const { 
  getKycToken, 
  kycWebhook, 
  syncKycStatus,  // Add this import
  updateKycStatus,
  getAllUsersKYCData,
  getUserKYCData,
  getMyDashboardData,
  getMyKYCData,
  verifyGreenToken
} = require('../controllers/kycControllers');
const { protect, authorize } = require('../middlewares/auth');
const advancedResults = require('../middlewares/advancedResults');
const User = require('../models/User');

// Add raw body parser middleware for webhook
router.use('/webhook', express.raw({ type: 'application/json' }));

// KYC Routes
router.get('/token', protect, getKycToken);
router.post('/webhook', kycWebhook);
<<<<<<< HEAD
<<<<<<< HEAD
router.get('/sync/:applicantId', protect, syncKycStatus); 
=======
router.get('/sync/:applicantId', protect, syncKycStatus); // NEW: Manual sync endpoint
>>>>>>> 9b97f425a868e02d91aa696715525354ac950906
=======
router.get('/sync/:applicantId', protect, syncKycStatus); // NEW: Manual sync endpoint
>>>>>>> 9b97f425a868e02d91aa696715525354ac950906
router.post('/status', protect, updateKycStatus);

router.route('/users').get(protect, authorize('admin'),advancedResults(User, 'kyc'),
    getAllUsersKYCData );

router.route('/kyc/:id').get(protect, getUserKYCData );


router.route('/kyc/verify-token').post(verifyGreenToken);
// Dashboard routes
router.route('/me/dashboard').get(protect, getMyDashboardData);

router.route('/me/kyc').get(protect, getMyKYCData);
module.exports = router;