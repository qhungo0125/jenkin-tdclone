const express = require(`express`);
const auth = require('../middlewares/auth');
const { CompanyTransport } = require('../transports');
const companyRouter = express.Router();
const transport = new CompanyTransport();

companyRouter.post('/create', transport.createCompanyWithSharding);
companyRouter.get('/search', transport.filterCompanyWithSharding);
companyRouter.get('/find/:id', transport.findCompanyByIdWithSharding);
companyRouter.get('/filter', transport.filterCompany);
companyRouter.get('/:id', transport.findCompanyById);
companyRouter.get('/:id/jobs', transport.listJobsByCompanyId);
companyRouter.post('/', transport.createCompany);
companyRouter.patch('/:id', transport.updateCompany);
companyRouter.get('/home/slider', transport.listCompanySlider);

module.exports = companyRouter;
