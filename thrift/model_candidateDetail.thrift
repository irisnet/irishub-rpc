namespace go model

include "model_common.thrift"

struct CandidateDetailRequest {
	1: string address
	2: string pubKey
}

struct CandidateDetailResponse {
	1: model_common.Candidate candidate
}