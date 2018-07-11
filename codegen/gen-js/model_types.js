//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


Delegator = function(args) {
  this.address = null;
  this.pubKey = null;
  this.shares = null;
  if (args) {
    if (args.address !== undefined && args.address !== null) {
      this.address = args.address;
    }
    if (args.pubKey !== undefined && args.pubKey !== null) {
      this.pubKey = args.pubKey;
    }
    if (args.shares !== undefined && args.shares !== null) {
      this.shares = args.shares;
    }
  }
};
Delegator.prototype = {};
Delegator.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRING) {
        this.pubKey = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.shares = input.readI64().value;
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

Delegator.prototype.write = function(output) {
  output.writeStructBegin('Delegator');
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin('address', Thrift.Type.STRING, 1);
    output.writeString(this.address);
    output.writeFieldEnd();
  }
  if (this.pubKey !== null && this.pubKey !== undefined) {
    output.writeFieldBegin('pubKey', Thrift.Type.STRING, 2);
    output.writeString(this.pubKey);
    output.writeFieldEnd();
  }
  if (this.shares !== null && this.shares !== undefined) {
    output.writeFieldBegin('shares', Thrift.Type.I64, 3);
    output.writeI64(this.shares);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CandidateDescription = function(args) {
  this.details = null;
  this.identity = null;
  this.moniker = null;
  this.website = null;
  if (args) {
    if (args.details !== undefined && args.details !== null) {
      this.details = args.details;
    }
    if (args.identity !== undefined && args.identity !== null) {
      this.identity = args.identity;
    }
    if (args.moniker !== undefined && args.moniker !== null) {
      this.moniker = args.moniker;
    }
    if (args.website !== undefined && args.website !== null) {
      this.website = args.website;
    }
  }
};
CandidateDescription.prototype = {};
CandidateDescription.prototype.read = function(input) {
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
        this.details = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.identity = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.moniker = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.website = input.readString().value;
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

CandidateDescription.prototype.write = function(output) {
  output.writeStructBegin('CandidateDescription');
  if (this.details !== null && this.details !== undefined) {
    output.writeFieldBegin('details', Thrift.Type.STRING, 1);
    output.writeString(this.details);
    output.writeFieldEnd();
  }
  if (this.identity !== null && this.identity !== undefined) {
    output.writeFieldBegin('identity', Thrift.Type.STRING, 2);
    output.writeString(this.identity);
    output.writeFieldEnd();
  }
  if (this.moniker !== null && this.moniker !== undefined) {
    output.writeFieldBegin('moniker', Thrift.Type.STRING, 3);
    output.writeString(this.moniker);
    output.writeFieldEnd();
  }
  if (this.website !== null && this.website !== undefined) {
    output.writeFieldBegin('website', Thrift.Type.STRING, 4);
    output.writeString(this.website);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Candidate = function(args) {
  this.address = null;
  this.pubKey = null;
  this.shares = null;
  this.votingPower = null;
  this.description = null;
  this.delegators = null;
  if (args) {
    if (args.address !== undefined && args.address !== null) {
      this.address = args.address;
    }
    if (args.pubKey !== undefined && args.pubKey !== null) {
      this.pubKey = args.pubKey;
    }
    if (args.shares !== undefined && args.shares !== null) {
      this.shares = args.shares;
    }
    if (args.votingPower !== undefined && args.votingPower !== null) {
      this.votingPower = args.votingPower;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = new CandidateDescription(args.description);
    }
    if (args.delegators !== undefined && args.delegators !== null) {
      this.delegators = Thrift.copyList(args.delegators, [Delegator]);
    }
  }
};
Candidate.prototype = {};
Candidate.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRING) {
        this.pubKey = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.shares = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.DOUBLE) {
        this.votingPower = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRUCT) {
        this.description = new CandidateDescription();
        this.description.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.delegators = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new Delegator();
          elem6.read(input);
          this.delegators.push(elem6);
        }
        input.readListEnd();
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

Candidate.prototype.write = function(output) {
  output.writeStructBegin('Candidate');
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin('address', Thrift.Type.STRING, 1);
    output.writeString(this.address);
    output.writeFieldEnd();
  }
  if (this.pubKey !== null && this.pubKey !== undefined) {
    output.writeFieldBegin('pubKey', Thrift.Type.STRING, 2);
    output.writeString(this.pubKey);
    output.writeFieldEnd();
  }
  if (this.shares !== null && this.shares !== undefined) {
    output.writeFieldBegin('shares', Thrift.Type.I64, 3);
    output.writeI64(this.shares);
    output.writeFieldEnd();
  }
  if (this.votingPower !== null && this.votingPower !== undefined) {
    output.writeFieldBegin('votingPower', Thrift.Type.DOUBLE, 4);
    output.writeDouble(this.votingPower);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRUCT, 5);
    this.description.write(output);
    output.writeFieldEnd();
  }
  if (this.delegators !== null && this.delegators !== undefined) {
    output.writeFieldBegin('delegators', Thrift.Type.LIST, 6);
    output.writeListBegin(Thrift.Type.STRUCT, this.delegators.length);
    for (var iter7 in this.delegators)
    {
      if (this.delegators.hasOwnProperty(iter7))
      {
        iter7 = this.delegators[iter7];
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

Exception = function(args) {
  this.errCode = null;
  this.errMsg = null;
  if (args) {
    if (args.errCode !== undefined && args.errCode !== null) {
      this.errCode = args.errCode;
    }
    if (args.errMsg !== undefined && args.errMsg !== null) {
      this.errMsg = args.errMsg;
    }
  }
};
Thrift.inherits(Exception, Thrift.TException);
Exception.prototype.name = 'Exception';
Exception.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.errCode = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.errMsg = input.readString().value;
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

Exception.prototype.write = function(output) {
  output.writeStructBegin('Exception');
  if (this.errCode !== null && this.errCode !== undefined) {
    output.writeFieldBegin('errCode', Thrift.Type.I32, 1);
    output.writeI32(this.errCode);
    output.writeFieldEnd();
  }
  if (this.errMsg !== null && this.errMsg !== undefined) {
    output.writeFieldBegin('errMsg', Thrift.Type.STRING, 2);
    output.writeString(this.errMsg);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

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

CandidateDetailRequest = function(args) {
  this.address = null;
  this.pubKey = null;
  if (args) {
    if (args.address !== undefined && args.address !== null) {
      this.address = args.address;
    }
    if (args.pubKey !== undefined && args.pubKey !== null) {
      this.pubKey = args.pubKey;
    }
  }
};
CandidateDetailRequest.prototype = {};
CandidateDetailRequest.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRING) {
        this.pubKey = input.readString().value;
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

CandidateDetailRequest.prototype.write = function(output) {
  output.writeStructBegin('CandidateDetailRequest');
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin('address', Thrift.Type.STRING, 1);
    output.writeString(this.address);
    output.writeFieldEnd();
  }
  if (this.pubKey !== null && this.pubKey !== undefined) {
    output.writeFieldBegin('pubKey', Thrift.Type.STRING, 2);
    output.writeString(this.pubKey);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DelegatorCandidateListRequest = function(args) {
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
DelegatorCandidateListRequest.prototype = {};
DelegatorCandidateListRequest.prototype.read = function(input) {
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

DelegatorCandidateListRequest.prototype.write = function(output) {
  output.writeStructBegin('DelegatorCandidateListRequest');
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

TotalShareRequest = function(args) {
  this.address = null;
  if (args) {
    if (args.address !== undefined && args.address !== null) {
      this.address = args.address;
    }
  }
};
TotalShareRequest.prototype = {};
TotalShareRequest.prototype.read = function(input) {
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

TotalShareRequest.prototype.write = function(output) {
  output.writeStructBegin('TotalShareRequest');
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin('address', Thrift.Type.STRING, 1);
    output.writeString(this.address);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TotalShareResponse = function(args) {
  this.totalShares = null;
  if (args) {
    if (args.totalShares !== undefined && args.totalShares !== null) {
      this.totalShares = args.totalShares;
    }
  }
};
TotalShareResponse.prototype = {};
TotalShareResponse.prototype.read = function(input) {
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
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.totalShares = input.readI64().value;
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

TotalShareResponse.prototype.write = function(output) {
  output.writeStructBegin('TotalShareResponse');
  if (this.totalShares !== null && this.totalShares !== undefined) {
    output.writeFieldBegin('totalShares', Thrift.Type.I64, 2);
    output.writeI64(this.totalShares);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

