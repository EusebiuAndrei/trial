# Accounts API

## Response structure

The structure of the API responses' body is as follows:

-   for successful responses, a JSON object containing the properties:
    -   `success`: `true`
    -   `data`: An object, structure detailed for each route below.
-   for unsuccessful responses, a JSON object containing the
    properties:
    -   `success`: `false`
    -   `error`: An object containing a `message` property, and
        sometimes additional helpful properties.
	
## /api/clients

### GET

Get the all the clients from the db.

**Return codes**:

-   200 - OK
-   400 - There was a problem fetching data

**Usage example**:  
 `localhost:3000/api/clients

**Returned data example**:

```JSON
{
    "success": true,
    "data": {
        "clients": [
            {
                "_id": "5eb16fdf4afbf654966cb68d",
                "name": "John Jonas",
                "email": "john_jonas@gmail.com",
                "details": {
                    "location": {
                        "latitude": 45.7,
                        "longitude": 23.5
                    },
                    "preferences": [
                        "pizza",
                        "pasta",
                        "brownie"
                    ],
                    "allergies": [
                        "fish"
                    ],
                    "commandsHistory": [],
                    "_id": "5eb182040e81736a85a67087",
                    "avatar": "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
                },
                "id": "5eb16fdf4afbf654966cb68d"
            },
            {
                "_id": "5eb175539dff1b3844a84ab8",
                "name": "Client TEST",
                "email": "clientTest@gmail.com",
                "details": {
                    "location": {
                        "latitude": 123,
                        "longitude": 90
                    },
                    "preferences": [
                        "pizza",
                        "pasta",
                        "gyros"
                    ],
                    "allergies": [
                        "gluten"
                    ],
                    "commandsHistory": [],
                    "_id": "5eb182040e81736a85a67088",
                    "name": "Madelaine Brown",
                    "avatar": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Ffavorjewelry%2Fwomens-faces%2F&psig=AOvVaw1WRzQJsAu0O4y7kTiO2dLP&ust=1588774742270000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCUm6b1nOkCFQAAAAAdAAAAABAD"
                },
                "id": "5eb175539dff1b3844a84ab8"
            }
        ]
    }
}
```

## /api/clients/:userId

### GET

Get a specific client by its id. (id - _id from User collection actually)

**Return codes**:

-   200 - OK
-   400 - There was a problem fetching data

**Usage example**:  
 `localhost:4000/api/clients/5eb16fdf4afbf654966cb68d

**Returned data example**:

```JSON
{
    "success": true,
    "data": {
        "client": {
            "_id": "5eb16fdf4afbf654966cb68d",
            "name": "John Jonas",
            "email": "john_jonas@gmail.com",
            "details": {
                "location": {
                    "latitude": 45.7,
                    "longitude": 23.5
                },
                "preferences": [
                    "pizza",
                    "pasta",
                    "brownie"
                ],
                "allergies": [
                    "fish"
                ],
                "commandsHistory": [],
                "_id": "5eb182c20e81736a85a67089",
                "avatar": "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
            },
            "id": "5eb16fdf4afbf654966cb68d"
        }
    }
}
```
## /api/providers

### GET

Get the all the providers from the db.

**Return codes**:

-   200 - OK
-   400 - There was a problem fetching data

