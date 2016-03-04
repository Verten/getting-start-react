/**
 * Created by ebinhon on 3/3/2016.
 */
export default class BaseStore {

    // Called when store date is received
    onDataReceived(object) {
        if (object.length > 0) {
            // The object is in fact an array
            this.setState(object);
        } else {
            // Regular object
            this.state[object.key] = object.response;
        }
    }

    // Called when store data is not received due to an error
    onDataError(msg) {
        console.error("Failed!", msg);
    }
}
