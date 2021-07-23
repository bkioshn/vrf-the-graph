import {
  RandomDataRequested
} from "../../generated/VRFProvider/VRFProvider"

import { DataRequest } from "../../generated/schema"


export function handleRandomDataRequested(event: RandomDataRequested): void {
  // TaskKey is set to be ID
  let taskKey = event.params.taskKey.toHexString()
  let dataRequest = new DataRequest(taskKey)
  dataRequest.sender  = event.params.caller
  dataRequest.seed = event.params.seed
  dataRequest.time = event.params.time
  dataRequest.bounty = event.params.bounty
  dataRequest.block = event.block.number
  
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
