// Code generated by protoc-gen-go. DO NOT EDIT.
// source: model_common.proto

package model

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type Delegator struct {
	Address              string   `protobuf:"bytes,1,opt,name=address" json:"address,omitempty"`
	PubKey               string   `protobuf:"bytes,2,opt,name=pubKey" json:"pubKey,omitempty"`
	Shares               uint64   `protobuf:"varint,3,opt,name=shares" json:"shares,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Delegator) Reset()         { *m = Delegator{} }
func (m *Delegator) String() string { return proto.CompactTextString(m) }
func (*Delegator) ProtoMessage()    {}
func (*Delegator) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_common_aac38e32cd7ec5f9, []int{0}
}
func (m *Delegator) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Delegator.Unmarshal(m, b)
}
func (m *Delegator) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Delegator.Marshal(b, m, deterministic)
}
func (dst *Delegator) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Delegator.Merge(dst, src)
}
func (m *Delegator) XXX_Size() int {
	return xxx_messageInfo_Delegator.Size(m)
}
func (m *Delegator) XXX_DiscardUnknown() {
	xxx_messageInfo_Delegator.DiscardUnknown(m)
}

var xxx_messageInfo_Delegator proto.InternalMessageInfo

func (m *Delegator) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func (m *Delegator) GetPubKey() string {
	if m != nil {
		return m.PubKey
	}
	return ""
}

func (m *Delegator) GetShares() uint64 {
	if m != nil {
		return m.Shares
	}
	return 0
}

type Candidate struct {
	Address              string                 `protobuf:"bytes,1,opt,name=address" json:"address,omitempty"`
	PubKey               string                 `protobuf:"bytes,2,opt,name=pubKey" json:"pubKey,omitempty"`
	Shares               uint64                 `protobuf:"varint,3,opt,name=shares" json:"shares,omitempty"`
	VotingPower          float64                `protobuf:"fixed64,4,opt,name=votingPower" json:"votingPower,omitempty"`
	Description          *Candidate_Description `protobuf:"bytes,5,opt,name=description" json:"description,omitempty"`
	Delegators           []*Delegator           `protobuf:"bytes,6,rep,name=delegators" json:"delegators,omitempty"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *Candidate) Reset()         { *m = Candidate{} }
func (m *Candidate) String() string { return proto.CompactTextString(m) }
func (*Candidate) ProtoMessage()    {}
func (*Candidate) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_common_aac38e32cd7ec5f9, []int{1}
}
func (m *Candidate) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Candidate.Unmarshal(m, b)
}
func (m *Candidate) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Candidate.Marshal(b, m, deterministic)
}
func (dst *Candidate) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Candidate.Merge(dst, src)
}
func (m *Candidate) XXX_Size() int {
	return xxx_messageInfo_Candidate.Size(m)
}
func (m *Candidate) XXX_DiscardUnknown() {
	xxx_messageInfo_Candidate.DiscardUnknown(m)
}

var xxx_messageInfo_Candidate proto.InternalMessageInfo

func (m *Candidate) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func (m *Candidate) GetPubKey() string {
	if m != nil {
		return m.PubKey
	}
	return ""
}

func (m *Candidate) GetShares() uint64 {
	if m != nil {
		return m.Shares
	}
	return 0
}

func (m *Candidate) GetVotingPower() float64 {
	if m != nil {
		return m.VotingPower
	}
	return 0
}

func (m *Candidate) GetDescription() *Candidate_Description {
	if m != nil {
		return m.Description
	}
	return nil
}

func (m *Candidate) GetDelegators() []*Delegator {
	if m != nil {
		return m.Delegators
	}
	return nil
}

