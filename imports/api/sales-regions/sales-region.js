class salesRegionsCollection extends Mongo.Collection {}

// Make it available to the rest of the app
const SalesRegions = new salesRegionsCollection("SalesRegions");

// Define the expected Schema for data going into,
// and coming out of the database
//SalesRegions.schema = Schemas.SalesRegionsSchema

// Bolt that schema onto the collection so that all mutator
// calls are automatically checked against the schema.
// Collection2 is what's allowing this to happen
SalesRegions.attachSchema(Schemas.SalesRegionSchema);

export default SalesRegions;