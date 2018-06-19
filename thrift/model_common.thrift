namespace go model

struct Delegator {
	1: string address,
	2: string pubKey,
	3: i64 shares
}

struct CandidateDescription {
	1: string details,
	2: string identity,
	3: string moniker,
	4: string website
}

struct Candidate {
	1: string address,
	2: string pubKey,
	3: i64 shares,
	4: double votingPower,
	5: CandidateDescription description,
	6: list<Delegator> delegators
}

/** common exception
 * @param errCode, error code
 * @param errMsg, error message
 */
exception Exception {
  1: i32 errCode,
  2: string errMsg
}
