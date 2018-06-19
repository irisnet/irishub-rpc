namespace go model

include "model_common.thrift"
include "model_totalShare.thrift"
include "model_candidateList.thrift"
include "model_candidateDetail.thrift"
include "model_delegatorCandidateList.thrift"

service IRISHubService {

	model_candidateList.CandidateListResponse GetCandidateList(1: model_candidateList.CandidateListRequest req) throws (1:model_common.Exception e),

	model_candidateDetail.CandidateDetailResponse GetCandidateDetail(1: model_candidateDetail.CandidateDetailRequest req) throws (1:model_common.Exception e),

	model_delegatorCandidateList.DelegatorCandidateListResponse GetDelegatorCandidateList(1: model_delegatorCandidateList.DelegatorCandidateListRequest req) throws (1:model_common.Exception e),

	model_totalShare.TotalShareResponse GetDelegatorTotalShares(1: model_totalShare.TotalShareRequest req) throws (1:model_common.Exception e)

}
