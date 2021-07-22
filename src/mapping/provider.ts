import {
  VRFProvider,
  RandomDataRelayed,
  RandomDataRequested
} from "../../generated/VRFProvider/VRFProvider"

import { RelayProof, DataRequest } from "../../generated/schema"


export function handleRandomDataRequested(event: RandomDataRequested): void {
  // TaskKey is set to be ID
  let taskKey = event.params.seed
  let dataRequest = new DataRequest(taskKey)
  dataRequest.seed = event.params.seed
  dataRequest.time = event.params.time
  dataRequest.sender  = event.params.caller
  dataRequest.bounty = event.params.bounty
  
  dataRequest.status = 'PENDING'
  dataRequest.save()
}

// export function handleRandomDataRelayed(event: RandomDataRelayed): void {
//   // TaskKey is set to be ID
//   let taskKey = event.params.taskKey.toHexString()
//   let relayProof = new RelayProof(taskKey)
//   relayProof.seed = event.params.seed
//   relayProof.time = event.params.time
//   let provider = VRFProvider.bind(event.address)
//   if (provider.try_askCount()) {
//     relayProof.status = 'REJECTED'
//   }
//   relayProof.status = 'PENDING'

//   relayProof.save()
// }
