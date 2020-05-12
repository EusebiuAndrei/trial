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
 `localhost:4000/api/clients

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

Get a specific client by its id.

**URL parameter**:

The ID of the client should be specified in the URL:  
`.../api/clients/5eb16fdf4afbf654966cb68d`  
This ID should be the 24-character hex-string corresponding to the
User `_id`, NOT the Client `_id`

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

**Query parameters**:

-   special - a provider tag(formerly named tag, now is special), can be multiple specials added
-   limit - a number that represents how many providers should be returned

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

Get a specific provider by its id.

**URL parameter**:

The ID of the provider should be specified in the URL:  
`.../api/providers/5eb175094afbf654966cb690`  
This ID should be the 24-character hex-string corresponding to the
User `_id`, NOT the Provider `_id`

**Return codes**:

-   200 - OK
-   400 - There was a problem fetching data

**Usage example**:  
 `localhost:4000/api/providers/5eb175094afbf654966cb690

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

## /api/providers/specials

### GET

Get the all the providers with the corresponding tags aka specials.

**Query parameters**:

-   special - a provider tag(formerly named tag, now is special), can be multiple specials added
-   limit - a number that represents how many providers should be returned

**Return codes**:

-   200 - OK
-   400 - There was a problem fetching data

**Usage example**:  
 `localhost:4000/api/providers/specials?special=pizza&special=pasta&limit=1

**Returned data example**:

```JSON
{
    "success": true,
    "data": {
        "providers": [
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

## /api/courses

### GET

Get the all the courses from the db.

**Query paremeters**:

-   price - a number representing the price of the course
-   sortkey - a string representing the field courses should be ordered by
-   limit - a number representing how many courses to get in response
-   special - a food category(also formerly found as tag and now as special in providers routes)

**Return codes**:

-   200 - OK
-   400 - There was a problem fetching data

**Usage example**:  
 `http://localhost:4000/api/courses?price=30&sortkey=price&limit=3&special=pasta

**Returned data example**:

```JSON
{
    "success": true,
    "data": {
        "coursesFiltred": [
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
    }
}
```

## /api/courses/:courseId

### GET

Get a specific course by its id.

**Return codes**:

-   200 - OK
-   400 - There was a problem fetching data

**Usage example**:  
 `localhost:4000/api/courses/5eb17a5c6f436666294bc421

**Returned data example**:

```JSON
{
    "success": true,
    "data": [
        {
            "_id": "5eb17a5c6f436666294bc421",
            "category": [
                "pasta"
            ],
            "price": 25,
            "image": "https://img.favpng.com/7/18/21/shashlik-pizza-dish-main-course-restaurant-png-favpng-6qHVKG4NM94QxrdHUWzwj75y5.jpg",
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
            ]
        }
    ]
}
```

## /api/clients/addCommand

### GET

Add a command to client commandsHistory and provider commandsQueue

**Request body**:

-   clientId - the userId of the client
-   providerId - the userId of the provider
-   commandId - `_id` of the command

**Return codes**:

-   200 - OK
-   400 - There was a problem fetching data

**Usage example**:  
 `localhost:4000/api/clients/addCommand
 
 Request body
```JSON
{
	"clientId": "5eb16fdf4afbf654966cb68d",
	"providerId": "5eb175094afbf654966cb690",
	"commandId": "cccccccccccc"
}
```

**Returned data example**:

```JSON
{
    "success": true,
    "data": {}
}
```

## /api/clients/addReservation

### GET

Add a command to client reservationsHistory and provider reservationsQueue

**Request body**:

-   clientId - the userId of the client
-   providerId - the userId of the provider
-   reservationId - `_id` of the reservation

**Return codes**:

-   200 - OK
-   400 - There was a problem fetching data

**Usage example**:  
 `localhost:4000/api/clients/addReservation
 
 Request body
```JSON
{
	"clientId": "5eb16fdf4afbf654966cb68d",
	"providerId": "5eb175094afbf654966cb690",
	"commandId": "cccccccccccc"
}
```

**Returned data example**:

```JSON
{
    "success": true,
    "data": {}
}
```

## api/users/register

### POST

Create user new user accounts.

**Request Body**:

-    email - new user email
-    name - new user name
-    role - new user type (Provider/Client)
-    password - a password for the new use account, it should be at least 6 letter long

**Return codes**
-   201 - Created
-   400 - There was a problem fetching data

**Usage example**:  
 `localhost:4000/api/users/register
 
  Request body
```JSON
{
	"email": "clientExemplu@gmail.com",
	"name": "ClientExemplu",
	"role": "Client",
	"password": "abc123"
}
```


**Returned data example**:
```JSON
{
    "success": true,
    "data": {
        "user": {
            "role": "Client",
            "confirmed": true,
            "_id": "5ebacdb1eedb0a4468bb84c2",
            "email": "clientExemplu@gmail.com",
            "__v": 0,
            "emailToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWJhY2RiMWVlZGIwYTQ0NjhiYjg0YzIiLCJpYXQiOjE1ODkzMDA2NTh9.Pr8GG5yQWGZuWDw-KxkHx5Rut39tSWGZCWMS3vDpLY0",
            "details": null,
            "id": "5ebacdb1eedb0a4468bb84c2"
        }
    }
}
```

## api/users/login

###POST

**Request Body**:

-    email - email address of existing user
-    password - password associated with the email account provided

**Return codes**
-   200 - OK
-   400 - There was a problem fetching data


**Usage example**:  
 `localhost:4000/api/users/login
 
  Request body
```JSON
{
	"email": "clientExemplu@gmail.com",
	"password": "abc123"
}
```

**Returned data example**:
```JSON
	{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWJhY2RiMWVlZGIwYTQ0NjhiYjg0YzIiLCJpYXQiOjE1ODkzMDI3ODZ9.OyE8cAPx0lvgSc9BRHb0B_HbXrcap5n-9hlKr2fcioQ",
    "user": {
        "role": "Client",
        "confirmed": true,
        "_id": "5ebacdb1eedb0a4468bb84c2",
        "email": "clientExemplu@gmail.com",
        "__v": 2,
        "emailToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWJhY2RiMWVlZGIwYTQ0NjhiYjg0YzIiLCJpYXQiOjE1ODkzMDA2NTh9.Pr8GG5yQWGZuWDw-KxkHx5Rut39tSWGZCWMS3vDpLY0",
        "details": null,
        "id": "5ebacdb1eedb0a4468bb84c2"
    }
}
```

## api/users/profile

###POST

**Request Body**:
**Client**
-    location.latitude - a number representing the latitude of the client's preffered location 
-    location.longitude - a number representing the longitude of the client's preffered location
-    prefferences - an array of strings representing a client's preffered courses
-    allergies - an array of strings representing a client's allergies
-    avatar -  a path to a image uploaded by the client that will be use as the client avatar


**Request Body**:
**Provider**
-    location.latitude - a number representing the latitude of the provider's location
-    location.longitude - a number representing the longitude of the provider's location
-    location.adress - a string representing the provider's actual adress (street, number, city)
-    images - an array containing the paths to the images uploaded by the provider
-    specials - an array of strings representing a provider tags(formerly named tag, now is special)
-    CUI - a string like this RO#########C, where O######### is a number between 1-9 digits
-    description - a paragraph representing the provider description
-    priceCategory - a string that can take the following values: Affordable, Medium, Expensive
-    type - a string thath can take the following values: Restaurant, Canteen
-    menu - contains an courses array, an object from the course array has the following format:
		- category: a string representing a category where the course can be included
		- ingredients: an array of strings representing the ingredients used for the course
		- allergenes: an array of strings representing possible allergenes 
		- name: a string representing the name of the course
		- image: a path to a image of the course uploaded by the provider
-schedule - contains a array of a provider schedule/per day with the following format
		-day: a string the day of the week the program applies to
		-startHour: a string with the following following format: a number representing an hour and pm or am
		-endHour:  a string with the following following format: a number representing an hour and pm or am
		
**Return codes**
-   201 - Created
-   400 - There was a problem fetching data

**Usage example**:  
 `localhost:4000/api/users/profile

  Request body Client
```JSON
 {"location": {
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
                  
                    "avatar": "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
                }
```
  Request body Provider
```JSON
	{
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
                   
                    "CUI": "RO123456789010",
                    "description": "However, the most important aspect of any restaurant is the quality of food and service, and we are justifiably proud of both.Our menu is based on the principles of using the high quality raw local ingredients, along with the best of ingredients imported from around the world, freshly cooked and presented by our head chef Matt Clarke and his team with care and attention.",
                    "priceCategory": "Expensive",
                    "rating": 10,
                    "type": "Restaurant",
                    "menu": {
             
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
                           
                                "name": "Gyros pui",
                                "price": 20,
                                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.takeaway.com%2Fro%2Ffoodwiki%2Fgrecia%2Fgyros%2F&psig=AOvVaw1OC9z2REL3zAJcvSyPcQmz&ust=1588773312557000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjRu_nvnOkCFQAAAAAdAAAAABAD"
                            }
                        ]
                    },
                    "schedule": 
                				 [
                            {
                               
                                "day": "luni",
                                "startHour": "10 am",
                                "endHour": "5 pm"
                            },
                            {
                              
                                "day": "marti",
                                "startHour": "10 am",
                                "endHour": "5 pm"
                            },
                            {
                               
                                "day": "miercuri",
                                "startHour": "10 am",
                                "endHour": "5 pm"
                            },
                            {
                               
                                "day": "joi",
                                "startHour": "10 am",
                                "endHour": "5 pm"
                            },
                            {
                               
                                "day": "vineri",
                                "startHour": "10 am",
                                "endHour": "5 pm"
                            },
                            {
                               
                                "day": "sambata",
                                "startHour": "10 am",
                                "endHour": "5 pm"
                            },
                            {
                               
                                "day": "duminica",
                                "startHour": "10 am",
                                "endHour": "5 pm"
                            }
                        ]
}
```
**Returned data example Client**:
```JSON
	{
    "success": true,
    "data": {
        "userDetails": {
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
            "reservationsHistory": [],
            "_id": "5ebadf7f251c5187bd97c50e",
            "userId": "5ebacdb1eedb0a4468bb84c2",
            "__v": 0,
            "avatar": "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
        }
    }
}
```

**Returned data example Provider**:
```JSON
	{"location": {
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
                    }
```
