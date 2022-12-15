### Definition
A space optimization technique that lets us use less memory by storing externally the data associated with similar objects.

### Motivation
We want to avoid redundancy when storing data.
I.e. in a large db there is no sense in storing the same first/last name over and over again. We can store only references.
I.e. in bold or italic text formatting - don't want each character to have a formatting character. Instead, operate on ranges (start/end position).

### Implementation
Store common data externally.
Specify and index or a reference into the external data store.
Define the idea of 'ranges' on homogeneous collections and store data related to those ranges.