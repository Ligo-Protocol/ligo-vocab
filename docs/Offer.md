# Offer
An Offer represents an offer from a vehicle owner to rent out a vehicle.

**Class**: [https://schema.org/OfferForLease](https://schema.org/OfferForLease)

| Property                    | Description                                                                                                      | Value                                                                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `description`               | Description of the offer.                                                                                        | [https://schema.org/Text](https://schema.org/Text)                                                                           | 
| `image`                     | Image(s) of specific vehicle being offered.                                                                      | [https://schema.org/URL](https://schema.org/URL)                                                                             |
| `itemOffered`               | The vehicle being offered.                                                                                       | [https://schema.org/Vehicle](https://schema.org/Vehicle)                                                                     |
| `seller`                    | The entity offering the rental.                                                                                  | [https://schema.org/Organization](https://schema.org/Organization) or [https://schema.org/Person](https://schema.org/Person) |
| `areaServed`                | The approximate area where the vehicle is available to pickup. Can be used to obfuscate the precise location.    | [https://schema.org/GeoShape](https://schema.org/GeoShape)                                                                   |
| `priceSpecification`        | A structure representing the price.                                                                              | [https://schema.org/PriceSpecification](https://schema.org/PriceSpecification)                                               |
| `acceptedPaymentMethod`     | The payment method(s) accepted by seller for this offer.                                                         | [https://schema.org/PaymentMethod](https://schema.org/PaymentMethod)                                                         |
| `advanceBookingRequirement` | The amount of time that is required between accepting the offer and the actual usage of the resource or service. | [https://schema.org/QuantitativeValue](https://schema.org/QuantitativeValue)                                                 |

## Usage
Offers are the main entity used for discovering rentals as well as setting the foundation of an agreement.

- Marketplaces can discover and show offers
- Oracles can view the offer to resolve disputes

## Examples

## Client Compatibility
