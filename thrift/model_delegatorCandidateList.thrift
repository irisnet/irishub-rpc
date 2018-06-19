namespace go model

include "model_common.thrift"

struct DelegatorCandidateListRequest {
	1: string address,
	2: i16 page,
	3: i16 perPage,
	4: string sort,
	5: string q
}

struct DelegatorCandidateListResponse {
	1: list<model_common.Candidate> candidates
}