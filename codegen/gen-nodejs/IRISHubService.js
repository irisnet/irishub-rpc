//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var model_ttypes = require('./model_types');


var ttypes = require('./service_types');
//HELPER FUNCTIONS AND STRUCTURES

var IRISHubService_GetCandidateList_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined && args.req !== null) {
      this.req = new model_ttypes.CandidateListRequest(args.req);
    }
  }
};
IRISHubService_GetCandidateList_args.prototype = {};
IRISHubService_GetCandidateList_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.req = new model_ttypes.CandidateListRequest();
        this.req.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IRISHubService_GetCandidateList_args.prototype.write = function(output) {
  output.writeStructBegin('IRISHubService_GetCandidateList_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IRISHubService_GetCandidateList_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof model_ttypes.Exception) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [model_ttypes.Candidate]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
IRISHubService_GetCandidateList_result.prototype = {};
IRISHubService_GetCandidateList_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new model_ttypes.Candidate();
          elem6.read(input);
          this.success.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new model_ttypes.Exception();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IRISHubService_GetCandidateList_result.prototype.write = function(output) {
  output.writeStructBegin('IRISHubService_GetCandidateList_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IRISHubService_GetCandidateDetail_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined && args.req !== null) {
      this.req = new model_ttypes.CandidateDetailRequest(args.req);
    }
  }
};
IRISHubService_GetCandidateDetail_args.prototype = {};
IRISHubService_GetCandidateDetail_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.req = new model_ttypes.CandidateDetailRequest();
        this.req.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IRISHubService_GetCandidateDetail_args.prototype.write = function(output) {
  output.writeStructBegin('IRISHubService_GetCandidateDetail_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IRISHubService_GetCandidateDetail_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof model_ttypes.Exception) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new model_ttypes.Candidate(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
IRISHubService_GetCandidateDetail_result.prototype = {};
IRISHubService_GetCandidateDetail_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new model_ttypes.Candidate();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new model_ttypes.Exception();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IRISHubService_GetCandidateDetail_result.prototype.write = function(output) {
  output.writeStructBegin('IRISHubService_GetCandidateDetail_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IRISHubService_GetDelegatorCandidateList_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined && args.req !== null) {
      this.req = new model_ttypes.DelegatorCandidateListRequest(args.req);
    }
  }
};
IRISHubService_GetDelegatorCandidateList_args.prototype = {};
IRISHubService_GetDelegatorCandidateList_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.req = new model_ttypes.DelegatorCandidateListRequest();
        this.req.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IRISHubService_GetDelegatorCandidateList_args.prototype.write = function(output) {
  output.writeStructBegin('IRISHubService_GetDelegatorCandidateList_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IRISHubService_GetDelegatorCandidateList_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof model_ttypes.Exception) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [model_ttypes.Candidate]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
IRISHubService_GetDelegatorCandidateList_result.prototype = {};
IRISHubService_GetDelegatorCandidateList_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.success = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new model_ttypes.Candidate();
          elem14.read(input);
          this.success.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new model_ttypes.Exception();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IRISHubService_GetDelegatorCandidateList_result.prototype.write = function(output) {
  output.writeStructBegin('IRISHubService_GetDelegatorCandidateList_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter15 in this.success)
    {
      if (this.success.hasOwnProperty(iter15))
      {
        iter15 = this.success[iter15];
        iter15.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IRISHubService_GetDelegatorTotalShares_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined && args.req !== null) {
      this.req = new model_ttypes.TotalShareRequest(args.req);
    }
  }
};
IRISHubService_GetDelegatorTotalShares_args.prototype = {};
IRISHubService_GetDelegatorTotalShares_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.req = new model_ttypes.TotalShareRequest();
        this.req.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IRISHubService_GetDelegatorTotalShares_args.prototype.write = function(output) {
  output.writeStructBegin('IRISHubService_GetDelegatorTotalShares_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IRISHubService_GetDelegatorTotalShares_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof model_ttypes.Exception) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new model_ttypes.TotalShareResponse(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
IRISHubService_GetDelegatorTotalShares_result.prototype = {};
IRISHubService_GetDelegatorTotalShares_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new model_ttypes.TotalShareResponse();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new model_ttypes.Exception();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IRISHubService_GetDelegatorTotalShares_result.prototype.write = function(output) {
  output.writeStructBegin('IRISHubService_GetDelegatorTotalShares_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IRISHubServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
IRISHubServiceClient.prototype = {};
IRISHubServiceClient.prototype.seqid = function() { return this._seqid; };
IRISHubServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
IRISHubServiceClient.prototype.GetCandidateList = function(req, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_GetCandidateList(req);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_GetCandidateList(req);
  }
};

IRISHubServiceClient.prototype.send_GetCandidateList = function(req) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('GetCandidateList', Thrift.MessageType.CALL, this.seqid());
  var params = {
    req: req
  };
  var args = new IRISHubService_GetCandidateList_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

IRISHubServiceClient.prototype.recv_GetCandidateList = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new IRISHubService_GetCandidateList_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('GetCandidateList failed: unknown result');
};
IRISHubServiceClient.prototype.GetCandidateDetail = function(req, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_GetCandidateDetail(req);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_GetCandidateDetail(req);
  }
};

IRISHubServiceClient.prototype.send_GetCandidateDetail = function(req) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('GetCandidateDetail', Thrift.MessageType.CALL, this.seqid());
  var params = {
    req: req
  };
  var args = new IRISHubService_GetCandidateDetail_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

IRISHubServiceClient.prototype.recv_GetCandidateDetail = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new IRISHubService_GetCandidateDetail_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('GetCandidateDetail failed: unknown result');
};
IRISHubServiceClient.prototype.GetDelegatorCandidateList = function(req, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_GetDelegatorCandidateList(req);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_GetDelegatorCandidateList(req);
  }
};

IRISHubServiceClient.prototype.send_GetDelegatorCandidateList = function(req) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('GetDelegatorCandidateList', Thrift.MessageType.CALL, this.seqid());
  var params = {
    req: req
  };
  var args = new IRISHubService_GetDelegatorCandidateList_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

IRISHubServiceClient.prototype.recv_GetDelegatorCandidateList = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new IRISHubService_GetDelegatorCandidateList_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('GetDelegatorCandidateList failed: unknown result');
};
IRISHubServiceClient.prototype.GetDelegatorTotalShares = function(req, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_GetDelegatorTotalShares(req);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_GetDelegatorTotalShares(req);
  }
};

IRISHubServiceClient.prototype.send_GetDelegatorTotalShares = function(req) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('GetDelegatorTotalShares', Thrift.MessageType.CALL, this.seqid());
  var params = {
    req: req
  };
  var args = new IRISHubService_GetDelegatorTotalShares_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

IRISHubServiceClient.prototype.recv_GetDelegatorTotalShares = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new IRISHubService_GetDelegatorTotalShares_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('GetDelegatorTotalShares failed: unknown result');
};
var IRISHubServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
IRISHubServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}
;
IRISHubServiceProcessor.prototype.process_GetCandidateList = function(seqid, input, output) {
  var args = new IRISHubService_GetCandidateList_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.GetCandidateList.length === 1) {
    Q.fcall(this._handler.GetCandidateList.bind(this._handler), args.req)
      .then(function(result) {
        var result_obj = new IRISHubService_GetCandidateList_result({success: result});
        output.writeMessageBegin("GetCandidateList", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof model_ttypes.Exception) {
          result = new IRISHubService_GetCandidateList_result(err);
          output.writeMessageBegin("GetCandidateList", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("GetCandidateList", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.GetCandidateList(args.req, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof model_ttypes.Exception) {
        result_obj = new IRISHubService_GetCandidateList_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("GetCandidateList", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("GetCandidateList", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
IRISHubServiceProcessor.prototype.process_GetCandidateDetail = function(seqid, input, output) {
  var args = new IRISHubService_GetCandidateDetail_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.GetCandidateDetail.length === 1) {
    Q.fcall(this._handler.GetCandidateDetail.bind(this._handler), args.req)
      .then(function(result) {
        var result_obj = new IRISHubService_GetCandidateDetail_result({success: result});
        output.writeMessageBegin("GetCandidateDetail", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof model_ttypes.Exception) {
          result = new IRISHubService_GetCandidateDetail_result(err);
          output.writeMessageBegin("GetCandidateDetail", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("GetCandidateDetail", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.GetCandidateDetail(args.req, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof model_ttypes.Exception) {
        result_obj = new IRISHubService_GetCandidateDetail_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("GetCandidateDetail", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("GetCandidateDetail", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
IRISHubServiceProcessor.prototype.process_GetDelegatorCandidateList = function(seqid, input, output) {
  var args = new IRISHubService_GetDelegatorCandidateList_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.GetDelegatorCandidateList.length === 1) {
    Q.fcall(this._handler.GetDelegatorCandidateList.bind(this._handler), args.req)
      .then(function(result) {
        var result_obj = new IRISHubService_GetDelegatorCandidateList_result({success: result});
        output.writeMessageBegin("GetDelegatorCandidateList", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof model_ttypes.Exception) {
          result = new IRISHubService_GetDelegatorCandidateList_result(err);
          output.writeMessageBegin("GetDelegatorCandidateList", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("GetDelegatorCandidateList", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.GetDelegatorCandidateList(args.req, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof model_ttypes.Exception) {
        result_obj = new IRISHubService_GetDelegatorCandidateList_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("GetDelegatorCandidateList", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("GetDelegatorCandidateList", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
IRISHubServiceProcessor.prototype.process_GetDelegatorTotalShares = function(seqid, input, output) {
  var args = new IRISHubService_GetDelegatorTotalShares_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.GetDelegatorTotalShares.length === 1) {
    Q.fcall(this._handler.GetDelegatorTotalShares.bind(this._handler), args.req)
      .then(function(result) {
        var result_obj = new IRISHubService_GetDelegatorTotalShares_result({success: result});
        output.writeMessageBegin("GetDelegatorTotalShares", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof model_ttypes.Exception) {
          result = new IRISHubService_GetDelegatorTotalShares_result(err);
          output.writeMessageBegin("GetDelegatorTotalShares", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("GetDelegatorTotalShares", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.GetDelegatorTotalShares(args.req, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof model_ttypes.Exception) {
        result_obj = new IRISHubService_GetDelegatorTotalShares_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("GetDelegatorTotalShares", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("GetDelegatorTotalShares", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
