// Autogenerated by Thrift Compiler (0.11.0)
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING

package main

import (
        "context"
        "flag"
        "fmt"
        "math"
        "net"
        "net/url"
        "os"
        "strconv"
        "strings"
        "git.apache.org/thrift.git/lib/go/thrift"
        "model"
)


func Usage() {
  fmt.Fprintln(os.Stderr, "Usage of ", os.Args[0], " [-h host:port] [-u url] [-f[ramed]] function [arg1 [arg2...]]:")
  flag.PrintDefaults()
  fmt.Fprintln(os.Stderr, "\nFunctions:")
  fmt.Fprintln(os.Stderr, "   GetCandidateList(CandidateListRequest req)")
  fmt.Fprintln(os.Stderr, "  Candidate GetCandidateDetail(CandidateDetailRequest req)")
  fmt.Fprintln(os.Stderr, "   GetDelegatorCandidateList(DelegatorCandidateListRequest req)")
  fmt.Fprintln(os.Stderr, "  TotalShareResponse GetDelegatorTotalShares(TotalShareRequest req)")
  fmt.Fprintln(os.Stderr, "  ValidatorExRateResponse GetValidatorExRate(ValidatorExRateRequest req)")
  fmt.Fprintln(os.Stderr, "  void SaveDelegatorStakeActionExRate(DelegatorStakeActionExRateRequest req)")
  fmt.Fprintln(os.Stderr)
  os.Exit(0)
}

