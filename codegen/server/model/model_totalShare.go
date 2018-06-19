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
type TotalShareRequest struct {
  Address string `thrift:"address,1" db:"address" json:"address"`
}

func NewTotalShareRequest() *TotalShareRequest {
  return &TotalShareRequest{}
}


func (p *TotalShareRequest) GetAddress() string {
  return p.Address
}
func (p *TotalShareRequest) Read(iprot thrift.TProtocol) error {
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

func (p *TotalShareRequest)  ReadField1(iprot thrift.TProtocol) error {
  if v, err := iprot.ReadString(); err != nil {
  return thrift.PrependError("error reading field 1: ", err)
} else {
  p.Address = v
}
  return nil
}

func (p *TotalShareRequest) Write(oprot thrift.TProtocol) error {
  if err := oprot.WriteStructBegin("TotalShareRequest"); err != nil {
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

func (p *TotalShareRequest) writeField1(oprot thrift.TProtocol) (err error) {
  if err := oprot.WriteFieldBegin("address", thrift.STRING, 1); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field begin error 1:address: ", p), err) }
  if err := oprot.WriteString(string(p.Address)); err != nil {
  return thrift.PrependError(fmt.Sprintf("%T.address (1) field write error: ", p), err) }
  if err := oprot.WriteFieldEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field end error 1:address: ", p), err) }
  return err
}

func (p *TotalShareRequest) String() string {
  if p == nil {
    return "<nil>"
  }
  return fmt.Sprintf("TotalShareRequest(%+v)", *p)
}

// Attributes:
//  - TotalShares
type TotalShareResponse struct {
  // unused field # 1
  TotalShares int64 `thrift:"totalShares,2" db:"totalShares" json:"totalShares"`
}

func NewTotalShareResponse() *TotalShareResponse {
  return &TotalShareResponse{}
}


func (p *TotalShareResponse) GetTotalShares() int64 {
  return p.TotalShares
}
func (p *TotalShareResponse) Read(iprot thrift.TProtocol) error {
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
    case 2:
      if fieldTypeId == thrift.I64 {
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

func (p *TotalShareResponse)  ReadField2(iprot thrift.TProtocol) error {
  if v, err := iprot.ReadI64(); err != nil {
  return thrift.PrependError("error reading field 2: ", err)
} else {
  p.TotalShares = v
}
  return nil
}

func (p *TotalShareResponse) Write(oprot thrift.TProtocol) error {
  if err := oprot.WriteStructBegin("TotalShareResponse"); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write struct begin error: ", p), err) }
  if p != nil {
    if err := p.writeField2(oprot); err != nil { return err }
  }
  if err := oprot.WriteFieldStop(); err != nil {
    return thrift.PrependError("write field stop error: ", err) }
  if err := oprot.WriteStructEnd(); err != nil {
    return thrift.PrependError("write struct stop error: ", err) }
  return nil
}

func (p *TotalShareResponse) writeField2(oprot thrift.TProtocol) (err error) {
  if err := oprot.WriteFieldBegin("totalShares", thrift.I64, 2); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field begin error 2:totalShares: ", p), err) }
  if err := oprot.WriteI64(int64(p.TotalShares)); err != nil {
  return thrift.PrependError(fmt.Sprintf("%T.totalShares (2) field write error: ", p), err) }
  if err := oprot.WriteFieldEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field end error 2:totalShares: ", p), err) }
  return err
}

func (p *TotalShareResponse) String() string {
  if p == nil {
    return "<nil>"
  }
  return fmt.Sprintf("TotalShareResponse(%+v)", *p)
}

