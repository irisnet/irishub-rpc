namespace go model

include "model_common.thrift"


struct CandidateListRequest {
	1: string address,
	2: i16 page,
	3: i16 perPage,
	4: string sort,
	5: string q
}

struct CandidateListResponse {
	1: list<model_common.Candidate> candidates
}