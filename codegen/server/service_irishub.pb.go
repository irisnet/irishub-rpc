// Code generated by protoc-gen-go. DO NOT EDIT.
// source: service_irishub.proto

package model

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

import (
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Ignoring public import of TotalShareRequest from model_totalShare.proto

// Ignoring public import of TotalShareResponse from model_totalShare.proto

// Ignoring public import of CandidateListRequest from model_candidateList.proto

// Ignoring public import of CandidateListResponse from model_candidateList.proto

// Ignoring public import of CandidateDetailRequest from model_candidateDetail.proto

// Ignoring public import of CandidateDetailResponse from model_candidateDetail.proto

// Ignoring public import of DelegatorCandidateListRequest from model_delegatorCandidateList.proto

// Ignoring public import of DelegatorCandidateListResponse from model_delegatorCandidateList.proto

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// IRISHubServiceClient is the client API for IRISHubService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type IRISHubServiceClient interface {
	GetDelegatorTotalShares(ctx context.Context, in *TotalShareRequest, opts ...grpc.CallOption) (*TotalShareResponse, error)
	GetCandidateList(ctx context.Context, in *CandidateListRequest, opts ...grpc.CallOption) (*CandidateListResponse, error)
	GetCandidateDetail(ctx context.Context, in *CandidateDetailRequest, opts ...grpc.CallOption) (*CandidateDetailResponse, error)
	GetDelegatorCandidateList(ctx context.Context, in *DelegatorCandidateListRequest, opts ...grpc.CallOption) (*DelegatorCandidateListResponse, error)
}

type iRISHubServiceClient struct {
	cc *grpc.ClientConn
}

func NewIRISHubServiceClient(cc *grpc.ClientConn) IRISHubServiceClient {
	return &iRISHubServiceClient{cc}
}

