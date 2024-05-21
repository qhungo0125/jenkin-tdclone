const ApplyJob = require("./apply");
const ListApply = require("./listApply");
const CountListApply = require("./countListApply")
const DetailApply = require("./detail")
const UpdateProcessApplication = require("./update-process");

class ApplicationRepository {
  // [POST]
  applyJob = ApplyJob;

  // [GET] List applications by job id
  listApply = ListApply;

  countListApply = CountListApply;

  updateProcessApplication = UpdateProcessApplication;

  detailApply = DetailApply;
}

module.exports = ApplicationRepository;