**Usage example**:  
 `localhost:3000/api/providers

**Returned data example**:

```JSON
{
    "success": true,
    "data": {
        "providers": [
            {
                "role": "Provider",
                "confirmed": true,
                "_id": "5eb16d673a637d28884dc226",
                "name": "Restaurant TEST",
                "email": "restaurantTEST@gmail.com",
                "__v": 1,
                "emailToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIxNmQ2NzNhNjM3ZDI4ODg0ZGMyMjYiLCJpYXQiOjE1ODg2ODYxODN9.nJhLti7CUCPjww4bizJ8-sp55g_9zChELtuoMMxdCrQ",
                "details": {
                    "location": {
                        "latitude": 89,
                        "longitude": 178,
                        "adress": "Strada Uzinei"
                    },
                    "images": [
                        "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frestaurant&psig=AOvVaw3B7RGSV70-raF7lw-TEiGd&ust=1588772819069000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDImY7unOkCFQAAAAAdAAAAABAD",
                        "https://www.google.com/url?sa=i&url=https%3A%2F%2F14thlane.ro%2Fro&psig=AOvVaw3B7RGSV70-raF7lw-TEiGd&ust=1588772819069000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDImY7unOkCFQAAAAAdAAAAABAS",
                        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Frestaurantbritannia%2F&psig=AOvVaw3B7RGSV70-raF7lw-TEiGd&ust=1588772819069000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDImY7unOkCFQAAAAAdAAAAABAY"
                    ],
                    "specials": [
                        "Pasta",
                        "Crepes",
                        "Buritto",
                        "Chilli con Carne"
                    ],
                    "_id": "5eb17156251c5187bd95ff83",
                    "\"name\"": "Restaurant Capitol",
                    "userId": "5eb16d673a637d28884dc226",
                    "CUI": "RO123456789010",
                    "__v": 0,
                    "description": "However, the most important aspect of any restaurant is the quality of food and service, and we are justifiably proud of both.Our menu is based on the principles of using the high quality raw local ingredients, along with the best of ingredients imported from around the world, freshly cooked and presented by our head chef Matt Clarke and his team with care and attention.",
                    "priceCategory": "Expensive",
                    "rating": 10,
                    "type": "Restaurant",
                    "menu": {
                        "_id": "5eb17156251c5187bd95fff4",
                        "providerId": "5eb17156251c5187bd95ff83",
                        "__v": 0,
                        "courses": [
                            {
                                "category": [
                                    "Soup"
                                ],
                                "ingredients": [
                                    "porcini",
                                    "pancetta",
                                    "garlic"
                                ],
                                "allergenes": [
                                    "garlic"
                                ],
                                "_id": "5eb173d3d6fb9132c43218a2",
                                "name": "Supa crema de porcini cu julien de pancetta",
                                "price": 19,
                                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsavoriurbane.com%2Fsupa-crema-de-legume-reteta-simpla%2F&psig=AOvVaw0MMf0dit7e7lduDbiL1v6L&ust=1588773203502000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOi8x8XvnOkCFQAAAAAdAAAAABAD"
                            },
                            {
                                "category": [
                                    "Post"
                                ],
                                "ingredients": [
                                    "rosii",
                                    "cartofi"
                                ],
                                "allergenes": [],
                                "_id": "5eb173d3d6fb9132c43218a3",
                                "name": "Bifteki de legume",
                                "price": 25,
                                "image": "https://www.google.com/url?sa=i&url=http%3A%2F%2Fpetrisorcatering.ro%2Fprodus%2Fbiftec-cu-legume-la-gratar%2F&psig=AOvVaw2TY0GzNrt922WnIceR-5om&ust=1588773245671000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCzytnvnOkCFQAAAAAdAAAAABAD"
                            },
                            {
                                "category": [
                                    "Greek"
                                ],
                                "ingredients": [
                                    "carne pui",
                                    "tzatziki",
                                    "ceapa",
                                    "rosie"
                                ],
                                "allergenes": [
                                    "gluten"
                                ],
                                "_id": "5eb173d3d6fb9132c43218a4",
                                "name": "Gyros pui",
                                "price": 20,
                                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.takeaway.com%2Fro%2Ffoodwiki%2Fgrecia%2Fgyros%2F&psig=AOvVaw1OC9z2REL3zAJcvSyPcQmz&ust=1588773312557000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjRu_nvnOkCFQAAAAAdAAAAABAD"
                            }
                        ]
                    },
                    "schedule": {
                        "_id": "5eb17157251c5187bd960008",
                        "providerId": "5eb17156251c5187bd95ff83",
                        "__v": 0,
                        "schedule": [
                            {
                                "_id": "5eb173d3d6fb9132c43218a5",
                                "day": "luni",
                                "startHour": "10 am",
                                "endHour": "5 pm"
                            },
                            {
                                "_id": "5eb173d3d6fb9132c43218a6",
                                "day": "marti",
                                "startHour": "10 am",
                                "endHour": "5 pm"
                            },
                            {
                                "_id": "5eb173d3d6fb9132c43218a7",
                                "day": "miercuri",
                                "startHour": "10 am",
                                "endHour": "5 pm"
                            },
                            {
                                "_id": "5eb173d3d6fb9132c43218a8",
                                "day": "joi",
                                "startHour": "10 am",
                                "endHour": "5 pm"
                            },
                            {
                                "_id": "5eb173d3d6fb9132c43218a9",
                                "day": "vineri",
                                "startHour": "10 am",
                                "endHour": "5 pm"
                            },
                            {
                                "_id": "5eb173d3d6fb9132c43218aa",
                                "day": "sambata",
                                "startHour": "10 am",
                                "endHour": "5 pm"
                            },
                            {
                                "_id": "5eb173d3d6fb9132c43218ab",
                                "day": "duminica",
                                "startHour": "10 am",
                                "endHour": "5 pm"
                            }
                        ]
                    },
                    "id": "5eb17156251c5187bd95ff83"
                },
                "id": "5eb16d673a637d28884dc226"
            },
            {
                "role": "Provider",
                "confirmed": true,
                "_id": "5eb175094afbf654966cb690",
                "name": "Gimmy Restaurant",
                "email": "gimmy_restaurant@gmail.com",
                "__v": 1,
                "emailToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIxNzUwOTRhZmJmNjU0OTY2Y2I2OTAiLCJpYXQiOjE1ODg2ODgxMzd9.Pea0iTISyAny4IEluMMcvZxrbODpTRheIjhy88yK4tg",
                "details": {
                    "location": {
                        "latitude": 53.5,
                        "longitude": 43.2
                    },
                    "images": [
                        "https://d2fdt3nym3n14p.cloudfront.net/venue/1360/gallery/3022/conversions/sole8-big.jpg",
                        "https://d2fdt3nym3n14p.cloudfront.net/venue/1360/gallery/3023/conversions/sole3-big.jpg"
                    ],
                    "specials": [
                        "pizza",
                        "pasta"
                    ],
                    "_id": "5eb17a5b251c5187bd97251a",
                    "userId": "5eb175094afbf654966cb690",
                    "CUI": "ER563KIDO34",
                    "__v": 0,
                    "description": "A place with good food and nice vibes.",
                    "priceCategory": "Medium",
                    "rating": 4.5,
                    "tables": 14,
                    "type": "Canteen",
                    "menu": {
                        "_id": "5eb17a5c251c5187bd97253d",
                        "providerId": "5eb17a5b251c5187bd97251a",
                        "__v": 0,
                        "courses": [
                            {
                                "category": [
                                    "pizza"
                                ],
                                "ingredients": [
                                    "onion",
                                    "salami",
                                    "mushrooms",
                                    "eggs",
                                    "cheese"
                                ],
                                "allergenes": [
                                    "eggs",
                                    "milk"
                                ],
                                "_id": "5eb17a5c6f436666294bc420",
                                "name": "house pizza",
                                "price": 30,
                                "image": "https://img.favpng.com/7/18/21/shashlik-pizza-dish-main-course-restaurant-png-favpng-6qHVKG4NM94QxrdHUWzwj75y5.jpg"
                            },
                            {
                                "category": [
                                    "pasta"
                                ],
                                "ingredients": [
                                    "onion",
                                    "salami",
                                    "tomatoes",
                                    "eggs",
                                    "cheese"
                                ],
                                "allergenes": [
                                    "eggs",
                                    "milk"
                                ],
                                "_id": "5eb17a5c6f436666294bc421",
                                "name": "house pasta",
                                "price": 25,
                                "image": "https://img.favpng.com/7/18/21/shashlik-pizza-dish-main-course-restaurant-png-favpng-6qHVKG4NM94QxrdHUWzwj75y5.jpg"
                            }
                        ]
                    },
                    "schedule": {
                        "_id": "5eb17a5c251c5187bd972551",
                        "providerId": "5eb17a5b251c5187bd97251a",
                        "__v": 0,
                        "schedule": [
                            {
                                "_id": "5eb17a5c6f436666294bc422"
                            }
                        ]
                    },
                    "id": "5eb17a5b251c5187bd97251a"
                },
                "id": "5eb175094afbf654966cb690"
            }
        ]
    }
}
```

## /api/providers/:userId

### GET

Get a specific provider by its id. (id - _id from User collection actually)

**Return codes**:

-   200 - OK
-   400 - There was a problem fetching data

**Usage example**:  
 `localhost:4000/api/providers/5eb16fdf4afbf654966cb68d

