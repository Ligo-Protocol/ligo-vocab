import { CeramicClient } from "@ceramicnetwork/http-client";
import { TileDocument } from "@ceramicnetwork/stream-tile";
import { DID } from "dids";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { getResolver } from "key-did-resolver";
import { fromString } from "uint8arrays/from-string";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const ceramic = new CeramicClient("https://ceramic-clay.3boxlabs.com");

// `seed` must be a 32-byte long Uint8Array
async function authenticateCeramic(seed) {
  const provider = new Ed25519Provider(seed);
  const did = new DID({ provider, resolver: getResolver() });
  // Authenticate the DID with the provider
  await did.authenticate();
  // The Ceramic client can create and update streams using the authenticated DID
  ceramic.did = did;
}

async function createSchemaDocument() {
  const doc = await TileDocument.create(
    ceramic,
    require("./jsonld-schema.json")
  );
  return doc.commitId;
}

async function run() {
  const seed = fromString(process.env.CERAMIC_SEED, "base16");
  await authenticateCeramic(seed);
  const docId = await createSchemaDocument();
  console.log(`Created schema: ${docId.toString()}`);
}

run();