type Candidate_Description struct {
	Details              string   `protobuf:"bytes,1,opt,name=details" json:"details,omitempty"`
	Identity             string   `protobuf:"bytes,2,opt,name=identity" json:"identity,omitempty"`
	Moniker              string   `protobuf:"bytes,3,opt,name=moniker" json:"moniker,omitempty"`
	Website              string   `protobuf:"bytes,4,opt,name=website" json:"website,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Candidate_Description) Reset()         { *m = Candidate_Description{} }
func (m *Candidate_Description) String() string { return proto.CompactTextString(m) }
func (*Candidate_Description) ProtoMessage()    {}
func (*Candidate_Description) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_common_aac38e32cd7ec5f9, []int{1, 0}
}
func (m *Candidate_Description) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Candidate_Description.Unmarshal(m, b)
}
func (m *Candidate_Description) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Candidate_Description.Marshal(b, m, deterministic)
}
func (dst *Candidate_Description) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Candidate_Description.Merge(dst, src)
}
func (m *Candidate_Description) XXX_Size() int {
	return xxx_messageInfo_Candidate_Description.Size(m)
}
func (m *Candidate_Description) XXX_DiscardUnknown() {
	xxx_messageInfo_Candidate_Description.DiscardUnknown(m)
}

var xxx_messageInfo_Candidate_Description proto.InternalMessageInfo

func (m *Candidate_Description) GetDetails() string {
	if m != nil {
		return m.Details
	}
	return ""
}

func (m *Candidate_Description) GetIdentity() string {
	if m != nil {
		return m.Identity
	}
	return ""
}

func (m *Candidate_Description) GetMoniker() string {
	if m != nil {
		return m.Moniker
	}
	return ""
}

func (m *Candidate_Description) GetWebsite() string {
	if m != nil {
		return m.Website
	}
	return ""
}

func init() {
	proto.RegisterType((*Delegator)(nil), "model_common.Delegator")
	proto.RegisterType((*Candidate)(nil), "model_common.Candidate")
	proto.RegisterType((*Candidate_Description)(nil), "model_common.Candidate.Description")
}

func init() { proto.RegisterFile("model_common.proto", fileDescriptor_model_common_aac38e32cd7ec5f9) }

var fileDescriptor_model_common_aac38e32cd7ec5f9 = []byte{
	// 272 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x91, 0x3f, 0x4f, 0xc3, 0x30,
	0x10, 0xc5, 0xe5, 0xfe, 0x49, 0xc9, 0x85, 0xc9, 0x03, 0x58, 0x9d, 0xac, 0xb2, 0x64, 0xca, 0x50,
	0x06, 0x76, 0x28, 0x13, 0x0b, 0xb2, 0xc4, 0xc2, 0x82, 0x9c, 0xfa, 0x54, 0x2c, 0x12, 0x5f, 0x64,
	0x1b, 0x22, 0xbe, 0x35, 0x1f, 0x01, 0x25, 0x4a, 0x42, 0xba, 0x33, 0xfe, 0x9e, 0xef, 0x9e, 0xee,
	0x3d, 0x03, 0xaf, 0xc9, 0x60, 0xf5, 0x76, 0xa4, 0xba, 0x26, 0x57, 0x34, 0x9e, 0x22, 0xf1, 0xcb,
	0xb9, 0xb6, 0x7b, 0x81, 0xf4, 0x80, 0x15, 0x9e, 0x74, 0x24, 0xcf, 0x05, 0x6c, 0xb4, 0x31, 0x1e,
	0x43, 0x10, 0x4c, 0xb2, 0x3c, 0x55, 0x23, 0xf2, 0x2b, 0x48, 0x9a, 0xcf, 0xf2, 0x09, 0xbf, 0xc5,
	0xa2, 0x7f, 0x18, 0xa8, 0xd3, 0xc3, 0xbb, 0xf6, 0x18, 0xc4, 0x52, 0xb2, 0x7c, 0xa5, 0x06, 0xda,
	0xfd, 0x2c, 0x20, 0x7d, 0xd0, 0xce, 0x58, 0xa3, 0x23, 0xfe, 0x9f, 0x2f, 0x97, 0x90, 0x7d, 0x51,
	0xb4, 0xee, 0xf4, 0x4c, 0x2d, 0x7a, 0xb1, 0x92, 0x2c, 0x67, 0x6a, 0x2e, 0xf1, 0x47, 0xc8, 0x0c,
	0x86, 0xa3, 0xb7, 0x4d, 0xb4, 0xe4, 0xc4, 0x5a, 0xb2, 0x3c, 0xdb, 0xdf, 0x14, 0x67, 0x45, 0x4c,
	0x97, 0x15, 0x87, 0xbf, 0x51, 0x35, 0xdf, 0xe3, 0x77, 0x00, 0x66, 0xec, 0x25, 0x88, 0x44, 0x2e,
	0xf3, 0x6c, 0x7f, 0x7d, 0xee, 0x32, 0xf5, 0xa6, 0x66, 0xa3, 0xdb, 0x16, 0xb2, 0x99, 0x69, 0x17,
	0xdd, 0x60, 0xd4, 0xb6, 0x9a, 0xa2, 0x0f, 0xc8, 0xb7, 0x70, 0x61, 0x0d, 0xba, 0x68, 0xe3, 0x18,
	0x7e, 0xe2, 0x6e, 0xab, 0x26, 0x67, 0x3f, 0xd0, 0xf7, 0xf9, 0x53, 0x35, 0x62, 0xf7, 0xd2, 0x62,
	0x19, 0x6c, 0xc4, 0x3e, 0x7c, 0xaa, 0x46, 0xbc, 0xdf, 0xbc, 0xae, 0xfb, 0xf3, 0xca, 0xa4, 0xff,
	0xe7, 0xdb, 0xdf, 0x00, 0x00, 0x00, 0xff, 0xff, 0xd8, 0x72, 0x83, 0x7d, 0xfd, 0x01, 0x00, 0x00,
}
