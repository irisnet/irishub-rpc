//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


CandidateListRequest = function(args) {
  this.address = null;
  this.page = null;
  this.perPage = null;
  this.sort = null;
  this.q = null;
  if (args) {
    if (args.address !== undefined && args.address !== null) {
      this.address = args.address;
    }
    if (args.page !== undefined && args.page !== null) {
      this.page = args.page;
    }
    if (args.perPage !== undefined && args.perPage !== null) {
      this.perPage = args.perPage;
    }
    if (args.sort !== undefined && args.sort !== null) {
      this.sort = args.sort;
    }
    if (args.q !== undefined && args.q !== null) {
      this.q = args.q;
    }
  }
};
CandidateListRequest.prototype = {};
CandidateListRequest.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRING) {
        this.address = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I16) {
        this.page = input.readI16().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I16) {
        this.perPage = input.readI16().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.sort = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.q = input.readString().value;
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

CandidateListRequest.prototype.write = function(output) {
  output.writeStructBegin('CandidateListRequest');
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin('address', Thrift.Type.STRING, 1);
    output.writeString(this.address);
    output.writeFieldEnd();
  }
  if (this.page !== null && this.page !== undefined) {
    output.writeFieldBegin('page', Thrift.Type.I16, 2);
    output.writeI16(this.page);
    output.writeFieldEnd();
  }
  if (this.perPage !== null && this.perPage !== undefined) {
    output.writeFieldBegin('perPage', Thrift.Type.I16, 3);
    output.writeI16(this.perPage);
    output.writeFieldEnd();
  }
  if (this.sort !== null && this.sort !== undefined) {
    output.writeFieldBegin('sort', Thrift.Type.STRING, 4);
    output.writeString(this.sort);
    output.writeFieldEnd();
  }
  if (this.q !== null && this.q !== undefined) {
    output.writeFieldBegin('q', Thrift.Type.STRING, 5);
    output.writeString(this.q);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CandidateListResponse = function(args) {
  this.candidates = null;
  if (args) {
    if (args.candidates !== undefined && args.candidates !== null) {
      this.candidates = Thrift.copyList(args.candidates, [Candidate]);
    }
  }
};
CandidateListResponse.prototype = {};
CandidateListResponse.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.candidates = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new Candidate();
          elem6.read(input);
          this.candidates.push(elem6);
        }
        input.readListEnd();
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

CandidateListResponse.prototype.write = function(output) {
  output.writeStructBegin('CandidateListResponse');
  if (this.candidates !== null && this.candidates !== undefined) {
    output.writeFieldBegin('candidates', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.candidates.length);
    for (var iter7 in this.candidates)
    {
      if (this.candidates.hasOwnProperty(iter7))
      {
        iter7 = this.candidates[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