**Returned data example**:

```JSON
{
    "success": true,
    "data": {
        "provider": {
            "role": "Provider",
            "confirmed": true,
            "_id": "5eb175094afbf654966cb690",
            "name": "Gimmy Restaurant",
            "email": "gimmy_restaurant@gmail.com",
            "__v": 1,
            "emailToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIxNzUwOTRhZmJmNjU0OTY2Y2I2OTAiLCJpYXQiOjE1ODg2ODgxMzd9.Pea0iTISyAny4IEluMMcvZxrbODpTRheIjhy88yK4tg",
            "details": {
                "location": {
                    "latitude": 53.5,
                    "longitude": 43.2
                },
                "images": [
                    "https://d2fdt3nym3n14p.cloudfront.net/venue/1360/gallery/3022/conversions/sole8-big.jpg",
                    "https://d2fdt3nym3n14p.cloudfront.net/venue/1360/gallery/3023/conversions/sole3-big.jpg"
                ],
                "specials": [
                    "pizza",
                    "pasta"
                ],
                "_id": "5eb17a5b251c5187bd97251a",
                "userId": "5eb175094afbf654966cb690",
                "CUI": "ER563KIDO34",
                "__v": 0,
                "description": "A place with good food and nice vibes.",
                "priceCategory": "Medium",
                "rating": 4.5,
                "tables": 14,
                "type": "Canteen",
                "menu": {
                    "_id": "5eb17a5c251c5187bd97253d",
                    "providerId": "5eb17a5b251c5187bd97251a",
                    "__v": 0,
                    "courses": [
                        {
                            "category": [
                                "pizza"
                            ],
                            "ingredients": [
                                "onion",
                                "salami",
                                "mushrooms",
                                "eggs",
                                "cheese"
                            ],
                            "allergenes": [
                                "eggs",
                                "milk"
                            ],
                            "_id": "5eb17a5c6f436666294bc420",
                            "name": "house pizza",
                            "price": 30,
                            "image": "https://img.favpng.com/7/18/21/shashlik-pizza-dish-main-course-restaurant-png-favpng-6qHVKG4NM94QxrdHUWzwj75y5.jpg"
                        },
                        {
                            "category": [
                                "pasta"
                            ],
                            "ingredients": [
                                "onion",
                                "salami",
                                "tomatoes",
                                "eggs",
                                "cheese"
                            ],
                            "allergenes": [
                                "eggs",
                                "milk"
                            ],
                            "_id": "5eb17a5c6f436666294bc421",
                            "name": "house pasta",
                            "price": 25,
                            "image": "https://img.favpng.com/7/18/21/shashlik-pizza-dish-main-course-restaurant-png-favpng-6qHVKG4NM94QxrdHUWzwj75y5.jpg"
                        }
                    ]
                },
                "schedule": {
                    "_id": "5eb17a5c251c5187bd972551",
                    "providerId": "5eb17a5b251c5187bd97251a",
                    "__v": 0,
                    "schedule": [
                        {
                            "_id": "5eb17a5c6f436666294bc422"
                        }
                    ]
                },
                "id": "5eb17a5b251c5187bd97251a"
            },
            "id": "5eb175094afbf654966cb690"
        }
    }
}
```

