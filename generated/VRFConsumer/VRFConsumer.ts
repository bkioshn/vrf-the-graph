// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Consume extends ethereum.Event {
  get params(): Consume__Params {
    return new Consume__Params(this);
  }
}

export class Consume__Params {
  _event: Consume;

  constructor(event: Consume) {
    this._event = event;
  }

  get seed(): string {
    return this._event.parameters[0].value.toString();
  }

  get time(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get result(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RandomDataRequested extends ethereum.Event {
  get params(): RandomDataRequested__Params {
    return new RandomDataRequested__Params(this);
  }
}

export class RandomDataRequested__Params {
  _event: RandomDataRequested;

  constructor(event: RandomDataRequested) {
    this._event = event;
  }

  get provider(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get seed(): string {
    return this._event.parameters[1].value.toString();
  }

  get time(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get bounty(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class VRFConsumer extends ethereum.SmartContract {
  static bind(address: Address): VRFConsumer {
    return new VRFConsumer("VRFConsumer", address);
  }

  latestResult(): Bytes {
    let result = super.call("latestResult", "latestResult():(bytes32)", []);

    return result[0].toBytes();
  }

  try_latestResult(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("latestResult", "latestResult():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  latestSeed(): string {
    let result = super.call("latestSeed", "latestSeed():(string)", []);

    return result[0].toString();
  }

  try_latestSeed(): ethereum.CallResult<string> {
    let result = super.tryCall("latestSeed", "latestSeed():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  latestTime(): BigInt {
    let result = super.call("latestTime", "latestTime():(uint64)", []);

    return result[0].toBigInt();
  }

  try_latestTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("latestTime", "latestTime():(uint64)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  provider(): Address {
    let result = super.call("provider", "provider():(address)", []);

    return result[0].toAddress();
  }

  try_provider(): ethereum.CallResult<Address> {
    let result = super.tryCall("provider", "provider():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _provider(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConsumeCall extends ethereum.Call {
  get inputs(): ConsumeCall__Inputs {
    return new ConsumeCall__Inputs(this);
  }

  get outputs(): ConsumeCall__Outputs {
    return new ConsumeCall__Outputs(this);
  }
}

export class ConsumeCall__Inputs {
  _call: ConsumeCall;

  constructor(call: ConsumeCall) {
    this._call = call;
  }

  get seed(): string {
    return this._call.inputValues[0].value.toString();
  }

  get time(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get result(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ConsumeCall__Outputs {
  _call: ConsumeCall;

  constructor(call: ConsumeCall) {
    this._call = call;
  }
}

export class RequestRandomDataFromProviderCall extends ethereum.Call {
  get inputs(): RequestRandomDataFromProviderCall__Inputs {
    return new RequestRandomDataFromProviderCall__Inputs(this);
  }

  get outputs(): RequestRandomDataFromProviderCall__Outputs {
    return new RequestRandomDataFromProviderCall__Outputs(this);
  }
}

export class RequestRandomDataFromProviderCall__Inputs {
  _call: RequestRandomDataFromProviderCall;

  constructor(call: RequestRandomDataFromProviderCall) {
    this._call = call;
  }

  get seed(): string {
    return this._call.inputValues[0].value.toString();
  }

  get time(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RequestRandomDataFromProviderCall__Outputs {
  _call: RequestRandomDataFromProviderCall;

  constructor(call: RequestRandomDataFromProviderCall) {
    this._call = call;
  }
}
