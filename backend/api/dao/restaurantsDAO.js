let restaurants // used to store reference to database

export default class RestaurantsDAO{
    static async injectDB(conn) {
        if (restaurants) {
            return
        }
        try {
            restaurants = await conn.db(process.env.RESTREVIES_NS).collection("restaurants") // trying to get connection restaurants
        } catch (e) {
            console.error(
                'Unable to establish a collection handle in restaurantsDAO: ${e}',
            )
        }
    }
}