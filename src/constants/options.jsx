export const SelectTravelesList=[
    {
        id:1,
        title:'Just me',
        desc:'A solo traveller in exploration',
        icon:'✈️',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'A romantic trip for 2 birds',
        icon:'🥂',
        people:'2 people'
    },
    {
        id:3,
        title:'Family',
        desc:'Best time is Family Time',
        icon:'🏡',
        people:'-3-5 people'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch for a thrilling experience',
        icon:'💃',
        people:'5 to 10 people'
    },

]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay concious of the cost',
        icon:'💵'
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on average side ',
        icon:'💰'
    },
    {
        id:3,
        title:'Luxury',
        desc:'Just ENJOY',
        icon:'🪙'
    },
]

export const AI_PROMPT= "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest , itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format."