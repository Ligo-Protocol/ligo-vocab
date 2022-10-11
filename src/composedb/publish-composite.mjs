import { CeramicClient } from "@ceramicnetwork/http-client";
import { DID } from "dids";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { getResolver } from "key-did-resolver";
import { fromString } from "uint8arrays/from-string";
import {
  createComposite,
  writeEncodedComposite,
  writeEncodedCompositeRuntime,
} from "@composedb/devtools-node";
import { Composite } from "@composedb/devtools";

const ceramic = new CeramicClient("https://ceramic-clay.oort.codyhatfield.me");

// `seed` must be a 32-byte long Uint8Array
async function authenticateCeramic(seed) {
  const provider = new Ed25519Provider(seed);
  const did = new DID({ provider, resolver: getResolver() });
  // Authenticate the DID with the provider
  await did.authenticate();
  // The Ceramic client can create and update streams using the authenticated DID
  ceramic.did = did;
}

async function run() {
  const seed = fromString(process.env.CERAMIC_SEED, "base16");
  await authenticateCeramic(seed);

  const carComposite = await createComposite(ceramic, "car.graphql");
  const offerComposite = await createComposite(ceramic, "offer.graphql");

  await writeEncodedComposite(carComposite, "car-composite.json");
  await writeEncodedComposite(offerComposite, "offer-composite.json");

  const mergedComposite = Composite.from([carComposite, offerComposite]);
  await writeEncodedComposite(mergedComposite, "composite.json");

  await writeEncodedCompositeRuntime(
    ceramic,
    "composite.json",
    "../__generated__/definition.js"
  );

  await offerComposite.startIndexingOn(ceramic);
}

run();