## /api/reviews

### GET

Get the reviews for a provider, optionally filtering them.

**Query parameters**:

-   providerId (required) - 24-character hexadecimal string
-   orderBy - `score`, `helpfulness`, `timeCreated`, prepended by a
    `-` for a descending order, otherwise ascending
-   skip - number of reviews to skip
-   limit - number of reviews to fetch

**Return codes**:

-   200 - OK
-   404 - no reviews found for the given provider ID (or provider does
    not exist)

**Usage example**:  
 `localhost:3000/api/reviews/?providerId=5ea42ffa9d79ef49f76669f2&orderBy=-score&skip=2&limit=2`

**Returned data example**:

```JSON
{
    "success": true,
    "data": {
        "score": 5.5,
        "reviews": [
            {
                "_id": "5eaad4b646eaba38437e1f18",
                "reviewer": "Danny",
                "score": 6,
                "description": "I am not a robot.",
                "timeCreated": "2020-04-30T13:37:58.552Z",
                "timeModified": "2020-04-30T13:37:58.552Z",
                "helpfulness": 0,
                "__v": 0
            },
            {
                "_id": "5ea431720596f84b44be104f",
                "reviewer": "John Doe",
                "score": 5,
                "description": "Thanks, I hate it.",
                "timeCreated": "2020-04-25T12:47:46.601Z",
                "timeModified": "2020-04-25T12:47:46.601Z",
                "__v": 0,
                "helpfulness": -1
            }
        ]
    }
}
```

