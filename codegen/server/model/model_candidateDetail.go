// Autogenerated by Thrift Compiler (0.11.0)
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING

package model

import (
	"bytes"
	"reflect"
	"context"
	"fmt"
	"git.apache.org/thrift.git/lib/go/thrift"

)

// (needed to ensure safety because of naive import list construction.)
var _ = thrift.ZERO
var _ = fmt.Printf
var _ = context.Background
var _ = reflect.DeepEqual
var _ = bytes.Equal

// Attributes:
//  - Address
//  - PubKey
type CandidateDetailRequest struct {
  Address string `thrift:"address,1" db:"address" json:"address"`
  PubKey string `thrift:"pubKey,2" db:"pubKey" json:"pubKey"`
}

func NewCandidateDetailRequest() *CandidateDetailRequest {
  return &CandidateDetailRequest{}
}


func (p *CandidateDetailRequest) GetAddress() string {
  return p.Address
}

func (p *CandidateDetailRequest) GetPubKey() string {
  return p.PubKey
}
func (p *CandidateDetailRequest) Read(iprot thrift.TProtocol) error {
  if _, err := iprot.ReadStructBegin(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T read error: ", p), err)
  }


  for {
    _, fieldTypeId, fieldId, err := iprot.ReadFieldBegin()
    if err != nil {
      return thrift.PrependError(fmt.Sprintf("%T field %d read error: ", p, fieldId), err)
    }
    if fieldTypeId == thrift.STOP { break; }
    switch fieldId {
    case 1:
      if fieldTypeId == thrift.STRING {
        if err := p.ReadField1(iprot); err != nil {
          return err
        }
      } else {
        if err := iprot.Skip(fieldTypeId); err != nil {
          return err
        }
      }
    case 2:
      if fieldTypeId == thrift.STRING {
        if err := p.ReadField2(iprot); err != nil {
          return err
        }
      } else {
        if err := iprot.Skip(fieldTypeId); err != nil {
          return err
        }
      }
    default:
      if err := iprot.Skip(fieldTypeId); err != nil {
        return err
      }
    }
    if err := iprot.ReadFieldEnd(); err != nil {
      return err
    }
  }
  if err := iprot.ReadStructEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T read struct end error: ", p), err)
  }
  return nil
}

func (p *CandidateDetailRequest)  ReadField1(iprot thrift.TProtocol) error {
  if v, err := iprot.ReadString(); err != nil {
  return thrift.PrependError("error reading field 1: ", err)
} else {
  p.Address = v
}
  return nil
}

func (p *CandidateDetailRequest)  ReadField2(iprot thrift.TProtocol) error {
  if v, err := iprot.ReadString(); err != nil {
  return thrift.PrependError("error reading field 2: ", err)
} else {
  p.PubKey = v
}
  return nil
}

func (p *CandidateDetailRequest) Write(oprot thrift.TProtocol) error {
  if err := oprot.WriteStructBegin("CandidateDetailRequest"); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write struct begin error: ", p), err) }
  if p != nil {
    if err := p.writeField1(oprot); err != nil { return err }
    if err := p.writeField2(oprot); err != nil { return err }
  }
  if err := oprot.WriteFieldStop(); err != nil {
    return thrift.PrependError("write field stop error: ", err) }
  if err := oprot.WriteStructEnd(); err != nil {
    return thrift.PrependError("write struct stop error: ", err) }
  return nil
}

func (p *CandidateDetailRequest) writeField1(oprot thrift.TProtocol) (err error) {
  if err := oprot.WriteFieldBegin("address", thrift.STRING, 1); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field begin error 1:address: ", p), err) }
  if err := oprot.WriteString(string(p.Address)); err != nil {
  return thrift.PrependError(fmt.Sprintf("%T.address (1) field write error: ", p), err) }
  if err := oprot.WriteFieldEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field end error 1:address: ", p), err) }
  return err
}

func (p *CandidateDetailRequest) writeField2(oprot thrift.TProtocol) (err error) {
  if err := oprot.WriteFieldBegin("pubKey", thrift.STRING, 2); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field begin error 2:pubKey: ", p), err) }
  if err := oprot.WriteString(string(p.PubKey)); err != nil {
  return thrift.PrependError(fmt.Sprintf("%T.pubKey (2) field write error: ", p), err) }
  if err := oprot.WriteFieldEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field end error 2:pubKey: ", p), err) }
  return err
}

func (p *CandidateDetailRequest) String() string {
  if p == nil {
    return "<nil>"
  }
  return fmt.Sprintf("CandidateDetailRequest(%+v)", *p)
}

// Attributes:
//  - Candidate
type CandidateDetailResponse struct {
  Candidate *Candidate `thrift:"candidate,1" db:"candidate" json:"candidate"`
}

func NewCandidateDetailResponse() *CandidateDetailResponse {
  return &CandidateDetailResponse{}
}

var CandidateDetailResponse_Candidate_DEFAULT *Candidate
func (p *CandidateDetailResponse) GetCandidate() *Candidate {
  if !p.IsSetCandidate() {
    return CandidateDetailResponse_Candidate_DEFAULT
  }
return p.Candidate
}
func (p *CandidateDetailResponse) IsSetCandidate() bool {
  return p.Candidate != nil
}

func (p *CandidateDetailResponse) Read(iprot thrift.TProtocol) error {
  if _, err := iprot.ReadStructBegin(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T read error: ", p), err)
  }


  for {
    _, fieldTypeId, fieldId, err := iprot.ReadFieldBegin()
    if err != nil {
      return thrift.PrependError(fmt.Sprintf("%T field %d read error: ", p, fieldId), err)
    }
    if fieldTypeId == thrift.STOP { break; }
    switch fieldId {
    case 1:
      if fieldTypeId == thrift.STRUCT {
        if err := p.ReadField1(iprot); err != nil {
          return err
        }
      } else {
        if err := iprot.Skip(fieldTypeId); err != nil {
          return err
        }
      }
    default:
      if err := iprot.Skip(fieldTypeId); err != nil {
        return err
      }
    }
    if err := iprot.ReadFieldEnd(); err != nil {
      return err
    }
  }
  if err := iprot.ReadStructEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T read struct end error: ", p), err)
  }
  return nil
}

func (p *CandidateDetailResponse)  ReadField1(iprot thrift.TProtocol) error {
  p.Candidate = &Candidate{}
  if err := p.Candidate.Read(iprot); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T error reading struct: ", p.Candidate), err)
  }
  return nil
}

func (p *CandidateDetailResponse) Write(oprot thrift.TProtocol) error {
  if err := oprot.WriteStructBegin("CandidateDetailResponse"); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write struct begin error: ", p), err) }
  if p != nil {
    if err := p.writeField1(oprot); err != nil { return err }
  }
  if err := oprot.WriteFieldStop(); err != nil {
    return thrift.PrependError("write field stop error: ", err) }
  if err := oprot.WriteStructEnd(); err != nil {
    return thrift.PrependError("write struct stop error: ", err) }
  return nil
}

func (p *CandidateDetailResponse) writeField1(oprot thrift.TProtocol) (err error) {
  if err := oprot.WriteFieldBegin("candidate", thrift.STRUCT, 1); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field begin error 1:candidate: ", p), err) }
  if err := p.Candidate.Write(oprot); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T error writing struct: ", p.Candidate), err)
  }
  if err := oprot.WriteFieldEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field end error 1:candidate: ", p), err) }
  return err
}

func (p *CandidateDetailResponse) String() string {
  if p == nil {
    return "<nil>"
  }
  return fmt.Sprintf("CandidateDetailResponse(%+v)", *p)
}