func main() {
  flag.Usage = Usage
  var host string
  var port int
  var protocol string
  var urlString string
  var framed bool
  var useHttp bool
  var parsedUrl *url.URL
  var trans thrift.TTransport
  _ = strconv.Atoi
  _ = math.Abs
  flag.Usage = Usage
  flag.StringVar(&host, "h", "localhost", "Specify host and port")
  flag.IntVar(&port, "p", 9090, "Specify port")
  flag.StringVar(&protocol, "P", "binary", "Specify the protocol (binary, compact, simplejson, json)")
  flag.StringVar(&urlString, "u", "", "Specify the url")
  flag.BoolVar(&framed, "framed", false, "Use framed transport")
  flag.BoolVar(&useHttp, "http", false, "Use http")
  flag.Parse()
  
  if len(urlString) > 0 {
    var err error
    parsedUrl, err = url.Parse(urlString)
    if err != nil {
      fmt.Fprintln(os.Stderr, "Error parsing URL: ", err)
      flag.Usage()
    }
    host = parsedUrl.Host
    useHttp = len(parsedUrl.Scheme) <= 0 || parsedUrl.Scheme == "http"
  } else if useHttp {
    _, err := url.Parse(fmt.Sprint("http://", host, ":", port))
    if err != nil {
      fmt.Fprintln(os.Stderr, "Error parsing URL: ", err)
      flag.Usage()
    }
  }
  
  cmd := flag.Arg(0)
  var err error
  if useHttp {
    trans, err = thrift.NewTHttpClient(parsedUrl.String())
  } else {
    portStr := fmt.Sprint(port)
    if strings.Contains(host, ":") {
           host, portStr, err = net.SplitHostPort(host)
           if err != nil {
                   fmt.Fprintln(os.Stderr, "error with host:", err)
                   os.Exit(1)
           }
    }
    trans, err = thrift.NewTSocket(net.JoinHostPort(host, portStr))
    if err != nil {
      fmt.Fprintln(os.Stderr, "error resolving address:", err)
      os.Exit(1)
    }
    if framed {
      trans = thrift.NewTFramedTransport(trans)
    }
  }
  if err != nil {
    fmt.Fprintln(os.Stderr, "Error creating transport", err)
    os.Exit(1)
  }
  defer trans.Close()
  var protocolFactory thrift.TProtocolFactory
  switch protocol {
  case "compact":
    protocolFactory = thrift.NewTCompactProtocolFactory()
    break
  case "simplejson":
    protocolFactory = thrift.NewTSimpleJSONProtocolFactory()
    break
  case "json":
    protocolFactory = thrift.NewTJSONProtocolFactory()
    break
  case "binary", "":
    protocolFactory = thrift.NewTBinaryProtocolFactoryDefault()
    break
  default:
    fmt.Fprintln(os.Stderr, "Invalid protocol specified: ", protocol)
    Usage()
    os.Exit(1)
  }
  iprot := protocolFactory.GetProtocol(trans)
  oprot := protocolFactory.GetProtocol(trans)
  client := model.NewIRISHubServiceClient(thrift.NewTStandardClient(iprot, oprot))
  if err := trans.Open(); err != nil {
    fmt.Fprintln(os.Stderr, "Error opening socket to ", host, ":", port, " ", err)
    os.Exit(1)
  }
  
  switch cmd {
  case "GetCandidateList":
    if flag.NArg() - 1 != 1 {
      fmt.Fprintln(os.Stderr, "GetCandidateList requires 1 args")
      flag.Usage()
    }
    arg16 := flag.Arg(1)
    mbTrans17 := thrift.NewTMemoryBufferLen(len(arg16))
    defer mbTrans17.Close()
    _, err18 := mbTrans17.WriteString(arg16)
    if err18 != nil {
      Usage()
      return
    }
    factory19 := thrift.NewTSimpleJSONProtocolFactory()
    jsProt20 := factory19.GetProtocol(mbTrans17)
    argvalue0 := model.NewCandidateListRequest()
    err21 := argvalue0.Read(jsProt20)
    if err21 != nil {
      Usage()
      return
    }
    value0 := argvalue0
    fmt.Print(client.GetCandidateList(context.Background(), value0))
    fmt.Print("\n")
    break
  case "GetCandidateDetail":
    if flag.NArg() - 1 != 1 {
      fmt.Fprintln(os.Stderr, "GetCandidateDetail requires 1 args")
      flag.Usage()
    }
    arg22 := flag.Arg(1)
    mbTrans23 := thrift.NewTMemoryBufferLen(len(arg22))
    defer mbTrans23.Close()
    _, err24 := mbTrans23.WriteString(arg22)
    if err24 != nil {
      Usage()
      return
    }
    factory25 := thrift.NewTSimpleJSONProtocolFactory()
    jsProt26 := factory25.GetProtocol(mbTrans23)
    argvalue0 := model.NewCandidateDetailRequest()
    err27 := argvalue0.Read(jsProt26)
    if err27 != nil {
      Usage()
      return
    }
    value0 := argvalue0
    fmt.Print(client.GetCandidateDetail(context.Background(), value0))
    fmt.Print("\n")
    break
  case "GetDelegatorCandidateList":
    if flag.NArg() - 1 != 1 {
      fmt.Fprintln(os.Stderr, "GetDelegatorCandidateList requires 1 args")
      flag.Usage()
    }
    arg28 := flag.Arg(1)
    mbTrans29 := thrift.NewTMemoryBufferLen(len(arg28))
    defer mbTrans29.Close()
    _, err30 := mbTrans29.WriteString(arg28)
    if err30 != nil {
      Usage()
      return
    }
    factory31 := thrift.NewTSimpleJSONProtocolFactory()
    jsProt32 := factory31.GetProtocol(mbTrans29)
    argvalue0 := model.NewDelegatorCandidateListRequest()
    err33 := argvalue0.Read(jsProt32)
    if err33 != nil {
      Usage()
      return
    }
    value0 := argvalue0
    fmt.Print(client.GetDelegatorCandidateList(context.Background(), value0))
    fmt.Print("\n")
    break
  case "GetDelegatorTotalShares":
    if flag.NArg() - 1 != 1 {
      fmt.Fprintln(os.Stderr, "GetDelegatorTotalShares requires 1 args")
      flag.Usage()
    }
    arg34 := flag.Arg(1)
    mbTrans35 := thrift.NewTMemoryBufferLen(len(arg34))
    defer mbTrans35.Close()
    _, err36 := mbTrans35.WriteString(arg34)
    if err36 != nil {
      Usage()
      return
    }
    factory37 := thrift.NewTSimpleJSONProtocolFactory()
    jsProt38 := factory37.GetProtocol(mbTrans35)
    argvalue0 := model.NewTotalShareRequest()
    err39 := argvalue0.Read(jsProt38)
    if err39 != nil {
      Usage()
      return
    }
    value0 := argvalue0
    fmt.Print(client.GetDelegatorTotalShares(context.Background(), value0))
    fmt.Print("\n")
    break
  case "GetValidatorExRate":
    if flag.NArg() - 1 != 1 {
      fmt.Fprintln(os.Stderr, "GetValidatorExRate requires 1 args")
      flag.Usage()
    }
    arg40 := flag.Arg(1)
    mbTrans41 := thrift.NewTMemoryBufferLen(len(arg40))
    defer mbTrans41.Close()
    _, err42 := mbTrans41.WriteString(arg40)
    if err42 != nil {
      Usage()
      return
    }
    factory43 := thrift.NewTSimpleJSONProtocolFactory()
    jsProt44 := factory43.GetProtocol(mbTrans41)
    argvalue0 := model.NewValidatorExRateRequest()
    err45 := argvalue0.Read(jsProt44)
    if err45 != nil {
      Usage()
      return
    }
    value0 := argvalue0
    fmt.Print(client.GetValidatorExRate(context.Background(), value0))
    fmt.Print("\n")
    break
  case "SaveDelegatorStakeActionExRate":
    if flag.NArg() - 1 != 1 {
      fmt.Fprintln(os.Stderr, "SaveDelegatorStakeActionExRate requires 1 args")
      flag.Usage()
    }
    arg46 := flag.Arg(1)
    mbTrans47 := thrift.NewTMemoryBufferLen(len(arg46))
    defer mbTrans47.Close()
    _, err48 := mbTrans47.WriteString(arg46)
    if err48 != nil {
      Usage()
      return
    }
    factory49 := thrift.NewTSimpleJSONProtocolFactory()
    jsProt50 := factory49.GetProtocol(mbTrans47)
    argvalue0 := model.NewDelegatorStakeActionExRateRequest()
    err51 := argvalue0.Read(jsProt50)
    if err51 != nil {
      Usage()
      return
    }
    value0 := argvalue0
    fmt.Print(client.SaveDelegatorStakeActionExRate(context.Background(), value0))
    fmt.Print("\n")
    break
  case "":
    Usage()
    break
  default:
    fmt.Fprintln(os.Stderr, "Invalid function ", cmd)
  }
}