### POST

Create a new review.

**Body**:  
A JSON object containing the following fields:

-   providerId (required) - 24-character hexadecimal string
-   reviewerId (required) - 24-character hexadecimal string
-   score (required) - an integer, 1 to 10 (each point represents half
    a star)
-   description - a string, 1 to 1000 characters

Additionally, no more than a single review for the same (provider,
reviewer) pair is allowed to exist at the same time.

**Body example**:

```JSON
{
	"providerId": "5ea42ffa9d79ef49f76669f2",
	"reviewerId": "5eaaaf54a0ae0d65376de99d",
	"score": "6",
	"description": "They have decent eats."
}
```

The back-end will add equal `timeCreated` and `timeModified` to these
properties, as well as a `helpfulness` score of `0`.

**Response codes**:

-   201 - review succesfully created
-   400 - review body malformed, or duplicate review attempted

**Returned data**:

The `data` field in a successful response will contain a an `id`
property with the string for the new review's `_id`.

### PUT

Replace the score and description of a given review, as well as update
its `timeModified` property to the current time.

**URL parameter**:

The ID of the modified review should be specified in the URL:  
`.../api/reviews/5ea431720596f84b44be104f`  
This ID should be the 24-character hex-string corresponding to the
review's `_id`.

**Body**:

A JSON object containing the following fields:

-   score (required) - an integer, 1 to 10
-   description - string, 1 to 1000 characters

**Response codes**:

-   200 - the review body was succesfully replaced
-   404 - the review was not found

**Returned data**: The `data` field in a successful response is an
empty object.

### PATCH

Update a review's helpfulness score by -1 or +1.

**URL parameter**:  

The ID of the review should be specified in the URL:  
`.../api/reviews/5ea431720596f84b44be104f`  
This ID should be the 24-character hex-string corresponding to the review's
`_id`.

**Body**:  
A JSON object object containing the following field:
- delta (required) - either `-1`, or `1`

**Response codes**:

-   200 - the review's helpfulness was successfully modified
-   404 - the review was not found

## /api/providers

#### This API route is deprecated. It will be removed when another module's API can take its role.

**Usage examples**:
- `GET .../api/providers/tag=cafe&tag=pizza` - returns a list of all providers with both "cafe" and "pizza" in their tag list.
- `GET .../api/providers/some_id` - returns the provider with the given `_id`