func (c *iRISHubServiceClient) GetDelegatorTotalShares(ctx context.Context, in *TotalShareRequest, opts ...grpc.CallOption) (*TotalShareResponse, error) {
	out := new(TotalShareResponse)
	err := c.cc.Invoke(ctx, "/service_irishub.IRISHubService/GetDelegatorTotalShares", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *iRISHubServiceClient) GetCandidateList(ctx context.Context, in *CandidateListRequest, opts ...grpc.CallOption) (*CandidateListResponse, error) {
	out := new(CandidateListResponse)
	err := c.cc.Invoke(ctx, "/service_irishub.IRISHubService/GetCandidateList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *iRISHubServiceClient) GetCandidateDetail(ctx context.Context, in *CandidateDetailRequest, opts ...grpc.CallOption) (*CandidateDetailResponse, error) {
	out := new(CandidateDetailResponse)
	err := c.cc.Invoke(ctx, "/service_irishub.IRISHubService/GetCandidateDetail", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *iRISHubServiceClient) GetDelegatorCandidateList(ctx context.Context, in *DelegatorCandidateListRequest, opts ...grpc.CallOption) (*DelegatorCandidateListResponse, error) {
	out := new(DelegatorCandidateListResponse)
	err := c.cc.Invoke(ctx, "/service_irishub.IRISHubService/GetDelegatorCandidateList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// IRISHubServiceServer is the server API for IRISHubService service.
type IRISHubServiceServer interface {
	GetDelegatorTotalShares(context.Context, *TotalShareRequest) (*TotalShareResponse, error)
	GetCandidateList(context.Context, *CandidateListRequest) (*CandidateListResponse, error)
	GetCandidateDetail(context.Context, *CandidateDetailRequest) (*CandidateDetailResponse, error)
	GetDelegatorCandidateList(context.Context, *DelegatorCandidateListRequest) (*DelegatorCandidateListResponse, error)
}

func RegisterIRISHubServiceServer(s *grpc.Server, srv IRISHubServiceServer) {
	s.RegisterService(&_IRISHubService_serviceDesc, srv)
}

func _IRISHubService_GetDelegatorTotalShares_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TotalShareRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IRISHubServiceServer).GetDelegatorTotalShares(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/service_irishub.IRISHubService/GetDelegatorTotalShares",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IRISHubServiceServer).GetDelegatorTotalShares(ctx, req.(*TotalShareRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IRISHubService_GetCandidateList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CandidateListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IRISHubServiceServer).GetCandidateList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/service_irishub.IRISHubService/GetCandidateList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IRISHubServiceServer).GetCandidateList(ctx, req.(*CandidateListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IRISHubService_GetCandidateDetail_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CandidateDetailRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IRISHubServiceServer).GetCandidateDetail(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/service_irishub.IRISHubService/GetCandidateDetail",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IRISHubServiceServer).GetCandidateDetail(ctx, req.(*CandidateDetailRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IRISHubService_GetDelegatorCandidateList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DelegatorCandidateListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IRISHubServiceServer).GetDelegatorCandidateList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/service_irishub.IRISHubService/GetDelegatorCandidateList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IRISHubServiceServer).GetDelegatorCandidateList(ctx, req.(*DelegatorCandidateListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _IRISHubService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "service_irishub.IRISHubService",
	HandlerType: (*IRISHubServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetDelegatorTotalShares",
			Handler:    _IRISHubService_GetDelegatorTotalShares_Handler,
		},
		{
			MethodName: "GetCandidateList",
			Handler:    _IRISHubService_GetCandidateList_Handler,
		},
		{
			MethodName: "GetCandidateDetail",
			Handler:    _IRISHubService_GetCandidateDetail_Handler,
		},
		{
			MethodName: "GetDelegatorCandidateList",
			Handler:    _IRISHubService_GetDelegatorCandidateList_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "service_irishub.proto",
}

func init() {
	proto.RegisterFile("service_irishub.proto", fileDescriptor_service_irishub_4fee788d60be1059)
}

var fileDescriptor_service_irishub_4fee788d60be1059 = []byte{
	// 269 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x2d, 0x4e, 0x2d, 0x2a,
	0xcb, 0x4c, 0x4e, 0x8d, 0xcf, 0x2c, 0xca, 0x2c, 0xce, 0x28, 0x4d, 0xd2, 0x2b, 0x28, 0xca, 0x2f,
	0xc9, 0x17, 0xe2, 0x47, 0x13, 0x96, 0x12, 0xcb, 0xcd, 0x4f, 0x49, 0xcd, 0x89, 0x2f, 0xc9, 0x2f,
	0x49, 0xcc, 0x09, 0xce, 0x48, 0x2c, 0x4a, 0x85, 0x28, 0x94, 0x92, 0x84, 0x88, 0x27, 0x27, 0xe6,
	0xa5, 0x64, 0xa6, 0x24, 0x96, 0xa4, 0xfa, 0x64, 0x16, 0x97, 0x40, 0xa5, 0xa4, 0xd1, 0xa4, 0x5c,
	0x52, 0x4b, 0x12, 0x33, 0x73, 0xa0, 0x92, 0x4a, 0x10, 0xc9, 0x94, 0xd4, 0x9c, 0xd4, 0xf4, 0xc4,
	0x92, 0xfc, 0x22, 0x67, 0x4c, 0x03, 0x8c, 0xbe, 0x33, 0x73, 0xf1, 0x79, 0x06, 0x79, 0x06, 0x7b,
	0x94, 0x26, 0x05, 0x43, 0x9c, 0x23, 0x94, 0xc6, 0x25, 0xee, 0x9e, 0x5a, 0xe2, 0x02, 0xd3, 0x15,
	0x02, 0x77, 0x4e, 0xb1, 0x90, 0xb2, 0x1e, 0xd8, 0x48, 0x3d, 0x24, 0x27, 0x22, 0xa4, 0x83, 0x52,
	0x0b, 0x4b, 0x53, 0x8b, 0x4b, 0xa4, 0x54, 0xf0, 0x2b, 0x2a, 0x2e, 0xc8, 0xcf, 0x2b, 0x4e, 0x55,
	0x62, 0x10, 0xca, 0xe6, 0x12, 0x70, 0x4f, 0x2d, 0x41, 0x71, 0x94, 0x90, 0x26, 0x54, 0x2f, 0xaa,
	0x5f, 0x51, 0xd4, 0xc0, 0xac, 0xd1, 0x22, 0x46, 0x29, 0xdc, 0xb2, 0x52, 0x2e, 0x21, 0x64, 0xcb,
	0x20, 0xe1, 0x24, 0xa4, 0x8b, 0x6e, 0x06, 0x34, 0xfc, 0xd0, 0xd4, 0xc1, 0xac, 0xd4, 0x23, 0x56,
	0x39, 0xdc, 0xda, 0x19, 0x8c, 0x5c, 0x92, 0xc8, 0x81, 0x89, 0xea, 0x5b, 0x6b, 0xa8, 0x79, 0x38,
	0x62, 0x08, 0xbb, 0x2e, 0x98, 0x63, 0x6c, 0xc8, 0xd3, 0x0c, 0x73, 0x9a, 0x13, 0x7b, 0x14, 0x2b,
	0xd8, 0x80, 0x00, 0x86, 0x00, 0xc6, 0x00, 0xa6, 0x00, 0xe6, 0x24, 0x36, 0x70, 0x8a, 0x30, 0x06,
	0x04, 0x00, 0x00, 0xff, 0xff, 0x83, 0xd7, 0xf8, 0xc1, 0xaf, 0x02, 0x00, 0x00,
}
